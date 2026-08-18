"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { postHref } from "../../lib/nav.js";
import { usePostsQuery } from "../../lib/use-posts-query.js";
const speedDuration = {
    slow: "45s",
    medium: "28s",
    fast: "14s",
};
export default function NewsTickerBlock({ block, }) {
    var _a, _b, _c, _d;
    const limit = (_a = block.postsLimit) !== null && _a !== void 0 ? _a : 8;
    const { posts, locale } = usePostsQuery({
        limit,
        categorySlug: block.categorySlug,
        orderBy: block.orderBy,
    });
    const duration = (_c = speedDuration[(_b = block.speed) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : speedDuration.medium;
    const pause = block.pauseOnHover !== false;
    const titles = (_d = posts === null || posts === void 0 ? void 0 : posts.map((p) => ({
        id: p.documentId,
        title: p.title,
        href: postHref(p.slug, locale),
    }))) !== null && _d !== void 0 ? _d : [];
    const loop = titles.length ? [...titles, ...titles] : [];
    return (_jsxs("div", { className: "flex overflow-hidden rounded-xl border border-sky-dark/25 bg-white", children: [_jsx("div", { className: "flex shrink-0 items-center bg-trunk px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white", children: block.label || "Latest" }), _jsx("div", { className: "relative min-w-0 flex-1 overflow-hidden py-2.5", children: posts === null ? (_jsx("div", { className: "px-4 text-sm text-ink/40", children: "Loading headlines\u2026" })) : titles.length === 0 ? (_jsx("div", { className: "px-4 text-sm text-ink/50", children: "No headlines yet." })) : (_jsx("div", { className: `flex w-max gap-8 whitespace-nowrap ${pause ? "hover:[animation-play-state:paused]" : ""}`, style: {
                        animation: `news-ticker-scroll ${duration} linear infinite`,
                    }, children: loop.map((item, i) => (_jsxs(Link, { href: item.href, className: "text-sm font-medium text-ink transition hover:text-trunk", children: [item.title, _jsx("span", { className: "ml-8 text-court", "aria-hidden": true, children: "\u2022" })] }, `${item.id}-${i}`))) })) }), _jsx("style", { children: `
        @keyframes news-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      ` })] }));
}
