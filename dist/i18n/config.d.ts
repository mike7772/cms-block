export declare const locales: readonly ["en", "am", "om", "so", "ti"];
export type Locale = (typeof locales)[number];
export declare const defaultLocale: Locale;
export declare const localeNames: Record<Locale, string>;
export declare const localeShortNames: Record<Locale, string>;
export declare function isLocale(value: string): value is Locale;
//# sourceMappingURL=config.d.ts.map