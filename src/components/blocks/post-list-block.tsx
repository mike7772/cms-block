"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { PostListBlock as PostListBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function PostListBlock({ block }: { block: PostListBlockType }) {
  const limit = block.postsLimit ?? 5;
  const { posts, error, locale } = usePostsQuery({
    limit,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy,
  });

  return (
    <section className="mx-auto max-w-3xl">
      {(block.heading || block.subheading) && (
        <div className="mb-6">
          {block.heading ? (
            <h2 className="section-heading text-left">{block.heading}</h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-2 text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      {posts === null ? (
        <ul className="space-y-3">
          {Array.from({ length: Math.min(limit, 5) }).map((_, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-sky-dark/20 bg-white p-3"
            >
              <div className="h-16 w-16 shrink-0 animate-pulse rounded-lg bg-sky-pale" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 w-2/3 animate-pulse rounded bg-sky-pale" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-sky-pale/80" />
              </div>
            </li>
          ))}
        </ul>
      ) : posts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-4 py-8 text-center text-sm text-ink/55">
          {error ?? "No posts found."}
        </p>
      ) : (
        <ul className="divide-y divide-sky-dark/15 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white">
          {posts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <li key={post.documentId}>
                <Link
                  href={postHref(post.slug, locale)}
                  className="flex gap-4 p-4 transition hover:bg-sky-pale/40"
                >
                  {block.showImage !== false ? (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-sky-pale">
                      {cover ? (
                        <Image
                          src={cover.src}
                          alt={cover.alt || post.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : null}
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    {block.showCategory !== false && post.category?.name ? (
                      <p className="text-xs font-medium uppercase tracking-wide text-foliage">
                        {post.category.name}
                      </p>
                    ) : null}
                    <h3 className="truncate font-semibold text-ink">
                      {post.title}
                    </h3>
                    {block.showExcerpt && post.excerpt ? (
                      <p className="mt-1 line-clamp-1 text-sm text-ink/60">
                        {post.excerpt}
                      </p>
                    ) : null}
                    {block.showDate !== false ? (
                      <time className="mt-1 block text-xs text-ink/45">
                        {formatDate(
                          post.publishedAt ?? post.createdAt,
                          locale,
                        )}
                      </time>
                    ) : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
