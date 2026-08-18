import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
import { initialLetter } from "../../puck/registry/helpers.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
function Stars({ rating }) {
    const n = Number(rating);
    return (_jsx("div", { className: "flex gap-0.5 text-court", "aria-label": `${n} out of 5`, children: Array.from({ length: 5 }, (_, i) => (_jsx("span", { className: i < n ? "opacity-100" : "opacity-25", children: "\u2605" }, i))) }));
}
export default function ReviewsBlock({ block, }) {
    var _a, _b, _c, _d;
    const reviews = (_a = block.reviews) !== null && _a !== void 0 ? _a : [];
    const layout = (_b = block.layout) !== null && _b !== void 0 ? _b : "grid";
    const columns = (_c = block.columns) !== null && _c !== void 0 ? _c : "3";
    const avg = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length
        : 0;
    const listClass = layout === "list"
        ? "mx-auto flex max-w-3xl flex-col gap-4"
        : layout === "carousel"
            ? "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
            : `mx-auto grid max-w-6xl gap-5 ${(_d = columnClass[columns]) !== null && _d !== void 0 ? _d : columnClass["3"]}`;
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10", children: [(block.heading || block.subheading || block.showAverageRating) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null, block.showAverageRating && reviews.length > 0 ? (_jsxs("p", { className: "mt-4 text-sm font-semibold text-trunk", children: ["Average rating: ", avg.toFixed(1), " / 5 \u00B7 ", reviews.length, " reviews"] })) : null] })), _jsx("div", { className: listClass, children: reviews.map((review, i) => {
                    const avatar = getPreferredImage(review.authorAvatar);
                    return (_jsxs("article", { className: `rounded-2xl border border-sky-dark/20 bg-sky-pale/50 p-5 ${layout === "carousel"
                            ? "w-[min(100%,300px)] shrink-0 snap-start"
                            : ""}`, children: [_jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [avatar ? (_jsx("div", { className: "relative h-10 w-10 overflow-hidden rounded-full", children: _jsx(Image, { src: avatar.src, alt: avatar.alt || review.authorName, fill: true, className: "object-cover", sizes: "40px" }) })) : (_jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-sky text-sm font-semibold text-ink", children: initialLetter(review.authorName) })), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold text-ink", children: review.authorName }), review.source ? (_jsx("p", { className: "text-xs capitalize text-ink/50", children: review.source })) : null] })] }), _jsx(Stars, { rating: review.rating })] }), review.title ? (_jsx("h3", { className: "mt-3 font-semibold text-ink", children: review.title })) : null, _jsx("p", { className: "mt-2 text-sm leading-6 text-ink/70", children: review.body }), review.date ? (_jsx("p", { className: "mt-3 text-xs text-ink/50", children: review.date })) : null] }, i));
                }) })] }));
}
