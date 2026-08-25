import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { resolveMediaUrl } from "../../puck/media.js";
export default function PromoBoxBlock({ block }) {
    var _a;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "image-left";
    if (layout === "overlay") {
        return (_jsxs("section", { className: "relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-sky-dark/25", children: [block.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                _jsx("img", { src: resolveMediaUrl(block.imageUrl), alt: "", className: "absolute inset-0 h-full w-full object-cover" })) : (_jsx("div", { className: "absolute inset-0 bg-trunk" })), _jsxs("div", { className: "relative bg-ink/55 px-6 py-14 text-white sm:px-10 sm:py-20", children: [block.eyebrow ? (_jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-sky-light", children: block.eyebrow })) : null, _jsx("h2", { className: "mt-2 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl", children: block.heading }), block.text ? (_jsx("p", { className: "mt-3 max-w-lg text-white/80", children: block.text })) : null, block.buttonLabel ? (_jsx(Link, { href: block.buttonUrl || "/", className: "mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-trunk", children: block.buttonLabel })) : null] })] }));
    }
    const imageFirst = layout === "image-left";
    return (_jsxs("section", { className: `mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-sky-dark/25 bg-white md:grid-cols-2 ${imageFirst ? "" : "md:[&>*:first-child]:order-2"}`, children: [_jsx("div", { className: "relative min-h-[220px] bg-sky-pale", children: block.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                _jsx("img", { src: resolveMediaUrl(block.imageUrl), alt: "", className: "absolute inset-0 h-full w-full object-cover" })) : null }), _jsxs("div", { className: "flex flex-col justify-center p-6 sm:p-10", children: [block.eyebrow ? (_jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-foliage", children: block.eyebrow })) : null, _jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl", children: block.heading }), block.text ? (_jsx("p", { className: "mt-3 text-ink/70", children: block.text })) : null, block.buttonLabel ? (_jsx(Link, { href: block.buttonUrl || "/", className: "mt-6 inline-flex w-fit rounded-full bg-trunk px-5 py-2.5 text-sm font-semibold text-white hover:bg-trunk-dark", children: block.buttonLabel })) : null] })] }));
}
