"use client";

import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
import type { HotspotBlock as HotspotBlockType } from "@/lib/types";

export default function HotspotBlock({ block }: { block: HotspotBlockType }) {
  const image = getPreferredImage(block.image);
  const points = block.points ?? [];
  const [active, setActive] = useState<number | null>(null);
  const trigger = block.trigger ?? "hover";

  return (
    <section className="mx-auto max-w-5xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale">
          <Image
            src={image.src}
            alt={image.alt || block.heading || "Hotspot image"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          {points.map((point, i) => {
            const open = active === i;
            return (
              <div
                key={`${point.title}-${i}`}
                className="absolute z-10"
                style={{
                  left: `${point.xPosition}%`,
                  top: `${point.yPosition}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() =>
                  trigger === "hover" ? setActive(i) : undefined
                }
                onMouseLeave={() =>
                  trigger === "hover" ? setActive(null) : undefined
                }
              >
                <button
                  type="button"
                  aria-label={point.title}
                  onClick={() =>
                    trigger === "click"
                      ? setActive(open ? null : i)
                      : undefined
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-trunk text-sm font-bold text-white shadow-lg shadow-trunk/30"
                >
                  +
                </button>
                {open ? (
                  <div className="absolute left-1/2 top-10 z-20 w-56 -translate-x-1/2 rounded-2xl border border-sky-dark/20 bg-white p-4 text-left shadow-xl">
                    <p className="font-semibold text-ink">{point.title}</p>
                    {point.description ? (
                      <p className="mt-1 text-sm text-ink/70">
                        {point.description}
                      </p>
                    ) : null}
                    {point.linkUrl ? (
                      <a
                        href={point.linkUrl}
                        className="mt-2 inline-block text-sm font-medium text-trunk underline-offset-2 hover:underline"
                      >
                        Learn more
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-16 text-center text-ink/60">
          Add a hotspot image URL
        </div>
      )}
    </section>
  );
}
