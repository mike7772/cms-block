"use client";
import { jsx as _jsx } from "react/jsx-runtime";
const maxWidthClass = {
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-none",
};
export default function HtmlEmbedBlock({ block, }) {
    var _a, _b;
    const maxWidth = (_b = maxWidthClass[(_a = block.maxWidth) !== null && _a !== void 0 ? _a : "lg"]) !== null && _b !== void 0 ? _b : maxWidthClass.lg;
    if (!block.html) {
        return (_jsx("div", { className: `mx-auto px-6 ${maxWidth}`, children: _jsx("div", { className: "rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50", children: "Add HTML to embed" }) }));
    }
    return (_jsx("div", { className: `mx-auto px-6 ${maxWidth} prose prose-ink max-w-none`, dangerouslySetInnerHTML: { __html: block.html } }));
}
