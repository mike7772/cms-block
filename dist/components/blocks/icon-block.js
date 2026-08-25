import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
import { resolveMediaUrl } from "../../puck/media.js";
const sizeClass = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
};
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
const PATHS = {
    star: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
    heart: "M12 21s-7-4.5-9.5-8C.5 9.5 3 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8C19 16.5 12 21 12 21z",
    check: "M5 13l4 4L19 7",
    arrow: "M5 12h14M13 5l7 7-7 7",
    mail: "M4 6h16v12H4zM4 6l8 7 8-7",
    phone: "M6 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z",
    map: "M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12zM12 11a2 2 0 110-4 2 2 0 010 4z",
    user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
    globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    spark: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8",
};
export default function IconBlock({ block }) {
    var _a, _b, _c, _d, _e;
    const size = (_b = sizeClass[(_a = block.size) !== null && _a !== void 0 ? _a : "medium"]) !== null && _b !== void 0 ? _b : sizeClass.medium;
    const color = block.color || "#1B4332";
    const name = (_c = block.iconName) !== null && _c !== void 0 ? _c : "star";
    const glyph = block.imageUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    _jsx("img", { src: resolveMediaUrl(block.imageUrl), alt: "", className: `${size} object-contain` })) : (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: size, "aria-hidden": true, children: _jsx("path", { d: (_d = PATHS[name]) !== null && _d !== void 0 ? _d : PATHS.star }) }));
    const wrapped = block.linkUrl ? (_jsx(Link, { href: block.linkUrl, className: "inline-flex", children: glyph })) : (glyph);
    return (_jsx("div", { className: `flex ${alignClass[(_e = block.align) !== null && _e !== void 0 ? _e : "center"]}`, children: wrapped }));
}
