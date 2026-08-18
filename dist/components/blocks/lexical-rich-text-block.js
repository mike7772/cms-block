import { jsx as _jsx } from "react/jsx-runtime";
export default function LexicalRichTextBlock({ block, }) {
    if (!block.body)
        return null;
    return (_jsx("section", { className: "prose prose-slate mx-auto max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-court prose-strong:text-ink prose-td:px-1.5 prose-td:py-1 prose-th:px-1.5 prose-th:py-1 prose-table:text-sm", dangerouslySetInnerHTML: { __html: block.body } }));
}
