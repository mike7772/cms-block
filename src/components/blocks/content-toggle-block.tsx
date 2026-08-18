"use client";

import { useState } from "react";
import type { ContentToggleBlock as ContentToggleBlockType } from "@/lib/types";

export default function ContentToggleBlock({
  block,
}: {
  block: ContentToggleBlockType;
}) {
  const [pane, setPane] = useState<"a" | "b">(block.defaultPane ?? "a");
  const content = pane === "a" ? block.contentA : block.contentB;

  return (
    <section className="mx-auto max-w-3xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      <div className="mb-4 flex justify-center gap-2 rounded-full border border-sky-dark/25 bg-sky-pale/50 p-1">
        {(["a", "b"] as const).map((key) => {
          const label = key === "a" ? block.labelA : block.labelB;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setPane(key)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                pane === key
                  ? "bg-trunk text-white shadow"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-sky-dark/25 bg-white p-6 text-sm leading-6 text-ink/75 whitespace-pre-wrap">
        {content}
      </div>
    </section>
  );
}
