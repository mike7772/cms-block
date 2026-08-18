"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { postsHref } from "@/lib/nav";
import { categoryPostCount, useCategoriesQuery, } from "@/lib/use-categories-query";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function CategoryCardsBlock({ block, }) {
    var _a, _b, _c;
    const limit = (_a = block.limit) !== null && _a !== void 0 ? _a : 6;
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    const { categories, error, locale } = useCategoriesQuery({ limit });
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), categories === null ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: Array.from({ length: Math.min(limit, 6) }).map((_, i) => (_jsx("div", { className: "h-32 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale" }, i))) })) : categories.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: error !== null && error !== void 0 ? error : "No categories found." })) : (_jsx("div", { className: `grid grid-cols-1 gap-5 ${cols}`, children: categories.map((category) => {
                    const count = categoryPostCount(category);
                    return (_jsxs(Link, { href: `${postsHref(locale)}?category=${encodeURIComponent(category.slug)}`, className: "rounded-2xl border border-sky-dark/25 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-dark/45 hover:shadow-lg hover:shadow-sky-dark/10", children: [_jsx("h3", { className: "text-lg font-semibold text-ink", children: category.name }), block.showDescription !== false && category.description ? (_jsx("p", { className: "mt-2 line-clamp-2 text-sm text-ink/65", children: category.description })) : null, block.showCount !== false ? (_jsxs("p", { className: "mt-4 text-xs font-medium uppercase tracking-wide text-foliage", children: [count, " ", count === 1 ? "post" : "posts"] })) : null] }, category.slug));
                }) }))] }));
}
