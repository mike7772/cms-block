import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};
export default function ImageBoxBlock({ block, }) {
    var _a, _b;
    const image = getPreferredImage(block.image);
    const align = (_b = alignClass[(_a = block.align) !== null && _a !== void 0 ? _a : "left"]) !== null && _b !== void 0 ? _b : alignClass.left;
    const link = block.linkUrl ? (block.linkUrl.startsWith("/") ? (_jsx(Link, { href: block.linkUrl, className: "btn-primary mt-4 inline-flex", children: block.linkLabel || "Learn more" })) : (_jsx("a", { href: block.linkUrl, className: "btn-primary mt-4 inline-flex", children: block.linkLabel || "Learn more" }))) : null;
    return (_jsxs("figure", { className: `mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-white ${align}`, children: [image ? (_jsx("div", { className: "relative aspect-[16/10] w-full bg-sky-pale", children: _jsx(Image, { src: image.src, alt: image.alt || block.title, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 768px" }) })) : null, _jsxs("figcaption", { className: "px-6 py-5", children: [_jsx("h3", { className: "text-xl font-semibold tracking-tight text-ink", children: block.title }), block.description ? (_jsx("p", { className: "mt-2 text-ink/70 leading-7", children: block.description })) : null, link] })] }));
}
