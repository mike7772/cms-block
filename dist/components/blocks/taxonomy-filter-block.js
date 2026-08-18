"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
import { postHref } from "../../lib/nav.js";
import { categoryPostCount, useCategoriesQuery, } from "../../lib/use-categories-query.js";
import { usePostsQuery } from "../../lib/use-posts-query.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
function formatDate(value, locale) {
    if (!value)
        return "";
    return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
export default function TaxonomyFilterBlock({ block, }) {
    var _a, _b, _c, _d, _e;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "pills";
    const allLabel = block.allOptionLabel || "All";
    const perPage = (_b = block.itemsPerPage) !== null && _b !== void 0 ? _b : 9;
    const cols = (_d = columnClass[(_c = block.columns) !== null && _c !== void 0 ? _c : "3"]) !== null && _d !== void 0 ? _d : columnClass["3"];
    const contentType = (_e = block.contentType) !== null && _e !== void 0 ? _e : "posts";
    const showAll = block.showAllOption !== false;
    const [selected, setSelected] = useState("all");
    const [checked, setChecked] = useState([]);
    const { categories } = useCategoriesQuery({
        enabled: contentType === "posts",
    });
    const activeSlug = useMemo(() => {
        if (layout === "checkboxes") {
            return checked.length === 1 ? checked[0] : null;
        }
        return selected === "all" ? null : selected;
    }, [layout, checked, selected]);
    const multiFilter = layout === "checkboxes" && checked.length > 1 ? checked : null;
    const { posts, error, locale } = usePostsQuery({
        limit: multiFilter ? Math.min(50, perPage * 3) : perPage,
        categorySlug: multiFilter ? null : activeSlug,
        enabled: contentType === "posts",
    });
    const filteredPosts = useMemo(() => {
        if (!posts)
            return null;
        if (!multiFilter)
            return posts.slice(0, perPage);
        return posts
            .filter((p) => { var _a; return ((_a = p.category) === null || _a === void 0 ? void 0 : _a.slug) && multiFilter.includes(p.category.slug); })
            .slice(0, perPage);
    }, [posts, multiFilter, perPage]);
    const taxonomies = categories !== null && categories !== void 0 ? categories : [];
    function selectAll() {
        setSelected("all");
        setChecked([]);
    }
    function selectOne(slug) {
        setSelected(slug);
        setChecked([slug]);
    }
    function toggleCheck(slug) {
        setChecked((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
        setSelected(slug);
    }
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, contentType !== "posts" ? (_jsx("p", { className: "mb-6 rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/60 px-4 py-3 text-center text-sm text-ink/70", children: "Page filtering is not available yet. Showing posts only." })) : null, layout === "dropdown" ? (_jsx("div", { className: "mx-auto mb-8 max-w-xs", children: _jsxs("select", { className: "w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink", value: selected, onChange: (e) => {
                        const value = e.target.value;
                        if (value === "all")
                            selectAll();
                        else
                            selectOne(value);
                    }, children: [showAll ? _jsx("option", { value: "all", children: allLabel }) : null, taxonomies.map((c) => (_jsxs("option", { value: c.slug, children: [c.name, categoryPostCount(c) ? ` (${categoryPostCount(c)})` : ""] }, c.slug)))] }) })) : layout === "checkboxes" ? (_jsxs("ul", { className: "mx-auto mb-8 flex max-w-sm flex-col gap-2", children: [showAll ? (_jsx("li", { children: _jsxs("label", { className: "flex items-center gap-2 text-sm text-ink", children: [_jsx("input", { type: "checkbox", checked: checked.length === 0, onChange: () => selectAll() }), allLabel] }) })) : null, taxonomies.map((c) => (_jsx("li", { children: _jsxs("label", { className: "flex items-center gap-2 text-sm text-ink", children: [_jsx("input", { type: "checkbox", checked: checked.includes(c.slug), onChange: () => toggleCheck(c.slug) }), c.name] }) }, c.slug)))] })) : (_jsxs("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: [showAll ? (_jsx("button", { type: "button", onClick: selectAll, className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${selected === "all" && checked.length === 0
                            ? "bg-trunk text-white"
                            : "border border-sky-dark/30 bg-white text-ink/70 hover:border-sky-dark/50"}`, children: allLabel })) : null, taxonomies.map((c) => (_jsx("button", { type: "button", onClick: () => selectOne(c.slug), className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${selected === c.slug
                            ? "bg-trunk text-white"
                            : "border border-sky-dark/30 bg-white text-ink/70 hover:border-sky-dark/50"}`, children: c.name }, c.slug)))] })), filteredPosts === null ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: Array.from({ length: Math.min(perPage, 6) }).map((_, i) => (_jsx("div", { className: "h-48 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale" }, i))) })) : filteredPosts.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: error !== null && error !== void 0 ? error : "No posts match this filter." })) : (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: filteredPosts.map((post) => {
                    var _a, _b;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("article", { className: "overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: _jsxs(Link, { href: postHref(post.slug, locale), className: "block", children: [_jsx("div", { className: "relative aspect-video bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "(max-width: 768px) 100vw, 320px" })) : null }), _jsxs("div", { className: "p-5", children: [((_a = post.category) === null || _a === void 0 ? void 0 : _a.name) ? (_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-foliage", children: post.category.name })) : null, _jsx("h3", { className: "mt-1 font-semibold text-ink", children: post.title }), post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-2 text-sm text-ink/65", children: post.excerpt })) : null, _jsx("time", { className: "mt-3 block text-xs text-ink/50", children: formatDate((_b = post.publishedAt) !== null && _b !== void 0 ? _b : post.createdAt, locale) })] })] }) }, post.documentId));
                }) }))] }));
}
