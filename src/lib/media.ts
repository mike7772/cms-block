import type { StrapiMedia } from "./types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export function getMediaUrl(media?: StrapiMedia | null): string | null {
  if (!media?.url) {
    return null;
  }

  if (media.url.startsWith("http")) {
    return media.url;
  }

  return `${STRAPI_URL}${media.url}`;
}

export function getPreferredImage(media?: StrapiMedia | null): {
  src: string;
  width: number;
  height: number;
  alt: string;
} | null {
  const url = getMediaUrl(media);

  if (!url) {
    return null;
  }

  const large = media?.formats?.large;

  return {
    src: large ? `${STRAPI_URL}${large.url}` : url,
    width: large?.width ?? media?.width ?? 1200,
    height: large?.height ?? media?.height ?? 630,
    alt: media?.alternativeText ?? "",
  };
}
