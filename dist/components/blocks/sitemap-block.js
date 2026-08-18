import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const samplePages = [
    { title: "Home", description: "Welcome page" },
    { title: "About", description: "Our story" },
    { title: "Services", description: "What we offer" },
    { title: "Blog", description: "News and updates" },
    { title: "Contact", description: "Get in touch" },
];
const columnClass = {
    "1": "grid-cols-1",
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function SitemapBlock({ block }) {
    var _a, _b, _c, _d;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "list";
    const cols = (_c = columnClass[(_b = block.columns) !== null && _b !== void 0 ? _b : "2"]) !== null && _c !== void 0 ? _c : columnClass["2"];
    return (_jsxs("section", { className: "mx-auto max-w-4xl rounded-3xl border border-sky-dark/20 bg-white px-8 py-10", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center text-2xl", children: block.heading })) : null, _jsxs("p", { className: "mb-6 text-center text-xs text-ink/40", children: ["Sample sitemap \u00B7 max depth ", (_d = block.maxDepth) !== null && _d !== void 0 ? _d : 3] }), _jsx("ul", { className: layout === "grid"
                    ? `grid gap-4 ${cols}`
                    : layout === "tree"
                        ? "space-y-2 border-l-2 border-sky-dark/20 pl-4"
                        : "space-y-3", children: samplePages.map((page) => (_jsxs("li", { children: [_jsx("span", { className: "font-medium text-ink", children: page.title }), block.showDescriptions ? (_jsx("p", { className: "text-sm text-ink/60", children: page.description })) : null] }, page.title))) })] }));
}
