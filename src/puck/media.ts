import type { StrapiMedia } from "@/lib/types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export function resolveMediaUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

export function stripMediaUrl(
  media: { url?: string | null } | null | undefined,
): string {
  if (!media?.url) return "";
  const url = media.url;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

export function stubMedia(
  url: string,
  altText?: string | null,
): StrapiMedia | null {
  if (!url) return null;
  return {
    id: 0,
    url: resolveMediaUrl(url),
    alternativeText: altText ?? null,
    width: null,
    height: null,
    formats: null,
  };
}

export function stubMediaList(
  urls: Array<{ url?: string } | string> | undefined | null,
): StrapiMedia[] {
  if (!urls?.length) return [];
  const result: StrapiMedia[] = [];
  urls.forEach((item, i) => {
    const url = typeof item === "string" ? item : item.url ?? "";
    if (!url) return;
    result.push({
      id: i,
      url: resolveMediaUrl(url),
      alternativeText: null,
      width: null,
      height: null,
      formats: null,
    });
  });
  return result;
}
