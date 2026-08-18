import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { renderSlot } from "./nested-blocks";
const maxWidthClass = {
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-none",
};
const heightClass = {
    compact: "min-h-14 py-2",
    default: "min-h-16 py-3",
    tall: "min-h-20 py-4",
};
const bgClass = {
    white: "bg-white text-[#181818]",
    pale: "bg-[#f5f8fb] text-[#181818]",
    sky: "bg-[var(--sky-light)] text-[#181818]",
    ink: "bg-[#181818] text-white",
    transparent: "bg-transparent text-[#181818]",
};
export default function HeaderBlock({ block, left, center, right, }) {
    var _a, _b, _c, _d, _e, _f;
    const background = (_a = block.background) !== null && _a !== void 0 ? _a : "white";
    const maxWidth = (_c = maxWidthClass[(_b = block.maxWidth) !== null && _b !== void 0 ? _b : "xl"]) !== null && _c !== void 0 ? _c : maxWidthClass.xl;
    const height = (_e = heightClass[(_d = block.height) !== null && _d !== void 0 ? _d : "default"]) !== null && _e !== void 0 ? _e : heightClass.default;
    const isDark = background === "ink";
    const showLanguageSwitcher = block.showLanguageSwitcher !== false;
    return (_jsx("header", { className: cn("relative z-40 w-full overflow-visible", block.sticky ? "sticky top-0" : null, block.transparent
            ? "bg-transparent"
            : ((_f = bgClass[background]) !== null && _f !== void 0 ? _f : bgClass.white), block.showBorder !== false
            ? isDark
                ? "border-b border-white/10"
                : "border-b border-[#dcdcdc]"
            : null, block.sticky && !block.transparent
            ? isDark
                ? "supports-backdrop-filter:bg-[#181818]/95"
                : "supports-backdrop-filter:bg-white/95"
            : null), children: _jsxs("div", { className: cn("mx-auto flex w-full flex-col gap-3 overflow-visible px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6", maxWidth, height), children: [_jsx("div", { className: "flex min-w-0 shrink-0 items-center justify-start gap-3 overflow-visible [&_nav]:mx-0 [&_nav]:max-w-none", children: renderSlot(left, "flex flex-row flex-wrap items-center gap-3", {
                        itemClassName: "contents",
                    }) }), _jsx("div", { className: "relative z-[70] flex min-w-0 flex-1 items-center justify-start overflow-visible lg:justify-center [&_nav]:mx-0 [&_nav]:max-w-none [&_h2]:mb-0 [&_h2]:text-left [&_h2]:text-base", children: renderSlot(center, "flex flex-row flex-wrap items-center gap-3", {
                        itemClassName: "relative z-[70]",
                    }) }), _jsxs("div", { className: "flex min-w-0 shrink-0 items-center justify-end gap-2", children: [renderSlot(right, "flex flex-row flex-wrap items-center justify-end gap-2", { itemClassName: "contents" }), showLanguageSwitcher ? (_jsx("div", { className: cn("shrink-0", isDark &&
                                "[&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20"), children: _jsx(LanguageSwitcher, {}) })) : null] })] }) }));
}
