"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function PortfolioBlock({ block, }) {
    var _a, _b, _c;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const categories = Array.from(new Set(items
        .map((item) => item.category)
        .filter((cat) => Boolean(cat))));
    const [filter, setFilter] = useState("all");
    const filtered = filter === "all"
        ? items
        : items.filter((item) => item.category === filter);
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), block.enableFilter && categories.length > 0 ? (_jsxs("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: [_jsx("button", { type: "button", onClick: () => setFilter("all"), className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === "all"
                            ? "bg-trunk text-white"
                            : "border border-sky-dark/30 bg-white text-ink hover:bg-sky-pale"}`, children: "All" }), categories.map((cat) => (_jsx("button", { type: "button", onClick: () => setFilter(cat), className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === cat
                            ? "bg-trunk text-white"
                            : "border border-sky-dark/30 bg-white text-ink hover:bg-sky-pale"}`, children: cat }, cat)))] })) : null, filtered.length ? (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: filtered.map((item, i) => {
                    const image = getPreferredImage(item.image);
                    const body = (_jsxs(_Fragment, { children: [image ? (_jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-sky-pale", children: _jsx(Image, { src: image.src, alt: image.alt || item.title, fill: true, className: "object-cover transition group-hover:scale-105", sizes: "(max-width: 1024px) 50vw, 33vw" }) })) : (_jsx("div", { className: "aspect-[4/3] bg-sky-pale" })), _jsxs("div", { className: "p-5", children: [item.category ? (_jsx("p", { className: "eyebrow mb-1", children: item.category })) : null, _jsx("h3", { className: "text-lg font-semibold text-ink", children: item.title }), item.description ? (_jsx("p", { className: "mt-2 line-clamp-3 text-sm text-ink/70", children: item.description })) : null, (item.client || item.date) && (_jsx("p", { className: "mt-3 text-xs text-ink/50", children: [item.client, item.date].filter(Boolean).join(" · ") }))] })] }));
                    return item.linkUrl ? (_jsx("a", { href: item.linkUrl, className: "group overflow-hidden rounded-3xl border border-sky-dark/20 bg-white transition hover:border-sky-dark/40", children: body }, `${item.title}-${i}`)) : (_jsx("article", { className: "overflow-hidden rounded-3xl border border-sky-dark/20 bg-white", children: body }, `${item.title}-${i}`));
                }) })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add portfolio items" }))] }));
}
