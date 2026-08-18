import type { IframeEmbedBlock as IframeEmbedBlockType } from "@/lib/types";

const heightClass: Record<string, string> = {
  small: "h-64",
  medium: "h-96",
  large: "h-[32rem]",
};

const aspectClass: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "21:9": "aspect-[21/9]",
};

export default function IframeEmbedBlock({
  block,
}: {
  block: IframeEmbedBlockType;
}) {
  const ratio = block.aspectRatio ?? "auto";
  const useAspect = ratio !== "auto" && aspectClass[ratio];
  const height = heightClass[block.height ?? "medium"] ?? heightClass.medium;

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div
        className={`relative overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${
          useAspect ? aspectClass[ratio] : height
        }`}
      >
        {block.url ? (
          <iframe
            src={block.url}
            title={block.title || "Embedded content"}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink/50">
            Add an embed URL
          </div>
        )}
      </div>
    </section>
  );
}
