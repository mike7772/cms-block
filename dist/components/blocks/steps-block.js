import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StepsBlock({ block }) {
    var _a;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const vertical = block.layout === "vertical";
    return (_jsxs("section", { className: "mx-auto max-w-5xl px-6", children: [block.title ? (_jsx("h2", { className: "section-heading mb-10 text-center text-3xl sm:text-4xl", children: block.title })) : null, items.length ? (_jsx("ol", { className: vertical
                    ? "mx-auto flex max-w-2xl flex-col gap-0"
                    : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: items.map((item, i) => (_jsxs("li", { className: `relative flex ${vertical ? "gap-4 pb-8 last:pb-0" : "flex-col"}`, children: [vertical && i < items.length - 1 ? (_jsx("span", { className: "absolute left-4 top-10 h-[calc(100%-2rem)] w-px bg-sky-dark/25" })) : null, _jsx("div", { className: "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-trunk text-sm font-semibold text-white", children: i + 1 }), _jsxs("div", { className: vertical ? "pt-0.5" : "mt-3", children: [_jsx("h3", { className: "font-semibold text-ink", children: item.title }), item.description ? (_jsx("p", { className: "mt-1 text-sm leading-6 text-ink/70", children: item.description })) : null] })] }, `${item.title}-${i}`))) })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add steps" }))] }));
}
