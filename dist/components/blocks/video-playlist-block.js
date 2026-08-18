"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "../../lib/media.js";
function toEmbedUrl(url) {
    var _a;
    if (!url)
        return null;
    try {
        const parsed = new URL(url);
        if (parsed.hostname.includes("youtube.com") ||
            parsed.hostname.includes("youtu.be")) {
            let id = "";
            if (parsed.hostname.includes("youtu.be")) {
                id = parsed.pathname.slice(1);
            }
            else if (parsed.pathname.startsWith("/embed/")) {
                return url;
            }
            else {
                id = (_a = parsed.searchParams.get("v")) !== null && _a !== void 0 ? _a : "";
            }
            return id ? `https://www.youtube.com/embed/${id}` : null;
        }
        if (parsed.hostname.includes("vimeo.com")) {
            if (parsed.hostname.includes("player.vimeo.com"))
                return url;
            const id = parsed.pathname.split("/").filter(Boolean).pop();
            return id ? `https://player.vimeo.com/video/${id}` : null;
        }
    }
    catch (_b) {
        return null;
    }
    return null;
}
export default function VideoPlaylistBlock({ block, }) {
    var _a;
    const videos = (_a = block.videos) !== null && _a !== void 0 ? _a : [];
    const [active, setActive] = useState(0);
    const current = videos[active];
    const embedUrl = current ? toEmbedUrl(current.videoUrl) : null;
    const autoplay = block.autoplay ? "?autoplay=1" : "";
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mb-8 text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.subheading })) : null] })), videos.length === 0 ? (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add videos to the playlist" })) : (_jsxs("div", { className: `grid gap-6 ${block.layout === "sidebar"
                    ? "lg:grid-cols-[1fr_280px]"
                    : block.layout === "grid"
                        ? "sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1"}`, children: [block.layout !== "grid" ? (_jsx("div", { className: "relative aspect-video overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale", children: embedUrl ? (_jsx("iframe", { src: `${embedUrl}${autoplay}`, title: (current === null || current === void 0 ? void 0 : current.title) || "Video", className: "absolute inset-0 h-full w-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }, `${active}-${embedUrl}`)) : (current === null || current === void 0 ? void 0 : current.videoUrl) ? (_jsx("div", { className: "flex h-full items-center justify-center p-6", children: _jsxs("a", { href: current.videoUrl, target: "_blank", rel: "noopener noreferrer", className: "btn-primary", children: ["Watch ", current.title] }) })) : null })) : null, _jsx("ul", { className: `flex flex-col gap-3 ${block.layout === "grid" ? "contents" : ""}`, children: videos.map((video, i) => {
                            const thumb = getPreferredImage(video.thumbnail);
                            return (_jsx("li", { children: _jsxs("button", { type: "button", onClick: () => setActive(i), className: `flex w-full gap-3 rounded-2xl border p-3 text-left transition ${i === active
                                        ? "border-sky-dark bg-sky-pale"
                                        : "border-sky-dark/20 bg-white hover:bg-sky-pale/50"} ${block.layout === "grid" ? "flex-col" : "items-center"}`, children: [_jsx("div", { className: `relative overflow-hidden rounded-xl bg-sky-light ${block.layout === "grid"
                                                ? "aspect-video w-full"
                                                : "h-16 w-24 shrink-0"}`, children: thumb ? (_jsx(Image, { src: thumb.src, alt: thumb.alt || video.title, fill: true, className: "object-cover", sizes: "120px" })) : (_jsx("div", { className: "flex h-full items-center justify-center text-xs text-ink/40", children: "\u25B6" })) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "truncate font-medium text-ink", children: video.title }), video.duration ? (_jsx("p", { className: "text-xs text-ink/50", children: video.duration })) : null, video.description && block.layout === "grid" ? (_jsx("p", { className: "mt-1 line-clamp-2 text-sm text-ink/60", children: video.description })) : null] })] }) }, `${video.title}-${i}`));
                        }) })] }))] }));
}
