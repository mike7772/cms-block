import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function QuoteBlock({ block }) {
    return (_jsxs("blockquote", { className: "mx-auto max-w-3xl rounded-r-2xl border-l-4 border-court bg-sky-pale px-8 py-6", children: [block.title ? (_jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wide text-foliage-deep", children: block.title })) : null, block.body ? (_jsxs("p", { className: "text-xl leading-relaxed text-ink/80 italic", children: ["\u201C", block.body, "\u201D"] })) : null] }));
}
