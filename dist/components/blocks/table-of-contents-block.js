import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TableOfContentsBlock({ block, }) {
    var _a;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const sticky = block.sticky ? "lg:sticky lg:top-24" : "";
    return (_jsxs("nav", { "aria-label": "Table of contents", className: `mx-auto max-w-md rounded-3xl border border-sky-dark/20 bg-sky-pale/40 px-6 py-6 ${sticky}`, children: [block.heading ? (_jsx("h2", { className: "mb-4 text-lg font-semibold text-ink", children: block.heading })) : null, items.length ? (_jsx("ol", { className: `space-y-2 ${block.showNumbers === false ? "list-none" : "list-decimal pl-5"}`, children: items.map((item, i) => (_jsx("li", { className: "text-sm text-ink/80", children: _jsx("a", { href: `#${item.anchorId.replace(/^#/, "")}`, className: "hover:text-trunk hover:underline", children: item.label }) }, `${item.anchorId}-${i}`))) })) : (_jsx("p", { className: "text-sm text-ink/50", children: block.mode === "auto"
                    ? "Headings will be detected automatically"
                    : "Add TOC items" }))] }));
}
