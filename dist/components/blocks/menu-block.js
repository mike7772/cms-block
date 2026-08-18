"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { registerOverlayPortal } from "@puckeditor/core";
import { ArrowRight, BarChart3, Briefcase, Building2, Check, ChevronDown, Code2, FileText, GitBranch, Globe, Heart, LayoutDashboard, LayoutTemplate, Mail, MapPin, Newspaper, Phone, Puzzle, Sparkles, Star, Users, Video, } from "lucide-react";
import { getPreferredImage } from "@/lib/media";
import { cn } from "@/lib/utils";
import { defaultLocale, isLocale, } from "@/i18n/config";
import { hasTextContent } from "@/puck/registry/helpers";
const MENU_CHILD_ICONS = {
    building: Building2,
    briefcase: Briefcase,
    mail: Mail,
    newspaper: Newspaper,
    "file-text": FileText,
    "bar-chart": BarChart3,
    "layout-dashboard": LayoutDashboard,
    video: Video,
    puzzle: Puzzle,
    "git-branch": GitBranch,
    "layout-template": LayoutTemplate,
    code: Code2,
    users: Users,
    globe: Globe,
    phone: Phone,
    "map-pin": MapPin,
    sparkles: Sparkles,
    star: Star,
    heart: Heart,
    check: Check,
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
/** Make `/` and site-relative paths locale-aware (e.g. `/` → `/en`). */
function resolveHref(url, locale) {
    const raw = (url || "#").trim();
    if (!raw || raw === "#")
        return "#";
    if (/^(https?:|mailto:|tel:)/i.test(raw))
        return raw;
    if (raw.startsWith("#"))
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
function ChildLinkIcon({ name }) {
    if (!name)
        return null;
    const Icon = MENU_CHILD_ICONS[name];
    if (!Icon)
        return null;
    return (_jsx(Icon, { className: "h-4 w-4 shrink-0 text-[#8a8a8a] transition group-hover:text-[#181818]", "aria-hidden": true }));
}
function ChildMenuLink({ child, locale, className, isEditing, }) {
    const body = (_jsxs(_Fragment, { children: [_jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [_jsx(ChildLinkIcon, { name: child.iconName }), _jsx("span", { className: "min-w-[1ch] truncate", children: child.label })] }), !isEditing ? (_jsx(ArrowRight, { className: "h-3.5 w-3.5 shrink-0 text-[#b0b0b0] transition group-hover:translate-x-0.5 group-hover:text-[#181818]", "aria-hidden": true })) : null] }));
    const sharedClass = cn("group flex h-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-[#181818] transition hover:bg-[#f5f5f5]", className);
    if (isEditing) {
        return (_jsx("div", { role: "menuitem", className: sharedClass, children: body }));
    }
    return (_jsx("a", { role: "menuitem", href: resolveHref(child.url || "#", locale), target: child.openInNewTab ? "_blank" : undefined, rel: child.openInNewTab ? "noopener noreferrer" : undefined, className: sharedClass, onClick: (e) => e.stopPropagation(), children: body }));
}
function triggerClass(style, isButton, open) {
    if (isButton || style === "buttons") {
        return "btn-primary inline-flex items-center gap-1.5";
    }
    if (style === "pills") {
        return cn("inline-flex items-center gap-1.5 rounded-full border border-sky-dark/30 bg-white px-4 py-2 text-sm font-medium text-ink hover:bg-sky-pale", open && "bg-sky-pale");
    }
    if (style === "underline") {
        return cn("inline-flex items-center gap-1.5 border-b-2 border-transparent px-2 py-1 text-sm font-medium text-ink hover:border-trunk", open && "border-trunk");
    }
    return cn("inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-black/[0.04]", open && "bg-black/[0.04]");
}
/** Normalize legacy single-row menus into repeatable groups. */
function resolveGroups(link) {
    var _a, _b;
    if ((_a = link.groups) === null || _a === void 0 ? void 0 : _a.length)
        return link.groups;
    if (((_b = link.children) === null || _b === void 0 ? void 0 : _b.length) ||
        link.description ||
        link.panelImage ||
        link.ctaLabel) {
        return [
            {
                title: link.label,
                description: link.description,
                panelImage: link.panelImage,
                ctaLabel: link.ctaLabel,
                ctaUrl: link.ctaUrl,
                children: link.children,
            },
        ];
    }
    return [];
}
function MegaGroupRow({ group, fallbackTitle, locale, isEditing, }) {
    var _a;
    const children = (_a = group.children) !== null && _a !== void 0 ? _a : [];
    const panelImage = getPreferredImage(group.panelImage);
    const title = hasTextContent(group.title) ? group.title : fallbackTitle;
    const hasPromo = Boolean(panelImage ||
        hasTextContent(group.description) ||
        hasTextContent(group.ctaLabel) ||
        hasTextContent(title));
    return (_jsxs("div", { className: cn("grid gap-0 border-b border-[#eee] last:border-b-0", hasPromo
            ? "sm:grid-cols-[minmax(14rem,auto)_minmax(0,auto)] sm:items-stretch"
            : "grid-cols-1"), children: [hasPromo ? (_jsx("div", { className: "flex flex-col gap-3 border-b border-[#eee] p-3.5 sm:border-b-0 sm:border-r sm:p-4", children: _jsxs("div", { className: cn("flex gap-3", panelImage ? "flex-col sm:flex-row sm:items-stretch" : "flex-col"), children: [panelImage ? (_jsxs("div", { className: "relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-xl bg-[#f3f3f3] shadow-inner sm:aspect-auto sm:min-h-[7.5rem] sm:w-[8.5rem] lg:w-[10rem]", children: [_jsx(Image, { src: panelImage.src, alt: "", fill: true, unoptimized: true, className: "object-cover transition duration-500 hover:scale-[1.03]", sizes: "(max-width: 640px) 100vw, 160px" }), _jsx("div", { className: "pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent", "aria-hidden": true })] })) : null, _jsxs("div", { className: "flex min-w-0 flex-1 flex-col justify-center gap-2.5", children: [_jsxs("div", { children: [_jsx("p", { className: "text-[11px] font-semibold tracking-[0.14em] text-[#8a8a8a] uppercase", children: "Featured" }), _jsx("p", { className: "mt-1 min-w-[1ch] text-base font-semibold tracking-tight text-[#181818]", children: title }), hasTextContent(group.description) ? (_jsx("p", { className: "mt-1.5 min-w-[1ch] text-sm leading-relaxed text-[#6b6b6b]", children: group.description })) : null] }), hasTextContent(group.ctaLabel) ? (isEditing ? (_jsx("span", { className: "inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-[#181818] px-4 py-2.5 text-sm font-semibold text-white", children: group.ctaLabel })) : (_jsx("a", { href: resolveHref(group.ctaUrl || "/", locale), className: "inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-[#181818] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black", onClick: (e) => e.stopPropagation(), children: group.ctaLabel }))) : null] })] }) })) : null, _jsx("ul", { className: cn("flex content-start gap-x-1 gap-y-0.5 p-2", hasPromo
                    ? "h-auto flex-col sm:h-0 sm:min-h-full sm:flex-col sm:flex-wrap"
                    : "flex-col"), children: children.map((child, i) => {
                    var _a;
                    return (_jsx("li", { className: "w-[13.5rem] max-w-full shrink-0", children: _jsx(ChildMenuLink, { child: child, locale: locale, isEditing: isEditing }) }, (_a = child.id) !== null && _a !== void 0 ? _a : i));
                }) })] }));
}
function MegaPanel({ link, labelledBy, locale, isEditing, }) {
    const groups = resolveGroups(link);
    const hasImage = groups.some((g) => getPreferredImage(g.panelImage));
    return (_jsx("div", { className: "absolute left-0 top-full z-[200] pt-2", children: _jsx("div", { role: "menu", "aria-labelledby": labelledBy, className: cn("pointer-events-auto max-h-[min(80vh,40rem)] w-max max-w-[min(100vw-1.5rem,48rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]", hasImage ? "min-w-[20rem]" : "min-w-[14rem]"), children: groups.map((group, index) => {
                var _a;
                return (_jsx(MegaGroupRow, { group: group, fallbackTitle: link.label, locale: locale, isEditing: isEditing }, (_a = group.id) !== null && _a !== void 0 ? _a : index));
            }) }) }));
}
function MenuItem({ link, style, vertical, locale, isEditing, }) {
    const [open, setOpen] = useState(false);
    const itemRef = useRef(null);
    const closeTimer = useRef(null);
    const triggerId = useId();
    const icon = getPreferredImage(link.icon);
    const groups = resolveGroups(link);
    const hasDropdown = groups.length > 0;
    const isButton = Boolean(link.isButton);
    function clearCloseTimer() {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }
    function openMenu() {
        clearCloseTimer();
        setOpen(true);
    }
    function scheduleClose() {
        if (isEditing)
            return;
        clearCloseTimer();
        closeTimer.current = setTimeout(() => setOpen(false), 120);
    }
    useEffect(() => {
        return () => clearCloseTimer();
    }, []);
    useEffect(() => {
        if (!open || isEditing)
            return;
        function onPointerDown(e) {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        function onKey(e) {
            if (e.key === "Escape")
                setOpen(false);
        }
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [open, isEditing]);
    const iconEl = icon ? (_jsx("span", { className: "relative h-4 w-4 shrink-0", children: _jsx(Image, { src: icon.src, alt: "", fill: true, className: "object-contain", sizes: "16px" }) })) : null;
    if (!hasDropdown) {
        if (isEditing) {
            return (_jsx("li", { children: _jsxs("div", { className: triggerClass(style, isButton, false), children: [iconEl, _jsx("span", { className: "min-w-[1ch]", children: link.label })] }) }));
        }
        return (_jsx("li", { children: _jsxs("a", { href: resolveHref(link.url || "/", locale), target: link.openInNewTab ? "_blank" : undefined, rel: link.openInNewTab ? "noopener noreferrer" : undefined, className: triggerClass(style, isButton, false), children: [iconEl, link.label] }) }));
    }
    return (_jsxs("li", { ref: itemRef, className: cn("relative", vertical && "w-full"), onMouseEnter: () => {
            if (!vertical)
                openMenu();
        }, onMouseLeave: () => {
            if (!vertical)
                scheduleClose();
        }, children: [_jsxs("div", { className: cn(triggerClass(style, isButton, open), vertical && "w-full", isEditing && "cursor-text"), children: [iconEl, _jsx("span", { className: "min-w-[1ch]", children: link.label }), _jsx("button", { type: "button", id: triggerId, "aria-expanded": open, "aria-haspopup": "menu", "aria-label": "Toggle menu", onClick: (e) => {
                            e.stopPropagation();
                            clearCloseTimer();
                            setOpen((v) => !v);
                        }, onPointerDown: (e) => e.stopPropagation(), className: "inline-flex shrink-0 items-center justify-center rounded p-0.5 hover:bg-black/5", children: _jsx(ChevronDown, { className: cn("h-3.5 w-3.5 opacity-70 transition-transform duration-200", open && "rotate-180"), "aria-hidden": true }) })] }), open ? (vertical ? (_jsx("div", { className: "relative z-[200] mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-[#e8e8e8] bg-white shadow-sm", children: groups.map((group, gi) => {
                    var _a, _b;
                    return (_jsxs("div", { className: "border-b border-[#eee] p-2 last:border-b-0", children: [(hasTextContent(group.title) ||
                                hasTextContent(group.description) ||
                                hasTextContent(group.ctaLabel)) && (_jsxs("div", { className: "mb-2 px-3 pb-2 pt-1", children: [hasTextContent(group.title) ? (_jsx("p", { className: "min-w-[1ch] text-xs font-semibold text-[#181818]", children: group.title })) : null, hasTextContent(group.description) ? (_jsx("p", { className: "mt-1 min-w-[1ch] text-xs leading-relaxed text-[#6b6b6b]", children: group.description })) : null, hasTextContent(group.ctaLabel) ? (isEditing ? (_jsx("span", { className: "mt-2 inline-flex whitespace-nowrap rounded-md bg-[#181818] px-3 py-1.5 text-xs font-semibold text-white", children: group.ctaLabel })) : (_jsx("a", { href: resolveHref(group.ctaUrl || link.url || "/", locale), className: "mt-2 inline-flex whitespace-nowrap rounded-md bg-[#181818] px-3 py-1.5 text-xs font-semibold text-white", children: group.ctaLabel }))) : null] })), _jsx("ul", { className: "flex flex-col", children: ((_a = group.children) !== null && _a !== void 0 ? _a : []).map((child, i) => {
                                    var _a;
                                    return (_jsx("li", { children: _jsx(ChildMenuLink, { child: child, locale: locale, isEditing: isEditing, className: "rounded-lg py-2" }) }, (_a = child.id) !== null && _a !== void 0 ? _a : i));
                                }) })] }, (_b = group.id) !== null && _b !== void 0 ? _b : gi));
                }) })) : (_jsx(MegaPanel, { link: link, labelledBy: triggerId, locale: locale, isEditing: isEditing }))) : null] }));
}
export default function MenuBlock({ block, isEditing = false, }) {
    var _a, _b;
    const links = (_a = block.links) !== null && _a !== void 0 ? _a : [];
    const vertical = block.orientation === "vertical";
    const style = (_b = block.style) !== null && _b !== void 0 ? _b : "plain";
    const locale = useActiveLocale();
    const navRef = useRef(null);
    // Puck sets pointer-events:none on component children; portal restores interaction.
    useEffect(() => {
        return registerOverlayPortal(navRef.current, { disableDrag: true });
    }, []);
    return (_jsxs("nav", { ref: navRef, className: cn(!vertical && "relative z-[60]", vertical && "mx-auto max-w-4xl"), children: [hasTextContent(block.heading) ? (_jsx("h2", { className: "section-heading mb-6 min-w-[1ch] text-center text-2xl", children: block.heading })) : null, links.length ? (_jsx("ul", { className: cn("flex gap-1", vertical
                    ? "flex-col items-stretch"
                    : "flex-wrap items-center justify-center lg:justify-start"), children: links.map((link, i) => {
                    var _a;
                    return (_jsx(MenuItem, { link: link, style: style, vertical: vertical, locale: locale, isEditing: isEditing }, (_a = link.id) !== null && _a !== void 0 ? _a : i));
                }) })) : (_jsx("p", { className: "text-center text-ink/50", children: "Add menu links" }))] }));
}
