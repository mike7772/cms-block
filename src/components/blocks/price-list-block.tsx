import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { PriceListBlock as PriceListBlockType } from "@/lib/types";

export default function PriceListBlock({
  block,
}: {
  block: PriceListBlockType;
}) {
  const layout = block.layout ?? "single";
  const items = block.items ?? [];

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10">
      {(block.heading || block.subheading) && (
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {block.heading ? (
            <h2 className="section-heading text-3xl sm:text-4xl">
              {block.heading}
            </h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-lg text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      <div
        className={`mx-auto max-w-4xl gap-4 ${
          layout === "two-column" ? "grid sm:grid-cols-2" : "flex flex-col"
        }`}
      >
        {items.map((item, i) => {
          const image = getPreferredImage(item.image);
          return (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-2xl border px-5 py-4 ${
                item.isFeatured
                  ? "border-court bg-sky-pale"
                  : "border-sky-dark/20 bg-sky-pale/30"
              }`}
            >
              {image ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt || item.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <span className="shrink-0 text-lg font-semibold text-trunk">
                    {item.price}
                  </span>
                </div>
                {item.description ? (
                  <p className="mt-1 text-sm text-ink/70">{item.description}</p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
