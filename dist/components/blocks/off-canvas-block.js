"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
const widthClass = {
    small: "max-w-xs",
    medium: "max-w-sm",
    large: "max-w-md",
    full: "max-w-full",
};
export default function OffCanvasBlock({ block, }) {
    var _a, _b, _c;
    const [open, setOpen] = useState(false);
    const icon = getPreferredImage(block.triggerIcon);
    const position = (_a = block.position) !== null && _a !== void 0 ? _a : "right";
    const width = (_c = widthClass[(_b = block.width) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : widthClass.medium;
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
    const panelPosition = position === "left"
        ? "inset-y-0 left-0 h-full w-full border-r"
        : position === "top"
            ? "inset-x-0 top-0 w-full border-b"
            : position === "bottom"
                ? "inset-x-0 bottom-0 w-full border-t"
                : "inset-y-0 right-0 h-full w-full border-l";
    return (_jsxs("section", { className: "mx-auto max-w-lg text-center", children: [_jsxs("button", { type: "button", onClick: () => setOpen(true), className: "btn-primary inline-flex items-center gap-2", children: [icon ? (_jsx("span", { className: "relative h-5 w-5", children: _jsx(Image, { src: icon.src, alt: "", fill: true, className: "object-contain", sizes: "20px" }) })) : null, block.triggerLabel] }), open ? (_jsxs("div", { className: "fixed inset-0 z-50", children: [_jsx("button", { type: "button", "aria-label": "Close overlay", className: "absolute inset-0 bg-ink/40", onClick: () => block.closeOnOverlayClick !== false ? setOpen(false) : undefined }), _jsxs("aside", { className: `absolute ${panelPosition} ${position === "top" || position === "bottom" ? "" : width} overflow-y-auto border-sky-dark/20 bg-white p-6 shadow-2xl`, children: [_jsxs("div", { className: "mb-4 flex items-start justify-between gap-4", children: [_jsx("h3", { className: "text-lg font-semibold text-ink", children: block.title || block.triggerLabel }), _jsx("button", { type: "button", onClick: () => setOpen(false), className: "rounded-full border border-sky-dark/30 px-3 py-1 text-sm text-ink hover:bg-sky-pale", children: "Close" })] }), block.content ? (_jsx("div", { className: "whitespace-pre-wrap text-left text-ink/80", children: block.content })) : (_jsx("p", { className: "text-left text-ink/50", children: "No content yet." }))] })] })) : null] }));
}
