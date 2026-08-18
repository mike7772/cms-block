"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
const variantStyles = {
    info: "border-sky-dark/40 bg-sky-pale text-ink",
    success: "border-foliage/40 bg-foliage/10 text-foliage-deep",
    warning: "border-court/40 bg-court/10 text-ink",
    danger: "border-red-300 bg-red-50 text-red-900",
};
export default function AlertBlock({ block }) {
    var _a;
    const [dismissed, setDismissed] = useState(false);
    const icon = getPreferredImage(block.icon);
    const styles = (_a = variantStyles[block.variant]) !== null && _a !== void 0 ? _a : variantStyles.info;
    if (dismissed)
        return null;
    return (_jsxs("aside", { className: `mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border px-5 py-4 ${styles}`, role: "alert", children: [icon ? (_jsx("div", { className: "relative mt-0.5 h-6 w-6 shrink-0 overflow-hidden rounded", children: _jsx(Image, { src: icon.src, alt: icon.alt || "", fill: true, className: "object-contain", sizes: "24px" }) })) : null, _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "font-semibold tracking-tight", children: block.title }), _jsx("p", { className: "mt-1 text-sm leading-6 opacity-80", children: block.message })] }), block.dismissible ? (_jsx("button", { type: "button", onClick: () => setDismissed(true), className: "shrink-0 rounded-lg px-2 py-1 text-sm opacity-60 transition hover:opacity-100", "aria-label": "Dismiss alert", children: "\u00D7" })) : null] }));
}
