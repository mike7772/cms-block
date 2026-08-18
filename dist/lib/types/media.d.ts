export interface StrapiMedia {
    id: number;
    url: string;
    alternativeText?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: Record<string, {
        url: string;
        width: number;
        height: number;
    }> | null;
}
//# sourceMappingURL=media.d.ts.map