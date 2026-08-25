"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string | null;
  publishedAt: string;
  category?: { name: string } | null;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type HomeUpdatesWidgetProps = {
  title: string;
  viewAllLabel: string;
  readMoreLabel: string;
};

/**
 * Live-fetches real published posts from the CMS instead of the fixed
 * three-slot placeholder content the site sections started with — handles
 * 0, 1, 2, or any number of published posts gracefully (no fixed count).
 * Fetches client-side (matching CaseSearchWidget/CourtFeeCalculatorWidget's
 * pattern in this same registry) rather than via a Puck resolveData hook, so
 * the same component works unchanged in both the live site (PUBLIC_PORTAL)
 * and the Puck editor's canvas (portal-frontend).
 */
export function HomeUpdatesWidgetSection(props: HomeUpdatesWidgetProps) {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${STRAPI_URL}/api/posts/published?limit=3`)
      .then((res) => (res.ok ? res.json() : { data: [] }))
      .then((json) => {
        if (!cancelled) setPosts(json.data ?? []);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts !== null && posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:mb-10 sm:flex-row sm:items-center sm:gap-0">
          <h2 className="font-serif text-2xl font-bold text-blue-900 sm:text-3xl">
            {props.title}
          </h2>
          <Link
            href="/posts"
            className="group flex items-center text-blue-600 hover:text-blue-800"
          >
            <span>{props.viewAllLabel}</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {(posts ?? [null, null, null]).map((post, i) => (
            <div
              key={post?.id ?? i}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div className="p-6">
                <div className="mb-4 flex h-6 items-center justify-between">
                  {post ? (
                    <>
                      {post.category ? (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                          {post.category.name}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="text-sm text-gray-500">
                        {formatDate(post.publishedAt)}
                      </span>
                    </>
                  ) : (
                    <span className="h-4 w-24 animate-pulse rounded bg-gray-100" />
                  )}
                </div>
                <h3 className="mb-3 min-h-[1.75rem] text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {post ? (
                    post.title
                  ) : (
                    <span className="block h-6 w-3/4 animate-pulse rounded bg-gray-100" />
                  )}
                </h3>
                {post ? (
                  post.excerpt ? (
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  ) : null
                ) : (
                  <div className="mb-4 h-4 w-full animate-pulse rounded bg-gray-100" />
                )}
                {post ? (
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
                  >
                    <span className="transition-all duration-300 group-hover:mr-2">
                      {props.readMoreLabel}
                    </span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
