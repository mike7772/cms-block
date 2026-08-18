"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
function toEmbedUrl(url) {
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be")) {
            const id = u.pathname.slice(1);
            return id ? `https://www.youtube.com/embed/${id}` : null;
        }
        if (u.hostname.includes("youtube.com")) {
            const id = u.searchParams.get("v");
            if (id)
                return `https://www.youtube.com/embed/${id}`;
            if (u.pathname.startsWith("/embed/"))
                return url;
        }
        if (u.hostname.includes("vimeo.com")) {
            const id = u.pathname.split("/").filter(Boolean).pop();
            return id ? `https://player.vimeo.com/video/${id}` : null;
        }
    }
    catch (_a) {
        return null;
    }
    return null;
}
export default function VideoSliderBlock({ block, }) {
    var _a;
    const items = ((_a = block.items) !== null && _a !== void 0 ? _a : []).filter((i) => i.videoUrl);
    const [index, setIndex] = useState(0);
    const current = items[index];
    if (!items.length) {
        return (_jsx("div", { className: "rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50", children: "Add video slides" }));
    }
    const embed = toEmbedUrl(current.videoUrl);
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, _jsxs("div", { className: "overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: [_jsx("div", { className: "relative aspect-video bg-ink", children: embed ? (_jsx("iframe", { src: embed, title: current.title || `Video ${index + 1}`, className: "absolute inset-0 h-full w-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })) : (_jsx("video", { src: current.videoUrl, poster: current.posterUrl || undefined, controls: true, className: "absolute inset-0 h-full w-full object-contain" }, current.videoUrl)) }), (current.title || items.length > 1) && (_jsxs("div", { className: "flex items-center justify-between gap-3 px-4 py-3", children: [_jsx("p", { className: "truncate text-sm font-medium text-ink", children: current.title || `Video ${index + 1}` }), items.length > 1 ? (_jsx("div", { className: "flex items-center gap-2", children: block.showArrows !== false ? (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", onClick: () => setIndex((i) => (i - 1 + items.length) % items.length), className: "rounded-full border border-sky-dark/30 px-3 py-1 text-sm", children: "Prev" }), _jsx("button", { type: "button", onClick: () => setIndex((i) => (i + 1) % items.length), className: "rounded-full border border-sky-dark/30 px-3 py-1 text-sm", children: "Next" })] })) : null })) : null] })), block.showDots !== false && items.length > 1 ? (_jsx("div", { className: "flex justify-center gap-1.5 pb-4", children: items.map((_, i) => (_jsx("button", { type: "button", "aria-label": `Video ${i + 1}`, onClick: () => setIndex(i), className: `h-2 w-2 rounded-full ${i === index ? "bg-trunk" : "bg-sky-dark/30"}` }, i))) })) : null] })] }));
}
