import type { CSSProperties } from "react";
import type { Field, Fields } from "@puckeditor/core";
import { selectOptions } from "@/puck/registry/helpers";

/** Visual chrome — Elementor “Style” tab */
export type BlockStyle = {
  background?: string;
  backgroundCustom?: string;
  textColor?: string;
  border?: string;
  radius?: string;
  shadow?: string;
  textAlign?: string;
};

/** Layout & meta — Elementor “Advanced” tab */
export type BlockAdvanced = {
  marginY?: string;
  marginX?: string;
  paddingY?: string;
  paddingX?: string;
  maxWidth?: string;
  centered?: boolean;
  cssId?: string;
  cssClass?: string;
  zIndex?: string;
  hideDesktop?: boolean;
  hideTablet?: boolean;
  hideMobile?: boolean;
};

export const DEFAULT_BLOCK_STYLE: BlockStyle = {
  background: "none",
  backgroundCustom: "",
  textColor: "inherit",
  border: "none",
  radius: "none",
  shadow: "none",
  textAlign: "inherit",
};

export const DEFAULT_BLOCK_ADVANCED: BlockAdvanced = {
  marginY: "none",
  marginX: "none",
  paddingY: "none",
  paddingX: "none",
  maxWidth: "none",
  centered: true,
  cssId: "",
  cssClass: "",
  zIndex: "auto",
  hideDesktop: false,
  hideTablet: false,
  hideMobile: false,
};

const SPACE_Y: Record<string, string> = {
  none: "0",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2.5rem",
  xl: "4rem",
  "2xl": "6rem",
};

const SPACE_X: Record<string, string> = {
  none: "0",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

const RADIUS: Record<string, string> = {
  none: "0",
  sm: "0.375rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
};

const SHADOW: Record<string, string> = {
  none: "none",
  sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
  md: "0 4px 14px rgba(15, 23, 42, 0.08)",
  lg: "0 12px 32px rgba(15, 23, 42, 0.12)",
  xl: "0 24px 48px rgba(15, 23, 42, 0.14)",
};

const MAX_WIDTH: Record<string, string> = {
  none: "none",
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  full: "100%",
};

const BACKGROUND: Record<string, string> = {
  none: "transparent",
  white: "#ffffff",
  soft: "#f8fafc",
  muted: "#f1f5f9",
  ink: "#0f172a",
  brand: "#0f766e",
  tint: "#ecfdf5",
  sky: "#e0f2fe",
  warm: "#fff7ed",
  custom: "",
};

const TEXT_COLOR: Record<string, string> = {
  inherit: "inherit",
  ink: "#0f172a",
  muted: "#64748b",
  white: "#ffffff",
  brand: "#0f766e",
};

const BORDER: Record<string, string> = {
  none: "none",
  subtle: "1px solid rgba(15, 23, 42, 0.08)",
  soft: "1px solid rgba(15, 23, 42, 0.14)",
  strong: "1px solid rgba(15, 23, 42, 0.28)",
  brand: "1px solid #0f766e",
};

const Z_INDEX: Record<string, string> = {
  auto: "auto",
  "0": "0",
  "1": "1",
  "10": "10",
  "20": "20",
  "50": "50",
};

function labeledSelect(label: string, keys: readonly string[]): Field {
  return {
    type: "select",
    label,
    options: selectOptions(keys),
  };
}

function boolRadio(label: string): Field {
  return {
    type: "radio",
    label,
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
  };
}

/** Coerce possibly-inline-edited values to plain strings. */
function asStyleText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

function hasStyleText(value: unknown): boolean {
  return asStyleText(value).trim().length > 0;
}

export const blockStyleFields: Fields = {
  style: {
    type: "object",
    label: "Style",
    objectFields: {
      background: labeledSelect("Background", Object.keys(BACKGROUND)),
      backgroundCustom: {
        type: "text",
        label: "Custom background (hex / CSS)",
        contentEditable: false,
      },
      textColor: labeledSelect("Text color", Object.keys(TEXT_COLOR)),
      border: labeledSelect("Border", Object.keys(BORDER)),
      radius: labeledSelect("Border radius", Object.keys(RADIUS)),
      shadow: labeledSelect("Box shadow", Object.keys(SHADOW)),
      textAlign: labeledSelect("Alignment", [
        "inherit",
        "left",
        "center",
        "right",
      ]),
    },
  },
  advanced: {
    type: "object",
    label: "Advanced",
    objectFields: {
      marginY: labeledSelect("Margin Y", Object.keys(SPACE_Y)),
      marginX: labeledSelect("Margin X", Object.keys(SPACE_X)),
      paddingY: labeledSelect("Padding Y", Object.keys(SPACE_Y)),
      paddingX: labeledSelect("Padding X", Object.keys(SPACE_X)),
      maxWidth: labeledSelect("Max width", Object.keys(MAX_WIDTH)),
      centered: boolRadio("Center when constrained"),
      zIndex: labeledSelect("Z-index", Object.keys(Z_INDEX)),
      cssId: { type: "text", label: "CSS ID", contentEditable: false },
      cssClass: { type: "text", label: "CSS Classes", contentEditable: false },
      hideDesktop: boolRadio("Hide on desktop"),
      hideTablet: boolRadio("Hide on tablet"),
      hideMobile: boolRadio("Hide on mobile"),
    },
  },
};

export function normalizeBlockStyle(raw: unknown): BlockStyle {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_BLOCK_STYLE };
  const legacy = raw as Record<string, unknown>;
  return {
    ...DEFAULT_BLOCK_STYLE,
    background: asStyleText(legacy.background) || DEFAULT_BLOCK_STYLE.background,
    backgroundCustom: asStyleText(legacy.backgroundCustom),
    textColor: asStyleText(legacy.textColor) || DEFAULT_BLOCK_STYLE.textColor,
    border: asStyleText(legacy.border) || DEFAULT_BLOCK_STYLE.border,
    radius: asStyleText(legacy.radius) || DEFAULT_BLOCK_STYLE.radius,
    shadow: asStyleText(legacy.shadow) || DEFAULT_BLOCK_STYLE.shadow,
    textAlign: asStyleText(legacy.textAlign) || DEFAULT_BLOCK_STYLE.textAlign,
  };
}

export function normalizeBlockAdvanced(raw: unknown): BlockAdvanced {
  if (!raw || typeof raw !== "object") {
    return { ...DEFAULT_BLOCK_ADVANCED };
  }
  const legacy = raw as Record<string, unknown>;
  return {
    ...DEFAULT_BLOCK_ADVANCED,
    marginY: asStyleText(legacy.marginY) || DEFAULT_BLOCK_ADVANCED.marginY,
    marginX: asStyleText(legacy.marginX) || DEFAULT_BLOCK_ADVANCED.marginX,
    paddingY: asStyleText(legacy.paddingY) || DEFAULT_BLOCK_ADVANCED.paddingY,
    paddingX: asStyleText(legacy.paddingX) || DEFAULT_BLOCK_ADVANCED.paddingX,
    maxWidth: asStyleText(legacy.maxWidth) || DEFAULT_BLOCK_ADVANCED.maxWidth,
    centered:
      typeof legacy.centered === "boolean"
        ? legacy.centered
        : DEFAULT_BLOCK_ADVANCED.centered,
    cssId: asStyleText(legacy.cssId),
    cssClass: asStyleText(legacy.cssClass),
    zIndex: asStyleText(legacy.zIndex) || DEFAULT_BLOCK_ADVANCED.zIndex,
    hideDesktop: Boolean(legacy.hideDesktop),
    hideTablet: Boolean(legacy.hideTablet),
    hideMobile: Boolean(legacy.hideMobile),
  };
}

/** Prefer advanced; fall back to layout keys still living on legacy style. */
export function resolveBlockChrome(
  styleRaw: unknown,
  advancedRaw: unknown,
): { style: BlockStyle; advanced: BlockAdvanced } {
  const style = normalizeBlockStyle(styleRaw);
  let advanced = normalizeBlockAdvanced(advancedRaw);

  if (
    (!advancedRaw || typeof advancedRaw !== "object") &&
    styleRaw &&
    typeof styleRaw === "object"
  ) {
    const legacy = styleRaw as BlockAdvanced;
    advanced = {
      ...advanced,
      marginY: legacy.marginY ?? advanced.marginY,
      marginX: legacy.marginX ?? advanced.marginX,
      paddingY: legacy.paddingY ?? advanced.paddingY,
      paddingX: legacy.paddingX ?? advanced.paddingX,
      maxWidth: legacy.maxWidth ?? advanced.maxWidth,
      centered: legacy.centered ?? advanced.centered,
    };
  }

  return { style, advanced };
}

export function isDefaultBlockChrome(
  style: BlockStyle,
  advanced: BlockAdvanced,
): boolean {
  const s = normalizeBlockStyle(style);
  const a = normalizeBlockAdvanced(advanced);
  return (
    (s.background ?? "none") === "none" &&
    !hasStyleText(s.backgroundCustom) &&
    (s.textColor ?? "inherit") === "inherit" &&
    (s.border ?? "none") === "none" &&
    (s.radius ?? "none") === "none" &&
    (s.shadow ?? "none") === "none" &&
    (s.textAlign ?? "inherit") === "inherit" &&
    (a.marginY ?? "none") === "none" &&
    (a.marginX ?? "none") === "none" &&
    (a.paddingY ?? "none") === "none" &&
    (a.paddingX ?? "none") === "none" &&
    (a.maxWidth ?? "none") === "none" &&
    !hasStyleText(a.cssId) &&
    !hasStyleText(a.cssClass) &&
    (a.zIndex ?? "auto") === "auto" &&
    !a.hideDesktop &&
    !a.hideTablet &&
    !a.hideMobile
  );
}

export function blockChromeToCss(
  styleRaw: unknown,
  advancedRaw: unknown,
): CSSProperties {
  const { style: s, advanced: a } = resolveBlockChrome(styleRaw, advancedRaw);
  const bgKey = s.background ?? "none";
  const background =
    bgKey === "custom"
      ? asStyleText(s.backgroundCustom) || undefined
      : BACKGROUND[bgKey] || undefined;

  const maxWidthKey = a.maxWidth ?? "none";
  const maxWidth = MAX_WIDTH[maxWidthKey] ?? "none";
  const centered = a.centered !== false && maxWidth !== "none";
  const marginX = SPACE_X[a.marginX ?? "none"];

  const css: CSSProperties = {
    marginTop: SPACE_Y[a.marginY ?? "none"],
    marginBottom: SPACE_Y[a.marginY ?? "none"],
    marginLeft: centered ? "auto" : marginX,
    marginRight: centered ? "auto" : marginX,
    paddingTop: SPACE_Y[a.paddingY ?? "none"],
    paddingBottom: SPACE_Y[a.paddingY ?? "none"],
    paddingLeft: SPACE_X[a.paddingX ?? "none"],
    paddingRight: SPACE_X[a.paddingX ?? "none"],
    background,
    color: TEXT_COLOR[s.textColor ?? "inherit"],
    border: BORDER[s.border ?? "none"],
    borderRadius: RADIUS[s.radius ?? "none"],
    boxShadow: SHADOW[s.shadow ?? "none"],
    textAlign: (s.textAlign === "inherit"
      ? undefined
      : s.textAlign) as CSSProperties["textAlign"],
    maxWidth: maxWidth === "none" ? undefined : maxWidth,
    width: maxWidth === "none" ? undefined : "100%",
    zIndex:
      (a.zIndex ?? "auto") === "auto"
        ? undefined
        : Number(a.zIndex) || undefined,
  };

  for (const key of Object.keys(css) as (keyof CSSProperties)[]) {
    const value = css[key];
    if (
      value == null ||
      value === "" ||
      value === "none" ||
      value === "0" ||
      value === "transparent" ||
      value === "inherit"
    ) {
      delete css[key];
    }
  }

  return css;
}

export function blockChromeClassName(
  styleRaw: unknown,
  advancedRaw: unknown,
): string {
  const { style: s, advanced: a } = resolveBlockChrome(styleRaw, advancedRaw);
  const classes = ["puck-block-style"];

  if (
    (s.background ?? "none") !== "none" ||
    hasStyleText(s.backgroundCustom)
  ) {
    classes.push("puck-block-style--surface");
  }
  if ((s.border ?? "none") !== "none") {
    classes.push("puck-block-style--bordered");
  }
  if (a.hideDesktop) classes.push("puck-hide-desktop");
  if (a.hideTablet) classes.push("puck-hide-tablet");
  if (a.hideMobile) classes.push("puck-hide-mobile");
  const cssClass = asStyleText(a.cssClass).trim();
  if (cssClass) classes.push(cssClass);

  return classes.join(" ");
}
