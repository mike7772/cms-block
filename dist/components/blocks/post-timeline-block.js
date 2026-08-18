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
export default function PostTimelineBlock({ block, }) {
    var _a, _b;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 6;
    const { posts, error, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        orderBy: (_b = block.orderBy) !== null && _b !== void 0 ? _b : "newest",
    });
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), posts === null ? (_jsx("div", { className: "space-y-6 border-l-2 border-sky-dark/20 pl-6", children: Array.from({ length: 3 }).map((_, i) => (_jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-sky-pale" }), _jsx("div", { className: "h-4 w-1/3 animate-pulse rounded bg-sky-pale" }), _jsx("div", { className: "mt-2 h-5 w-2/3 animate-pulse rounded bg-sky-pale" })] }, i))) })) : posts.length === 0 ? (_jsx("p", { className: "rounded-xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-4 py-8 text-center text-sm text-ink/55", children: error !== null && error !== void 0 ? error : "No posts found." })) : (_jsx("ol", { className: "relative space-y-8 border-l-2 border-sky-dark/25 pl-8", children: posts.map((post) => {
                    var _a;
                    const cover = getPreferredImage(post.cover);
                    return (_jsxs("li", { className: "relative", children: [_jsx("span", { className: "absolute -left-[2.3rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-trunk shadow" }), _jsx("time", { className: "text-xs font-medium uppercase tracking-wide text-ink/50", children: formatDate((_a = post.publishedAt) !== null && _a !== void 0 ? _a : post.createdAt, locale) }), _jsxs(Link, { href: postHref(post.slug, locale), className: "mt-2 flex gap-4 rounded-xl border border-sky-dark/20 bg-white p-4 transition hover:border-sky-dark/40 hover:shadow-md", children: [block.showImage !== false && cover ? (_jsx("div", { className: "relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-sky-pale", children: _jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "112px" }) })) : null, _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-ink", children: post.title }), block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "mt-1 line-clamp-2 text-sm text-ink/65", children: post.excerpt })) : null] })] })] }, post.documentId));
                }) }))] }));
}
