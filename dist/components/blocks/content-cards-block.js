import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "../../lib/media.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
function CardLink({ href, children, }) {
    const className = "mt-4 inline-flex text-sm font-medium text-court hover:underline";
    if (href.startsWith("/")) {
        return (_jsx(Link, { href: href, className: className, children: children }));
    }
    return (_jsx("a", { href: href, className: className, children: children }));
}
export default function ContentCardsBlock({ block, }) {
    var _a, _b, _c;
    const cards = (_a = block.cards) !== null && _a !== void 0 ? _a : [];
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "3"]) !== null && _c !== void 0 ? _c : columnClass["3"];
    return (_jsxs("section", { className: "mx-auto max-w-6xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-2 text-center", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mx-auto mb-8 max-w-2xl text-center text-ink/70", children: block.subheading })) : null, _jsx("div", { className: `grid gap-6 ${cols}`, children: cards.map((card, i) => {
                    var _a;
                    const image = getPreferredImage(card.image);
                    return (_jsxs("article", { className: "overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: [image ? (_jsx("div", { className: "relative aspect-[16/10] w-full bg-sky-pale", children: _jsx(Image, { src: image.src, alt: image.alt || card.title, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 360px" }) })) : null, _jsxs("div", { className: "px-5 py-5", children: [card.badge ? (_jsx("span", { className: "mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-foliage-deep", children: card.badge })) : null, _jsx("h3", { className: "text-lg font-semibold tracking-tight text-ink", children: card.title }), card.excerpt ? (_jsx("p", { className: "mt-2 text-sm leading-6 text-ink/70", children: card.excerpt })) : null, card.linkUrl ? (_jsx(CardLink, { href: card.linkUrl, children: card.linkLabel || "Read more" })) : null] })] }, (_a = card.id) !== null && _a !== void 0 ? _a : i));
                }) })] }));
}
