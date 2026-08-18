import Link from "next/link";
import type { ButtonGroupBlock as ButtonGroupBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

function ActionLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href || "#"} className={className}>
      {children}
    </a>
  );
}

export default function ButtonGroupBlock({
  block,
}: {
  block: ButtonGroupBlockType;
}) {
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;
  const stack = block.stackOnMobile !== false;

  return (
    <div
      className={`flex ${align} ${
        stack ? "flex-col sm:flex-row" : "flex-row"
      } gap-3`}
    >
      <ActionLink href={block.primaryUrl} className="btn-primary">
        {block.primaryLabel}
      </ActionLink>
      {block.secondaryLabel ? (
        <ActionLink
          href={block.secondaryUrl ?? "#"}
          className="inline-flex items-center justify-center rounded-full border border-sky-dark/40 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-pale"
        >
          {block.secondaryLabel}
        </ActionLink>
      ) : null}
    </div>
  );
}
