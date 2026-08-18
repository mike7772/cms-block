"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getMediaUrl } from "@/lib/media";
export default function SliderBlock({ block }) {
    var _a;
    const files = ((_a = block.files) !== null && _a !== void 0 ? _a : [])
        .map((file) => getMediaUrl(file))
        .filter((url) => Boolean(url));
    const [index, setIndex] = useState(0);
    if (!files.length) {
        return null;
    }
    const current = files[index];
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [_jsx("div", { className: "relative aspect-[16/10] overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale", children: _jsx(Image, { src: current, alt: `Slide ${index + 1}`, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 896px" }) }), files.length > 1 ? (_jsxs("div", { className: "mt-4 flex items-center justify-center gap-3", children: [_jsx("button", { type: "button", onClick: () => setIndex((value) => (value - 1 + files.length) % files.length), className: "rounded-full border border-sky-dark/40 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-light", children: "Previous" }), _jsxs("span", { className: "text-sm text-ink/60", children: [index + 1, " / ", files.length] }), _jsx("button", { type: "button", onClick: () => setIndex((value) => (value + 1) % files.length), className: "rounded-full border border-sky-dark/40 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-light", children: "Next" })] })) : null] }));
}
