import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "../../lib/media.js";
export default function LogoCloudBlock({ block, }) {
    var _a;
    const logos = ((_a = block.logos) !== null && _a !== void 0 ? _a : [])
        .map((logo) => getPreferredImage(logo))
        .filter((logo) => Boolean(logo));
    return (_jsxs("section", { className: "mx-auto max-w-5xl rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-10", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-8 text-center text-2xl", children: block.heading })) : null, logos.length ? (_jsx("ul", { className: "flex flex-wrap items-center justify-center gap-8 sm:gap-12", children: logos.map((logo, i) => (_jsx("li", { className: "relative h-12 w-28 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 sm:w-32", children: _jsx(Image, { src: logo.src, alt: logo.alt || `Logo ${i + 1}`, fill: true, className: "object-contain", sizes: "128px" }) }, `${logo.src}-${i}`))) })) : (_jsx("p", { className: "text-center text-ink/50", children: "Add logo URLs" }))] }));
}
