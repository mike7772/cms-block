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
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
export default function FeaturedPostBlock({ block, }) {
    var _a, _b, _c;
    const { posts, error, locale } = usePostsQuery({
        limit: 1,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
    });
    const post = (_a = posts === null || posts === void 0 ? void 0 : posts[0]) !== null && _a !== void 0 ? _a : null;
    const cover = post ? getPreferredImage(post.cover) : null;
    return (_jsxs("section", { className: "mx-auto max-w-5xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, posts === null ? (_jsxs("div", { className: "overflow-hidden rounded-3xl border border-sky-dark/20 bg-white", children: [_jsx("div", { className: "aspect-[21/9] animate-pulse bg-sky-pale" }), _jsxs("div", { className: "space-y-3 p-8", children: [_jsx("div", { className: "h-4 w-24 animate-pulse rounded bg-sky-pale" }), _jsx("div", { className: "h-8 w-2/3 animate-pulse rounded bg-sky-pale" }), _jsx("div", { className: "h-4 w-full animate-pulse rounded bg-sky-pale/80" })] })] })) : !post ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: error !== null && error !== void 0 ? error : "No featured post available." })) : (_jsxs("article", { className: "overflow-hidden rounded-3xl border border-sky-dark/25 bg-white shadow-sm", children: [_jsxs("div", { className: "relative aspect-[21/9] min-h-[220px] bg-sky-pale", children: [cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 1024px", priority: true })) : (_jsx("div", { className: "flex h-full items-center justify-center text-ink/40", children: "No cover image" })), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" }), _jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-10", children: [block.showCategory !== false && ((_b = post.category) === null || _b === void 0 ? void 0 : _b.name) ? (_jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-sky-light", children: post.category.name })) : null, _jsx("h3", { className: "mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl", children: post.title }), block.showDate !== false ? (_jsx("time", { className: "mt-2 block text-sm text-white/70", children: formatDate((_c = post.publishedAt) !== null && _c !== void 0 ? _c : post.createdAt, locale) })) : null] })] }), _jsxs("div", { className: "flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8", children: [block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "max-w-2xl text-ink/70", children: post.excerpt })) : (_jsx("span", {})), _jsx(Link, { href: postHref(post.slug, locale), className: "inline-flex shrink-0 items-center justify-center rounded-full bg-trunk px-5 py-2.5 text-sm font-medium text-white transition hover:bg-trunk-dark", children: block.ctaLabel || "Read article" })] })] }))] }));
}
