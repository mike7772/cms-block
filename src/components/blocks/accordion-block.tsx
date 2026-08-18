"use client";

import { useState } from "react";
import type { AccordionBlock as AccordionBlockType } from "@/lib/types";

export default function AccordionBlock({
  block,
}: {
  block: AccordionBlockType;
}) {
  const items = block.items ?? [];
  const [openIds, setOpenIds] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    items.forEach((item, i) => {
      if (item.defaultOpen) initial.add(item.id ?? i);
    });
    return initial;
  });

  function toggle(id: number) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="mx-auto max-w-3xl">
      {block.heading ? (
        <h2 className="section-heading mb-2">{block.heading}</h2>
      ) : null}
      {block.subheading ? (
        <p className="mb-6 text-ink/70">{block.subheading}</p>
      ) : null}

      <div className="divide-y divide-sky-dark/20 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white">
        {items.map((item, i) => {
          const id = item.id ?? i;
          const open = openIds.has(id);
          return (
            <div key={id}>
              <button
                type="button"
                onClick={() => toggle(id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink transition hover:bg-sky-pale"
                aria-expanded={open}
              >
                <span>{item.title}</span>
                <span
                  className={`text-sky-dark transition ${open ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open ? (
                <div className="border-t border-sky-dark/10 bg-sky-pale/50 px-5 py-4 text-ink/75 leading-7">
                  {item.content}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
