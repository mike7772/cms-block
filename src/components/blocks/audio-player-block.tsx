import type { AudioPlayerBlock as AudioPlayerBlockType } from "@/lib/types";

export default function AudioPlayerBlock({
  block,
}: {
  block: AudioPlayerBlockType;
}) {
  return (
    <figure className="mx-auto max-w-xl rounded-3xl border border-sky-dark/20 bg-sky-pale/40 px-6 py-6">
      {block.title ? (
        <figcaption className="mb-3 font-semibold text-ink">
          {block.title}
        </figcaption>
      ) : null}
      {block.src ? (
        <audio controls className="w-full" preload="metadata" src={block.src}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <div className="rounded-2xl border border-dashed border-sky-dark/30 bg-white px-4 py-8 text-center text-sm text-ink/50">
          Add an audio source URL
        </div>
      )}
      {block.caption ? (
        <p className="mt-3 text-sm text-ink/60">{block.caption}</p>
      ) : null}
    </figure>
  );
}
