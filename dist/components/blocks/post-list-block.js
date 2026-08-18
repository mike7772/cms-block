"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import { usePostsQuery } from "@/lib/use-posts-query";
function formatDate(value, locale) {
    if (!value)
        return "";
    return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
export default function PostListBlock({ block }) {
    var _a;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 5;
    const { posts, error, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
    });
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-6", children: [block.heading ? (_jsx("h2", { className: "section-heading text-left", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-2 text-ink/70", children: block.subheading })) : null] })), posts === null ? (_jsx("ul", { className: "space-y-3", children: Array.from({ length: Math.min(limit, 5) }).map((_, i) => (_jsxs("li", { className: "flex gap-4 rounded-xl border border-sky-dark/20 bg-white p-3", children: [_jsx("div", { className: "h-16 w-16 shrink-0 animate-pulse rounded-lg bg-sky-pale" }), _jsxs("div", { className: "flex-1 space-y-2 py-1", children: [_jsx("div", { className: "h-4 w-2/3 animate-pulse rounded bg-sky-pale" }), _jsx("div", { className: "h-3 w-1/3 animate-pulse rounded bg-sky-pale/80" })] })] }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-4 py-8 text-center text-sm text-ink/55", children: error !== null && error !== void 0 ? error : "No posts found." })) : (_jsx("ul", { className: "divide-y divide-sky-dark/15 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: posts.map((post) => {
                    var _a, _b;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("li", { children: _jsxs(Link, { href: postHref(post.slug, locale), className: "flex gap-4 p-4 transition hover:bg-sky-pale/40", children: [block.showImage !== false ? (_jsx("div", { className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "64px" })) : null })) : null, _jsxs("div", { className: "min-w-0 flex-1", children: [block.showCategory !== false && ((_a = post.category) === null || _a === void 0 ? void 0 : _a.name) ? (_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-foliage", children: post.category.name })) : null, _jsx("h3", { className: "truncate font-semibold text-ink", children: post.title }), block.showExcerpt && post.excerpt ? (_jsx("p", { className: "mt-1 line-clamp-1 text-sm text-ink/60", children: post.excerpt })) : null, block.showDate !== false ? (_jsx("time", { className: "mt-1 block text-xs text-ink/45", children: formatDate((_b = post.publishedAt) !== null && _b !== void 0 ? _b : post.createdAt, locale) })) : null] })] }) }, post.documentId));
                }) }))] }));
}
