"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { postHref } from "../../lib/nav.js";
import { usePostsQuery } from "../../lib/use-posts-query.js";
import { asPlainText } from "../../puck/registry/helpers.js";
const speedDuration = {
    slow: "45s",
    medium: "28s",
    fast: "14s",
};
export default function ContentTickerBlock({ block, }) {
    var _a, _b, _c, _d, _e;
    const source = (_a = block.source) !== null && _a !== void 0 ? _a : "posts";
    const limit = (_b = block.postsLimit) !== null && _b !== void 0 ? _b : 8;
    const { posts, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        enabled: source === "posts",
    });
    const items = source === "custom"
        ? ((_c = block.items) !== null && _c !== void 0 ? _c : [])
            .filter((item) => asPlainText(item.text).trim())
            .map((item, i) => ({
            key: `custom-${i}`,
            text: item.text,
            href: item.url || null,
        }))
        : (posts !== null && posts !== void 0 ? posts : []).map((post) => ({
            key: post.documentId,
            text: post.title,
            href: postHref(post.slug, locale),
        }));
    const duration = (_e = speedDuration[(_d = block.speed) !== null && _d !== void 0 ? _d : "medium"]) !== null && _e !== void 0 ? _e : speedDuration.medium;
    const reverse = block.direction === "right";
    const loop = items.length ? [...items, ...items] : [];
    return (_jsxs("section", { className: "overflow-hidden rounded-xl border border-sky-dark/25 bg-sky-pale/50 py-3", children: [block.heading ? (_jsx("p", { className: "mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-ink/55", children: block.heading })) : null, source === "posts" && posts === null ? (_jsx("p", { className: "px-4 text-sm text-ink/40", children: "Loading\u2026" })) : items.length === 0 ? (_jsx("p", { className: "px-4 text-sm text-ink/50", children: source === "custom"
                    ? "Add custom ticker items."
                    : "No ticker items found." })) : (_jsx("div", { className: "flex w-max gap-10 whitespace-nowrap", style: {
                    animation: `content-ticker-scroll ${duration} linear infinite`,
                    animationDirection: reverse ? "reverse" : "normal",
                }, children: loop.map((item, i) => {
                    const content = (_jsxs("span", { className: "text-sm font-medium text-ink", children: [item.text, _jsx("span", { className: "ml-10 text-court", "aria-hidden": true, children: "\u2022" })] }));
                    return item.href ? (_jsx(Link, { href: item.href, children: content }, `${item.key}-${i}`)) : (_jsx("span", { children: content }, `${item.key}-${i}`));
                }) })), _jsx("style", { children: `
        @keyframes content-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      ` })] }));
}
