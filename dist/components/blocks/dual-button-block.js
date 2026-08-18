import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
export default function DualButtonBlock({ block, }) {
    var _a, _b;
    const align = (_b = alignClass[(_a = block.align) !== null && _a !== void 0 ? _a : "center"]) !== null && _b !== void 0 ? _b : alignClass.center;
    const stack = block.stackOnMobile !== false;
    return (_jsxs("div", { className: `flex ${align} ${stack ? "flex-col sm:flex-row" : "flex-row flex-wrap"} gap-3`, children: [_jsx(Link, { href: block.primaryUrl || "/", className: "inline-flex items-center justify-center rounded-full bg-trunk px-6 py-3 text-sm font-semibold text-white transition hover:bg-trunk-dark", children: block.primaryLabel }), _jsx(Link, { href: block.secondaryUrl || "/", className: "inline-flex items-center justify-center rounded-full border-2 border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk/5", children: block.secondaryLabel })] }));
}
