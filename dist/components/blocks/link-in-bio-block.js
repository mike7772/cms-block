import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import { initialLetter } from "@/puck/registry/helpers";
const bgClass = {
    light: "bg-sky-pale text-ink",
    dark: "bg-ink text-white",
    gradient: "bg-gradient-to-br from-trunk via-trunk-dark to-ink text-white",
    custom: "bg-sky-light text-ink",
};
const buttonClass = {
    rounded: "rounded-xl",
    pill: "rounded-full",
    square: "rounded-none",
    outline: "rounded-xl border-2 bg-transparent",
};
export default function LinkInBioBlock({ block, }) {
    var _a, _b, _c, _d;
    const profile = getPreferredImage(block.profileImage);
    const bg = (_a = block.backgroundColor) !== null && _a !== void 0 ? _a : "light";
    const style = (_b = block.buttonStyle) !== null && _b !== void 0 ? _b : "rounded";
    const dark = bg === "dark" || bg === "gradient";
    const links = (_c = block.links) !== null && _c !== void 0 ? _c : [];
    return (_jsxs("section", { className: `mx-auto max-w-md rounded-3xl px-6 py-12 ${(_d = bgClass[bg]) !== null && _d !== void 0 ? _d : bgClass.light}`, children: [_jsxs("div", { className: "flex flex-col items-center text-center", children: [profile ? (_jsx("div", { className: "relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/40", children: _jsx(Image, { src: profile.src, alt: profile.alt || block.name, fill: true, className: "object-cover", sizes: "96px" }) })) : (_jsx("div", { className: "mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-court text-3xl font-semibold text-white", children: initialLetter(block.name) })), _jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: block.name }), block.bio ? (_jsx("p", { className: `mt-2 text-sm leading-6 ${dark ? "text-white/75" : "text-ink/70"}`, children: block.bio })) : null] }), _jsx("ul", { className: "mt-8 space-y-3", children: links.map((link, i) => {
                    var _a;
                    const icon = getPreferredImage(link.icon);
                    const featured = Boolean(link.isFeatured);
                    return (_jsx("li", { children: _jsxs("a", { href: link.url, className: `flex items-center justify-center gap-3 px-5 py-3 text-sm font-semibold transition ${(_a = buttonClass[style]) !== null && _a !== void 0 ? _a : buttonClass.rounded} ${featured
                                ? "bg-court text-white hover:bg-court-dark"
                                : dark
                                    ? style === "outline"
                                        ? "border-white/40 text-white hover:bg-white/10"
                                        : "bg-white/15 text-white hover:bg-white/25"
                                    : style === "outline"
                                        ? "border-trunk text-trunk hover:bg-trunk hover:text-white"
                                        : "bg-white text-ink shadow-sm hover:bg-sky"}`, children: [icon ? (_jsx("span", { className: "relative h-5 w-5 overflow-hidden rounded", children: _jsx(Image, { src: icon.src, alt: "", fill: true, className: "object-cover", sizes: "20px" }) })) : null, link.label] }) }, i));
                }) })] }));
}
