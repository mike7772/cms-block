"use client";

import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
import type { VideoPlaylistBlock as VideoPlaylistBlockType } from "@/lib/types";

function toEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("youtu.be")
    ) {
      let id = "";
      if (parsed.hostname.includes("youtu.be")) {
        id = parsed.pathname.slice(1);
      } else if (parsed.pathname.startsWith("/embed/")) {
        return url;
      } else {
        id = parsed.searchParams.get("v") ?? "";
      }
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      if (parsed.hostname.includes("player.vimeo.com")) return url;
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function VideoPlaylistBlock({
  block,
}: {
  block: VideoPlaylistBlockType;
}) {
  const videos = block.videos ?? [];
  const [active, setActive] = useState(0);
  const current = videos[active];
  const embedUrl = current ? toEmbedUrl(current.videoUrl) : null;
  const autoplay = block.autoplay ? "?autoplay=1" : "";

  return (
    <section className="mx-auto max-w-6xl">
      {(block.heading || block.subheading) && (
        <div className="mb-8 text-center">
          {block.heading ? (
            <h2 className="section-heading">{block.heading}</h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      {videos.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add videos to the playlist
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            block.layout === "sidebar"
              ? "lg:grid-cols-[1fr_280px]"
              : block.layout === "grid"
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
          }`}
        >
          {block.layout !== "grid" ? (
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale">
              {embedUrl ? (
                <iframe
                  key={`${active}-${embedUrl}`}
                  src={`${embedUrl}${autoplay}`}
                  title={current?.title || "Video"}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : current?.videoUrl ? (
                <div className="flex h-full items-center justify-center p-6">
                  <a
                    href={current.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Watch {current.title}
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}

          <ul
            className={`flex flex-col gap-3 ${
              block.layout === "grid" ? "contents" : ""
            }`}
          >
            {videos.map((video, i) => {
              const thumb = getPreferredImage(video.thumbnail);
              return (
                <li key={`${video.title}-${i}`}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full gap-3 rounded-2xl border p-3 text-left transition ${
                      i === active
                        ? "border-sky-dark bg-sky-pale"
                        : "border-sky-dark/20 bg-white hover:bg-sky-pale/50"
                    } ${block.layout === "grid" ? "flex-col" : "items-center"}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl bg-sky-light ${
                        block.layout === "grid"
                          ? "aspect-video w-full"
                          : "h-16 w-24 shrink-0"
                      }`}
                    >
                      {thumb ? (
                        <Image
                          src={thumb.src}
                          alt={thumb.alt || video.title}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-ink/40">
                          ▶
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-ink">
                        {video.title}
                      </p>
                      {video.duration ? (
                        <p className="text-xs text-ink/50">{video.duration}</p>
                      ) : null}
                      {video.description && block.layout === "grid" ? (
                        <p className="mt-1 line-clamp-2 text-sm text-ink/60">
                          {video.description}
                        </p>
                      ) : null}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
