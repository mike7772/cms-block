"use client";

import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
import type { AlertBlock as AlertBlockType } from "@/lib/types";

const variantStyles = {
  info: "border-sky-dark/40 bg-sky-pale text-ink",
  success: "border-foliage/40 bg-foliage/10 text-foliage-deep",
  warning: "border-court/40 bg-court/10 text-ink",
  danger: "border-red-300 bg-red-50 text-red-900",
} as const;

export default function AlertBlock({ block }: { block: AlertBlockType }) {
  const [dismissed, setDismissed] = useState(false);
  const icon = getPreferredImage(block.icon);
  const styles = variantStyles[block.variant] ?? variantStyles.info;

  if (dismissed) return null;

  return (
    <aside
      className={`mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border px-5 py-4 ${styles}`}
      role="alert"
    >
      {icon ? (
        <div className="relative mt-0.5 h-6 w-6 shrink-0 overflow-hidden rounded">
          <Image
            src={icon.src}
            alt={icon.alt || ""}
            fill
            className="object-contain"
            sizes="24px"
          />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="font-semibold tracking-tight">{block.title}</p>
        <p className="mt-1 text-sm leading-6 opacity-80">{block.message}</p>
      </div>
      {block.dismissible ? (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-lg px-2 py-1 text-sm opacity-60 transition hover:opacity-100"
          aria-label="Dismiss alert"
        >
          ×
        </button>
      ) : null}
    </aside>
  );
}
