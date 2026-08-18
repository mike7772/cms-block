import { jsx as _jsx } from "react/jsx-runtime";
const heightClass = {
    small: "h-64",
    medium: "h-96",
    large: "h-[32rem]",
};
const aspectClass = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
};
export default function IframeEmbedBlock({ block, }) {
    var _a, _b, _c;
    const ratio = (_a = block.aspectRatio) !== null && _a !== void 0 ? _a : "auto";
    const useAspect = ratio !== "auto" && aspectClass[ratio];
    const height = (_c = heightClass[(_b = block.height) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : heightClass.medium;
    return (_jsx("section", { className: "mx-auto max-w-5xl px-6", children: _jsx("div", { className: `relative overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${useAspect ? aspectClass[ratio] : height}`, children: block.url ? (_jsx("iframe", { src: block.url, title: block.title || "Embedded content", className: "absolute inset-0 h-full w-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" })) : (_jsx("div", { className: "absolute inset-0 flex items-center justify-center text-ink/50", children: "Add an embed URL" })) }) }));
}
