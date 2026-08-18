import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
    "5": "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};
export default function GalleryBlock({ block }) {
    var _a, _b, _c;
    const images = ((_a = block.images) !== null && _a !== void 0 ? _a : [])
        .map((img) => getPreferredImage(img))
        .filter((img) => Boolean(img));
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-8 text-center", children: block.heading })) : null, images.length ? (_jsx("div", { className: `grid grid-cols-1 gap-4 ${cols}`, children: images.map((image, i) => (_jsx("figure", { className: "relative aspect-[4/3] overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale", children: _jsx(Image, { src: image.src, alt: image.alt || `Gallery image ${i + 1}`, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 50vw, 33vw" }) }, `${image.src}-${i}`))) })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add images to the gallery" }))] }));
}
