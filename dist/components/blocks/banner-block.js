"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { useState } from "react";
const variantStyles = {
    info: "border-sky-dark/40 bg-sky-pale text-ink",
    success: "border-foliage/40 bg-foliage/10 text-foliage-deep",
    warning: "border-court/40 bg-court/10 text-ink",
    danger: "border-red-300 bg-red-50 text-red-900",
};
export default function BannerBlock({ block }) {
    var _a, _b;
    const [dismissed, setDismissed] = useState(false);
    const styles = (_b = variantStyles[(_a = block.variant) !== null && _a !== void 0 ? _a : "info"]) !== null && _b !== void 0 ? _b : variantStyles.info;
    if (dismissed)
        return null;
    const link = block.linkLabel && block.linkUrl ? (block.linkUrl.startsWith("/") ? (_jsx(Link, { href: block.linkUrl, className: "shrink-0 text-sm font-semibold underline underline-offset-2", children: block.linkLabel })) : (_jsx("a", { href: block.linkUrl, className: "shrink-0 text-sm font-semibold underline underline-offset-2", children: block.linkLabel }))) : null;
    return (_jsx("div", { className: `flex items-center justify-between gap-4 border-y px-4 py-3 sm:px-6 ${styles}`, role: "status", children: _jsxs("div", { className: "mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 text-center text-sm sm:justify-between sm:text-left", children: [_jsx("p", { className: "font-medium", children: block.message }), _jsxs("div", { className: "flex items-center gap-3", children: [link, block.dismissible ? (_jsx("button", { type: "button", onClick: () => setDismissed(true), className: "rounded-lg px-2 py-1 text-sm opacity-60 transition hover:opacity-100", "aria-label": "Dismiss banner", children: "\u00D7" })) : null] })] }) }));
}
