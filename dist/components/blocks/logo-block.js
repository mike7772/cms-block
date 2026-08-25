"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { defaultLocale, isLocale, } from "../../i18n/config.js";
import { resolveMediaUrl } from "../../puck/media.js";
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
function useActiveLocale() {
    const params = useParams();
    const pathname = usePathname();
    const fromParams = params === null || params === void 0 ? void 0 : params.locale;
    if (typeof fromParams === "string" && isLocale(fromParams))
        return fromParams;
    const fromPath = pathname.split("/").find((segment) => isLocale(segment));
    return fromPath !== null && fromPath !== void 0 ? fromPath : defaultLocale;
}
function resolveHref(url, locale) {
    const raw = (url || "").trim();
    if (!raw)
        return `/${locale}`;
    if (/^(https?:|mailto:|tel:)/i.test(raw))
        return raw;
    if (raw === "/")
        return `/${locale}`;
    const parts = raw.split("/");
    if (parts[1] && isLocale(parts[1]))
        return raw;
    if (raw.startsWith("/"))
        return `/${locale}${raw}`;
    return raw;
}
export default function LogoBlock({ block }) {
    var _a, _b;
    const locale = useActiveLocale();
    const width = Math.min(480, Math.max(40, (_a = block.widthPx) !== null && _a !== void 0 ? _a : 160));
    const img = (
    // eslint-disable-next-line @next/next/no-img-element
    _jsx("img", { src: resolveMediaUrl(block.imageUrl), alt: block.alt || "Logo", style: { width, maxWidth: "100%", height: "auto" }, className: "object-contain" }));
    return (_jsx("div", { className: `flex ${alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "left"]}`, children: block.url ? (_jsx(Link, { href: resolveHref(block.url, locale), className: "inline-block", children: img })) : (img) }));
}
