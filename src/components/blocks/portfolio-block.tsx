"use client";

import Image from "next/image";
import { useState } from "react";
import { getPreferredImage } from "@/lib/media";
import type { PortfolioBlock as PortfolioBlockType } from "@/lib/types";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function PortfolioBlock({
  block,
}: {
  block: PortfolioBlockType;
}) {
  const items = block.items ?? [];
  const categories = Array.from(
    new Set(
      items
        .map((item) => item.category)
        .filter((cat): cat is string => Boolean(cat)),
    ),
  );

  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];

  return (
    <section className="mx-auto max-w-6xl">
      {(block.heading || block.subheading) && (
        <div className="mb-8 text-center">
          {block.heading ? (
            <h2 className="section-heading">{block.heading}</h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      {block.enableFilter && categories.length > 0 ? (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === "all"
                ? "bg-trunk text-white"
                : "border border-sky-dark/30 bg-white text-ink hover:bg-sky-pale"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === cat
                  ? "bg-trunk text-white"
                  : "border border-sky-dark/30 bg-white text-ink hover:bg-sky-pale"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length ? (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {filtered.map((item, i) => {
            const image = getPreferredImage(item.image);
            const body = (
              <>
                {image ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-sky-pale">
                    <Image
                      src={image.src}
                      alt={image.alt || item.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-sky-pale" />
                )}
                <div className="p-5">
                  {item.category ? (
                    <p className="eyebrow mb-1">{item.category}</p>
                  ) : null}
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="mt-2 line-clamp-3 text-sm text-ink/70">
                      {item.description}
                    </p>
                  ) : null}
                  {(item.client || item.date) && (
                    <p className="mt-3 text-xs text-ink/50">
                      {[item.client, item.date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </>
            );

            return item.linkUrl ? (
              <a
                key={`${item.title}-${i}`}
                href={item.linkUrl}
                className="group overflow-hidden rounded-3xl border border-sky-dark/20 bg-white transition hover:border-sky-dark/40"
              >
                {body}
              </a>
            ) : (
              <article
                key={`${item.title}-${i}`}
                className="overflow-hidden rounded-3xl border border-sky-dark/20 bg-white"
              >
                {body}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add portfolio items
        </div>
      )}
    </section>
  );
}
