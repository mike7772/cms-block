import type { StrapiMedia } from "@/lib/types";
export declare function resolveMediaUrl(url: string): string;
export declare function stripMediaUrl(media: {
    url?: string | null;
} | null | undefined): string;
export declare function stubMedia(url: string, altText?: string | null): StrapiMedia | null;
export declare function stubMediaList(urls: Array<{
    url?: string;
} | string> | undefined | null): StrapiMedia[];
//# sourceMappingURL=media.d.ts.map