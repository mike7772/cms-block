import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
const variantClass = {
    primary: "btn-primary",
    secondary: "inline-flex items-center justify-center rounded-full bg-sky px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-dark/30",
    outline: "inline-flex items-center justify-center rounded-full border border-sky-dark/40 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-pale",
    ghost: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-court transition hover:bg-sky-pale",
};
const sizeClass = {
    small: "px-4 py-2 text-xs",
    medium: "",
    large: "px-8 py-4 text-base",
};
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
export default function ButtonBlock({ block }) {
    var _a, _b, _c, _d, _e, _f;
    const variant = (_b = variantClass[(_a = block.variant) !== null && _a !== void 0 ? _a : "primary"]) !== null && _b !== void 0 ? _b : variantClass.primary;
    const size = (_d = sizeClass[(_c = block.size) !== null && _c !== void 0 ? _c : "medium"]) !== null && _d !== void 0 ? _d : "";
    const align = (_f = alignClass[(_e = block.align) !== null && _e !== void 0 ? _e : "left"]) !== null && _f !== void 0 ? _f : alignClass.left;
    const className = `${variant} ${size}`.trim();
    const target = block.openInNewTab ? "_blank" : undefined;
    const rel = block.openInNewTab ? "noopener noreferrer" : undefined;
    const link = block.url.startsWith("/") ? (_jsx(Link, { href: block.url, className: className, target: target, rel: rel, children: block.label })) : (_jsx("a", { href: block.url || "#", className: className, target: target, rel: rel, children: block.label }));
    return _jsx("div", { className: `inline-flex ${align}`, children: link });
}
