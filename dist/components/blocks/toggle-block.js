"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ToggleBlock({ block }) {
    var _a;
    const [open, setOpen] = useState(Boolean(block.openByDefault));
    const style = (_a = block.iconStyle) !== null && _a !== void 0 ? _a : "plus";
    const icon = style === "chevron" ? (open ? "▾" : "▸") : style === "caret" ? (open ? "▼" : "▶") : open ? "−" : "+";
    return (_jsxs("div", { className: "mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: [_jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left", "aria-expanded": open, children: [_jsx("span", { className: "font-semibold text-ink", children: block.title }), _jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-sky-pale text-sm font-bold text-trunk", children: icon })] }), open ? (_jsx("div", { className: "border-t border-sky-dark/15 px-5 py-4 text-sm leading-6 text-ink/70 whitespace-pre-wrap", children: block.content })) : null] }));
}
