import type { StrapiMedia } from "./types.js";
export declare function getMediaUrl(media?: StrapiMedia | null): string | null;
export declare function getPreferredImage(media?: StrapiMedia | null): {
    src: string;
    width: number;
    height: number;
    alt: string;
} | null;
//# sourceMappingURL=media.d.ts.map