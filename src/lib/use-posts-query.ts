"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import type { Post } from "@/lib/types";

export type PostsOrderBy = "newest" | "oldest" | "title";

export type UsePostsQueryOptions = {
  limit?: number;
  categorySlug?: string | null;
  orderBy?: PostsOrderBy | null;
  enabled?: boolean;
};

export function useLocaleFromRoute(): Locale {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  return isLocale(raw) ? raw : "en";
}

export function usePostsQuery(options: UsePostsQueryOptions = {}) {
  const locale = useLocaleFromRoute();
  const limit = options.limit ?? 6;
  const orderBy = options.orderBy ?? "newest";
  const categorySlug = options.categorySlug ?? null;
  const enabled = options.enabled !== false;

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setPosts([]);
      setError(null);
      return;
    }

    let cancelled = false;
    const params = new URLSearchParams({
      locale,
      limit: String(limit),
      orderBy,
    });
    if (categorySlug) {
      params.set("category", categorySlug);
    }

    setPosts(null);
    fetch(`/api/posts?${params.toString()}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
        return res.json() as Promise<{ data: Post[] }>;
      })
      .then((json) => {
        if (!cancelled) {
          setPosts(json.data ?? []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setPosts([]);
          setError(err instanceof Error ? err.message : "Failed to load posts");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, limit, orderBy, categorySlug, enabled]);

  return { posts, error, locale, loading: posts === null };
}
