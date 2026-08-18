/**
 * Server-safe slot JSON helpers (no "use client").
 * Used by puck→strapi sync on API routes.
 */

export function slotToJson(slot: unknown): string {
  if (!slot) return "[]";
  if (typeof slot === "function") return "[]";
  if (Array.isArray(slot)) {
    try {
      return JSON.stringify(slot);
    } catch {
      return "[]";
    }
  }
  return "[]";
}

export function jsonToSlot(value: string | null | undefined): unknown[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
