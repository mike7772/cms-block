"use client";

import Link from "next/link";
import { postHref } from "@/lib/nav";
import type { NewsTickerBlock as NewsTickerBlockType } from "@/lib/types";
import { usePostsQuery } from "@/lib/use-posts-query";

const speedDuration: Record<string, string> = {
  slow: "45s",
  medium: "28s",
  fast: "14s",
};

export default function NewsTickerBlock({
  block,
}: {
  block: NewsTickerBlockType;
}) {
  const limit = block.postsLimit ?? 8;
  const { posts, locale } = usePostsQuery({
    limit,
    categorySlug: block.categorySlug,
    orderBy: block.orderBy,
  });
  const duration = speedDuration[block.speed ?? "medium"] ?? speedDuration.medium;
  const pause = block.pauseOnHover !== false;
  const titles =
    posts?.map((p) => ({
      id: p.documentId,
      title: p.title,
      href: postHref(p.slug, locale),
    })) ?? [];
  const loop = titles.length ? [...titles, ...titles] : [];

  return (
    <div className="flex overflow-hidden rounded-xl border border-sky-dark/25 bg-white">
      <div className="flex shrink-0 items-center bg-trunk px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white">
        {block.label || "Latest"}
      </div>
      <div className="relative min-w-0 flex-1 overflow-hidden py-2.5">
        {posts === null ? (
          <div className="px-4 text-sm text-ink/40">Loading headlines…</div>
        ) : titles.length === 0 ? (
          <div className="px-4 text-sm text-ink/50">No headlines yet.</div>
        ) : (
          <div
            className={`flex w-max gap-8 whitespace-nowrap ${
              pause ? "hover:[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: `news-ticker-scroll ${duration} linear infinite`,
            }}
          >
            {loop.map((item, i) => (
              <Link
                key={`${item.id}-${i}`}
                href={item.href}
                className="text-sm font-medium text-ink transition hover:text-trunk"
              >
                {item.title}
                <span className="ml-8 text-court" aria-hidden>
                  •
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @keyframes news-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
