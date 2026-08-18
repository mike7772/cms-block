"use client";

import Link from "next/link";
import { useState } from "react";
import type { BannerBlock as BannerBlockType } from "@/lib/types";

const variantStyles = {
  info: "border-sky-dark/40 bg-sky-pale text-ink",
  success: "border-foliage/40 bg-foliage/10 text-foliage-deep",
  warning: "border-court/40 bg-court/10 text-ink",
  danger: "border-red-300 bg-red-50 text-red-900",
} as const;

export default function BannerBlock({ block }: { block: BannerBlockType }) {
  const [dismissed, setDismissed] = useState(false);
  const styles = variantStyles[block.variant ?? "info"] ?? variantStyles.info;

  if (dismissed) return null;

  const link =
    block.linkLabel && block.linkUrl ? (
      block.linkUrl.startsWith("/") ? (
        <Link
          href={block.linkUrl}
          className="shrink-0 text-sm font-semibold underline underline-offset-2"
        >
          {block.linkLabel}
        </Link>
      ) : (
        <a
          href={block.linkUrl}
          className="shrink-0 text-sm font-semibold underline underline-offset-2"
        >
          {block.linkLabel}
        </a>
      )
    ) : null;

  return (
    <div
      className={`flex items-center justify-between gap-4 border-y px-4 py-3 sm:px-6 ${styles}`}
      role="status"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 text-center text-sm sm:justify-between sm:text-left">
        <p className="font-medium">{block.message}</p>
        <div className="flex items-center gap-3">
          {link}
          {block.dismissible ? (
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="rounded-lg px-2 py-1 text-sm opacity-60 transition hover:opacity-100"
              aria-label="Dismiss banner"
            >
              ×
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
