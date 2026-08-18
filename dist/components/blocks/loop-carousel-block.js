"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
import { postHref } from "../../lib/nav.js";
import { usePostsQuery } from "../../lib/use-posts-query.js";
function formatDate(value, locale) {
    if (!value)
        return "";
    return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
export default function LoopCarouselBlock({ block, }) {
    var _a, _b;
    const show = (_a = block.itemsToShow) !== null && _a !== void 0 ? _a : 3;
    const contentType = (_b = block.contentType) !== null && _b !== void 0 ? _b : "posts";
    const { posts, locale } = usePostsQuery({
        limit: Math.max(show * 2, 6),
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
        enabled: contentType === "posts",
    });
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), contentType !== "posts" ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "Loop Carousel for pages is not wired yet." })) : posts === null ? (_jsx("div", { className: "flex gap-4 overflow-x-auto pb-2", children: Array.from({ length: Math.min(show, 4) }).map((_, i) => (_jsxs("div", { className: "w-64 shrink-0 overflow-hidden rounded-2xl border border-sky-dark/20 bg-white sm:w-72", children: [_jsx("div", { className: "aspect-video animate-pulse bg-sky-pale" }), _jsx("div", { className: "space-y-2 p-4", children: _jsx("div", { className: "h-5 w-3/4 animate-pulse rounded bg-sky-pale" }) })] }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "No posts published yet." })) : (_jsx("div", { className: "flex gap-4 overflow-x-auto pb-2", children: posts.map((post) => {
                    var _a;
                    const cover = getPreferredImage(post.cover);
                    return (_jsx("article", { className: "w-64 shrink-0 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white transition hover:shadow-md sm:w-72", children: _jsxs(Link, { href: postHref(post.slug, locale), className: "block", children: [_jsx("div", { className: "relative aspect-video bg-sky-pale", children: cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "288px" })) : null }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-base font-semibold text-ink", children: post.title }), post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-2 text-sm text-ink/65", children: post.excerpt })) : null, _jsx("time", { className: "mt-2 block text-xs text-ink/50", children: formatDate((_a = post.publishedAt) !== null && _a !== void 0 ? _a : post.createdAt, locale) })] })] }) }, post.documentId));
                }) }))] }));
}
