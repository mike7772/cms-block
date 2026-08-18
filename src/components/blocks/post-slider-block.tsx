"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { PostSliderBlock as PostSliderBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function PostSliderBlock({
  block,
}: {
  block: PostSliderBlockType;
}) {
  const limit = block.postsLimit ?? 5;
  const { posts, locale } = usePostsQuery({
    limit,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy,
  });
  const [index, setIndex] = useState(0);
  const count = posts?.length ?? 0;

  useEffect(() => {
    if (!block.autoplay || count < 2) return;
    const speed = block.autoplaySpeed ?? 5000;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, speed);
    return () => window.clearInterval(id);
  }, [block.autoplay, block.autoplaySpeed, count]);

  const post = posts?.[index] ?? null;
  const cover = post ? getPreferredImage(post.cover) : null;

  return (
    <section className="mx-auto max-w-5xl">
      {(block.heading || block.subheading) && (
        <div className="mb-6 text-center">
          {block.heading ? (
            <h2 className="section-heading">{block.heading}</h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-2 text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      {posts === null ? (
        <div className="aspect-[21/9] animate-pulse rounded-3xl bg-sky-pale" />
      ) : !post ? (
        <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-10 text-center text-ink/55">
          No posts to slide.
        </p>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-sky-dark/25 bg-white">
          <Link href={postHref(post.slug, locale)} className="block">
            <div className="relative aspect-[21/9] min-h-[200px] bg-sky-pale">
              {cover ? (
                <Image
                  src={cover.src}
                  alt={cover.alt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
                  {post.title}
                </h3>
                {block.showExcerpt !== false && post.excerpt ? (
                  <p className="mt-2 line-clamp-2 max-w-xl text-sm text-white/80">
                    {post.excerpt}
                  </p>
                ) : null}
                {block.showDate !== false ? (
                  <time className="mt-2 block text-xs text-white/65">
                    {formatDate(post.publishedAt ?? post.createdAt, locale)}
                  </time>
                ) : null}
              </div>
            </div>
          </Link>
          {count > 1 ? (
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + count) % count)}
                className="rounded-full border border-sky-dark/30 px-3 py-1.5 text-sm text-ink hover:bg-sky-pale"
              >
                Prev
              </button>
              <div className="flex gap-1.5">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === index ? "bg-trunk" : "bg-sky-dark/30"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % count)}
                className="rounded-full border border-sky-dark/30 px-3 py-1.5 text-sm text-ink hover:bg-sky-pale"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
