import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
export default function HeroBlock({ block }) {
    const image = getPreferredImage(block.image);
    const centered = block.align !== "left";
    return (_jsx("section", { className: `relative overflow-hidden rounded-3xl border border-sky-dark/30 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-14 sm:px-12 ${centered ? "text-center" : "text-left"}`, children: _jsxs("div", { className: `mx-auto flex max-w-4xl flex-col gap-6 ${image ? "lg:flex-row lg:items-center lg:gap-12" : ""} ${centered && !image ? "items-center" : ""}`, children: [_jsxs("div", { className: `flex-1 ${centered && !image ? "max-w-2xl" : ""}`, children: [_jsx("p", { className: "eyebrow mb-3", children: "OiCCMS" }), _jsx("h1", { className: "section-heading", children: block.title }), block.subtitle ? (_jsx("p", { className: "mt-4 text-lg leading-8 text-ink/70", children: block.subtitle })) : null] }), image ? (_jsx("div", { className: "relative aspect-[4/3] w-full max-w-xl flex-1 overflow-hidden rounded-2xl shadow-lg shadow-sky-dark/20", children: _jsx(Image, { src: image.src, alt: image.alt || block.title, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 480px", priority: true }) })) : null] }) }));
}
