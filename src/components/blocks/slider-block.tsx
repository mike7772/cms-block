"use client";

import Image from "next/image";
import { useState } from "react";
import { getMediaUrl } from "@/lib/media";
import type { SliderBlock as SliderBlockType } from "@/lib/types";

export default function SliderBlock({ block }: { block: SliderBlockType }) {
  const files = (block.files ?? [])
    .map((file) => getMediaUrl(file))
    .filter((url): url is string => Boolean(url));

  const [index, setIndex] = useState(0);

  if (!files.length) {
    return null;
  }

  const current = files[index];

  return (
    <section className="mx-auto max-w-4xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale">
        <Image
          src={current}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      {files.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              setIndex((value) => (value - 1 + files.length) % files.length)
            }
            className="rounded-full border border-sky-dark/40 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-light"
          >
            Previous
          </button>
          <span className="text-sm text-ink/60">
            {index + 1} / {files.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((value) => (value + 1) % files.length)}
            className="rounded-full border border-sky-dark/40 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-light"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
