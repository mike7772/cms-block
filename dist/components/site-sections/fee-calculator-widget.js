"use client";
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Calculator } from "lucide-react";
const API_BASE = (_a = process.env.NEXT_PUBLIC_API_URL) !== null && _a !== void 0 ? _a : "http://localhost:1212/api/v1";
function useDebounce(value, delay) {
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
    const [calculatedFee, setCalculatedFee] = useState(null);
    const [calculating, setCalculating] = useState(false);
    const [error, setError] = useState(null);
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
            if (!res.ok)
                throw new Error(typeof (data === null || data === void 0 ? void 0 : data.message) === "string" ? data.message : "Calculation failed");
            return data;
        })
            .then((data) => {
            if (!cancelled)
                setCalculatedFee(data.courtFee);
        })
            .catch((err) => {
            if (!cancelled) {
                setCalculatedFee(null);
                setError(err instanceof Error ? err.message : "Failed to calculate court fee");
            }
        })
            .finally(() => {
            if (!cancelled)
                setCalculating(false);
        });
        return () => {
            cancelled = true;
        };
    }, [debouncedAmount]);
    function handleInputChange(e) {
        const value = e.target.value;
        if (value === "" || /^\d+$/.test(value))
            setCaseCostAmount(value);
    }
    function formatCurrency(amount) {
        return `ETB ${amount.toLocaleString("en-ET")}`;
    }
    return (_jsx("div", { className: "mx-auto max-w-xl space-y-6", children: _jsxs("div", { className: "rounded-lg border border-blue-200 bg-white shadow-lg", children: [_jsx("div", { className: "rounded-t-lg border-b border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4", children: _jsxs("p", { className: "flex items-center gap-2 text-lg font-semibold text-blue-900", children: [_jsx(Calculator, { className: "h-5 w-5" }), " Fee Calculation"] }) }), _jsxs("div", { className: "space-y-4 p-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "caseCostAmount", className: "text-sm font-medium text-gray-700", children: "Case Cost Amount (ETB)" }), _jsx("input", { id: "caseCostAmount", type: "text", inputMode: "numeric", placeholder: "Enter case cost amount", value: caseCostAmount, onChange: handleInputChange, className: "h-12 w-full rounded-lg border border-blue-300 px-3 text-lg outline-none focus:border-blue-500" }), _jsx("p", { className: "text-xs text-gray-500", children: "Fee will be calculated automatically as you type" })] }), error && (_jsx("div", { className: "rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700", children: error })), calculatedFee !== null && (_jsxs("div", { className: "mt-6 rounded-lg border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center", children: [_jsx("p", { className: "mb-2 text-sm text-gray-600", children: "Required Court Fee" }), _jsx("p", { className: "text-4xl font-bold text-green-700", children: formatCurrency(calculatedFee) }), _jsx("p", { className: "mt-3 text-xs text-gray-500", children: "This fee is calculated based on your case cost amount" })] })), calculating && (_jsxs("div", { className: "flex items-center justify-center py-4", children: [_jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" }), _jsx("span", { className: "ml-3 text-sm text-gray-600", children: "Calculating..." })] })), _jsx("div", { className: "mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4", children: _jsxs("p", { className: "text-sm text-blue-900", children: [_jsx("strong", { children: "Important:" }), " This is the court fee required for filing your case. Additional fees may apply for other court services. Please ensure you have the exact amount when visiting the court."] }) })] })] }) }));
}
