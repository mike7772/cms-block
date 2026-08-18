"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import { usePostsQuery } from "@/lib/use-posts-query";
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
export default function LoopGridBlock({ block, }) {
    var _a, _b, _c, _d;
    const perPage = (_a = block.itemsPerPage) !== null && _a !== void 0 ? _a : 9;
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    const contentType = (_d = block.contentType) !== null && _d !== void 0 ? _d : "posts";
    const { posts, locale } = usePostsQuery({
        limit: perPage,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
        enabled: contentType === "posts",
    });
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), contentType !== "posts" ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "Loop Grid for pages is not wired yet." })) : posts === null ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: Array.from({ length: Math.min(perPage, 6) }).map((_, i) => (_jsxs("div", { className: "overflow-hidden rounded-2xl border border-sky-dark/20 bg-white", children: [_jsx("div", { className: "aspect-[4/3] animate-pulse bg-sky-pale" }), _jsx("div", { className: "space-y-2 p-5", children: _jsx("div", { className: "h-5 w-2/3 animate-pulse rounded bg-sky-pale" }) })] }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "No posts published yet." })) : (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: posts.map((post) => {
                    var _a;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("article", { className: "group overflow-hidden rounded-2xl border border-sky-dark/25 bg-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-dark/15", children: _jsxs(Link, { href: postHref(post.slug, locale), className: "block", children: [block.showImage !== false ? (_jsx("div", { className: "relative aspect-[4/3] bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover transition duration-300 group-hover:scale-[1.02]", sizes: "(max-width: 768px) 100vw, 384px" })) : null })) : null, _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "text-lg font-semibold tracking-tight text-ink", children: post.title }), block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-3 text-sm text-ink/65", children: post.excerpt })) : null, block.showDate !== false ? (_jsx("time", { className: "mt-3 block text-xs text-ink/50", children: formatDate((_a = post.publishedAt) !== null && _a !== void 0 ? _a : post.createdAt, locale) })) : null] })] }) }, post.documentId));
                }) }))] }));
}
