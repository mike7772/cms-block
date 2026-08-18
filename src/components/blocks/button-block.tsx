import Link from "next/link";
import type { ButtonBlock as ButtonBlockType } from "@/lib/types";

const variantClass: Record<string, string> = {
  primary: "btn-primary",
  secondary:
    "inline-flex items-center justify-center rounded-full bg-sky px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-dark/30",
  outline:
    "inline-flex items-center justify-center rounded-full border border-sky-dark/40 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-pale",
  ghost:
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-court transition hover:bg-sky-pale",
};

const sizeClass: Record<string, string> = {
  small: "px-4 py-2 text-xs",
  medium: "",
  large: "px-8 py-4 text-base",
};

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function ButtonBlock({ block }: { block: ButtonBlockType }) {
  const variant = variantClass[block.variant ?? "primary"] ?? variantClass.primary;
  const size = sizeClass[block.size ?? "medium"] ?? "";
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;
  const className = `${variant} ${size}`.trim();
  const target = block.openInNewTab ? "_blank" : undefined;
  const rel = block.openInNewTab ? "noopener noreferrer" : undefined;

  const link = block.url.startsWith("/") ? (
    <Link href={block.url} className={className} target={target} rel={rel}>
      {block.label}
    </Link>
  ) : (
    <a href={block.url || "#"} className={className} target={target} rel={rel}>
      {block.label}
    </a>
  );

  return <div className={`inline-flex ${align}`}>{link}</div>;
}
