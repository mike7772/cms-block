import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const separators = {
    slash: "/",
    chevron: "›",
    arrow: "→",
    dot: "·",
};
const alignClass = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
};
export default function BreadcrumbsBlock({ block, }) {
    var _a, _b, _c, _d, _e;
    const sep = (_b = separators[(_a = block.separator) !== null && _a !== void 0 ? _a : "slash"]) !== null && _b !== void 0 ? _b : "/";
    const align = (_d = alignClass[(_c = block.align) !== null && _c !== void 0 ? _c : "left"]) !== null && _d !== void 0 ? _d : alignClass.left;
    const style = (_e = block.style) !== null && _e !== void 0 ? _e : "plain";
    const shell = style === "background"
        ? "rounded-2xl bg-sky-pale px-4 py-3"
        : style === "bordered"
            ? "rounded-2xl border border-sky-dark/25 px-4 py-3"
            : "";
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: `mx-auto max-w-5xl ${shell}`, children: _jsxs("ol", { className: `flex flex-wrap items-center gap-2 text-sm text-ink/70 ${align}`, children: [block.showHomePage !== false ? (_jsxs(_Fragment, { children: [_jsx("li", { children: _jsx("a", { href: "/", className: "hover:text-ink", children: block.homePageLabel || "Home" }) }), _jsx("li", { "aria-hidden": true, className: "text-ink/40", children: sep })] })) : null, _jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-ink", children: "Section" }) }), _jsx("li", { "aria-hidden": true, className: "text-ink/40", children: sep }), _jsx("li", { className: "font-medium text-ink", "aria-current": "page", children: "Current page" })] }) }));
}
