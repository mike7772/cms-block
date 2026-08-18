"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function FaqBlock({ block }) {
    var _a;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const [openIndex, setOpenIndex] = useState(items.length > 0 ? 0 : null);
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: "mx-auto max-w-3xl divide-y divide-sky-dark/20 overflow-hidden rounded-2xl border border-sky-dark/20", children: items.map((item, i) => {
                    const open = openIndex === i;
                    return (_jsxs("div", { className: "bg-sky-pale/40", children: [_jsxs("button", { type: "button", className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left", "aria-expanded": open, onClick: () => setOpenIndex(open ? null : i), children: [_jsx("span", { className: "font-semibold text-ink", children: item.question }), _jsx("span", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-ink transition ${open ? "rotate-45" : ""}`, children: "+" })] }), open ? (_jsx("div", { className: "border-t border-sky-dark/10 bg-white px-5 py-4 text-sm leading-7 text-ink/70", children: item.answer })) : null] }, i));
                }) })] }));
}
