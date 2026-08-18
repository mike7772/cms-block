import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import type { FeaturesGridBlock as FeaturesGridBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function FeaturesGridBlock({
  block,
}: {
  block: FeaturesGridBlockType;
}) {
  const columns = block.columns ?? "3";
  const features = block.features ?? [];

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10">
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
        className={`mx-auto grid max-w-6xl gap-6 ${columnClass[columns] ?? columnClass["3"]}`}
      >
        {features.map((feature, i) => {
          const icon = getPreferredImage(feature.icon);
          const content = (
            <>
              {icon ? (
                <div className="relative mb-4 h-12 w-12 overflow-hidden rounded-xl">
                  <Image
                    src={icon.src}
                    alt={icon.alt || feature.title}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ) : (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-lg font-semibold text-ink">
                  {initialLetter(feature.title)}
                </div>
              )}
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              {feature.description ? (
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  {feature.description}
                </p>
              ) : null}
              {feature.linkLabel ? (
                <span className="mt-3 inline-block text-sm font-semibold text-court">
                  {feature.linkLabel}
                </span>
              ) : null}
            </>
          );

          const className =
            "rounded-2xl border border-sky-dark/20 bg-white/80 p-6 shadow-sm shadow-sky-dark/10 transition hover:border-sky-dark/40";

          if (feature.linkUrl) {
            return feature.linkUrl.startsWith("/") ? (
              <Link key={i} href={feature.linkUrl} className={className}>
                {content}
              </Link>
            ) : (
              <a key={i} href={feature.linkUrl} className={className}>
                {content}
              </a>
            );
          }

          return (
            <div key={i} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
