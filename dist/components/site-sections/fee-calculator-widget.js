"use client";
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";
const API_BASE = (_a = process.env.NEXT_PUBLIC_API_URL) !== null && _a !== void 0 ? _a : "http://localhost:1212/api/v1";
function useDebounce(value, delay) {
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
    return (_jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "rounded-lg border text-card-foreground border-blue-200 bg-white shadow-lg", children: [_jsx("div", { className: "flex flex-col space-y-1.5 p-6 border-b border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100", children: _jsxs("p", { className: "font-semibold leading-none tracking-tight flex items-center gap-2 text-lg text-blue-900", children: [_jsx(Calculator, { className: "h-5 w-5" }), " Fee Calculation"] }) }), _jsx("div", { className: "p-6 pt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "caseCostAmount", className: "text-sm font-medium leading-none text-gray-700", children: "Case Cost Amount (ETB)" }), _jsx("input", { id: "caseCostAmount", type: "text", inputMode: "numeric", placeholder: "Enter case cost amount", value: caseCostAmount, onChange: handleInputChange, className: "flex h-12 w-full rounded-md border border-blue-300 bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" }), _jsx("p", { className: "text-xs text-gray-500", children: "Fee will be calculated automatically as you type" })] }), error && (_jsx("div", { className: "rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700", children: error })), calculatedFee !== null && (_jsx("div", { className: "mt-6 rounded-lg border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "mb-2 text-sm text-gray-600", children: "Required Court Fee" }), _jsx("p", { className: "text-4xl font-bold text-green-700", children: formatCurrency(calculatedFee) }), _jsx("p", { className: "mt-3 text-xs text-gray-500", children: "This fee is calculated based on your case cost amount" })] }) })), calculating && (_jsxs("div", { className: "flex items-center justify-center py-4", children: [_jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" }), _jsx("span", { className: "ml-3 text-sm text-gray-600", children: "Calculating..." })] })), _jsx("div", { className: "mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4", children: _jsxs("p", { className: "text-sm text-blue-900", children: [_jsx("strong", { children: "Important:" }), " This is the court fee required for filing your case. Additional fees may apply for other court services. Please ensure you have the exact amount when visiting the court."] }) })] }) })] }), _jsx("div", { className: "rounded-lg border text-card-foreground shadow-sm border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50", children: _jsxs("div", { className: "p-6 pt-6", children: [_jsx("h3", { className: "mb-3 font-semibold text-blue-900", children: "How to Use" }), _jsx("ol", { className: "space-y-2 text-sm text-gray-700", children: HOW_TO_USE_STEPS.map((step, index) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white", children: index + 1 }), _jsx("span", { children: step })] }, step))) })] }) })] }), _jsx("div", { children: _jsx(ServiceFeesList, {}) })] }) }));
}
const SERVICE_CATEGORIES = [
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
                description: "When a petitioner combines more than one cause of action, court fee shall be calculated for each cause according to relevant provisions",
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
                description: "For other services not listed, the court shall determine fees similar to those listed above",
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
                description: "If amendment causes procedure to revert, considering stage reached, court time and costs, the court may order payment of up to 10% of original court fee",
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
                description: "Petition claiming right over seized/attached property during execution (regardless of property value)",
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
                description: "If plaintiff withdraws before case is scheduled or summons issued: 95% refunded (5% deducted)",
                fee: "95% refund",
            },
            {
                description: "If court dismisses for lack of jurisdiction or cause of action: 90% refunded (10% deducted)",
                fee: "90% refund",
            },
            { description: "If case is withdrawn before hearing: 85% refunded (15% deducted)", fee: "85% refund" },
            {
                description: "If case settled through court-annexed mediation: refund as per mediation guidelines",
                fee: "As per mediation rules",
            },
            {
                description: "If parties settle by agreement or reconciliation before hearing: same as item 2 (90% refund)",
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
                description: "Cases filed by civil society organizations to enforce public interest or human rights for vulnerable groups (women, children, elderly, persons with disabilities)",
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
    const [expandedCategories, setExpandedCategories] = useState([]);
    function toggleCategory(categoryId) {
        setExpandedCategories((prev) => prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]);
    }
    return (_jsxs("div", { className: "rounded-lg border text-card-foreground shadow-sm border-blue-200 bg-white", children: [_jsxs("div", { className: "flex flex-col space-y-1.5 p-6", children: [_jsx("p", { className: "font-semibold leading-none tracking-tight text-lg text-blue-800", children: "Court Services and Fees" }), _jsx("p", { className: "text-sm text-gray-600", children: "Official court service fees as per Regulation No. 1/2017" })] }), _jsx("div", { className: "space-y-2 p-6 pt-0", children: SERVICE_CATEGORIES.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    return (_jsxs("div", { className: "overflow-hidden rounded-lg border border-gray-200", children: [_jsxs("button", { type: "button", onClick: () => toggleCategory(category.id), className: "flex w-full items-center justify-between bg-blue-50 p-4 text-left transition-colors hover:bg-blue-100", children: [_jsx("span", { className: "font-medium text-blue-900", children: category.title }), isExpanded ? (_jsx(ChevronUp, { className: "h-5 w-5 flex-shrink-0 text-blue-600" })) : (_jsx(ChevronDown, { className: "h-5 w-5 flex-shrink-0 text-blue-600" }))] }), isExpanded && (_jsx("div", { className: "space-y-3 bg-white p-4", children: category.items.map((item, index) => (_jsxs("div", { className: "flex items-start justify-between gap-4 border-b border-gray-100 pb-3 last:border-0", children: [_jsx("p", { className: "flex-1 text-sm text-gray-700", children: item.description }), _jsx("span", { className: "whitespace-nowrap text-sm font-semibold text-blue-700", children: item.fee })] }, index))) }))] }, category.id));
                }) })] }));
}
