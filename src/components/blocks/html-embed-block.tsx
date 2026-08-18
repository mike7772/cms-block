"use client";

import type { HtmlEmbedBlock as HtmlEmbedBlockType } from "@/lib/types";

const maxWidthClass: Record<string, string> = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export default function HtmlEmbedBlock({
  block,
}: {
  block: HtmlEmbedBlockType;
}) {
  const maxWidth = maxWidthClass[block.maxWidth ?? "lg"] ?? maxWidthClass.lg;

  if (!block.html) {
    return (
      <div className={`mx-auto px-6 ${maxWidth}`}>
        <div className="rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50">
          Add HTML to embed
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto px-6 ${maxWidth} prose prose-ink max-w-none`}
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  );
}
