"use client";

import { useState, type FormEvent } from "react";
import {
  Loader2,
  Search,
  FileText,
  User,
  Clock,
  Key,
  ChevronRight,
  ArrowLeft,
  Building,
} from "lucide-react";
import { formatEthiopianDate } from "@/lib/utils/ethiopian-date";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1212/api/v1";

type Party = {
  id: string;
  role: string;
  fullName: string;
  phone: string | null;
  email: string | null;
};

type CaseResult = {
  id: string;
  caseNumber: string;
  status?: string;
  fileStatus?: string | null;
  filingDate?: string | null;
  updatedAt?: string;
  caseType?: { name: string };
  court?: { name: string };
  caseStatus?: { name: string };
  parties?: Array<{ id: string; fullName: string; role: string }>;
};

type OtpRequiredResult = {
  requiresOtp: true;
  caseId: string;
  caseNumber: string;
  parties: Party[];
};

type Step = "SEARCH" | "SELECT_PARTY" | "VERIFY_OTP" | "RESULTS";

async function postJson<T>(path: string, body: unknown, headers: Record<string, string> = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(typeof data?.message === "string" ? data.message : "Request failed");
  }
  return data as T;
}

function StatusBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
      <Clock className="h-3 w-3" />
      {text}
    </span>
  );
}

/** Interactive case-search widget: number lookup, OTP-verified party
 * identity for cases that require it, then results — a direct port of
 * PUBLIC_PORTAL's LandingCaseSearch, calling OCCMS-Backend's public case
 * endpoints directly so both apps render the exact same live widget. */
export function CaseSearchWidget() {
  const [step, setStep] = useState<Step>("SEARCH");
  const [caseNumber, setCaseNumber] = useState("");
  const [otpCaseData, setOtpCaseData] = useState<OtpRequiredResult | null>(null);
  const [selectedPartyId, setSelectedPartyId] = useState<string | null>(null);
  const [otp, setOtp] = useState("");
  const [cases, setCases] = useState<CaseResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);

  async function onSearch(e: FormEvent) {
    e.preventDefault();
    if (!caseNumber.trim()) return;
    setError(null);
    setSearching(true);
    try {
      const result = await postJson<CaseResult | OtpRequiredResult>(
        "/cases/public/find-by-case-number",
        { caseNumber: caseNumber.trim() },
      );
      if ("requiresOtp" in result) {
        setOtpCaseData(result);
        setStep("SELECT_PARTY");
      } else {
        setCases([result]);
        setStep("RESULTS");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to search case");
    } finally {
      setSearching(false);
    }
  }

  async function onSelectParty(partyId: string) {
    if (!otpCaseData) return;
    setSelectedPartyId(partyId);
    setError(null);
    setSendingOtp(true);
    try {
      await postJson("/cases/public/send-party-otp", { caseId: otpCaseData.caseId, partyId });
      setStep("VERIFY_OTP");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setSendingOtp(false);
    }
  }

  async function onVerifyOtp() {
    if (!otpCaseData || !selectedPartyId) return;
    setError(null);
    setVerifying(true);
    try {
      const { token } = await postJson<{ token: string }>("/cases/public/verify-party-otp", {
        caseId: otpCaseData.caseId,
        partyId: selectedPartyId,
        otp,
      });
      const result = await postJson<CaseResult | OtpRequiredResult>(
        "/cases/public/find-by-case-number",
        { caseNumber: otpCaseData.caseNumber },
        { "x-case-access-token": token },
      );
      if (!("requiresOtp" in result)) {
        setCases([result]);
        setStep("RESULTS");
      }
    } catch {
      setError("Invalid OTP or session expired");
    } finally {
      setVerifying(false);
    }
  }

  function formatDate(dateStr?: string | null) {
    if (!dateStr) return "Not available";
    return formatEthiopianDate(dateStr, "en", "long");
  }

  function formatParties(parties?: CaseResult["parties"]) {
    if (!parties || parties.length === 0) return "Not available";
    const plaintiffs = parties.filter((p) => p.role === "PLAINTIFF");
    const defendants = parties.filter((p) => p.role === "DEFENDANT");
    const list = (arr: typeof parties) => arr.map((p) => p.fullName || "Unnamed").join(", ");
    let res = "";
    if (plaintiffs.length > 0) res += `Plaintiffs: ${list(plaintiffs)}`;
    if (defendants.length > 0) res += (res ? " | " : "") + `Defendants: ${list(defendants)}`;
    return res || "Not available";
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {step === "SEARCH" && (
        <form onSubmit={onSearch} className="flex gap-3 sm:gap-4">
          <input
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            placeholder="Enter case number"
            className="h-11 flex-1 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-blue-500 sm:text-base"
          />
          <button
            type="submit"
            disabled={searching}
            className="flex h-11 min-w-[120px] items-center justify-center rounded-lg bg-blue-600 text-sm text-white hover:bg-blue-700 disabled:opacity-60 sm:text-base"
          >
            {searching ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" /> Search
              </>
            )}
          </button>
        </form>
      )}

      {step === "SELECT_PARTY" && otpCaseData && (
        <div className="space-y-3 rounded-lg border border-blue-100 bg-blue-50/30 p-4">
          <button
            onClick={() => setStep("SEARCH")}
            className="-ml-2 flex w-fit items-center text-sm text-gray-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </button>
          <div>
            <p className="text-lg font-semibold">Verify Identity</p>
            <p className="text-sm text-gray-600">Select a party to receive a verification OTP</p>
          </div>
          <div className="space-y-3">
            {otpCaseData.parties.map((party) => (
              <button
                key={party.id}
                onClick={() => onSelectParty(party.id)}
                disabled={sendingOtp}
                className="flex w-full items-center justify-between rounded-lg border border-gray-100 bg-white p-3 text-left transition-all hover:border-blue-300 hover:bg-blue-50 disabled:opacity-60"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-50 p-2">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{party.fullName}</p>
                    <p className="text-[10px] uppercase tracking-tighter text-gray-400">{party.role}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "VERIFY_OTP" && (
        <div className="flex flex-col items-center gap-4 rounded-lg border border-blue-100 bg-blue-50/30 p-6 text-center">
          <div className="w-fit rounded-full bg-blue-100 p-2">
            <Key className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-lg font-semibold">Enter OTP</p>
            <p className="text-sm text-gray-600">Sent to the selected party</p>
          </div>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="000000"
            className="h-12 max-w-[200px] rounded-lg border border-gray-200 text-center text-2xl font-bold tracking-widest outline-none focus:border-blue-500"
          />
          <button
            onClick={onVerifyOtp}
            disabled={verifying || otp.length < 6}
            className="flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white disabled:opacity-60"
          >
            {verifying ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify & View Results"}
          </button>
          <button onClick={() => setStep("SELECT_PARTY")} className="text-sm text-blue-600">
            Change Party
          </button>
        </div>
      )}

      {step === "RESULTS" && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Search Results</h3>
            <button
              onClick={() => {
                setStep("SEARCH");
                setCaseNumber("");
                setCases([]);
              }}
              className="h-8 rounded-lg border border-gray-200 px-3 text-sm text-gray-700 hover:bg-gray-50"
            >
              New Search
            </button>
          </div>
          {cases.map((c) => (
            <div key={c.id} className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-sm font-medium">
                      {c.caseNumber}
                    </span>
                    <StatusBadge text={c.status || c.caseStatus?.name || "Unknown"} />
                    {c.fileStatus && <StatusBadge text={c.fileStatus} />}
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center text-sm">
                      <FileText className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="font-medium">Case Type:</span>
                      <span className="ml-1 text-gray-600">{c.caseType?.name || "Not specified"}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Building className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="font-medium">Court:</span>
                      <span className="ml-1 text-gray-600">{c.court?.name || "Not assigned"}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <User className="mr-2 mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <span className="font-medium">Parties:</span>
                        <div className="ml-1 break-words text-gray-600">{formatParties(c.parties)}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-2 text-xs text-gray-500 sm:border-none sm:pt-0 sm:text-right">
                  <p>Filing Date: {formatDate(c.filingDate)}</p>
                  <p className="mt-1">Last Updated: {formatDate(c.updatedAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
