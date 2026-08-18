import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
export default function PostNavigationBlock({ block, }) {
    const showLabels = block.showLabels !== false;
    const hasPrev = Boolean(block.prevUrl);
    const hasNext = Boolean(block.nextUrl);
    if (!hasPrev && !hasNext) {
        return (_jsx("p", { className: "rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-8 text-center text-sm text-ink/55", children: "Set previous and next post URLs." }));
    }
    return (_jsxs("nav", { className: "mx-auto grid max-w-4xl gap-4 sm:grid-cols-2", children: [hasPrev ? (_jsxs(Link, { href: block.prevUrl, className: "rounded-2xl border border-sky-dark/25 bg-white p-5 transition hover:border-sky-dark/45 hover:shadow-md", children: [showLabels ? (_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-ink/45", children: block.prevLabel || "Previous" })) : null, _jsx("p", { className: "mt-1 font-semibold text-ink", children: block.prevTitle || "Previous post" })] })) : (_jsx("div", {})), hasNext ? (_jsxs(Link, { href: block.nextUrl, className: "rounded-2xl border border-sky-dark/25 bg-white p-5 text-right transition hover:border-sky-dark/45 hover:shadow-md", children: [showLabels ? (_jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-ink/45", children: block.nextLabel || "Next" })) : null, _jsx("p", { className: "mt-1 font-semibold text-ink", children: block.nextTitle || "Next post" })] })) : null] }));
}
