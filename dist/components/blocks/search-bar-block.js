"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const widthClass = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-2xl",
    full: "max-w-full",
};
const alignClass = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
};
export default function SearchBarBlock({ block, }) {
    var _a, _b, _c, _d, _e;
    const width = (_b = widthClass[(_a = block.width) !== null && _a !== void 0 ? _a : "medium"]) !== null && _b !== void 0 ? _b : widthClass.medium;
    const align = (_d = alignClass[(_c = block.align) !== null && _c !== void 0 ? _c : "center"]) !== null && _d !== void 0 ? _d : alignClass.center;
    const style = (_e = block.style) !== null && _e !== void 0 ? _e : "boxed";
    const shell = style === "minimal"
        ? "border-b border-sky-dark/30 bg-transparent"
        : style === "inline"
            ? "border border-sky-dark/20 bg-white"
            : style === "expanded"
                ? "border border-sky-dark/25 bg-sky-pale px-2 py-2"
                : "rounded-2xl border border-sky-dark/25 bg-white shadow-sm";
    return (_jsxs("section", { className: `${width} ${align} w-full`, children: [_jsxs("form", { className: `flex items-center gap-2 overflow-hidden rounded-2xl px-3 py-2 ${shell}`, onSubmit: (e) => e.preventDefault(), children: [_jsx("input", { type: "search", name: "q", placeholder: block.placeholder || "Search…", className: "min-w-0 flex-1 bg-transparent px-2 py-2 text-ink outline-none placeholder:text-ink/40", "aria-label": "Search" }), block.showButton !== false ? (_jsx("button", { type: "submit", className: "btn-primary shrink-0 !px-4 !py-2", children: block.buttonLabel || "Search" })) : null] }), block.searchType && block.searchType !== "all" ? (_jsxs("p", { className: "mt-2 text-center text-xs text-ink/50", children: ["Searching ", block.searchType] })) : null] }));
}
