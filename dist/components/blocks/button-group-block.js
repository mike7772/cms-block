import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
function ActionLink({ href, className, children, }) {
    if (href.startsWith("/")) {
        return (_jsx(Link, { href: href, className: className, children: children }));
    }
    return (_jsx("a", { href: href || "#", className: className, children: children }));
}
export default function ButtonGroupBlock({ block, }) {
    var _a, _b, _c;
    const align = (_b = alignClass[(_a = block.align) !== null && _a !== void 0 ? _a : "left"]) !== null && _b !== void 0 ? _b : alignClass.left;
    const stack = block.stackOnMobile !== false;
    return (_jsxs("div", { className: `flex ${align} ${stack ? "flex-col sm:flex-row" : "flex-row"} gap-3`, children: [_jsx(ActionLink, { href: block.primaryUrl, className: "btn-primary", children: block.primaryLabel }), block.secondaryLabel ? (_jsx(ActionLink, { href: (_c = block.secondaryUrl) !== null && _c !== void 0 ? _c : "#", className: "inline-flex items-center justify-center rounded-full border border-sky-dark/40 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-pale", children: block.secondaryLabel })) : null] }));
}
