import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { GalleryBlock as GalleryBlockType } from "@/lib/types";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
  "5": "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};

export default function GalleryBlock({ block }: { block: GalleryBlockType }) {
  const images = (block.images ?? [])
    .map((img) => getPreferredImage(img))
    .filter((img): img is NonNullable<typeof img> => Boolean(img));

  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];

  return (
    <section className="mx-auto max-w-6xl">
      {block.heading ? (
        <h2 className="section-heading mb-8 text-center">{block.heading}</h2>
      ) : null}
      {images.length ? (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {images.map((image, i) => (
            <figure
              key={`${image.src}-${i}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sky-dark/25 bg-sky-pale"
            >
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add images to the gallery
        </div>
      )}
    </section>
  );
}
