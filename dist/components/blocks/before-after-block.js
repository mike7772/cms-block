"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
export default function BeforeAfterBlock({ block, }) {
    const [position, setPosition] = useState(50);
    const before = getPreferredImage(block.beforeImage);
    const after = getPreferredImage(block.afterImage);
    if (!before && !after) {
        return (_jsx("div", { className: "mx-auto max-w-3xl rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add before and after images" }));
    }
    return (_jsxs("figure", { className: "mx-auto max-w-3xl px-6", children: [_jsxs("div", { className: "relative aspect-[16/10] overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale select-none", children: [after ? (_jsx(Image, { src: after.src, alt: block.afterLabel || after.alt || "After", fill: true, className: "object-cover", sizes: "768px", draggable: false })) : null, before ? (_jsx("div", { className: "absolute inset-0", style: { clipPath: `inset(0 ${100 - position}% 0 0)` }, children: _jsx(Image, { src: before.src, alt: block.beforeLabel || before.alt || "Before", fill: true, className: "object-cover", sizes: "768px", draggable: false }) })) : null, _jsx("div", { className: "absolute inset-y-0 w-0.5 bg-white shadow", style: { left: `${position}%` }, "aria-hidden": true, children: _jsx("span", { className: "absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-dark/20 bg-white text-xs font-semibold text-ink shadow", children: "\u2194" }) }), block.beforeLabel ? (_jsx("span", { className: "absolute top-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white", children: block.beforeLabel })) : null, block.afterLabel ? (_jsx("span", { className: "absolute top-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white", children: block.afterLabel })) : null] }), _jsxs("label", { className: "mt-4 flex items-center gap-3 text-sm text-ink/70", children: [_jsx("span", { className: "sr-only", children: "Compare before and after" }), _jsx("input", { type: "range", min: 0, max: 100, value: position, onChange: (e) => setPosition(Number(e.target.value)), className: "w-full accent-court" })] })] }));
}
