import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
import { renderSlot } from "./nested-blocks.js";
const paddingClass = {
    none: "py-0",
    small: "py-6",
    medium: "py-12",
    large: "py-20",
};
const maxWidthClass = {
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-none",
};
const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};
const bgClass = {
    none: "bg-transparent",
    pale: "bg-sky-pale",
    sky: "bg-sky",
    ink: "bg-ink text-white",
};
export default function SectionBlock({ block }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const background = (_a = block.background) !== null && _a !== void 0 ? _a : "none";
    const padding = (_c = paddingClass[(_b = block.paddingY) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : paddingClass.medium;
    const maxWidth = (_e = maxWidthClass[(_d = block.maxWidth) !== null && _d !== void 0 ? _d : "lg"]) !== null && _e !== void 0 ? _e : maxWidthClass.lg;
    const align = (_g = alignClass[(_f = block.align) !== null && _f !== void 0 ? _f : "left"]) !== null && _g !== void 0 ? _g : alignClass.left;
    const image = getPreferredImage(block.backgroundImage);
    const isImage = background === "image";
    const isInk = background === "ink";
    return (_jsxs("section", { className: `relative w-full overflow-hidden ${padding} ${isImage ? "bg-ink" : ((_h = bgClass[background]) !== null && _h !== void 0 ? _h : bgClass.none)}`, children: [isImage && image ? (_jsxs(_Fragment, { children: [_jsx(Image, { src: image.src, alt: image.alt || "", fill: true, className: "object-cover", sizes: "100vw" }), _jsx("div", { className: "absolute inset-0 bg-ink/55" })] })) : null, _jsx("div", { className: `relative z-10 mx-auto px-6 ${maxWidth} ${align} ${isImage || isInk ? "text-white" : "text-ink"}`, children: renderSlot(block.content) })] }));
}
