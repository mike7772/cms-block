/**
 * Ethiopian Calendar Utility - Local Implementation
 * Provides Ethiopian to Gregorian date conversion without external dependencies
 */

import * as ethiopianDate from 'ethiopian-date'

// Ethiopian calendar has 13 months - 12 months of 30 days each and a 13th month (Pagume) with 5 or 6 days
const ETHIOPIAN_EPOCH = 1723856 // Julian day number for Ethiopian epoch (29 August 8 CE)

/**
 * Convert Ethiopian date to Gregorian date
 * @param etYear Ethiopian year
 * @param etMonth Ethiopian month (1-13)
 * @param etDay Ethiopian day
 * @returns [gregYear, gregMonth, gregDay]
 */
export function toGregorian(
  etYear: number,
  etMonth: number,
  etDay: number,
): [number, number, number] {
  // Calculate Julian day number
  const jdn =
    ETHIOPIAN_EPOCH + 365 * (etYear - 1) + Math.floor(etYear / 4) + 30 * (etMonth - 1) + etDay - 1

  // Convert Julian day to Gregorian
  const a = jdn + 32044
  const b = Math.floor((4 * a + 3) / 146097)
  const c = a - Math.floor((146097 * b) / 4)
  const d = Math.floor((4 * c + 3) / 1461)
  const e = c - Math.floor((1461 * d) / 4)
  const m = Math.floor((5 * e + 2) / 153)

  const gregDay = e - Math.floor((153 * m + 2) / 5) + 1
  const gregMonth = m + 3 - 12 * Math.floor(m / 10)
  const gregYear = 100 * b + d - 4800 + Math.floor(m / 10)

  return [gregYear, gregMonth, gregDay]
}

/**
 * Convert Gregorian date to Ethiopian date
 * @param gregYear Gregorian year
 * @param gregMonth Gregorian month (1-12)
 * @param gregDay Gregorian day
 * @returns [etYear, etMonth, etDay]
 */
export function toEthiopian(
  gregYear: number,
  gregMonth: number,
  gregDay: number,
): [number, number, number] {
  // Convert Gregorian to Julian day number
  const a = Math.floor((14 - gregMonth) / 12)
  const y = gregYear + 4800 - a
  const m = gregMonth + 12 * a - 3

  const jdn =
    gregDay +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045

  // Convert Julian day to Ethiopian
  const daysSinceEpoch = jdn - ETHIOPIAN_EPOCH
  const etYear = Math.floor((daysSinceEpoch - Math.floor(daysSinceEpoch / 1461) + 365) / 365)

  const daysInYear = daysSinceEpoch - 365 * (etYear - 1) - Math.floor(etYear / 4)

  let etMonth: number
  let etDay: number

  if (daysInYear <= 360) {
    etMonth = Math.floor((daysInYear - 1) / 30) + 1
    etDay = ((daysInYear - 1) % 30) + 1
  } else {
    etMonth = 13 // Pagume
    etDay = daysInYear - 360
  }

  return [etYear, etMonth, etDay]
}

/**
 * Check if Ethiopian year is a leap year
 * @param etYear Ethiopian year
 * @returns boolean
 */
export function isLeapYear(etYear: number): boolean {
  return etYear % 4 === 3
}

/**
 * Get number of days in Ethiopian month
 * @param etYear Ethiopian year
 * @param etMonth Ethiopian month (1-13)
 * @returns number of days
 */
export function getDaysInMonth(etYear: number, etMonth: number): number {
  if (etMonth <= 12) {
    return 30
  } else {
    // Pagume month
    return isLeapYear(etYear) ? 6 : 5
  }
}

/**
 * Ethiopian month names in Amharic
 */
export const ETHIOPIAN_MONTH_NAMES = [
  'መስከረም',
  'ጥቅምት',
  'ህዳር',
  'ታህሳስ',
  'ጥር',
  'የካቲት',
  'መጋቢት',
  'ሚያዝያ',
  'ግንቦት',
  'ሰኔ',
  'ሐምሌ',
  'ነሐሴ',
  'ጷጉሜ',
]

/**
 * Ethiopian month names in Oromo
 */
export const OROMO_MONTH_NAMES = [
  'Fulbaana',
  'Onkololeessa',
  'Sadaasa',
  'Muddee',
  'Amajjii',
  'Guraandhala',
  'Bitootessa',
  'Ebla',
  'Caamsa',
  'Waxabajjii',
  'Adooleessa',
  'Hagayya',
  'Qubee',
]

/**
 * Format Ethiopian date for display
 * @param date Date object or date string
 * @param language Language code ('en', 'om')
 * @param format Format type ('short', 'long', 'numeric')
 * @returns Formatted Ethiopian date string
 */
export function formatEthiopianDate(
  date: Date | string,
  language: 'en' | 'om' = 'en',
  format: 'short' | 'long' | 'numeric' = 'long',
): string {
  if (!date) return 'Date not set'

  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    const [etYear, etMonth, etDay] = ethiopianDate.toEthiopian(
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      dateObj.getDate(),
    )

    if (format === 'numeric') {
      return `${etDay.toString().padStart(2, '0')}/${etMonth.toString().padStart(2, '0')}/${etYear}`
    }

    const monthNames = language === 'om' ? OROMO_MONTH_NAMES : ETHIOPIAN_MONTH_NAMES
    const monthName = monthNames[etMonth - 1] || 'Unknown'

    if (format === 'short') {
      return `${monthName} ${etDay}, ${etYear}`
    }

    // Long format with Ethiopian calendar indicator
    return `${monthName} ${etDay}, ${etYear} ዓ.ም.`
  } catch (error) {
    console.error('Error formatting Ethiopian date:', error)
    return 'Invalid date'
  }
}

/**
 * Get current Ethiopian date
 * @returns [etYear, etMonth, etDay]
 */
export function getCurrentEthiopianDate(): [number, number, number] {
  const today = new Date()
  return toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate())
}

/**
 * Convert Ethiopian date string to Gregorian Date object
 * @param etDateStr Ethiopian date string in format "YYYY-MM-DD"
 * @returns Date object
 */
export function ethiopianToGregorianDate(etDateStr: string): Date {
  const [etYear, etMonth, etDay] = etDateStr.split('-').map(Number)
  const [gregYear, gregMonth, gregDay] = toGregorian(etYear, etMonth, etDay)
  return new Date(gregYear, gregMonth - 1, gregDay)
}

/**
 * Convert Gregorian Date object to Ethiopian date string
 * @param date Date object
 * @returns Ethiopian date string in format "YYYY-MM-DD"
 */
export function gregorianToEthiopianString(date: Date): string {
  const [etYear, etMonth, etDay] = toEthiopian(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  )
  return `${etYear}-${etMonth.toString().padStart(2, '0')}-${etDay.toString().padStart(2, '0')}`
}
