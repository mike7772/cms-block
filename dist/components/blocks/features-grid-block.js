import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { initialLetter } from "@/puck/registry/helpers";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function FeaturesGridBlock({ block, }) {
    var _a, _b, _c;
    const columns = (_a = block.columns) !== null && _a !== void 0 ? _a : "3";
    const features = (_b = block.features) !== null && _b !== void 0 ? _b : [];
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: `mx-auto grid max-w-6xl gap-6 ${(_c = columnClass[columns]) !== null && _c !== void 0 ? _c : columnClass["3"]}`, children: features.map((feature, i) => {
                    const icon = getPreferredImage(feature.icon);
                    const content = (_jsxs(_Fragment, { children: [icon ? (_jsx("div", { className: "relative mb-4 h-12 w-12 overflow-hidden rounded-xl", children: _jsx(Image, { src: icon.src, alt: icon.alt || feature.title, fill: true, className: "object-cover", sizes: "48px" }) })) : (_jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-lg font-semibold text-ink", children: initialLetter(feature.title) })), _jsx("h3", { className: "text-lg font-semibold text-ink", children: feature.title }), feature.description ? (_jsx("p", { className: "mt-2 text-sm leading-6 text-ink/70", children: feature.description })) : null, feature.linkLabel ? (_jsx("span", { className: "mt-3 inline-block text-sm font-semibold text-court", children: feature.linkLabel })) : null] }));
                    const className = "rounded-2xl border border-sky-dark/20 bg-white/80 p-6 shadow-sm shadow-sky-dark/10 transition hover:border-sky-dark/40";
                    if (feature.linkUrl) {
                        return feature.linkUrl.startsWith("/") ? (_jsx(Link, { href: feature.linkUrl, className: className, children: content }, i)) : (_jsx("a", { href: feature.linkUrl, className: className, children: content }, i));
                    }
                    return (_jsx("div", { className: className, children: content }, i));
                }) })] }));
}
