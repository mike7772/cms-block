"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { useState } from "react";
import { resolveMediaUrl } from "../../puck/media.js";
const heightClass = {
    small: "h-48 sm:h-56",
    medium: "h-64 sm:h-80",
    large: "h-80 sm:h-[28rem]",
};
export default function ImageAccordionBlock({ block, }) {
    var _a, _b, _c, _d;
    const items = (_b = (_a = block.items) === null || _a === void 0 ? void 0 : _a.filter((i) => i.imageUrl && i.title)) !== null && _b !== void 0 ? _b : [];
    const [active, setActive] = useState(0);
    const height = (_d = heightClass[(_c = block.height) !== null && _c !== void 0 ? _c : "medium"]) !== null && _d !== void 0 ? _d : heightClass.medium;
    if (!items.length) {
        return (_jsx("div", { className: "rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50", children: "Add image accordion panels" }));
    }
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, _jsx("div", { className: `flex gap-2 overflow-hidden rounded-2xl ${height}`, children: items.map((item, index) => {
                    const expanded = active === index;
                    const inner = (_jsxs(_Fragment, { children: [_jsx("img", { src: resolveMediaUrl(item.imageUrl), alt: item.title, className: "absolute inset-0 h-full w-full object-cover transition duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" }), _jsxs("div", { className: `absolute inset-x-0 bottom-0 p-4 transition ${expanded ? "opacity-100" : "opacity-90"}`, children: [_jsx("h3", { className: `font-semibold text-white ${expanded ? "text-lg sm:text-xl" : "truncate text-sm"}`, children: item.title }), expanded && item.subtitle ? (_jsx("p", { className: "mt-1 text-sm text-white/75", children: item.subtitle })) : null] })] }));
                    const className = `relative overflow-hidden transition-all duration-500 ease-out ${expanded ? "flex-[3]" : "flex-1"}`;
                    if (item.url) {
                        return (_jsx(Link, { href: item.url, className: className, onMouseEnter: () => setActive(index), onFocus: () => setActive(index), children: inner }, `${item.title}-${index}`));
                    }
                    return (_jsx("div", { className: className, onMouseEnter: () => setActive(index), onFocus: () => setActive(index), role: "button", tabIndex: 0, children: inner }, `${item.title}-${index}`));
                }) })] }));
}
