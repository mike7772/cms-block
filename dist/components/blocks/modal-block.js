"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const sizeClass = {
    small: "max-w-sm",
    medium: "max-w-lg",
    large: "max-w-2xl",
};
export default function ModalBlock({ block }) {
    var _a, _b;
    const [open, setOpen] = useState(false);
    const size = (_b = sizeClass[(_a = block.size) !== null && _a !== void 0 ? _a : "medium"]) !== null && _b !== void 0 ? _b : sizeClass.medium;
    useEffect(() => {
        if (!open)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);
    return (_jsxs("section", { className: "mx-auto max-w-lg text-center", children: [_jsx("button", { type: "button", onClick: () => setOpen(true), className: "btn-primary", children: block.triggerLabel }), open ? (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [_jsx("button", { type: "button", "aria-label": "Close overlay", className: "absolute inset-0 bg-ink/50", onClick: () => setOpen(false) }), _jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", className: `relative z-10 w-full ${size} rounded-3xl border border-sky-dark/20 bg-white p-6 text-left shadow-2xl`, children: [_jsxs("div", { className: "mb-4 flex items-start justify-between gap-4", children: [_jsx("h3", { id: "modal-title", className: "text-lg font-semibold text-ink", children: block.title || block.triggerLabel }), _jsx("button", { type: "button", onClick: () => setOpen(false), className: "rounded-full border border-sky-dark/30 px-3 py-1 text-sm text-ink hover:bg-sky-pale", children: "Close" })] }), block.content ? (_jsx("div", { className: "whitespace-pre-wrap text-ink/80", children: block.content })) : (_jsx("p", { className: "text-ink/50", children: "No content yet." }))] })] })) : null] }));
}
