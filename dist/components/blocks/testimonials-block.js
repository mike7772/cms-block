import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
import { initialLetter } from "../../puck/registry/helpers.js";
function Stars({ rating }) {
    const n = Number(rating !== null && rating !== void 0 ? rating : 0);
    if (!n)
        return null;
    return (_jsx("div", { className: "flex gap-0.5 text-court", "aria-label": `${n} out of 5 stars`, children: Array.from({ length: 5 }, (_, i) => (_jsx("span", { className: i < n ? "opacity-100" : "opacity-25", children: "\u2605" }, i))) }));
}
export default function TestimonialsBlock({ block, }) {
    var _a, _b;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "carousel";
    const testimonials = (_b = block.testimonials) !== null && _b !== void 0 ? _b : [];
    const isCarousel = layout === "carousel";
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-white via-sky-pale to-sky-light px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: isCarousel
                    ? "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
                    : "mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, i) => {
                    const avatar = getPreferredImage(t.avatar);
                    return (_jsxs("article", { className: `rounded-2xl border border-sky-dark/20 bg-white/90 p-6 shadow-sm shadow-sky-dark/10 ${isCarousel ? "w-[min(100%,320px)] shrink-0 snap-start" : ""}`, children: [_jsx(Stars, { rating: t.rating }), _jsxs("blockquote", { className: "mt-3 text-base leading-7 text-ink/80", children: ["\u201C", t.quote, "\u201D"] }), _jsxs("div", { className: "mt-5 flex items-center gap-3", children: [avatar ? (_jsx("div", { className: "relative h-10 w-10 overflow-hidden rounded-full", children: _jsx(Image, { src: avatar.src, alt: avatar.alt || t.authorName, fill: true, className: "object-cover", sizes: "40px" }) })) : (_jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-trunk text-sm font-semibold text-white", children: initialLetter(t.authorName) })), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold text-ink", children: t.authorName }), t.authorRole ? (_jsx("p", { className: "text-xs text-ink/60", children: t.authorRole })) : null] })] })] }, i));
                }) })] }));
}
