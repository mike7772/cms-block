"use client";

import { useState } from "react";
import type { VideoSliderBlock as VideoSliderBlockType } from "@/lib/types";

function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (u.pathname.startsWith("/embed/")) return url;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function VideoSliderBlock({
  block,
}: {
  block: VideoSliderBlockType;
}) {
  const items = (block.items ?? []).filter((i) => i.videoUrl);
  const [index, setIndex] = useState(0);
  const current = items[index];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50">
        Add video slides
      </div>
    );
  }

  const embed = toEmbedUrl(current.videoUrl);

  return (
    <section className="mx-auto max-w-4xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      <div className="overflow-hidden rounded-2xl border border-sky-dark/25 bg-white">
        <div className="relative aspect-video bg-ink">
          {embed ? (
            <iframe
              src={embed}
              title={current.title || `Video ${index + 1}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              key={current.videoUrl}
              src={current.videoUrl}
              poster={current.posterUrl || undefined}
              controls
              className="absolute inset-0 h-full w-full object-contain"
            />
          )}
        </div>
        {(current.title || items.length > 1) && (
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <p className="truncate text-sm font-medium text-ink">
              {current.title || `Video ${index + 1}`}
            </p>
            {items.length > 1 ? (
              <div className="flex items-center gap-2">
                {block.showArrows !== false ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setIndex((i) => (i - 1 + items.length) % items.length)
                      }
                      className="rounded-full border border-sky-dark/30 px-3 py-1 text-sm"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => setIndex((i) => (i + 1) % items.length)}
                      className="rounded-full border border-sky-dark/30 px-3 py-1 text-sm"
                    >
                      Next
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        )}
        {block.showDots !== false && items.length > 1 ? (
          <div className="flex justify-center gap-1.5 pb-4">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Video ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-trunk" : "bg-sky-dark/30"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
