import { selectOptions } from "@/puck/registry/helpers";
export const DEFAULT_BLOCK_STYLE = {
    background: "none",
    backgroundCustom: "",
    textColor: "inherit",
    border: "none",
    radius: "none",
    shadow: "none",
    textAlign: "inherit",
};
export const DEFAULT_BLOCK_ADVANCED = {
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
const SPACE_Y = {
    none: "0",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "4rem",
    "2xl": "6rem",
};
const SPACE_X = {
    none: "0",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
};
const RADIUS = {
    none: "0",
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
};
const SHADOW = {
    none: "none",
    sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
    md: "0 4px 14px rgba(15, 23, 42, 0.08)",
    lg: "0 12px 32px rgba(15, 23, 42, 0.12)",
    xl: "0 24px 48px rgba(15, 23, 42, 0.14)",
};
const MAX_WIDTH = {
    none: "none",
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    full: "100%",
};
const BACKGROUND = {
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
const TEXT_COLOR = {
    inherit: "inherit",
    ink: "#0f172a",
    muted: "#64748b",
    white: "#ffffff",
    brand: "#0f766e",
};
const BORDER = {
    none: "none",
    subtle: "1px solid rgba(15, 23, 42, 0.08)",
    soft: "1px solid rgba(15, 23, 42, 0.14)",
    strong: "1px solid rgba(15, 23, 42, 0.28)",
    brand: "1px solid #0f766e",
};
const Z_INDEX = {
    auto: "auto",
    "0": "0",
    "1": "1",
    "10": "10",
    "20": "20",
    "50": "50",
};
function labeledSelect(label, keys) {
    return {
        type: "select",
        label,
        options: selectOptions(keys),
    };
}
function boolRadio(label) {
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
function asStyleText(value) {
    if (value == null)
        return "";
    if (typeof value === "string")
        return value;
    if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
    }
    return "";
}
function hasStyleText(value) {
    return asStyleText(value).trim().length > 0;
}
export const blockStyleFields = {
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
export function normalizeBlockStyle(raw) {
    if (!raw || typeof raw !== "object")
        return Object.assign({}, DEFAULT_BLOCK_STYLE);
    const legacy = raw;
    return Object.assign(Object.assign({}, DEFAULT_BLOCK_STYLE), { background: asStyleText(legacy.background) || DEFAULT_BLOCK_STYLE.background, backgroundCustom: asStyleText(legacy.backgroundCustom), textColor: asStyleText(legacy.textColor) || DEFAULT_BLOCK_STYLE.textColor, border: asStyleText(legacy.border) || DEFAULT_BLOCK_STYLE.border, radius: asStyleText(legacy.radius) || DEFAULT_BLOCK_STYLE.radius, shadow: asStyleText(legacy.shadow) || DEFAULT_BLOCK_STYLE.shadow, textAlign: asStyleText(legacy.textAlign) || DEFAULT_BLOCK_STYLE.textAlign });
}
export function normalizeBlockAdvanced(raw) {
    if (!raw || typeof raw !== "object") {
        return Object.assign({}, DEFAULT_BLOCK_ADVANCED);
    }
    const legacy = raw;
    return Object.assign(Object.assign({}, DEFAULT_BLOCK_ADVANCED), { marginY: asStyleText(legacy.marginY) || DEFAULT_BLOCK_ADVANCED.marginY, marginX: asStyleText(legacy.marginX) || DEFAULT_BLOCK_ADVANCED.marginX, paddingY: asStyleText(legacy.paddingY) || DEFAULT_BLOCK_ADVANCED.paddingY, paddingX: asStyleText(legacy.paddingX) || DEFAULT_BLOCK_ADVANCED.paddingX, maxWidth: asStyleText(legacy.maxWidth) || DEFAULT_BLOCK_ADVANCED.maxWidth, centered: typeof legacy.centered === "boolean"
            ? legacy.centered
            : DEFAULT_BLOCK_ADVANCED.centered, cssId: asStyleText(legacy.cssId), cssClass: asStyleText(legacy.cssClass), zIndex: asStyleText(legacy.zIndex) || DEFAULT_BLOCK_ADVANCED.zIndex, hideDesktop: Boolean(legacy.hideDesktop), hideTablet: Boolean(legacy.hideTablet), hideMobile: Boolean(legacy.hideMobile) });
}
/** Prefer advanced; fall back to layout keys still living on legacy style. */
export function resolveBlockChrome(styleRaw, advancedRaw) {
    var _a, _b, _c, _d, _e, _f;
    const style = normalizeBlockStyle(styleRaw);
    let advanced = normalizeBlockAdvanced(advancedRaw);
    if ((!advancedRaw || typeof advancedRaw !== "object") &&
        styleRaw &&
        typeof styleRaw === "object") {
        const legacy = styleRaw;
        advanced = Object.assign(Object.assign({}, advanced), { marginY: (_a = legacy.marginY) !== null && _a !== void 0 ? _a : advanced.marginY, marginX: (_b = legacy.marginX) !== null && _b !== void 0 ? _b : advanced.marginX, paddingY: (_c = legacy.paddingY) !== null && _c !== void 0 ? _c : advanced.paddingY, paddingX: (_d = legacy.paddingX) !== null && _d !== void 0 ? _d : advanced.paddingX, maxWidth: (_e = legacy.maxWidth) !== null && _e !== void 0 ? _e : advanced.maxWidth, centered: (_f = legacy.centered) !== null && _f !== void 0 ? _f : advanced.centered });
    }
    return { style, advanced };
}
export function isDefaultBlockChrome(style, advanced) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const s = normalizeBlockStyle(style);
    const a = normalizeBlockAdvanced(advanced);
    return (((_a = s.background) !== null && _a !== void 0 ? _a : "none") === "none" &&
        !hasStyleText(s.backgroundCustom) &&
        ((_b = s.textColor) !== null && _b !== void 0 ? _b : "inherit") === "inherit" &&
        ((_c = s.border) !== null && _c !== void 0 ? _c : "none") === "none" &&
        ((_d = s.radius) !== null && _d !== void 0 ? _d : "none") === "none" &&
        ((_e = s.shadow) !== null && _e !== void 0 ? _e : "none") === "none" &&
        ((_f = s.textAlign) !== null && _f !== void 0 ? _f : "inherit") === "inherit" &&
        ((_g = a.marginY) !== null && _g !== void 0 ? _g : "none") === "none" &&
        ((_h = a.marginX) !== null && _h !== void 0 ? _h : "none") === "none" &&
        ((_j = a.paddingY) !== null && _j !== void 0 ? _j : "none") === "none" &&
        ((_k = a.paddingX) !== null && _k !== void 0 ? _k : "none") === "none" &&
        ((_l = a.maxWidth) !== null && _l !== void 0 ? _l : "none") === "none" &&
        !hasStyleText(a.cssId) &&
        !hasStyleText(a.cssClass) &&
        ((_m = a.zIndex) !== null && _m !== void 0 ? _m : "auto") === "auto" &&
        !a.hideDesktop &&
        !a.hideTablet &&
        !a.hideMobile);
}
export function blockChromeToCss(styleRaw, advancedRaw) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const { style: s, advanced: a } = resolveBlockChrome(styleRaw, advancedRaw);
    const bgKey = (_a = s.background) !== null && _a !== void 0 ? _a : "none";
    const background = bgKey === "custom"
        ? asStyleText(s.backgroundCustom) || undefined
        : BACKGROUND[bgKey] || undefined;
    const maxWidthKey = (_b = a.maxWidth) !== null && _b !== void 0 ? _b : "none";
    const maxWidth = (_c = MAX_WIDTH[maxWidthKey]) !== null && _c !== void 0 ? _c : "none";
    const centered = a.centered !== false && maxWidth !== "none";
    const marginX = SPACE_X[(_d = a.marginX) !== null && _d !== void 0 ? _d : "none"];
    const css = {
        marginTop: SPACE_Y[(_e = a.marginY) !== null && _e !== void 0 ? _e : "none"],
        marginBottom: SPACE_Y[(_f = a.marginY) !== null && _f !== void 0 ? _f : "none"],
        marginLeft: centered ? "auto" : marginX,
        marginRight: centered ? "auto" : marginX,
        paddingTop: SPACE_Y[(_g = a.paddingY) !== null && _g !== void 0 ? _g : "none"],
        paddingBottom: SPACE_Y[(_h = a.paddingY) !== null && _h !== void 0 ? _h : "none"],
        paddingLeft: SPACE_X[(_j = a.paddingX) !== null && _j !== void 0 ? _j : "none"],
        paddingRight: SPACE_X[(_k = a.paddingX) !== null && _k !== void 0 ? _k : "none"],
        background,
        color: TEXT_COLOR[(_l = s.textColor) !== null && _l !== void 0 ? _l : "inherit"],
        border: BORDER[(_m = s.border) !== null && _m !== void 0 ? _m : "none"],
        borderRadius: RADIUS[(_o = s.radius) !== null && _o !== void 0 ? _o : "none"],
        boxShadow: SHADOW[(_p = s.shadow) !== null && _p !== void 0 ? _p : "none"],
        textAlign: (s.textAlign === "inherit"
            ? undefined
            : s.textAlign),
        maxWidth: maxWidth === "none" ? undefined : maxWidth,
        width: maxWidth === "none" ? undefined : "100%",
        zIndex: ((_q = a.zIndex) !== null && _q !== void 0 ? _q : "auto") === "auto"
            ? undefined
            : Number(a.zIndex) || undefined,
    };
    for (const key of Object.keys(css)) {
        const value = css[key];
        if (value == null ||
            value === "" ||
            value === "none" ||
            value === "0" ||
            value === "transparent" ||
            value === "inherit") {
            delete css[key];
        }
    }
    return css;
}
export function blockChromeClassName(styleRaw, advancedRaw) {
    var _a, _b;
    const { style: s, advanced: a } = resolveBlockChrome(styleRaw, advancedRaw);
    const classes = ["puck-block-style"];
    if (((_a = s.background) !== null && _a !== void 0 ? _a : "none") !== "none" ||
        hasStyleText(s.backgroundCustom)) {
        classes.push("puck-block-style--surface");
    }
    if (((_b = s.border) !== null && _b !== void 0 ? _b : "none") !== "none") {
        classes.push("puck-block-style--bordered");
    }
    if (a.hideDesktop)
        classes.push("puck-hide-desktop");
    if (a.hideTablet)
        classes.push("puck-hide-tablet");
    if (a.hideMobile)
        classes.push("puck-hide-mobile");
    const cssClass = asStyleText(a.cssClass).trim();
    if (cssClass)
        classes.push(cssClass);
    return classes.join(" ");
}
