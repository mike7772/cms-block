import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { TestimonialsBlock as TestimonialsBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

function Stars({ rating }: { rating?: string | null }) {
  const n = Number(rating ?? 0);
  if (!n) return null;
  return (
    <div className="flex gap-0.5 text-court" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsBlock({
  block,
}: {
  block: TestimonialsBlockType;
}) {
  const layout = block.layout ?? "carousel";
  const testimonials = block.testimonials ?? [];
  const isCarousel = layout === "carousel";

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-white via-sky-pale to-sky-light px-6 py-12 sm:px-10">
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
        className={
          isCarousel
            ? "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
            : "mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {testimonials.map((t, i) => {
          const avatar = getPreferredImage(t.avatar);
          return (
            <article
              key={i}
              className={`rounded-2xl border border-sky-dark/20 bg-white/90 p-6 shadow-sm shadow-sky-dark/10 ${
                isCarousel ? "w-[min(100%,320px)] shrink-0 snap-start" : ""
              }`}
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-3 text-base leading-7 text-ink/80">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                {avatar ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={avatar.src}
                      alt={avatar.alt || t.authorName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-trunk text-sm font-semibold text-white">
                    {initialLetter(t.authorName)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t.authorName}
                  </p>
                  {t.authorRole ? (
                    <p className="text-xs text-ink/60">{t.authorRole}</p>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
