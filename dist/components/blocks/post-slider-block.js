"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
export default function PostSliderBlock({ block, }) {
    var _a, _b, _c, _d;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 5;
    const { posts, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
    });
    const [index, setIndex] = useState(0);
    const count = (_b = posts === null || posts === void 0 ? void 0 : posts.length) !== null && _b !== void 0 ? _b : 0;
    useEffect(() => {
        var _a;
        if (!block.autoplay || count < 2)
            return;
        const speed = (_a = block.autoplaySpeed) !== null && _a !== void 0 ? _a : 5000;
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, speed);
        return () => window.clearInterval(id);
    }, [block.autoplay, block.autoplaySpeed, count]);
    const post = (_c = posts === null || posts === void 0 ? void 0 : posts[index]) !== null && _c !== void 0 ? _c : null;
    const cover = post ? getPreferredImage(post.cover) : null;
    return (_jsxs("section", { className: "mx-auto max-w-5xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-6 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-2 text-ink/70", children: block.subheading })) : null] })), posts === null ? (_jsx("div", { className: "aspect-[21/9] animate-pulse rounded-3xl bg-sky-pale" })) : !post ? (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55", children: "No posts to slide." })) : (_jsxs("div", { className: "overflow-hidden rounded-3xl border border-sky-dark/25 bg-white", children: [_jsx(Link, { href: postHref(post.slug, locale), className: "block", children: _jsxs("div", { className: "relative aspect-[21/9] min-h-[200px] bg-sky-pale", children: [cover ? (_jsx(Image, { src: cover.src, alt: cover.alt || post.title, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 1024px" })) : null, _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" }), _jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-8", children: [_jsx("h3", { className: "max-w-2xl text-2xl font-semibold text-white sm:text-3xl", children: post.title }), block.showExcerpt !== false && post.excerpt ? (_jsx("p", { className: "mt-2 line-clamp-2 max-w-xl text-sm text-white/80", children: post.excerpt })) : null, block.showDate !== false ? (_jsx("time", { className: "mt-2 block text-xs text-white/65", children: formatDate((_d = post.publishedAt) !== null && _d !== void 0 ? _d : post.createdAt, locale) })) : null] })] }) }), count > 1 ? (_jsxs("div", { className: "flex items-center justify-between gap-3 px-4 py-3", children: [_jsx("button", { type: "button", onClick: () => setIndex((i) => (i - 1 + count) % count), className: "rounded-full border border-sky-dark/30 px-3 py-1.5 text-sm text-ink hover:bg-sky-pale", children: "Prev" }), _jsx("div", { className: "flex gap-1.5", children: posts.map((_, i) => (_jsx("button", { type: "button", "aria-label": `Slide ${i + 1}`, onClick: () => setIndex(i), className: `h-2 w-2 rounded-full ${i === index ? "bg-trunk" : "bg-sky-dark/30"}` }, i))) }), _jsx("button", { type: "button", onClick: () => setIndex((i) => (i + 1) % count), className: "rounded-full border border-sky-dark/30 px-3 py-1.5 text-sm text-ink hover:bg-sky-pale", children: "Next" })] })) : null] }))] }));
}
