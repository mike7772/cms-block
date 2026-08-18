"use client";

import Link from "next/link";
import { postHref } from "@/lib/nav";
import type { ContentTickerBlock as ContentTickerBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";
import { asPlainText } from "@/puck/registry/helpers";

const speedDuration: Record<string, string> = {
  slow: "45s",
  medium: "28s",
  fast: "14s",
};

export default function ContentTickerBlock({
  block,
}: {
  block: ContentTickerBlockType;
}) {
  const source = block.source ?? "posts";
  const limit = block.postsLimit ?? 8;
  const { posts, locale } = usePostsQuery({
    limit,
    categorySlug: block.categorySlug,
    enabled: source === "posts",
  });

  const items =
    source === "custom"
      ? (block.items ?? [])
          .filter((item) => asPlainText(item.text).trim())
          .map((item, i) => ({
            key: `custom-${i}`,
            text: item.text,
            href: item.url || null,
          }))
      : (posts ?? []).map((post) => ({
          key: post.documentId,
          text: post.title,
          href: postHref(post.slug, locale),
        }));

  const duration = speedDuration[block.speed ?? "medium"] ?? speedDuration.medium;
  const reverse = block.direction === "right";
  const loop = items.length ? [...items, ...items] : [];

  return (
    <section className="overflow-hidden rounded-xl border border-sky-dark/25 bg-sky-pale/50 py-3">
      {block.heading ? (
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-ink/55">
          {block.heading}
        </p>
      ) : null}
      {source === "posts" && posts === null ? (
        <p className="px-4 text-sm text-ink/40">Loading…</p>
      ) : items.length === 0 ? (
        <p className="px-4 text-sm text-ink/50">
          {source === "custom"
            ? "Add custom ticker items."
            : "No ticker items found."}
        </p>
      ) : (
        <div
          className="flex w-max gap-10 whitespace-nowrap"
          style={{
            animation: `content-ticker-scroll ${duration} linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {loop.map((item, i) => {
            const content = (
              <span className="text-sm font-medium text-ink">
                {item.text}
                <span className="ml-10 text-court" aria-hidden>
                  •
                </span>
              </span>
            );
            return item.href ? (
              <Link key={`${item.key}-${i}`} href={item.href}>
                {content}
              </Link>
            ) : (
              <span key={`${item.key}-${i}`}>{content}</span>
            );
          })}
        </div>
      )}
      <style>{`
        @keyframes content-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
