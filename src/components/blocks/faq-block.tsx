"use client";

import { useState } from "react";
import type { FaqBlock as FaqBlockType } from "@/lib/types";

export default function FaqBlock({ block }: { block: FaqBlockType }) {
  const items = block.items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.length > 0 ? 0 : null,
  );

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10">
      {(block.heading || block.subheading) && (
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {block.heading ? (
            <h2 className="section-heading text-3xl sm:text-4xl">
              {block.heading}
            </h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-lg text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      <div className="mx-auto max-w-3xl divide-y divide-sky-dark/20 overflow-hidden rounded-2xl border border-sky-dark/20">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="bg-sky-pale/40">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className="font-semibold text-ink">{item.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-ink transition ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open ? (
                <div className="border-t border-sky-dark/10 bg-white px-5 py-4 text-sm leading-7 text-ink/70">
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
