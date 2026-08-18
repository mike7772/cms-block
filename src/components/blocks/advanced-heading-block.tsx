import type { ElementType } from "react";
import type { AdvancedHeadingBlock as AdvancedHeadingBlockType } from "@/lib/types";

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export default function AdvancedHeadingBlock({
  block,
}: {
  block: AdvancedHeadingBlockType;
}) {
  const Tag = (block.headingLevel ?? "h2") as ElementType;
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;

  return (
    <section className={`mx-auto max-w-3xl ${align}`}>
      {block.eyebrow ? <p className="eyebrow mb-3">{block.eyebrow}</p> : null}
      <Tag className="section-heading">{block.title}</Tag>
      {block.subtitle ? (
        <p className="mt-4 text-lg leading-8 text-ink/70">{block.subtitle}</p>
      ) : null}
    </section>
  );
}
