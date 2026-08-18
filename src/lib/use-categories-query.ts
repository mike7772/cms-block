"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/lib/types";
import { useLocaleFromRoute } from "@/lib/use-posts-query";

export type UseCategoriesQueryOptions = {
  limit?: number;
  enabled?: boolean;
};

export function categoryPostCount(category: Category): number {
  if (typeof category.postCount === "number") return category.postCount;
  if (Array.isArray(category.posts)) return category.posts.length;
  return 0;
}

export function useCategoriesQuery(options: UseCategoriesQueryOptions = {}) {
  const locale = useLocaleFromRoute();
  const limit = options.limit ?? 50;
  const enabled = options.enabled !== false;

  const [categories, setCategories] = useState<Category[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setCategories([]);
      setError(null);
      return;
    }

    let cancelled = false;
    const params = new URLSearchParams({
      locale,
      limit: String(limit),
    });

    setCategories(null);
    fetch(`/api/categories?${params.toString()}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load categories (${res.status})`);
        return res.json() as Promise<{ data: Category[] }>;
      })
      .then((json) => {
        if (!cancelled) {
          setCategories(json.data ?? []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setCategories([]);
          setError(
            err instanceof Error ? err.message : "Failed to load categories",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, limit, enabled]);

  return { categories, error, locale, loading: categories === null };
}
