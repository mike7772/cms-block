import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
export default function PriceListBlock({ block, }) {
    var _a, _b;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "single";
    const items = (_b = block.items) !== null && _b !== void 0 ? _b : [];
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: `mx-auto max-w-4xl gap-4 ${layout === "two-column" ? "grid sm:grid-cols-2" : "flex flex-col"}`, children: items.map((item, i) => {
                    const image = getPreferredImage(item.image);
                    return (_jsxs("div", { className: `flex items-start gap-4 rounded-2xl border px-5 py-4 ${item.isFeatured
                            ? "border-court bg-sky-pale"
                            : "border-sky-dark/20 bg-sky-pale/30"}`, children: [image ? (_jsx("div", { className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl", children: _jsx(Image, { src: image.src, alt: image.alt || item.title, fill: true, className: "object-cover", sizes: "64px" }) })) : null, _jsxs("div", { className: "min-w-0 flex-1", children: [_jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [_jsx("h3", { className: "font-semibold text-ink", children: item.title }), _jsx("span", { className: "shrink-0 text-lg font-semibold text-trunk", children: item.price })] }), item.description ? (_jsx("p", { className: "mt-1 text-sm text-ink/70", children: item.description })) : null] })] }, i));
                }) })] }));
}
