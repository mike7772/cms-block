import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
};
export default function IconBoxBlock({ block, }) {
    var _a, _b;
    const icon = getPreferredImage(block.icon);
    const align = (_b = alignClass[(_a = block.align) !== null && _a !== void 0 ? _a : "center"]) !== null && _b !== void 0 ? _b : alignClass.center;
    const content = (_jsxs("div", { className: `flex flex-col gap-3 ${align}`, children: [icon ? (_jsx("div", { className: "relative h-12 w-12 overflow-hidden rounded-xl bg-sky-pale", children: _jsx(Image, { src: icon.src, alt: icon.alt || block.title, fill: true, className: "object-contain p-2", sizes: "48px" }) })) : (_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-court", children: "\u25C6" })), _jsx("h3", { className: "text-lg font-semibold tracking-tight text-ink", children: block.title }), block.description ? (_jsx("p", { className: "text-ink/70 leading-7", children: block.description })) : null] }));
    if (block.linkUrl) {
        const className = "block rounded-2xl border border-sky-dark/20 bg-white px-6 py-6 transition hover:border-court/40 hover:bg-sky-pale/50";
        if (block.linkUrl.startsWith("/")) {
            return (_jsx(Link, { href: block.linkUrl, className: className, children: content }));
        }
        return (_jsx("a", { href: block.linkUrl, className: className, children: content }));
    }
    return (_jsx("div", { className: "rounded-2xl border border-sky-dark/20 bg-white px-6 py-6", children: content }));
}
