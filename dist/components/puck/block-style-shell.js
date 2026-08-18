"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { blockChromeClassName, blockChromeToCss, isDefaultBlockChrome, normalizeBlockAdvanced, normalizeBlockStyle, } from "@/puck/block-style";
import { cn } from "@/lib/utils";
export default function BlockStyleShell({ style, advanced, children, className, }) {
    const normalizedStyle = normalizeBlockStyle(style);
    const normalizedAdvanced = normalizeBlockAdvanced(advanced);
    // Support legacy pages that only stored layout on `style`
    const effectiveAdvanced = advanced == null && style && typeof style === "object"
        ? normalizeBlockAdvanced(Object.assign(Object.assign({}, normalizedAdvanced), style))
        : normalizedAdvanced;
    if (isDefaultBlockChrome(normalizedStyle, effectiveAdvanced)) {
        return _jsx(_Fragment, { children: children });
    }
    const id = (effectiveAdvanced.cssId || "").trim() || undefined;
    return (_jsx("div", { id: id, className: cn(blockChromeClassName(normalizedStyle, effectiveAdvanced), className), style: blockChromeToCss(normalizedStyle, effectiveAdvanced), "data-puck-block-style": true, children: children }));
}
