import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { RichTextBlock as RichTextBlockType } from "@/lib/types";

type RichTextBody = string | ReactNode;

export default function RichTextBlock({
  block,
}: {
  block: Omit<RichTextBlockType, "body"> & { body: RichTextBody };
}) {
  return (
    <section className="prose prose-slate mx-auto max-w-3xl prose-headings:text-ink prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-court prose-strong:text-ink">
      {typeof block.body === "string" ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.body}</ReactMarkdown>
      ) : (
        block.body
      )}
    </section>
  );
}
