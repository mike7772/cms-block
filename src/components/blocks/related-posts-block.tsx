"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { RelatedPostsBlock as RelatedPostsBlockType } from "@/lib/types";
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

export default function RelatedPostsBlock({
  block,
}: {
  block: RelatedPostsBlockType;
}) {
  const limit = block.postsLimit ?? 3;
  const cols = columnClass[block.columns ?? "3"] ?? columnClass["3"];
  const slug = block.categorySlug?.trim() || null;
  const { posts, error, locale } = usePostsQuery({
    limit,
    categorySlug: slug,
    enabled: Boolean(slug),
  });

  return (
    <section className="mx-auto max-w-6xl">
      {block.heading ? (
        <h2 className="section-heading mb-8 text-center">{block.heading}</h2>
      ) : null}

      {!slug ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          Set a category slug to show related posts.
        </p>
      ) : posts === null ? (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {Array.from({ length: Math.min(limit, 3) }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-2xl border border-sky-dark/20 bg-sky-pale"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          {error ?? "No related posts found."}
        </p>
      ) : (
        <div className={`grid grid-cols-1 gap-6 ${cols}`}>
          {posts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <article
                key={post.documentId}
                className="overflow-hidden rounded-2xl border border-sky-dark/25 bg-white"
              >
                <Link href={postHref(post.slug, locale)} className="block">
                  {block.showImage !== false ? (
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
                  ) : null}
                  <div className="p-5">
                    <h3 className="font-semibold text-ink">{post.title}</h3>
                    {block.showExcerpt !== false && post.excerpt ? (
                      <p className="mt-2 line-clamp-2 text-sm text-ink/65">
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
