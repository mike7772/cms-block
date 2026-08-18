import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function MenuAnchorBlock({ block, }) {
    var _a;
    const id = ((_a = block.anchorId) === null || _a === void 0 ? void 0 : _a.replace(/^#/, "")) || "anchor";
    return (_jsx("div", { id: id, className: "scroll-mt-24 border-t border-dashed border-sky-dark/20 py-2", children: block.label ? (_jsxs("p", { className: "text-xs uppercase tracking-wide text-ink/40", children: [block.label, " \u00B7 #", id] })) : (_jsxs("span", { className: "sr-only", children: ["Anchor #", id] })) }));
}
