import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { MediaBlock as MediaBlockType } from "@/lib/types";

export default function MediaBlock({ block }: { block: MediaBlockType }) {
  const image = getPreferredImage(block.file);

  if (!image) {
    return null;
  }

  return (
    <figure className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
      {image.alt ? (
        <figcaption className="px-4 py-3 text-sm text-ink/60">
          {image.alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
