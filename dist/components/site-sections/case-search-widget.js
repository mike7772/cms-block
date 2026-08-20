"use client";
var _a;
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Loader2, Search, FileText, User, Clock, Key, ChevronRight, ArrowLeft, Building, } from "lucide-react";
import { formatEthiopianDate } from "../../lib/utils/ethiopian-date.js";
const API_BASE = (_a = process.env.NEXT_PUBLIC_API_URL) !== null && _a !== void 0 ? _a : "http://localhost:1212/api/v1";
async function postJson(path, body, headers = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: "POST",
        credentials: "include",
        headers: Object.assign({ "Content-Type": "application/json" }, headers),
        body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(typeof (data === null || data === void 0 ? void 0 : data.message) === "string" ? data.message : "Request failed");
    }
    return data;
}
function StatusBadge({ text }) {
    return (_jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600", children: [_jsx(Clock, { className: "h-3 w-3" }), text] }));
}
/** Interactive case-search widget: number lookup, OTP-verified party
 * identity for cases that require it, then results — a direct port of
 * PUBLIC_PORTAL's LandingCaseSearch, calling OCCMS-Backend's public case
 * endpoints directly so both apps render the exact same live widget. */
export function CaseSearchWidget() {
    const [step, setStep] = useState("SEARCH");
    const [caseNumber, setCaseNumber] = useState("");
    const [otpCaseData, setOtpCaseData] = useState(null);
    const [selectedPartyId, setSelectedPartyId] = useState(null);
    const [otp, setOtp] = useState("");
    const [cases, setCases] = useState([]);
    const [error, setError] = useState(null);
    const [searching, setSearching] = useState(false);
    const [sendingOtp, setSendingOtp] = useState(false);
    const [verifying, setVerifying] = useState(false);
    async function onSearch(e) {
        e.preventDefault();
        if (!caseNumber.trim())
            return;
        setError(null);
        setSearching(true);
        try {
            const result = await postJson("/cases/public/find-by-case-number", { caseNumber: caseNumber.trim() });
            if ("requiresOtp" in result) {
                setOtpCaseData(result);
                setStep("SELECT_PARTY");
            }
            else {
                setCases([result]);
                setStep("RESULTS");
            }
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Unable to search case");
        }
        finally {
            setSearching(false);
        }
    }
    async function onSelectParty(partyId) {
        if (!otpCaseData)
            return;
        setSelectedPartyId(partyId);
        setError(null);
        setSendingOtp(true);
        try {
            await postJson("/cases/public/send-party-otp", { caseId: otpCaseData.caseId, partyId });
            setStep("VERIFY_OTP");
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Failed to send OTP");
        }
        finally {
            setSendingOtp(false);
        }
    }
    async function onVerifyOtp() {
        if (!otpCaseData || !selectedPartyId)
            return;
        setError(null);
        setVerifying(true);
        try {
            const { token } = await postJson("/cases/public/verify-party-otp", {
                caseId: otpCaseData.caseId,
                partyId: selectedPartyId,
                otp,
            });
            const result = await postJson("/cases/public/find-by-case-number", { caseNumber: otpCaseData.caseNumber }, { "x-case-access-token": token });
            if (!("requiresOtp" in result)) {
                setCases([result]);
                setStep("RESULTS");
            }
        }
        catch (_a) {
            setError("Invalid OTP or session expired");
        }
        finally {
            setVerifying(false);
        }
    }
    function formatDate(dateStr) {
        if (!dateStr)
            return "Not available";
        return formatEthiopianDate(dateStr, "en", "long");
    }
    function formatParties(parties) {
        if (!parties || parties.length === 0)
            return "Not available";
        const plaintiffs = parties.filter((p) => p.role === "PLAINTIFF");
        const defendants = parties.filter((p) => p.role === "DEFENDANT");
        const list = (arr) => arr.map((p) => p.fullName || "Unnamed").join(", ");
        let res = "";
        if (plaintiffs.length > 0)
            res += `Plaintiffs: ${list(plaintiffs)}`;
        if (defendants.length > 0)
            res += (res ? " | " : "") + `Defendants: ${list(defendants)}`;
        return res || "Not available";
    }
    return (_jsxs("div", { className: "space-y-6", children: [error && (_jsx("div", { className: "rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700", children: error })), step === "SEARCH" && (_jsxs("form", { onSubmit: onSearch, className: "flex gap-3 sm:gap-4", children: [_jsx("input", { value: caseNumber, onChange: (e) => setCaseNumber(e.target.value), placeholder: "Enter case number", className: "h-11 flex-1 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-blue-500 sm:text-base" }), _jsx("button", { type: "submit", disabled: searching, className: "flex h-11 min-w-[120px] items-center justify-center rounded-lg bg-blue-600 text-sm text-white hover:bg-blue-700 disabled:opacity-60 sm:text-base", children: searching ? (_jsx(Loader2, { className: "h-4 w-4 animate-spin" })) : (_jsxs(_Fragment, { children: [_jsx(Search, { className: "mr-2 h-4 w-4" }), " Search"] })) })] })), step === "SELECT_PARTY" && otpCaseData && (_jsxs("div", { className: "space-y-3 rounded-lg border border-blue-100 bg-blue-50/30 p-4", children: [_jsxs("button", { onClick: () => setStep("SEARCH"), className: "-ml-2 flex w-fit items-center text-sm text-gray-500", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back"] }), _jsxs("div", { children: [_jsx("p", { className: "text-lg font-semibold", children: "Verify Identity" }), _jsx("p", { className: "text-sm text-gray-600", children: "Select a party to receive a verification OTP" })] }), _jsx("div", { className: "space-y-3", children: otpCaseData.parties.map((party) => (_jsxs("button", { onClick: () => onSelectParty(party.id), disabled: sendingOtp, className: "flex w-full items-center justify-between rounded-lg border border-gray-100 bg-white p-3 text-left transition-all hover:border-blue-300 hover:bg-blue-50 disabled:opacity-60", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "rounded-full bg-gray-50 p-2", children: _jsx(User, { className: "h-4 w-4 text-gray-500" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold", children: party.fullName }), _jsx("p", { className: "text-[10px] uppercase tracking-tighter text-gray-400", children: party.role })] })] }), _jsx(ChevronRight, { className: "h-4 w-4 text-gray-300" })] }, party.id))) })] })), step === "VERIFY_OTP" && (_jsxs("div", { className: "flex flex-col items-center gap-4 rounded-lg border border-blue-100 bg-blue-50/30 p-6 text-center", children: [_jsx("div", { className: "w-fit rounded-full bg-blue-100 p-2", children: _jsx(Key, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-lg font-semibold", children: "Enter OTP" }), _jsx("p", { className: "text-sm text-gray-600", children: "Sent to the selected party" })] }), _jsx("input", { type: "text", maxLength: 6, value: otp, onChange: (e) => setOtp(e.target.value), placeholder: "000000", className: "h-12 max-w-[200px] rounded-lg border border-gray-200 text-center text-2xl font-bold tracking-widest outline-none focus:border-blue-500" }), _jsx("button", { onClick: onVerifyOtp, disabled: verifying || otp.length < 6, className: "flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white disabled:opacity-60", children: verifying ? _jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : "Verify & View Results" }), _jsx("button", { onClick: () => setStep("SELECT_PARTY"), className: "text-sm text-blue-600", children: "Change Party" })] })), step === "RESULTS" && (_jsxs("div", { className: "mt-6 space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Search Results" }), _jsx("button", { onClick: () => {
                                    setStep("SEARCH");
                                    setCaseNumber("");
                                    setCases([]);
                                }, className: "h-8 rounded-lg border border-gray-200 px-3 text-sm text-gray-700 hover:bg-gray-50", children: "New Search" })] }), cases.map((c) => {
                        var _a, _b, _c;
                        return (_jsx("div", { className: "rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md", children: _jsxs("div", { className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-start", children: [_jsxs("div", { className: "flex-1 space-y-3", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx("span", { className: "rounded-full border border-gray-200 px-2.5 py-0.5 text-sm font-medium", children: c.caseNumber }), _jsx(StatusBadge, { text: c.status || ((_a = c.caseStatus) === null || _a === void 0 ? void 0 : _a.name) || "Unknown" }), c.fileStatus && _jsx(StatusBadge, { text: c.fileStatus })] }), _jsxs("div", { className: "grid gap-2", children: [_jsxs("div", { className: "flex items-center text-sm", children: [_jsx(FileText, { className: "mr-2 h-4 w-4 text-gray-400" }), _jsx("span", { className: "font-medium", children: "Case Type:" }), _jsx("span", { className: "ml-1 text-gray-600", children: ((_b = c.caseType) === null || _b === void 0 ? void 0 : _b.name) || "Not specified" })] }), _jsxs("div", { className: "flex items-center text-sm", children: [_jsx(Building, { className: "mr-2 h-4 w-4 text-gray-400" }), _jsx("span", { className: "font-medium", children: "Court:" }), _jsx("span", { className: "ml-1 text-gray-600", children: ((_c = c.court) === null || _c === void 0 ? void 0 : _c.name) || "Not assigned" })] }), _jsxs("div", { className: "flex items-start text-sm", children: [_jsx(User, { className: "mr-2 mt-0.5 h-4 w-4 text-gray-400" }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Parties:" }), _jsx("div", { className: "ml-1 break-words text-gray-600", children: formatParties(c.parties) })] })] })] })] }), _jsxs("div", { className: "border-t pt-2 text-xs text-gray-500 sm:border-none sm:pt-0 sm:text-right", children: [_jsxs("p", { children: ["Filing Date: ", formatDate(c.filingDate)] }), _jsxs("p", { className: "mt-1", children: ["Last Updated: ", formatDate(c.updatedAt)] })] })] }) }, c.id));
                    })] }))] }));
}
