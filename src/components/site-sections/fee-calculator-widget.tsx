"use client";

import { useEffect, useState } from "react";
import { Calculator } from "lucide-react";

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

/** Interactive court-fee calculator: debounced amount input, live POST to
 * OCCMS-Backend's calculation endpoint — a direct port of PUBLIC_PORTAL's
 * CourtFeeCalculatorNew, minus the static fee-schedule side panel. */
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
    <div className="mx-auto max-w-xl space-y-6">
      <div className="rounded-lg border border-blue-200 bg-white shadow-lg">
        <div className="rounded-t-lg border-b border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4">
          <p className="flex items-center gap-2 text-lg font-semibold text-blue-900">
            <Calculator className="h-5 w-5" /> Fee Calculation
          </p>
        </div>
        <div className="space-y-4 p-6">
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
              className="h-12 w-full rounded-lg border border-blue-300 px-3 text-lg outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500">Fee will be calculated automatically as you type</p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {calculatedFee !== null && (
            <div className="mt-6 rounded-lg border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center">
              <p className="mb-2 text-sm text-gray-600">Required Court Fee</p>
              <p className="text-4xl font-bold text-green-700">{formatCurrency(calculatedFee)}</p>
              <p className="mt-3 text-xs text-gray-500">
                This fee is calculated based on your case cost amount
              </p>
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
              Additional fees may apply for other court services. Please ensure you have the exact
              amount when visiting the court.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
