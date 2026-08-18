import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const alignClass = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
};
export default function RatingBlock({ block }) {
    var _a, _b;
    const value = Math.min(5, Math.max(1, Number(block.value) || 1));
    const align = (_b = alignClass[(_a = block.align) !== null && _a !== void 0 ? _a : "left"]) !== null && _b !== void 0 ? _b : alignClass.left;
    return (_jsxs("div", { className: `flex flex-col gap-2 ${align}`, children: [_jsx("div", { className: "flex gap-1 text-court", "aria-label": `${value} out of 5 stars`, children: Array.from({ length: 5 }, (_, i) => (_jsx("span", { className: `text-2xl leading-none ${i < value ? "opacity-100" : "opacity-25"}`, "aria-hidden": true, children: "\u2605" }, i))) }), block.label ? (_jsx("p", { className: "text-sm font-medium text-ink/70", children: block.label })) : null] }));
}
