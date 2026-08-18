"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { LoopCarouselBlock as LoopCarouselBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function LoopCarouselBlock({
  block,
}: {
  block: LoopCarouselBlockType;
}) {
  const show = block.itemsToShow ?? 3;
  const contentType = block.contentType ?? "posts";
  const { posts, locale } = usePostsQuery({
    limit: Math.max(show * 2, 6),
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
          Loop Carousel for pages is not wired yet.
        </p>
      ) : posts === null ? (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: Math.min(show, 4) }).map((_, i) => (
            <div
              key={i}
              className="w-64 shrink-0 overflow-hidden rounded-2xl border border-sky-dark/20 bg-white sm:w-72"
            >
              <div className="aspect-video animate-pulse bg-sky-pale" />
              <div className="space-y-2 p-4">
                <div className="h-5 w-3/4 animate-pulse rounded bg-sky-pale" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          No posts published yet.
        </p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {posts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <article
                key={post.documentId}
                className="w-64 shrink-0 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white transition hover:shadow-md sm:w-72"
              >
                <Link href={postHref(post.slug, locale)} className="block">
                  <div className="relative aspect-video bg-sky-pale">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="288px"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-ink">
                      {post.title}
                    </h3>
                    {post.excerpt ? (
                      <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <time className="mt-2 block text-xs text-ink/50">
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
