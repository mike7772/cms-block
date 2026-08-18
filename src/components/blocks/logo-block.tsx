"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";
import type { LogoBlock as LogoBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

function useActiveLocale(): Locale {
  const params = useParams();
  const pathname = usePathname();
  const fromParams = params?.locale;
  if (typeof fromParams === "string" && isLocale(fromParams)) return fromParams;
  const fromPath = pathname.split("/").find((segment) => isLocale(segment));
  return fromPath ?? defaultLocale;
}

function resolveHref(url: string, locale: Locale): string {
  const raw = (url || "").trim();
  if (!raw) return `/${locale}`;
  if (/^(https?:|mailto:|tel:)/i.test(raw)) return raw;
  if (raw === "/") return `/${locale}`;
  const parts = raw.split("/");
  if (parts[1] && isLocale(parts[1])) return raw;
  if (raw.startsWith("/")) return `/${locale}${raw}`;
  return raw;
}

export default function LogoBlock({ block }: { block: LogoBlockType }) {
  const locale = useActiveLocale();
  const width = Math.min(480, Math.max(40, block.widthPx ?? 160));
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={block.imageUrl}
      alt={block.alt || "Logo"}
      style={{ width, maxWidth: "100%", height: "auto" }}
      className="object-contain"
    />
  );

  return (
    <div className={`flex ${alignClass[block.align ?? "left"]}`}>
      {block.url ? (
        <Link href={resolveHref(block.url, locale)} className="inline-block">
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
}
