import type { Field, Fields } from "@puckeditor/core";

export function selectOptions(
  values: readonly string[],
): Array<{ label: string; value: string }> {
  return values.map((value) => ({
    label: value
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    value,
  }));
}

export function selectField(values: readonly string[]): Field {
  return {
    type: "select",
    options: selectOptions(values),
  };
}

export function boolField(): Field {
  return {
    type: "radio",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
  };
}

export function textField(
  options?: Partial<Extract<Field, { type: "text" }>>,
): Field {
  return { type: "text", contentEditable: true, ...options };
}

export function textareaField(
  options?: Partial<Extract<Field, { type: "textarea" }>>,
): Field {
  return { type: "textarea", contentEditable: true, ...options };
}

/**
 * Field names that must stay plain strings (URLs, codes, parsers, etc.).
 * Everything else of type text/textarea gets canvas inline editing.
 */
const SKIP_INLINE_EDIT =
  /(Url|Href|Src|Slug|Id|Code|Html|Css|Json|Embed|Token|Password|Path|Class|Color|Hex|Lat|Lng|Coords|ApiKey)$/i;

const SKIP_INLINE_EXACT = new Set([
  "url",
  "href",
  "src",
  "slug",
  "code",
  "html",
  "css",
  "json",
  "embed",
  "iframe",
  "script",
  "animatedWords",
  "items",
  "featuresText",
  "anchorId",
  "openTime",
  "closeTime",
  "categorySlug",
  "authorSlug",
  "mapEmbed",
  "lottieUrl",
  "posterUrl",
  "imageUrl",
  "videoUrl",
  "fileUrl",
  "avatarUrl",
  "iconUrl",
  "buttonUrl",
  "linkUrl",
  "websiteUrl",
  "twitterUrl",
  "linkedinUrl",
  "password",
  "token",
]);

function shouldEnableInlineEdit(name: string): boolean {
  if (SKIP_INLINE_EXACT.has(name)) return false;
  if (SKIP_INLINE_EDIT.test(name)) return false;
  return true;
}

/** Recursively enable Puck `contentEditable` on text/textarea fields. */
export function enableContentEditableFields(fields: Fields): Fields {
  const next: Fields = { ...fields };

  for (const [name, field] of Object.entries(next)) {
    if (!field || typeof field !== "object") continue;

    if (
      (field.type === "text" || field.type === "textarea") &&
      shouldEnableInlineEdit(name) &&
      field.contentEditable !== false
    ) {
      next[name] = { ...field, contentEditable: true };
      continue;
    }

    if (field.type === "array" && field.arrayFields) {
      next[name] = {
        ...field,
        arrayFields: enableContentEditableFields(field.arrayFields),
      };
      continue;
    }

    if (field.type === "object" && field.objectFields) {
      next[name] = {
        ...field,
        objectFields: enableContentEditableFields(field.objectFields),
      };
    }
  }

  return next;
}

/** Coerce Puck inline-edit ReactNode values back to plain strings when needed. */
export function asPlainText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

/** Safe first character for avatars/fallback glyphs when value may be a ReactNode. */
export function initialLetter(value: unknown, fallback = "?"): string {
  const text = asPlainText(value).trim();
  return (text.charAt(0) || fallback).toUpperCase();
}

export function hasTextContent(value: unknown): boolean {
  if (value == null || value === false) return false;
  if (typeof value === "string") return value.trim().length > 0;
  // ReactNode from contentEditable is always treated as present
  return true;
}

export type PuckCategory =
  | "Layout"
  | "Content"
  | "Marketing"
  | "Media"
  | "Forms"
  | "Dynamic"
  | "Navigation";
