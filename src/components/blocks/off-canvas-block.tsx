"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPreferredImage } from "@/lib/media";
import type { OffCanvasBlock as OffCanvasBlockType } from "@/lib/types";

const widthClass: Record<string, string> = {
  small: "max-w-xs",
  medium: "max-w-sm",
  large: "max-w-md",
  full: "max-w-full",
};

export default function OffCanvasBlock({
  block,
}: {
  block: OffCanvasBlockType;
}) {
  const [open, setOpen] = useState(false);
  const icon = getPreferredImage(block.triggerIcon);
  const position = block.position ?? "right";
  const width = widthClass[block.width ?? "medium"] ?? widthClass.medium;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const panelPosition =
    position === "left"
      ? "inset-y-0 left-0 h-full w-full border-r"
      : position === "top"
        ? "inset-x-0 top-0 w-full border-b"
        : position === "bottom"
          ? "inset-x-0 bottom-0 w-full border-t"
          : "inset-y-0 right-0 h-full w-full border-l";

  return (
    <section className="mx-auto max-w-lg text-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary inline-flex items-center gap-2"
      >
        {icon ? (
          <span className="relative h-5 w-5">
            <Image
              src={icon.src}
              alt=""
              fill
              className="object-contain"
              sizes="20px"
            />
          </span>
        ) : null}
        {block.triggerLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close overlay"
            className="absolute inset-0 bg-ink/40"
            onClick={() =>
              block.closeOnOverlayClick !== false ? setOpen(false) : undefined
            }
          />
          <aside
            className={`absolute ${panelPosition} ${
              position === "top" || position === "bottom" ? "" : width
            } overflow-y-auto border-sky-dark/20 bg-white p-6 shadow-2xl`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-ink">
                {block.title || block.triggerLabel}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-sky-dark/30 px-3 py-1 text-sm text-ink hover:bg-sky-pale"
              >
                Close
              </button>
            </div>
            {block.content ? (
              <div className="whitespace-pre-wrap text-left text-ink/80">
                {block.content}
              </div>
            ) : (
              <p className="text-left text-ink/50">No content yet.</p>
            )}
          </aside>
        </div>
      ) : null}
    </section>
  );
}
