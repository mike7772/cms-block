export const locales = [
  "en",
  "am",
  "om",
  "so",
  "ti",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  am: "Amharic",
  om: "Afaan Oromoo",
  so: "Somali",
  ti: "Tigrinya",
};

export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  am: "AM",
  om: "OM",
  so: "SO",
  ti: "TI",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
