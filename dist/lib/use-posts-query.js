"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { isLocale } from "../i18n/config.js";
export function useLocaleFromRoute() {
    const params = useParams();
    const raw = typeof (params === null || params === void 0 ? void 0 : params.locale) === "string" ? params.locale : "en";
    return isLocale(raw) ? raw : "en";
}
export function usePostsQuery(options = {}) {
    var _a, _b, _c;
    const locale = useLocaleFromRoute();
    const limit = (_a = options.limit) !== null && _a !== void 0 ? _a : 6;
    const orderBy = (_b = options.orderBy) !== null && _b !== void 0 ? _b : "newest";
    const categorySlug = (_c = options.categorySlug) !== null && _c !== void 0 ? _c : null;
    const enabled = options.enabled !== false;
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
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
            if (!res.ok)
                throw new Error(`Failed to load posts (${res.status})`);
            return res.json();
        })
            .then((json) => {
            var _a;
            if (!cancelled) {
                setPosts((_a = json.data) !== null && _a !== void 0 ? _a : []);
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
