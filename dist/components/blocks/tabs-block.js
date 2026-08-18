"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
export default function TabsBlock({ block }) {
    var _a;
    const tabs = (_a = block.tabs) !== null && _a !== void 0 ? _a : [];
    const [active, setActive] = useState(0);
    const vertical = block.layout === "vertical";
    const current = tabs[active];
    if (!tabs.length)
        return null;
    return (_jsxs("section", { className: `mx-auto max-w-4xl ${vertical ? "flex flex-col gap-6 sm:flex-row" : ""}`, children: [_jsx("div", { className: vertical
                    ? "flex shrink-0 flex-col gap-1 sm:w-48"
                    : "mb-4 flex flex-wrap gap-2 border-b border-sky-dark/25", role: "tablist", children: tabs.map((tab, i) => {
                    var _a;
                    const icon = getPreferredImage(tab.icon);
                    const selected = i === active;
                    return (_jsxs("button", { type: "button", role: "tab", "aria-selected": selected, onClick: () => setActive(i), className: `inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition ${vertical
                            ? `rounded-xl text-left ${selected
                                ? "bg-trunk text-white"
                                : "text-ink/70 hover:bg-sky-pale"}`
                            : `border-b-2 -mb-px ${selected
                                ? "border-court text-ink"
                                : "border-transparent text-ink/60 hover:text-ink"}`}`, children: [icon ? (_jsx("span", { className: "relative h-4 w-4 overflow-hidden", children: _jsx(Image, { src: icon.src, alt: "", fill: true, className: "object-contain", sizes: "16px" }) })) : null, tab.label] }, (_a = tab.id) !== null && _a !== void 0 ? _a : i));
                }) }), current ? (_jsx("div", { role: "tabpanel", className: "flex-1 rounded-2xl border border-sky-dark/20 bg-sky-pale/40 px-6 py-5 text-ink/80 leading-7", children: current.content })) : null] }));
}
