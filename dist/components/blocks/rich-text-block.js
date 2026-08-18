import { jsx as _jsx } from "react/jsx-runtime";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function RichTextBlock({ block, }) {
    return (_jsx("section", { className: "prose prose-slate mx-auto max-w-3xl prose-headings:text-ink prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-court prose-strong:text-ink", children: typeof block.body === "string" ? (_jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], children: block.body })) : (block.body) }));
}
