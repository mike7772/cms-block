"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
import { postHref } from "../../lib/nav.js";
import { usePostsQuery } from "../../lib/use-posts-query.js";
const columnClass = {
    "1": "grid-cols-1",
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
function formatDate(value, locale) {
    if (!value)
        return "";
    return new Intl.DateTimeFormat(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
export default function PostsBlock({ block }) {
    var _a, _b, _c;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 6;
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    const { posts, error, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
    });
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), posts === null ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: Array.from({ length: Math.min(limit, 6) }).map((_, i) => (_jsxs("div", { className: "overflow-hidden rounded-2xl border border-sky-dark/20 bg-white", children: [block.showImage !== false ? (_jsx("div", { className: "aspect-video animate-pulse bg-sky-pale" })) : null, _jsxs("div", { className: "space-y-2 p-5", children: [_jsx("div", { className: "h-5 w-3/4 animate-pulse rounded bg-sky-pale" }), _jsx("div", { className: "h-3 w-full animate-pulse rounded bg-sky-pale/80" })] })] }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: error !== null && error !== void 0 ? error : "No posts published yet." })) : (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: posts.map((post) => {
                    var _a, _b;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("article", { className: "group overflow-hidden rounded-2xl border border-sky-dark/25 bg-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-dark/15", children: _jsxs(Link, { href: postHref(post.slug, locale), className: "block", children: [block.showImage !== false ? (_jsx("div", { className: "relative aspect-video bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover transition duration-300 group-hover:scale-[1.02]", sizes: "(max-width: 768px) 100vw, 384px" })) : (_jsx("div", { className: "flex h-full items-center justify-center text-sm text-ink/40", children: "No cover image" })) })) : null, _jsxs("div", { className: "p-5 sm:p-6", children: [block.showCategory !== false && ((_a = post.category) === null || _a === void 0 ? void 0 : _a.name) ? (_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-foliage", children: post.category.name })) : null, _jsx("h3", { className: "mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl", children: post.title }), block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-3 text-sm leading-6 text-ink/65", children: post.excerpt })) : null, block.showDate !== false ? (_jsx("time", { className: "mt-3 block text-xs text-ink/50", children: formatDate((_b = post.publishedAt) !== null && _b !== void 0 ? _b : post.createdAt, locale) })) : null, block.showReadMore !== false ? (_jsx("p", { className: "mt-3 text-sm font-medium text-trunk", children: block.readMoreLabel || "Read more" })) : null] })] }) }, post.documentId));
                }) }))] }));
}
