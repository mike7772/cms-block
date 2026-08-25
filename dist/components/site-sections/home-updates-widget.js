"use client";
var _a;
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const STRAPI_URL = (_a = process.env.NEXT_PUBLIC_STRAPI_URL) !== null && _a !== void 0 ? _a : "http://localhost:1337";
function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
/**
 * Live-fetches real published posts from the CMS instead of the fixed
 * three-slot placeholder content the site sections started with — handles
 * 0, 1, 2, or any number of published posts gracefully (no fixed count).
 * Fetches client-side (matching CaseSearchWidget/CourtFeeCalculatorWidget's
 * pattern in this same registry) rather than via a Puck resolveData hook, so
 * the same component works unchanged in both the live site (PUBLIC_PORTAL)
 * and the Puck editor's canvas (portal-frontend).
 */
export function HomeUpdatesWidgetSection(props) {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        let cancelled = false;
        fetch(`${STRAPI_URL}/api/posts/published?limit=3`)
            .then((res) => (res.ok ? res.json() : { data: [] }))
            .then((json) => {
            var _a;
            if (!cancelled)
                setPosts((_a = json.data) !== null && _a !== void 0 ? _a : []);
        })
            .catch(() => {
            if (!cancelled)
                setPosts([]);
        });
        return () => {
            cancelled = true;
        };
    }, []);
    if (posts !== null && posts.length === 0) {
        return null;
    }
    return (_jsx("section", { className: "bg-white py-8 sm:py-12 md:py-16", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [_jsxs("div", { className: "mb-6 flex flex-col items-start justify-between gap-3 sm:mb-10 sm:flex-row sm:items-center sm:gap-0", children: [_jsx("h2", { className: "font-serif text-2xl font-bold text-blue-900 sm:text-3xl", children: props.title }), _jsxs(Link, { href: "/posts", className: "group flex items-center text-blue-600 hover:text-blue-800", children: [_jsx("span", { children: props.viewAllLabel }), _jsx(ArrowRight, { className: "ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" })] })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3", children: (posts !== null && posts !== void 0 ? posts : [null, null, null]).map((post, i) => {
                        var _a;
                        return (_jsx("div", { className: "group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md", children: _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "mb-4 flex h-6 items-center justify-between", children: post ? (_jsxs(_Fragment, { children: [post.category ? (_jsx("span", { className: "rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600", children: post.category.name })) : (_jsx("span", {})), _jsx("span", { className: "text-sm text-gray-500", children: formatDate(post.publishedAt) })] })) : (_jsx("span", { className: "h-4 w-24 animate-pulse rounded bg-gray-100" })) }), _jsx("h3", { className: "mb-3 min-h-[1.75rem] text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700", children: post ? (post.title) : (_jsx("span", { className: "block h-6 w-3/4 animate-pulse rounded bg-gray-100" })) }), post ? (post.excerpt ? (_jsx("p", { className: "mb-4 text-gray-600", children: post.excerpt })) : null) : (_jsx("div", { className: "mb-4 h-4 w-full animate-pulse rounded bg-gray-100" })), post ? (_jsxs(Link, { href: `/posts/${post.slug}`, className: "group inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800", children: [_jsx("span", { className: "transition-all duration-300 group-hover:mr-2", children: props.readMoreLabel }), _jsx(ArrowRight, { className: "h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" })] })) : null] }) }, (_a = post === null || post === void 0 ? void 0 : post.id) !== null && _a !== void 0 ? _a : i));
                    }) })] }) }));
}
