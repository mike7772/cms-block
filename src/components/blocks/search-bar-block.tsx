"use client";

import type { SearchBarBlock as SearchBarBlockType } from "@/lib/types";

const widthClass: Record<string, string> = {
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-2xl",
  full: "max-w-full",
};

const alignClass: Record<string, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export default function SearchBarBlock({
  block,
}: {
  block: SearchBarBlockType;
}) {
  const width = widthClass[block.width ?? "medium"] ?? widthClass.medium;
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;
  const style = block.style ?? "boxed";

  const shell =
    style === "minimal"
      ? "border-b border-sky-dark/30 bg-transparent"
      : style === "inline"
        ? "border border-sky-dark/20 bg-white"
        : style === "expanded"
          ? "border border-sky-dark/25 bg-sky-pale px-2 py-2"
          : "rounded-2xl border border-sky-dark/25 bg-white shadow-sm";

  return (
    <section className={`${width} ${align} w-full`}>
      <form
        className={`flex items-center gap-2 overflow-hidden rounded-2xl px-3 py-2 ${shell}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          name="q"
          placeholder={block.placeholder || "Search…"}
          className="min-w-0 flex-1 bg-transparent px-2 py-2 text-ink outline-none placeholder:text-ink/40"
          aria-label="Search"
        />
        {block.showButton !== false ? (
          <button type="submit" className="btn-primary shrink-0 !px-4 !py-2">
            {block.buttonLabel || "Search"}
          </button>
        ) : null}
      </form>
      {block.searchType && block.searchType !== "all" ? (
        <p className="mt-2 text-center text-xs text-ink/50">
          Searching {block.searchType}
        </p>
      ) : null}
    </section>
  );
}
