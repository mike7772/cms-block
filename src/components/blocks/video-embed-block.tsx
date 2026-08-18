import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { VideoEmbedBlock as VideoEmbedBlockType } from "@/lib/types";

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

const aspectClass: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "21:9": "aspect-[21/9]",
};

export default function VideoEmbedBlock({
  block,
}: {
  block: VideoEmbedBlockType;
}) {
  const embedUrl = toEmbedUrl(block.videoUrl);
  const poster = getPreferredImage(block.posterImage);
  const ratio = aspectClass[block.aspectRatio ?? "16:9"] ?? aspectClass["16:9"];

  return (
    <section className="mx-auto max-w-4xl">
      <div
        className={`relative overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${ratio}`}
      >
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={block.caption || "Video"}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : block.videoUrl ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
            {poster ? (
              <Image
                src={poster.src}
                alt={poster.alt || "Video poster"}
                fill
                className="object-cover opacity-40"
                sizes="896px"
              />
            ) : null}
            <a
              href={block.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary relative z-10"
            >
              Watch video
            </a>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink/50">
            Add a video URL
          </div>
        )}
      </div>
      {block.caption ? (
        <p className="mt-3 text-center text-sm text-ink/60">{block.caption}</p>
      ) : null}
    </section>
  );
}
