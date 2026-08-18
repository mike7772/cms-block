import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { asPlainText, initialLetter } from "../../puck/registry/helpers.js";
export default function AuthorBoxBlock({ block, }) {
    var _a;
    const align = (_a = block.align) !== null && _a !== void 0 ? _a : "left";
    const name = asPlainText(block.name);
    const links = [
        { label: "Website", href: block.websiteUrl },
        { label: "Twitter", href: block.twitterUrl },
        { label: "LinkedIn", href: block.linkedinUrl },
    ].filter((l) => Boolean(l.href));
    return (_jsxs("section", { className: `mx-auto flex max-w-3xl gap-5 rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8 ${align === "center"
            ? "flex-col items-center text-center"
            : "flex-col sm:flex-row sm:items-start"}`, children: [_jsx("div", { className: "relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-sky-pale", children: block.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                _jsx("img", { src: block.avatarUrl, alt: name, className: "h-full w-full object-cover" })) : (_jsx("div", { className: "flex h-full items-center justify-center text-2xl font-semibold text-trunk", children: initialLetter(block.name) })) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("h3", { className: "text-xl font-semibold text-ink", children: block.name }), block.role ? (_jsx("p", { className: "mt-0.5 text-sm font-medium text-foliage", children: block.role })) : null, block.bio ? (_jsx("p", { className: "mt-3 text-sm leading-6 text-ink/70", children: block.bio })) : null, links.length > 0 ? (_jsx("ul", { className: `mt-4 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`, children: links.map((link) => (_jsx("li", { children: _jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "text-sm font-medium text-trunk hover:underline", children: link.label }) }, link.label))) })) : null] })] }));
}
