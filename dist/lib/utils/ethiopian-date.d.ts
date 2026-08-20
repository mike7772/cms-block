/**
 * Ethiopian Calendar Utility - Local Implementation
 * Provides Ethiopian to Gregorian date conversion without external dependencies
 */
/**
 * Convert Ethiopian date to Gregorian date
 * @param etYear Ethiopian year
 * @param etMonth Ethiopian month (1-13)
 * @param etDay Ethiopian day
 * @returns [gregYear, gregMonth, gregDay]
 */
export declare function toGregorian(etYear: number, etMonth: number, etDay: number): [number, number, number];
/**
 * Convert Gregorian date to Ethiopian date
 * @param gregYear Gregorian year
 * @param gregMonth Gregorian month (1-12)
 * @param gregDay Gregorian day
 * @returns [etYear, etMonth, etDay]
 */
export declare function toEthiopian(gregYear: number, gregMonth: number, gregDay: number): [number, number, number];
/**
 * Check if Ethiopian year is a leap year
 * @param etYear Ethiopian year
 * @returns boolean
 */
export declare function isLeapYear(etYear: number): boolean;
/**
 * Get number of days in Ethiopian month
 * @param etYear Ethiopian year
 * @param etMonth Ethiopian month (1-13)
 * @returns number of days
 */
export declare function getDaysInMonth(etYear: number, etMonth: number): number;
/**
 * Ethiopian month names in Amharic
 */
export declare const ETHIOPIAN_MONTH_NAMES: string[];
/**
 * Ethiopian month names in Oromo
 */
export declare const OROMO_MONTH_NAMES: string[];
/**
 * Format Ethiopian date for display
 * @param date Date object or date string
 * @param language Language code ('en', 'om')
 * @param format Format type ('short', 'long', 'numeric')
 * @returns Formatted Ethiopian date string
 */
export declare function formatEthiopianDate(date: Date | string, language?: 'en' | 'om', format?: 'short' | 'long' | 'numeric'): string;
/**
 * Get current Ethiopian date
 * @returns [etYear, etMonth, etDay]
 */
export declare function getCurrentEthiopianDate(): [number, number, number];
/**
 * Convert Ethiopian date string to Gregorian Date object
 * @param etDateStr Ethiopian date string in format "YYYY-MM-DD"
 * @returns Date object
 */
export declare function ethiopianToGregorianDate(etDateStr: string): Date;
/**
 * Convert Gregorian Date object to Ethiopian date string
 * @param date Date object
 * @returns Ethiopian date string in format "YYYY-MM-DD"
 */
export declare function gregorianToEthiopianString(date: Date): string;
//# sourceMappingURL=ethiopian-date.d.ts.map