"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
export default function HotspotBlock({ block }) {
    var _a, _b;
    const image = getPreferredImage(block.image);
    const points = (_a = block.points) !== null && _a !== void 0 ? _a : [];
    const [active, setActive] = useState(null);
    const trigger = (_b = block.trigger) !== null && _b !== void 0 ? _b : "hover";
    return (_jsxs("section", { className: "mx-auto max-w-5xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, image ? (_jsxs("div", { className: "relative aspect-[16/10] overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale", children: [_jsx(Image, { src: image.src, alt: image.alt || block.heading || "Hotspot image", fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 1024px" }), points.map((point, i) => {
                        const open = active === i;
                        return (_jsxs("div", { className: "absolute z-10", style: {
                                left: `${point.xPosition}%`,
                                top: `${point.yPosition}%`,
                                transform: "translate(-50%, -50%)",
                            }, onMouseEnter: () => trigger === "hover" ? setActive(i) : undefined, onMouseLeave: () => trigger === "hover" ? setActive(null) : undefined, children: [_jsx("button", { type: "button", "aria-label": point.title, onClick: () => trigger === "click"
                                        ? setActive(open ? null : i)
                                        : undefined, className: "flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-trunk text-sm font-bold text-white shadow-lg shadow-trunk/30", children: "+" }), open ? (_jsxs("div", { className: "absolute left-1/2 top-10 z-20 w-56 -translate-x-1/2 rounded-2xl border border-sky-dark/20 bg-white p-4 text-left shadow-xl", children: [_jsx("p", { className: "font-semibold text-ink", children: point.title }), point.description ? (_jsx("p", { className: "mt-1 text-sm text-ink/70", children: point.description })) : null, point.linkUrl ? (_jsx("a", { href: point.linkUrl, className: "mt-2 inline-block text-sm font-medium text-trunk underline-offset-2 hover:underline", children: "Learn more" })) : null] })) : null] }, `${point.title}-${i}`));
                    })] })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-16 text-center text-ink/60", children: "Add a hotspot image URL" }))] }));
}
