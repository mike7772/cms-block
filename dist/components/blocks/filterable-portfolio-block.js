"use client";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { useMemo, useState } from "react";
import { resolveMediaUrl } from "../../puck/media.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function FilterablePortfolioBlock({ block, }) {
    var _a, _b, _c, _d;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const allLabel = block.allLabel || "All";
    const style = (_b = block.filterStyle) !== null && _b !== void 0 ? _b : "pills";
    const cols = (_d = columnClass[(_c = block.columns) !== null && _c !== void 0 ? _c : "3"]) !== null && _d !== void 0 ? _d : columnClass["3"];
    const categories = useMemo(() => {
        var _a;
        const map = new Map();
        for (const item of items) {
            if (!item.category)
                continue;
            map.set(item.category, ((_a = map.get(item.category)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
        return Array.from(map.entries());
    }, [items]);
    const [filter, setFilter] = useState("all");
    const filtered = filter === "all"
        ? items
        : items.filter((item) => item.category === filter);
    const filterUi = style === "dropdown" ? (_jsx("div", { className: "mb-8 flex justify-center", children: _jsxs("select", { className: "rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink", value: filter, onChange: (e) => setFilter(e.target.value), children: [_jsxs("option", { value: "all", children: [allLabel, block.showCounts ? ` (${items.length})` : ""] }), categories.map(([cat, count]) => (_jsxs("option", { value: cat, children: [cat, block.showCounts ? ` (${count})` : ""] }, cat)))] }) })) : (_jsxs("div", { className: `mb-8 flex flex-wrap justify-center gap-2 ${style === "tabs" ? "border-b border-sky-dark/20 pb-3" : ""}`, children: [_jsxs("button", { type: "button", onClick: () => setFilter("all"), className: `px-4 py-1.5 text-sm font-medium transition ${style === "tabs"
                    ? filter === "all"
                        ? "border-b-2 border-trunk text-trunk"
                        : "text-ink/60"
                    : filter === "all"
                        ? "rounded-full bg-trunk text-white"
                        : "rounded-full border border-sky-dark/30 bg-white text-ink/70"}`, children: [allLabel, block.showCounts ? ` (${items.length})` : ""] }), categories.map(([cat, count]) => (_jsxs("button", { type: "button", onClick: () => setFilter(cat), className: `px-4 py-1.5 text-sm font-medium transition ${style === "tabs"
                    ? filter === cat
                        ? "border-b-2 border-trunk text-trunk"
                        : "text-ink/60"
                    : filter === cat
                        ? "rounded-full bg-trunk text-white"
                        : "rounded-full border border-sky-dark/30 bg-white text-ink/70"}`, children: [cat, block.showCounts ? ` (${count})` : ""] }, cat)))] }));
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), categories.length > 0 ? filterUi : null, !filtered.length ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "No portfolio items in this category." })) : (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: filtered.map((item, i) => {
                    const body = (_jsxs(_Fragment, { children: [_jsx("img", { src: resolveMediaUrl(item.imageUrl), alt: item.title, className: "aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" }), _jsxs("div", { className: "p-5", children: [_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-foliage", children: item.category }), _jsx("h3", { className: "mt-1 font-semibold text-ink", children: item.title }), item.description ? (_jsx("p", { className: "mt-2 line-clamp-2 text-sm text-ink/65", children: item.description })) : null] })] }));
                    return (_jsx("article", { className: "group overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: item.url ? (_jsx(Link, { href: item.url, className: "block", children: body })) : (body) }, `${item.title}-${i}`));
                }) }))] }));
}
