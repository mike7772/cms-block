import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const widthClass = {
    small: "max-w-xs",
    medium: "max-w-md",
    large: "max-w-2xl",
    full: "max-w-full",
};
const alignClass = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
};
export default function LottieBlock({ block }) {
    var _a, _b, _c, _d, _e;
    const url = block.animationUrl || ((_a = block.animationFile) === null || _a === void 0 ? void 0 : _a.url) || "";
    const width = (_c = widthClass[(_b = block.width) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : widthClass.medium;
    const align = (_e = alignClass[(_d = block.align) !== null && _d !== void 0 ? _d : "center"]) !== null && _e !== void 0 ? _e : alignClass.center;
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, _jsx("div", { className: `${width} ${align}`, children: url ? (_jsxs("div", { className: "overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale p-4", children: [_jsx("iframe", { src: url, title: block.heading || "Lottie animation", className: "aspect-square w-full rounded-2xl bg-white", sandbox: "allow-scripts allow-same-origin" }), _jsxs("p", { className: "mt-3 text-center text-sm text-ink/50", children: [_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "underline decoration-sky-dark/40 underline-offset-2 hover:text-ink", children: "Open animation" }), block.loop ? " · loop" : "", block.autoplay ? " · autoplay" : "", block.speed ? ` · ${block.speed}` : ""] })] })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add a Lottie animation URL" })) })] }));
}
