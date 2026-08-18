import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
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
const aspectClass = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
};
export default function VideoEmbedBlock({ block, }) {
    var _a, _b;
    const embedUrl = toEmbedUrl(block.videoUrl);
    const poster = getPreferredImage(block.posterImage);
    const ratio = (_b = aspectClass[(_a = block.aspectRatio) !== null && _a !== void 0 ? _a : "16:9"]) !== null && _b !== void 0 ? _b : aspectClass["16:9"];
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [_jsx("div", { className: `relative overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${ratio}`, children: embedUrl ? (_jsx("iframe", { src: embedUrl, title: block.caption || "Video", className: "absolute inset-0 h-full w-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })) : block.videoUrl ? (_jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-4 p-6", children: [poster ? (_jsx(Image, { src: poster.src, alt: poster.alt || "Video poster", fill: true, className: "object-cover opacity-40", sizes: "896px" })) : null, _jsx("a", { href: block.videoUrl, target: "_blank", rel: "noopener noreferrer", className: "btn-primary relative z-10", children: "Watch video" })] })) : (_jsx("div", { className: "absolute inset-0 flex items-center justify-center text-ink/50", children: "Add a video URL" })) }), block.caption ? (_jsx("p", { className: "mt-3 text-center text-sm text-ink/60", children: block.caption })) : null] }));
}
