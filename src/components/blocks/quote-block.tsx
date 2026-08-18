import type { QuoteBlock as QuoteBlockType } from "@/lib/types";

export default function QuoteBlock({ block }: { block: QuoteBlockType }) {
  return (
    <blockquote className="mx-auto max-w-3xl rounded-r-2xl border-l-4 border-court bg-sky-pale px-8 py-6">
      {block.title ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-foliage-deep">
          {block.title}
        </p>
      ) : null}
      {block.body ? (
        <p className="text-xl leading-relaxed text-ink/80 italic">
          &ldquo;{block.body}&rdquo;
        </p>
      ) : null}
    </blockquote>
  );
}
