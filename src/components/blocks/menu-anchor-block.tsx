import type { MenuAnchorBlock as MenuAnchorBlockType } from "@/lib/types";

export default function MenuAnchorBlock({
  block,
}: {
  block: MenuAnchorBlockType;
}) {
  const id = block.anchorId?.replace(/^#/, "") || "anchor";

  return (
    <div
      id={id}
      className="scroll-mt-24 border-t border-dashed border-sky-dark/20 py-2"
    >
      {block.label ? (
        <p className="text-xs uppercase tracking-wide text-ink/40">
          {block.label} · #{id}
        </p>
      ) : (
        <span className="sr-only">Anchor #{id}</span>
      )}
    </div>
  );
}
