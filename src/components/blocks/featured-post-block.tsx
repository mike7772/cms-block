"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { FeaturedPostBlock as FeaturedPostBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function FeaturedPostBlock({
  block,
}: {
  block: FeaturedPostBlockType;
}) {
  const { posts, error, locale } = usePostsQuery({
    limit: 1,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy,
  });
  const post = posts?.[0] ?? null;
  const cover = post ? getPreferredImage(post.cover) : null;

  return (
    <section className="mx-auto max-w-5xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}

      {posts === null ? (
        <div className="overflow-hidden rounded-3xl border border-sky-dark/20 bg-white">
          <div className="aspect-[21/9] animate-pulse bg-sky-pale" />
          <div className="space-y-3 p-8">
            <div className="h-4 w-24 animate-pulse rounded bg-sky-pale" />
            <div className="h-8 w-2/3 animate-pulse rounded bg-sky-pale" />
            <div className="h-4 w-full animate-pulse rounded bg-sky-pale/80" />
          </div>
        </div>
      ) : !post ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          {error ?? "No featured post available."}
        </p>
      ) : (
        <article className="overflow-hidden rounded-3xl border border-sky-dark/25 bg-white shadow-sm">
          <div className="relative aspect-[21/9] min-h-[220px] bg-sky-pale">
            {cover ? (
              <Image
                src={cover.src}
                alt={cover.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-ink/40">
                No cover image
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              {block.showCategory !== false && post.category?.name ? (
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-light">
                  {post.category.name}
                </p>
              ) : null}
              <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {post.title}
              </h3>
              {block.showDate !== false ? (
                <time className="mt-2 block text-sm text-white/70">
                  {formatDate(post.publishedAt ?? post.createdAt, locale)}
                </time>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            {block.showExcerpt !== false && post.excerpt ? (
              <p className="max-w-2xl text-ink/70">{post.excerpt}</p>
            ) : (
              <span />
            )}
            <Link
              href={postHref(post.slug, locale)}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-trunk px-5 py-2.5 text-sm font-medium text-white transition hover:bg-trunk-dark"
            >
              {block.ctaLabel || "Read article"}
            </Link>
          </div>
        </article>
      )}
    </section>
  );
}
