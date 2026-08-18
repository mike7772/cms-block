"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { TaxonomyFilterBlock as TaxonomyFilterBlockType } from "@/lib/types";
import {
  categoryPostCount,
  useCategoriesQuery,
} from "@/lib/use-categories-query";
import { usePostsQuery } from "@/lib/use-posts-query";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function TaxonomyFilterBlock({
  block,
}: {
  block: TaxonomyFilterBlockType;
}) {
  const layout = block.layout ?? "pills";
  const allLabel = block.allOptionLabel || "All";
  const perPage = block.itemsPerPage ?? 9;
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];
  const contentType = block.contentType ?? "posts";
  const showAll = block.showAllOption !== false;

  const [selected, setSelected] = useState<string>("all");
  const [checked, setChecked] = useState<string[]>([]);

  const { categories } = useCategoriesQuery({
    enabled: contentType === "posts",
  });

  const activeSlug = useMemo(() => {
    if (layout === "checkboxes") {
      return checked.length === 1 ? checked[0] : null;
    }
    return selected === "all" ? null : selected;
  }, [layout, checked, selected]);

  const multiFilter =
    layout === "checkboxes" && checked.length > 1 ? checked : null;

  const { posts, error, locale } = usePostsQuery({
    limit: multiFilter ? Math.min(50, perPage * 3) : perPage,
    categorySlug: multiFilter ? null : activeSlug,
    enabled: contentType === "posts",
  });

  const filteredPosts = useMemo(() => {
    if (!posts) return null;
    if (!multiFilter) return posts.slice(0, perPage);
    return posts
      .filter((p) => p.category?.slug && multiFilter.includes(p.category.slug))
      .slice(0, perPage);
  }, [posts, multiFilter, perPage]);

  const taxonomies = categories ?? [];

  function selectAll() {
    setSelected("all");
    setChecked([]);
  }

  function selectOne(slug: string) {
    setSelected(slug);
    setChecked([slug]);
  }

  function toggleCheck(slug: string) {
    setChecked((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
    setSelected(slug);
  }

  return (
    <section className="mx-auto max-w-6xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}

      {contentType !== "posts" ? (
        <p className="mb-6 rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/60 px-4 py-3 text-center text-sm text-ink/70">
          Page filtering is not available yet. Showing posts only.
        </p>
      ) : null}

      {layout === "dropdown" ? (
        <div className="mx-auto mb-8 max-w-xs">
          <select
            className="w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink"
            value={selected}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "all") selectAll();
              else selectOne(value);
            }}
          >
            {showAll ? <option value="all">{allLabel}</option> : null}
            {taxonomies.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
                {categoryPostCount(c) ? ` (${categoryPostCount(c)})` : ""}
              </option>
            ))}
          </select>
        </div>
      ) : layout === "checkboxes" ? (
        <ul className="mx-auto mb-8 flex max-w-sm flex-col gap-2">
          {showAll ? (
            <li>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={checked.length === 0}
                  onChange={() => selectAll()}
                />
                {allLabel}
              </label>
            </li>
          ) : null}
          {taxonomies.map((c) => (
            <li key={c.slug}>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={checked.includes(c.slug)}
                  onChange={() => toggleCheck(c.slug)}
                />
                {c.name}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {showAll ? (
            <button
              type="button"
              onClick={selectAll}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                selected === "all" && checked.length === 0
                  ? "bg-trunk text-white"
                  : "border border-sky-dark/30 bg-white text-ink/70 hover:border-sky-dark/50"
              }`}
            >
              {allLabel}
            </button>
          ) : null}
          {taxonomies.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => selectOne(c.slug)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                selected === c.slug
                  ? "bg-trunk text-white"
                  : "border border-sky-dark/30 bg-white text-ink/70 hover:border-sky-dark/50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {filteredPosts === null ? (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {Array.from({ length: Math.min(perPage, 6) }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale"
            />
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          {error ?? "No posts match this filter."}
        </p>
      ) : (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {filteredPosts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <article
                key={post.documentId}
                className="overflow-hidden rounded-2xl border border-sky-dark/25 bg-white"
              >
                <Link href={postHref(post.slug, locale)} className="block">
                  <div className="relative aspect-video bg-sky-pale">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : null}
                  </div>
                  <div className="p-5">
                    {post.category?.name ? (
                      <p className="text-xs font-medium uppercase tracking-wide text-foliage">
                        {post.category.name}
                      </p>
                    ) : null}
                    <h3 className="mt-1 font-semibold text-ink">{post.title}</h3>
                    {post.excerpt ? (
                      <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <time className="mt-3 block text-xs text-ink/50">
                      {formatDate(post.publishedAt ?? post.createdAt, locale)}
                    </time>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
