"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
export default function NewsletterBlock({ block, }) {
    var _a;
    const bg = getPreferredImage(block.backgroundImage);
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "boxed";
    const inline = layout === "inline";
    function handleSubmit(e) {
        e.preventDefault();
    }
    const form = (_jsxs("form", { onSubmit: handleSubmit, className: inline
            ? "mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            : "mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row", children: [_jsx("label", { className: "sr-only", htmlFor: "newsletter-email", children: "Email" }), _jsx("input", { id: "newsletter-email", type: "email", name: "email", placeholder: block.placeholderText || "you@example.com", className: "min-w-0 flex-1 rounded-full border border-sky-dark/30 bg-white px-5 py-3 text-sm text-ink outline-none ring-court/30 focus:ring-2" }), _jsx("button", { type: "submit", className: "btn-primary shrink-0", children: block.buttonLabel })] }));
    if (layout === "fullwidth") {
        return (_jsxs("section", { className: "relative overflow-hidden rounded-3xl bg-trunk px-6 py-14 text-white sm:px-12", children: [bg ? (_jsxs(_Fragment, { children: [_jsx(Image, { src: bg.src, alt: bg.alt || block.heading, fill: true, className: "object-cover", sizes: "100vw" }), _jsx("div", { className: "absolute inset-0 bg-trunk/75" })] })) : null, _jsxs("div", { className: "relative mx-auto max-w-3xl text-center", children: [_jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: block.heading }), block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-white/80", children: block.subheading })) : null, form] })] }));
    }
    return (_jsxs("section", { className: `relative overflow-hidden rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10 ${layout === "boxed" ? "mx-auto max-w-3xl" : ""}`, children: [bg ? (_jsx(_Fragment, { children: _jsx(Image, { src: bg.src, alt: bg.alt || block.heading, fill: true, className: "object-cover opacity-20", sizes: "800px" }) })) : null, _jsxs("div", { className: `relative ${inline ? "sm:flex sm:items-end sm:justify-between sm:gap-8" : "text-center"}`, children: [_jsxs("div", { className: inline ? "max-w-md text-left" : "", children: [_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading }), block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] }), form] })] }));
}
