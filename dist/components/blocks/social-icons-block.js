import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
export default function SocialIconsBlock({ block, }) {
    var _a, _b, _c;
    const icons = (_a = block.icons) !== null && _a !== void 0 ? _a : [];
    const align = (_c = alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "center"]) !== null && _c !== void 0 ? _c : alignClass.center;
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center text-xl", children: block.heading })) : null, icons.length ? (_jsx("ul", { className: `flex flex-wrap gap-3 ${align}`, children: icons.map((icon, i) => (_jsx("li", { children: _jsx("a", { href: icon.url || "#", target: "_blank", rel: "noopener noreferrer", "aria-label": icon.label || icon.platform, className: "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-sky-dark/30 bg-white px-3 text-sm font-medium capitalize text-ink transition hover:bg-sky-pale", children: icon.label || icon.platform }) }, `${icon.platform}-${i}`))) })) : (_jsx("p", { className: "text-center text-ink/50", children: "Add social icons" }))] }));
}
