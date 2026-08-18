"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  defaultLocale,
  isLocale,
  locales,
  localeNames,
  localeShortNames,
  type Locale,
} from "@/i18n/config";

function localeFromPath(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  for (const segment of segments) {
    if (isLocale(segment)) return segment;
  }
  return null;
}

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale =
    currentLocale ?? localeFromPath(pathname) ?? defaultLocale;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(locale: Locale) {
    setOpen(false);
    if (locale === activeLocale) return;

    const segments = pathname.split("/");
    const localeIndex = segments.findIndex((segment) => isLocale(segment));
    if (localeIndex >= 0) {
      segments[localeIndex] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Switch language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-2 text-sm font-medium text-ink transition hover:bg-white/80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{localeShortNames[activeLocale]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <path d="m18 15-6-6-6 6" />
          ) : (
            <path d="m6 9 6 6 6-6" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-40 overflow-hidden rounded-xl border border-sky-dark/30 bg-white py-1 shadow-lg shadow-sky-dark/15">
          {locales.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => switchLocale(locale)}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm transition hover:bg-sky-pale ${
                locale === activeLocale
                  ? "font-semibold text-court"
                  : "text-ink/80"
              }`}
            >
              {localeNames[locale]}
              {locale === activeLocale && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
