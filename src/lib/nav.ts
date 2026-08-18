import type { Locale } from "@/i18n/config";
import type { NavPage } from "./types";

export function pageHref(slug: string, locale: Locale): string {
  const base = slug === "home" ? "" : `/${slug}`;
  return `/${locale}${base}`;
}

export function postsHref(locale: Locale): string {
  return `/${locale}/posts`;
}

export function postHref(slug: string, locale: Locale): string {
  return `/${locale}/posts/${slug}`;
}

export function sortNavPages(pages: NavPage[]): NavPage[] {
  return [...pages].sort((a, b) => {
    const order = (a.sortOrder ?? 0) - (b.sortOrder ?? 0);

    if (order !== 0) {
      return order;
    }

    return a.title.localeCompare(b.title);
  });
}
