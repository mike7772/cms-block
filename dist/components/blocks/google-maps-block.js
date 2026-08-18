import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const heightClass = {
    small: "h-48",
    medium: "h-72",
    large: "h-96",
};
export default function GoogleMapsBlock({ block, }) {
    var _a, _b;
    const height = (_b = heightClass[(_a = block.height) !== null && _a !== void 0 ? _a : "medium"]) !== null && _b !== void 0 ? _b : heightClass.medium;
    return (_jsxs("section", { className: "mx-auto max-w-5xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, block.embedUrl ? (_jsx("div", { className: `overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${height}`, children: _jsx("iframe", { src: block.embedUrl, title: block.heading || block.address || "Map", className: "h-full w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", sandbox: "allow-scripts allow-same-origin allow-popups", allowFullScreen: true }) })) : (_jsx("div", { className: `flex items-center justify-center rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 text-ink/60 ${height}`, children: "Add a Google Maps embed URL" })), (block.address || block.latitude || block.longitude) && (_jsxs("p", { className: "mt-3 text-center text-sm text-ink/60", children: [block.address ||
                        [block.latitude, block.longitude].filter(Boolean).join(", "), block.zoom != null ? ` · zoom ${block.zoom}` : ""] }))] }));
}
