import { type Locale } from "../i18n/config.js";
import type { Post } from "../lib/types.js";
export type PostsOrderBy = "newest" | "oldest" | "title";
export type UsePostsQueryOptions = {
    limit?: number;
    categorySlug?: string | null;
    orderBy?: PostsOrderBy | null;
    enabled?: boolean;
};
export declare function useLocaleFromRoute(): Locale;
export declare function usePostsQuery(options?: UsePostsQueryOptions): {
    posts: Post[] | null;
    error: string | null;
    locale: "en" | "am" | "om" | "so" | "ti";
    loading: boolean;
};
//# sourceMappingURL=use-posts-query.d.ts.map