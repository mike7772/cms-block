import type { TableOfContentsBlock as TableOfContentsBlockType } from "@/lib/types";

export default function TableOfContentsBlock({
  block,
}: {
  block: TableOfContentsBlockType;
}) {
  const items = block.items ?? [];
  const sticky = block.sticky ? "lg:sticky lg:top-24" : "";

  return (
    <nav
      aria-label="Table of contents"
      className={`mx-auto max-w-md rounded-3xl border border-sky-dark/20 bg-sky-pale/40 px-6 py-6 ${sticky}`}
    >
      {block.heading ? (
        <h2 className="mb-4 text-lg font-semibold text-ink">{block.heading}</h2>
      ) : null}
      {items.length ? (
        <ol className={`space-y-2 ${block.showNumbers === false ? "list-none" : "list-decimal pl-5"}`}>
          {items.map((item, i) => (
            <li key={`${item.anchorId}-${i}`} className="text-sm text-ink/80">
              <a
                href={`#${item.anchorId.replace(/^#/, "")}`}
                className="hover:text-trunk hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-sm text-ink/50">
          {block.mode === "auto"
            ? "Headings will be detected automatically"
            : "Add TOC items"}
        </p>
      )}
    </nav>
  );
}
