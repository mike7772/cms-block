"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FilterablePortfolioBlock as FilterablePortfolioBlockType } from "@/lib/types";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function FilterablePortfolioBlock({
  block,
}: {
  block: FilterablePortfolioBlockType;
}) {
  const items = block.items ?? [];
  const allLabel = block.allLabel || "All";
  const style = block.filterStyle ?? "pills";
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of items) {
      if (!item.category) continue;
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return Array.from(map.entries());
  }, [items]);

  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  const filterUi =
    style === "dropdown" ? (
      <div className="mb-8 flex justify-center">
        <select
          className="rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">
            {allLabel}
            {block.showCounts ? ` (${items.length})` : ""}
          </option>
          {categories.map(([cat, count]) => (
            <option key={cat} value={cat}>
              {cat}
              {block.showCounts ? ` (${count})` : ""}
            </option>
          ))}
        </select>
      </div>
    ) : (
      <div
        className={`mb-8 flex flex-wrap justify-center gap-2 ${
          style === "tabs" ? "border-b border-sky-dark/20 pb-3" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 text-sm font-medium transition ${
            style === "tabs"
              ? filter === "all"
                ? "border-b-2 border-trunk text-trunk"
                : "text-ink/60"
              : filter === "all"
                ? "rounded-full bg-trunk text-white"
                : "rounded-full border border-sky-dark/30 bg-white text-ink/70"
          }`}
        >
          {allLabel}
          {block.showCounts ? ` (${items.length})` : ""}
        </button>
        {categories.map(([cat, count]) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 text-sm font-medium transition ${
              style === "tabs"
                ? filter === cat
                  ? "border-b-2 border-trunk text-trunk"
                  : "text-ink/60"
                : filter === cat
                  ? "rounded-full bg-trunk text-white"
                  : "rounded-full border border-sky-dark/30 bg-white text-ink/70"
            }`}
          >
            {cat}
            {block.showCounts ? ` (${count})` : ""}
          </button>
        ))}
      </div>
    );

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

      {categories.length > 0 ? filterUi : null}

      {!filtered.length ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          No portfolio items in this category.
        </p>
      ) : (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {filtered.map((item, i) => {
            const body = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-foliage">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-semibold text-ink">{item.title}</h3>
                  {item.description ? (
                    <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </>
            );
            return (
              <article
                key={`${item.title}-${i}`}
                className="group overflow-hidden rounded-2xl border border-sky-dark/25 bg-white"
              >
                {item.url ? (
                  <Link href={item.url} className="block">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
