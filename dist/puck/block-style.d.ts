import type { CSSProperties } from "react";
import type { Fields } from "@puckeditor/core";
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
export declare const DEFAULT_BLOCK_STYLE: BlockStyle;
export declare const DEFAULT_BLOCK_ADVANCED: BlockAdvanced;
export declare const blockStyleFields: Fields;
export declare function normalizeBlockStyle(raw: unknown): BlockStyle;
export declare function normalizeBlockAdvanced(raw: unknown): BlockAdvanced;
/** Prefer advanced; fall back to layout keys still living on legacy style. */
export declare function resolveBlockChrome(styleRaw: unknown, advancedRaw: unknown): {
    style: BlockStyle;
    advanced: BlockAdvanced;
};
export declare function isDefaultBlockChrome(style: BlockStyle, advanced: BlockAdvanced): boolean;
export declare function blockChromeToCss(styleRaw: unknown, advancedRaw: unknown): CSSProperties;
export declare function blockChromeClassName(styleRaw: unknown, advancedRaw: unknown): string;
//# sourceMappingURL=block-style.d.ts.map