"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
import { postHref } from "../../lib/nav.js";
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
export default function RelatedPostsBlock({ block, }) {
    var _a, _b, _c, _d;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 3;
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    const slug = ((_d = block.categorySlug) === null || _d === void 0 ? void 0 : _d.trim()) || null;
    const { posts, error, locale } = usePostsQuery({
        limit,
        categorySlug: slug,
        enabled: Boolean(slug),
    });
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-8 text-center", children: block.heading })) : null, !slug ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "Set a category slug to show related posts." })) : posts === null ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: Array.from({ length: Math.min(limit, 3) }).map((_, i) => (_jsx("div", { className: "h-48 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale" }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: error !== null && error !== void 0 ? error : "No related posts found." })) : (_jsx("div", { className: `grid grid-cols-1 gap-6 ${cols}`, children: posts.map((post) => {
                    var _a;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("article", { className: "overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: _jsxs(Link, { href: postHref(post.slug, locale), className: "block", children: [block.showImage !== false ? (_jsx("div", { className: "relative aspect-video bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "(max-width: 768px) 100vw, 320px" })) : null })) : null, _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "font-semibold text-ink", children: post.title }), block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-2 text-sm text-ink/65", children: post.excerpt })) : null, block.showDate !== false ? (_jsx("time", { className: "mt-3 block text-xs text-ink/50", children: formatDate((_a = post.publishedAt) !== null && _a !== void 0 ? _a : post.createdAt, locale) })) : null] })] }) }, post.documentId));
                }) }))] }));
}
