import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { ReviewsBlock as ReviewsBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

function Stars({ rating }: { rating: string }) {
  const n = Number(rating);
  return (
    <div className="flex gap-0.5 text-court" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsBlock({
  block,
}: {
  block: ReviewsBlockType;
}) {
  const reviews = block.reviews ?? [];
  const layout = block.layout ?? "grid";
  const columns = block.columns ?? "3";

  const avg =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length
      : 0;

  const listClass =
    layout === "list"
      ? "mx-auto flex max-w-3xl flex-col gap-4"
      : layout === "carousel"
        ? "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        : `mx-auto grid max-w-6xl gap-5 ${columnClass[columns] ?? columnClass["3"]}`;

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-white px-6 py-12 sm:px-10">
      {(block.heading || block.subheading || block.showAverageRating) && (
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {block.heading ? (
            <h2 className="section-heading text-3xl sm:text-4xl">
              {block.heading}
            </h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-lg text-ink/70">{block.subheading}</p>
          ) : null}
          {block.showAverageRating && reviews.length > 0 ? (
            <p className="mt-4 text-sm font-semibold text-trunk">
              Average rating: {avg.toFixed(1)} / 5 · {reviews.length} reviews
            </p>
          ) : null}
        </div>
      )}

      <div className={listClass}>
        {reviews.map((review, i) => {
          const avatar = getPreferredImage(review.authorAvatar);
          return (
            <article
              key={i}
              className={`rounded-2xl border border-sky-dark/20 bg-sky-pale/50 p-5 ${
                layout === "carousel"
                  ? "w-[min(100%,300px)] shrink-0 snap-start"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {avatar ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={avatar.src}
                        alt={avatar.alt || review.authorName}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-sm font-semibold text-ink">
                      {initialLetter(review.authorName)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {review.authorName}
                    </p>
                    {review.source ? (
                      <p className="text-xs capitalize text-ink/50">
                        {review.source}
                      </p>
                    ) : null}
                  </div>
                </div>
                <Stars rating={review.rating} />
              </div>
              {review.title ? (
                <h3 className="mt-3 font-semibold text-ink">{review.title}</h3>
              ) : null}
              <p className="mt-2 text-sm leading-6 text-ink/70">{review.body}</p>
              {review.date ? (
                <p className="mt-3 text-xs text-ink/50">{review.date}</p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
