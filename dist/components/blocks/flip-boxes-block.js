"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { initialLetter } from "@/puck/registry/helpers";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function FlipBoxesBlock({ block, }) {
    var _a, _b, _c, _d;
    const columns = (_a = block.columns) !== null && _a !== void 0 ? _a : "3";
    const direction = (_b = block.flipDirection) !== null && _b !== void 0 ? _b : "horizontal";
    const boxes = (_c = block.boxes) !== null && _c !== void 0 ? _c : [];
    const rotateClass = direction === "vertical"
        ? "group-hover:[transform:rotateX(180deg)]"
        : "group-hover:[transform:rotateY(180deg)]";
    const backRotate = direction === "vertical"
        ? "[transform:rotateX(180deg)]"
        : "[transform:rotateY(180deg)]";
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: `mx-auto grid max-w-6xl gap-6 ${(_d = columnClass[columns]) !== null && _d !== void 0 ? _d : columnClass["3"]}`, style: { perspective: "1000px" }, children: boxes.map((box, i) => {
                    const icon = getPreferredImage(box.frontIcon);
                    return (_jsx("div", { className: "group h-64 [perspective:1000px]", children: _jsxs("div", { className: `relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${rotateClass}`, children: [_jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sky-dark/20 bg-white p-6 text-center shadow-sm [backface-visibility:hidden]", children: [icon ? (_jsx("div", { className: "relative mb-3 h-12 w-12 overflow-hidden rounded-xl", children: _jsx(Image, { src: icon.src, alt: icon.alt || box.frontTitle, fill: true, className: "object-cover", sizes: "48px" }) })) : (_jsx("div", { className: "mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-lg font-semibold text-ink", children: initialLetter(box.frontTitle) })), _jsx("h3", { className: "text-lg font-semibold text-ink", children: box.frontTitle }), box.frontDescription ? (_jsx("p", { className: "mt-2 text-sm text-ink/70", children: box.frontDescription })) : null] }), _jsxs("div", { className: `absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-trunk/30 bg-trunk p-6 text-center text-white shadow-sm [backface-visibility:hidden] ${backRotate}`, children: [box.backTitle ? (_jsx("h3", { className: "text-lg font-semibold", children: box.backTitle })) : null, box.backDescription ? (_jsx("p", { className: "mt-2 text-sm text-white/80", children: box.backDescription })) : null, box.buttonLabel && box.buttonUrl ? (_jsx("div", { className: "mt-4", children: box.buttonUrl.startsWith("/") ? (_jsx(Link, { href: box.buttonUrl, className: "btn-primary", children: box.buttonLabel })) : (_jsx("a", { href: box.buttonUrl, className: "btn-primary", children: box.buttonLabel })) })) : null] })] }) }, i));
                }) })] }));
}
