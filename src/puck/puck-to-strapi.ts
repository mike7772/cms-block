import type { ContentBlock } from "@/lib/types";
import type { Data } from "@puckeditor/core";
import { registryByPuckType } from "./registry";

/**
 * Convert Puck editor data into Strapi dynamic-zone blocks.
 * Media relations are omitted (null) when only a URL is known — Strapi
 * needs media IDs. Scalar and nested component fields sync fully.
 */
export function puckDataToStrapiBlocks(data: Data): ContentBlock[] {
  const content = data.content ?? [];
  const blocks: ContentBlock[] = [];

  for (const item of content) {
    const entry = registryByPuckType.get(item.type);
    if (!entry) continue;

    const { id: _id, ...props } = (item.props ?? {}) as Record<
      string,
      unknown
    > & { id?: string };

    const block = entry.toBlock(props as never);

    // Strip stub media (id: 0) so Strapi does not receive invalid media refs.
    const sanitized = sanitizeBlockForStrapi(block);
    blocks.push(sanitized);
  }

  return blocks;
}

function isStubMedia(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    (value as { id: number }).id === 0 &&
    "url" in value
  );
}

function sanitizeValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    if (value.length > 0 && isStubMedia(value[0])) {
      return undefined;
    }
    return value.map((item) => {
      if (typeof item === "object" && item !== null) {
        return sanitizeNestedItem(item as Record<string, unknown>);
      }
      return item;
    });
  }
  if (isStubMedia(value)) {
    return null;
  }
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return sanitizeNestedItem(value as Record<string, unknown>);
  }
  return value;
}

function sanitizeNestedItem(
  item: Record<string, unknown>,
): Record<string, unknown> {
  const next: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(item)) {
    if (key === "id") continue;
    const sanitized = sanitizeValue(val);
    if (sanitized !== undefined) {
      next[key] = sanitized;
    }
  }
  return next;
}

function sanitizeBlockForStrapi(block: ContentBlock): ContentBlock {
  const result: Record<string, unknown> = {
    __component: block.__component,
  };

  for (const [key, value] of Object.entries(block)) {
    if (key === "__component" || key === "id") continue;
    const sanitized = sanitizeValue(value);
    if (sanitized !== undefined) {
      result[key] = sanitized;
    }
  }

  return result as unknown as ContentBlock;
}
