import type { Category } from "@/lib/types";
export type UseCategoriesQueryOptions = {
    limit?: number;
    enabled?: boolean;
};
export declare function categoryPostCount(category: Category): number;
export declare function useCategoriesQuery(options?: UseCategoriesQueryOptions): {
    categories: Category[] | null;
    error: string | null;
    locale: "en" | "am" | "om" | "so" | "ti";
    loading: boolean;
};
//# sourceMappingURL=use-categories-query.d.ts.map