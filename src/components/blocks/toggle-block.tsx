"use client";

import { useState } from "react";
import type { ToggleBlock as ToggleBlockType } from "@/lib/types";

export default function ToggleBlock({ block }: { block: ToggleBlockType }) {
  const [open, setOpen] = useState(Boolean(block.openByDefault));
  const style = block.iconStyle ?? "plus";

  const icon =
    style === "chevron" ? (open ? "▾" : "▸") : style === "caret" ? (open ? "▼" : "▶") : open ? "−" : "+";

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-ink">{block.title}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-pale text-sm font-bold text-trunk">
          {icon}
        </span>
      </button>
      {open ? (
        <div className="border-t border-sky-dark/15 px-5 py-4 text-sm leading-6 text-ink/70 whitespace-pre-wrap">
          {block.content}
        </div>
      ) : null}
    </div>
  );
}
