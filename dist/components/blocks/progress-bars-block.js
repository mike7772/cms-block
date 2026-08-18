import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const colorClass = {
    primary: "bg-trunk",
    success: "bg-emerald-600",
    warning: "bg-amber-500",
    danger: "bg-red-600",
    info: "bg-sky-dark",
};
export default function ProgressBarsBlock({ block, }) {
    var _a;
    const bars = (_a = block.bars) !== null && _a !== void 0 ? _a : [];
    return (_jsxs("section", { className: "mx-auto max-w-2xl rounded-3xl border border-sky-dark/20 bg-white px-8 py-10", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-8 text-center text-2xl", children: block.heading })) : null, bars.length ? (_jsx("ul", { className: "flex flex-col gap-5", children: bars.map((bar, i) => {
                    var _a, _b, _c;
                    const pct = Math.max(0, Math.min(100, (_a = bar.percentage) !== null && _a !== void 0 ? _a : 0));
                    const color = (_c = colorClass[(_b = bar.color) !== null && _b !== void 0 ? _b : "primary"]) !== null && _c !== void 0 ? _c : colorClass.primary;
                    return (_jsxs("li", { children: [_jsxs("div", { className: "mb-1.5 flex items-center justify-between text-sm", children: [_jsx("span", { className: "font-medium text-ink", children: bar.label }), _jsxs("span", { className: "text-ink/50", children: [pct, "%"] })] }), _jsx("div", { className: "h-2.5 overflow-hidden rounded-full bg-sky-pale", children: _jsx("div", { className: `h-full rounded-full ${color}`, style: { width: `${pct}%` } }) })] }, `${bar.label}-${i}`));
                }) })) : (_jsx("p", { className: "text-center text-ink/50", children: "Add progress bars" }))] }));
}
