import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
export default function MediaBlock({ block }) {
    const image = getPreferredImage(block.file);
    if (!image) {
        return null;
    }
    return (_jsxs("figure", { className: "mx-auto max-w-4xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale", children: [_jsx("div", { className: "relative aspect-[16/10] w-full", children: _jsx(Image, { src: image.src, alt: image.alt, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 896px" }) }), image.alt ? (_jsx("figcaption", { className: "px-4 py-3 text-sm text-ink/60", children: image.alt })) : null] }));
}
