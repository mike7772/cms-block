import type { ContentBlock } from "@/lib/types";
import type { Data } from "@puckeditor/core";
/**
 * Convert Puck editor data into Strapi dynamic-zone blocks.
 * Media relations are omitted (null) when only a URL is known — Strapi
 * needs media IDs. Scalar and nested component fields sync fully.
 */
export declare function puckDataToStrapiBlocks(data: Data): ContentBlock[];
//# sourceMappingURL=puck-to-strapi.d.ts.map