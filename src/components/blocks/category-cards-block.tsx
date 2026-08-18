"use client";

import Link from "next/link";
import { postsHref } from "@/lib/nav";
import type { CategoryCardsBlock as CategoryCardsBlockType } from "@/lib/types";
import {
  categoryPostCount,
  useCategoriesQuery,
} from "@/lib/use-categories-query";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function CategoryCardsBlock({
  block,
}: {
  block: CategoryCardsBlockType;
}) {
  const limit = block.limit ?? 6;
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];
  const { categories, error, locale } = useCategoriesQuery({ limit });

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

      {categories === null ? (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {Array.from({ length: Math.min(limit, 6) }).map((_, i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale"
            />
          ))}
        </div>
      ) : categories.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          {error ?? "No categories found."}
        </p>
      ) : (
        <div className={`grid grid-cols-1 gap-5 ${cols}`}>
          {categories.map((category) => {
            const count = categoryPostCount(category);
            return (
              <Link
                key={category.slug}
                href={`${postsHref(locale)}?category=${encodeURIComponent(category.slug)}`}
                className="rounded-2xl border border-sky-dark/25 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-dark/45 hover:shadow-lg hover:shadow-sky-dark/10"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {category.name}
                </h3>
                {block.showDescription !== false && category.description ? (
                  <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                    {category.description}
                  </p>
                ) : null}
                {block.showCount !== false ? (
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-foliage">
                    {count} {count === 1 ? "post" : "posts"}
                  </p>
                ) : null}
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
