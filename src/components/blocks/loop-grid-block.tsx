"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { LoopGridBlock as LoopGridBlockType } from "@/lib/types";
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

export default function LoopGridBlock({
  block,
}: {
  block: LoopGridBlockType;
}) {
  const perPage = block.itemsPerPage ?? 9;
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];
  const contentType = block.contentType ?? "posts";
  const { posts, locale } = usePostsQuery({
    limit: perPage,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy,
    enabled: contentType === "posts",
  });

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

      {contentType !== "posts" ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          Loop Grid for pages is not wired yet.
        </p>
      ) : posts === null ? (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {Array.from({ length: Math.min(perPage, 6) }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-sky-dark/20 bg-white"
            >
              <div className="aspect-[4/3] animate-pulse bg-sky-pale" />
              <div className="space-y-2 p-5">
                <div className="h-5 w-2/3 animate-pulse rounded bg-sky-pale" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          No posts published yet.
        </p>
      ) : (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {posts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <article
                key={post.documentId}
                className="group overflow-hidden rounded-2xl border border-sky-dark/25 bg-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-dark/15"
              >
                <Link href={postHref(post.slug, locale)} className="block">
                  {block.showImage !== false ? (
                    <div className="relative aspect-[4/3] bg-sky-pale">
                      {cover ? (
                        <Image
                          src={cover.src}
                          alt={cover.alt || post.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
                      ) : null}
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {post.title}
                    </h3>
                    {block.showExcerpt !== false && post.excerpt ? (
                      <p className="mt-2 line-clamp-3 text-sm text-ink/65">
                        {post.excerpt}
                      </p>
                    ) : null}
                    {block.showDate !== false ? (
                      <time className="mt-3 block text-xs text-ink/50">
                        {formatDate(
                          post.publishedAt ?? post.createdAt,
                          locale,
                        )}
                      </time>
                    ) : null}
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
