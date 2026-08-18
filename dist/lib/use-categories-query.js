"use client";
import { useEffect, useState } from "react";
import { useLocaleFromRoute } from "@/lib/use-posts-query";
export function categoryPostCount(category) {
    if (typeof category.postCount === "number")
        return category.postCount;
    if (Array.isArray(category.posts))
        return category.posts.length;
    return 0;
}
export function useCategoriesQuery(options = {}) {
    var _a;
    const locale = useLocaleFromRoute();
    const limit = (_a = options.limit) !== null && _a !== void 0 ? _a : 50;
    const enabled = options.enabled !== false;
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);
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
            if (!res.ok)
                throw new Error(`Failed to load categories (${res.status})`);
            return res.json();
        })
            .then((json) => {
            var _a;
            if (!cancelled) {
                setCategories((_a = json.data) !== null && _a !== void 0 ? _a : []);
                setError(null);
            }
        })
            .catch((err) => {
            if (!cancelled) {
                setCategories([]);
                setError(err instanceof Error ? err.message : "Failed to load categories");
            }
        });
        return () => {
            cancelled = true;
        };
    }, [locale, limit, enabled]);
    return { categories, error, locale, loading: categories === null };
}
