"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import { postHref } from "@/lib/nav";
import type { Locale } from "@/i18n/config";
import type { PostTimelineBlock as PostTimelineBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

function formatDate(value: string | null | undefined, locale: Locale) {
  if (!value) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function PostTimelineBlock({
  block,
}: {
  block: PostTimelineBlockType;
}) {
  const limit = block.postsLimit ?? 6;
  const { posts, error, locale } = usePostsQuery({
    limit,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy ?? "newest",
  });

  return (
    <section className="mx-auto max-w-3xl">
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

      {posts === null ? (
        <div className="space-y-6 border-l-2 border-sky-dark/20 pl-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-sky-pale" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-sky-pale" />
              <div className="mt-2 h-5 w-2/3 animate-pulse rounded bg-sky-pale" />
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-4 py-8 text-center text-sm text-ink/55">
          {error ?? "No posts found."}
        </p>
      ) : (
        <ol className="relative space-y-8 border-l-2 border-sky-dark/25 pl-8">
          {posts.map((post) => {
            const cover = getPreferredImage(post.cover);
            return (
              <li key={post.documentId} className="relative">
                <span className="absolute -left-[2.3rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-trunk shadow" />
                <time className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  {formatDate(post.publishedAt ?? post.createdAt, locale)}
                </time>
                <Link
                  href={postHref(post.slug, locale)}
                  className="mt-2 flex gap-4 rounded-xl border border-sky-dark/20 bg-white p-4 transition hover:border-sky-dark/40 hover:shadow-md"
                >
                  {block.showImage !== false && cover ? (
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-sky-pale">
                      <Image
                        src={cover.src}
                        alt={cover.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  ) : null}
                  <div>
                    <h3 className="font-semibold text-ink">{post.title}</h3>
                    {block.showExcerpt !== false && post.excerpt ? (
                      <p className="mt-1 line-clamp-2 text-sm text-ink/65">
                        {post.excerpt}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
