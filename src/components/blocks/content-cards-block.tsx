import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getPreferredImage } from "@/lib/media";
import type { ContentCardsBlock as ContentCardsBlockType } from "@/lib/types";

const columnClass = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
} as const;

function CardLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "mt-4 inline-flex text-sm font-medium text-court hover:underline";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default function ContentCardsBlock({
  block,
}: {
  block: ContentCardsBlockType;
}) {
  const cards = block.cards ?? [];
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];

  return (
    <section className="mx-auto max-w-6xl">
      {block.heading ? (
        <h2 className="section-heading mb-2 text-center">{block.heading}</h2>
      ) : null}
      {block.subheading ? (
        <p className="mx-auto mb-8 max-w-2xl text-center text-ink/70">
          {block.subheading}
        </p>
      ) : null}

      <div className={`grid gap-6 ${cols}`}>
        {cards.map((card, i) => {
          const image = getPreferredImage(card.image);
          return (
            <article
              key={card.id ?? i}
              className="overflow-hidden rounded-2xl border border-sky-dark/25 bg-white"
            >
              {image ? (
                <div className="relative aspect-[16/10] w-full bg-sky-pale">
                  <Image
                    src={image.src}
                    alt={image.alt || card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
              ) : null}
              <div className="px-5 py-5">
                {card.badge ? (
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-foliage-deep">
                    {card.badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {card.title}
                </h3>
                {card.excerpt ? (
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    {card.excerpt}
                  </p>
                ) : null}
                {card.linkUrl ? (
                  <CardLink href={card.linkUrl}>
                    {card.linkLabel || "Read more"}
                  </CardLink>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
