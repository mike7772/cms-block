import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { asPlainText } from "../../puck/registry/helpers.js";
function parseData(raw) {
    try {
        const parsed = JSON.parse(asPlainText(raw) || "[]");
        if (!Array.isArray(parsed))
            return [];
        return parsed
            .map((item) => {
            var _a;
            return ({
                label: String((_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : ""),
                value: Number(item === null || item === void 0 ? void 0 : item.value) || 0,
            });
        })
            .filter((item) => item.label);
    }
    catch (_a) {
        return [];
    }
}
export default function ChartBlock({ block }) {
    const data = parseData(block.dataJson);
    const max = Math.max(...data.map((d) => d.value), 1);
    const horizontal = block.variant === "horizontal";
    return (_jsxs("section", { className: "mx-auto max-w-3xl px-6", children: [block.title ? (_jsx("h2", { className: "mb-6 text-xl font-semibold tracking-tight text-ink", children: block.title })) : null, data.length ? (horizontal ? (_jsx("ul", { className: "space-y-4", children: data.map((item) => (_jsxs("li", { children: [_jsxs("div", { className: "mb-1 flex justify-between text-sm text-ink", children: [_jsx("span", { className: "font-medium", children: item.label }), _jsx("span", { className: "text-ink/60", children: item.value })] }), _jsx("div", { className: "h-3 overflow-hidden rounded-full bg-sky-pale", children: _jsx("div", { className: "h-full rounded-full bg-court", style: { width: `${(item.value / max) * 100}%` } }) })] }, item.label))) })) : (_jsx("div", { className: "flex h-56 items-end gap-3 border-b border-sky-dark/20 pb-0", children: data.map((item) => (_jsxs("div", { className: "flex h-full flex-1 flex-col items-center justify-end gap-2", children: [_jsx("span", { className: "text-xs font-medium text-ink/60", children: item.value }), _jsx("div", { className: "w-full max-w-[4rem] rounded-t-lg bg-court", style: { height: `${(item.value / max) * 100}%` }, title: `${item.label}: ${item.value}` }), _jsx("span", { className: "truncate text-xs font-medium text-ink", children: item.label })] }, item.label))) }))) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add chart data JSON" }))] }));
}
