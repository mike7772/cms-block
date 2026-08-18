import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { initialLetter } from "@/puck/registry/helpers";
export default function IconListBlock({ block }) {
    var _a;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const twoCol = block.columns === "2";
    return (_jsxs("section", { className: "mx-auto max-w-5xl px-6", children: [block.title ? (_jsx("h2", { className: "section-heading mb-8 text-3xl sm:text-4xl", children: block.title })) : null, _jsx("ul", { className: `grid gap-6 ${twoCol ? "sm:grid-cols-2" : "grid-cols-1"}`, children: items.map((item, i) => (_jsxs("li", { className: "flex gap-4 rounded-2xl border border-sky-dark/20 bg-white p-5", children: [item.iconUrl ? (_jsx("div", { className: "relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-sky-pale", children: _jsx(Image, { src: item.iconUrl, alt: "", fill: true, className: "object-contain p-2", sizes: "48px" }) })) : (_jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-court", children: initialLetter(item.title) })), _jsxs("div", { className: "min-w-0", children: [_jsx("h3", { className: "font-semibold text-ink", children: item.title }), item.description ? (_jsx("p", { className: "mt-1 text-sm leading-6 text-ink/70", children: item.description })) : null] })] }, `${item.title}-${i}`))) })] }));
}
