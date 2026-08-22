"use client";

import { useEffect, useState } from "react";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1212/api/v1";

type BackendCourtFeeResponse = {
  courtFee: number;
  claim: number;
};

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handle = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handle);
  }, [value, delay]);
  return debounced;
}

const HOW_TO_USE_STEPS = [
  "Enter your case monetary value in Ethiopian Birr (ETB)",
  "The fee will be calculated automatically",
  "Review the calculated fee amount",
  "Use the final fee amount when filing your case at the court",
];

/** Interactive court-fee calculator: debounced amount input, live POST to
 * OCCMS-Backend's calculation endpoint, plus the "How to Use" card and the
 * static fee-schedule list — a full, identical port of PUBLIC_PORTAL's
 * CourtFeeCalculatorNew (same container/grid structure as the original, so
 * it renders the same wherever it's embedded: home page, services page). */
export function CourtFeeCalculatorWidget() {
  const [caseCostAmount, setCaseCostAmount] = useState("");
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedAmount = useDebounce(caseCostAmount, 800);

  useEffect(() => {
    const numericAmount = Number(debouncedAmount);
    if (!debouncedAmount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      setCalculatedFee(null);
      return;
    }
    let cancelled = false;
    setCalculating(true);
    setError(null);
    fetch(`${API_BASE}/court-fee-ranges/calculate`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseCostAmount: numericAmount }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(typeof data?.message === "string" ? data.message : "Calculation failed");
        return data as BackendCourtFeeResponse;
      })
      .then((data) => {
        if (!cancelled) setCalculatedFee(data.courtFee);
      })
      .catch((err) => {
        if (!cancelled) {
          setCalculatedFee(null);
          setError(err instanceof Error ? err.message : "Failed to calculate court fee");
        }
      })
      .finally(() => {
        if (!cancelled) setCalculating(false);
      });
    return () => {
      cancelled = true;
    };
  }, [debouncedAmount]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) setCaseCostAmount(value);
  }

  function formatCurrency(amount: number) {
    return `ETB ${amount.toLocaleString("en-ET")}`;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* LEFT COLUMN: Court Fee Calculator */}
        <div className="space-y-6">
          <div className="rounded-lg border border-blue-200 bg-white shadow-lg">
            <div className="rounded-t-lg border-b border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4">
              <p className="flex items-center gap-2 text-lg font-semibold text-blue-900">
                <Calculator className="h-5 w-5" /> Fee Calculation
              </p>
            </div>
            <div className="p-6 pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="caseCostAmount" className="text-sm font-medium text-gray-700">
                    Case Cost Amount (ETB)
                  </label>
                  <input
                    id="caseCostAmount"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter case cost amount"
                    value={caseCostAmount}
                    onChange={handleInputChange}
                    className="h-12 w-full rounded-md border border-blue-300 px-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500">Fee will be calculated automatically as you type</p>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {calculatedFee !== null && (
                  <div className="mt-6 rounded-lg border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                    <div className="text-center">
                      <p className="mb-2 text-sm text-gray-600">Required Court Fee</p>
                      <p className="text-4xl font-bold text-green-700">{formatCurrency(calculatedFee)}</p>
                      <p className="mt-3 text-xs text-gray-500">
                        This fee is calculated based on your case cost amount
                      </p>
                    </div>
                  </div>
                )}

                {calculating && (
                  <div className="flex items-center justify-center py-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" />
                    <span className="ml-3 text-sm text-gray-600">Calculating...</span>
                  </div>
                )}

                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Important:</strong> This is the court fee required for filing your case.
                    Additional fees may apply for other court services. Please ensure you have the
                    exact amount when visiting the court.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="p-6 pt-6">
              <h3 className="mb-3 font-semibold text-blue-900">How to Use</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                {HOW_TO_USE_STEPS.map((step, index) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Service Fees List */}
        <div>
          <ServiceFeesList />
        </div>
      </div>
    </div>
  );
}

type ServiceCategory = {
  id: string;
  title: string;
  items: { description: string; fee: string }[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "non-monetary-cases",
    title: "1. Cases That Cannot Be Valued in Money",
    items: [
      { description: "If the petition is submitted to the Federal First Instance Court", fee: "ETB 1,000" },
      { description: "If the petition is submitted to the High Court", fee: "ETB 1,500" },
      { description: "If the petition is submitted to the Federal Supreme Court", fee: "ETB 2,000" },
      {
        description: "Petition to confirm a contract regarding property between spouses under family law",
        fee: "ETB 500",
      },
      { description: "Petition for late appeal or cassation authorization", fee: "ETB 100" },
      {
        description: "Any petition for interim measures or injunction orders in arbitration matters",
        fee: "ETB 2,000",
      },
    ],
  },
  {
    id: "combined-causes",
    title: "2. Combined Causes of Action",
    items: [
      {
        description:
          "When a petitioner combines more than one cause of action, court fee shall be calculated for each cause according to relevant provisions",
        fee: "As per applicable rate",
      },
    ],
  },
  {
    id: "service-fees",
    title: "3. Fees for Various Services",
    items: [
      { description: "Summons for parties or witnesses (per witness)", fee: "ETB 50" },
      { description: "Copy of judgment or any document/electronic record (per page)", fee: "ETB 5" },
      {
        description:
          "For other services not listed, the court shall determine fees similar to those listed above",
        fee: "As determined by court",
      },
    ],
  },
  {
    id: "review-appeal-cases",
    title: "4. Court Fees for Review or Appeal Cases",
    items: [
      { description: "Administrative decision appealed to Federal First Instance Court", fee: "ETB 1,000" },
      { description: "Administrative decision appealed to High Court", fee: "ETB 2,000" },
      { description: "Administrative decision appealed to Federal Supreme Court", fee: "ETB 3,000" },
      { description: "Review of administrative decision at Federal First Instance Court", fee: "ETB 500" },
      { description: "Review of administrative decision at Federal High Court", fee: "ETB 1,000" },
      { description: "Review of administrative decision at Federal Supreme Court", fee: "ETB 1,500" },
    ],
  },
  {
    id: "procedural-petitions",
    title: "5. Fees for Petitions During Proceedings or After Judgment",
    items: [
      { description: "Petition to set aside default judgment and enter proceedings", fee: "ETB 500" },
      { description: "Petition to oppose judgment (same fee as originally paid)", fee: "Same as original fee" },
      {
        description: "Petition to intervene in proceedings (regardless of claim amount)",
        fee: "ETB 1,000",
      },
    ],
  },
  {
    id: "petition-amendment",
    title: "6. Court Fee When Petition is Amended",
    items: [
      {
        description:
          "If amendment causes procedure to revert, considering stage reached, court time and costs, the court may order payment of up to 10% of original court fee",
        fee: "Up to 10% of original fee",
      },
    ],
  },
  {
    id: "judgment-execution",
    title: "7. Court Fee for Judgment Execution",
    items: [
      { description: "Judgment amount from 0 to ETB 100,000", fee: "ETB 300" },
      { description: "Judgment amount from ETB 100,001 to ETB 200,000", fee: "ETB 500" },
      { description: "Judgment amount from ETB 200,001 to ETB 500,000", fee: "ETB 1,000" },
      { description: "Judgment amount from ETB 500,001 to ETB 1,000,000", fee: "ETB 1,500" },
      { description: "Judgment amount from ETB 1,000,001 to ETB 10,000,000", fee: "ETB 2,000" },
      { description: "Judgment amount above ETB 10,000,001", fee: "ETB 3,000" },
      {
        description:
          "Petition claiming right over seized/attached property during execution (regardless of property value)",
        fee: "ETB 1,000",
      },
      { description: "Execution of non-monetary judgment", fee: "ETB 500" },
    ],
  },
  {
    id: "fee-refund",
    title: "8. Circumstances for Refund of Court Fees",
    items: [
      {
        description:
          "If plaintiff withdraws before case is scheduled or summons issued: 95% refunded (5% deducted)",
        fee: "95% refund",
      },
      {
        description:
          "If court dismisses for lack of jurisdiction or cause of action: 90% refunded (10% deducted)",
        fee: "90% refund",
      },
      { description: "If case is withdrawn before hearing: 85% refunded (15% deducted)", fee: "85% refund" },
      {
        description: "If case settled through court-annexed mediation: refund as per mediation guidelines",
        fee: "As per mediation rules",
      },
      {
        description:
          "If parties settle by agreement or reconciliation before hearing: same as item 2 (90% refund)",
        fee: "90% refund",
      },
      { description: "If plaintiff withdraws after hearing begins: no refund", fee: "No refund" },
    ],
  },
  {
    id: "fee-exemptions",
    title: "9. Cases Exempt from Court Fees",
    items: [
      { description: "Petitions regarding alimony and child support", fee: "Exempt" },
      {
        description:
          "Cases filed by civil society organizations to enforce public interest or human rights for vulnerable groups (women, children, elderly, persons with disabilities)",
        fee: "Exempt",
      },
      { description: "Cases concerning environmental protection and care", fee: "Exempt" },
      { description: "Person determined by court to litigate as a pauper under law", fee: "Exempt" },
      { description: "Criminal cases", fee: "Exempt" },
      {
        description: "Employee petition for review of administrative decision under applicable law",
        fee: "Exempt",
      },
    ],
  },
];

/** Static fee-schedule accordion — a direct port of PUBLIC_PORTAL's
 * ServiceFeesList (English text only, matching this package's single-locale
 * content convention). */
function ServiceFeesList() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  function toggleCategory(categoryId: string) {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    );
  }

  return (
    <div className="rounded-lg border border-blue-200 bg-white">
      <div className="p-6">
        <p className="text-lg font-semibold text-blue-800">Court Services and Fees</p>
        <p className="mt-1 text-sm text-gray-600">
          Official court service fees as per Regulation No. 1/2017
        </p>
      </div>
      <div className="space-y-2 p-6 pt-0">
        {SERVICE_CATEGORIES.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          return (
            <div key={category.id} className="overflow-hidden rounded-lg border border-gray-200">
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="flex w-full items-center justify-between bg-blue-50 p-4 text-left transition-colors hover:bg-blue-100"
              >
                <span className="font-medium text-blue-900">{category.title}</span>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-blue-600" />
                )}
              </button>
              {isExpanded && (
                <div className="space-y-3 bg-white p-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3 last:border-0"
                    >
                      <p className="flex-1 text-sm text-gray-700">{item.description}</p>
                      <span className="whitespace-nowrap text-sm font-semibold text-blue-700">
                        {item.fee}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
