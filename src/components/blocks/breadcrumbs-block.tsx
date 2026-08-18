import type { BreadcrumbsBlock as BreadcrumbsBlockType } from "@/lib/types";

const separators: Record<string, string> = {
  slash: "/",
  chevron: "›",
  arrow: "→",
  dot: "·",
};

const alignClass: Record<string, string> = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

export default function BreadcrumbsBlock({
  block,
}: {
  block: BreadcrumbsBlockType;
}) {
  const sep = separators[block.separator ?? "slash"] ?? "/";
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;
  const style = block.style ?? "plain";

  const shell =
    style === "background"
      ? "rounded-2xl bg-sky-pale px-4 py-3"
      : style === "bordered"
        ? "rounded-2xl border border-sky-dark/25 px-4 py-3"
        : "";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mx-auto max-w-5xl ${shell}`}
    >
      <ol className={`flex flex-wrap items-center gap-2 text-sm text-ink/70 ${align}`}>
        {block.showHomePage !== false ? (
          <>
            <li>
              <a href="/" className="hover:text-ink">
                {block.homePageLabel || "Home"}
              </a>
            </li>
            <li aria-hidden className="text-ink/40">
              {sep}
            </li>
          </>
        ) : null}
        <li>
          <a href="#" className="hover:text-ink">
            Section
          </a>
        </li>
        <li aria-hidden className="text-ink/40">
          {sep}
        </li>
        <li className="font-medium text-ink" aria-current="page">
          Current page
        </li>
      </ol>
    </nav>
  );
}
