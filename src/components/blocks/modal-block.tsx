"use client";

import { useEffect, useState } from "react";
import type { ModalBlock as ModalBlockType } from "@/lib/types";

const sizeClass: Record<string, string> = {
  small: "max-w-sm",
  medium: "max-w-lg",
  large: "max-w-2xl",
};

export default function ModalBlock({ block }: { block: ModalBlockType }) {
  const [open, setOpen] = useState(false);
  const size = sizeClass[block.size ?? "medium"] ?? sizeClass.medium;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="mx-auto max-w-lg text-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary"
      >
        {block.triggerLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close overlay"
            className="absolute inset-0 bg-ink/50"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={`relative z-10 w-full ${size} rounded-3xl border border-sky-dark/20 bg-white p-6 text-left shadow-2xl`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 id="modal-title" className="text-lg font-semibold text-ink">
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
              <div className="whitespace-pre-wrap text-ink/80">
                {block.content}
              </div>
            ) : (
              <p className="text-ink/50">No content yet.</p>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
