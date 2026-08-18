import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
export default function ProgressTrackerBlock({ block, }) {
    var _a, _b;
    const steps = (_a = block.steps) !== null && _a !== void 0 ? _a : [];
    const vertical = block.layout === "vertical";
    const current = (_b = block.currentStep) !== null && _b !== void 0 ? _b : 1;
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-8 text-center", children: block.heading })) : null, steps.length ? (_jsx("ol", { className: vertical
                    ? "flex flex-col gap-0"
                    : "flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2", children: steps.map((step, i) => {
                    var _a;
                    const icon = getPreferredImage(step.icon);
                    const complete = (_a = step.isComplete) !== null && _a !== void 0 ? _a : (current > 0 && i + 1 < current);
                    const isCurrent = i + 1 === current;
                    return (_jsxs("li", { className: `relative flex ${vertical
                            ? "gap-4 pb-8 last:pb-0"
                            : "flex-1 flex-col items-center text-center"}`, children: [vertical && i < steps.length - 1 ? (_jsx("span", { className: `absolute left-4 top-10 h-[calc(100%-2rem)] w-px ${complete ? "bg-trunk" : "bg-sky-dark/25"}` })) : null, _jsx("div", { className: `relative z-10 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 text-sm font-semibold ${complete || isCurrent
                                    ? "border-trunk bg-trunk text-white"
                                    : "border-sky-dark/30 bg-white text-ink/50"}`, children: icon ? (_jsx(Image, { src: icon.src, alt: "", fill: true, className: "object-cover", sizes: "32px" })) : complete ? ("✓") : (i + 1) }), _jsxs("div", { className: vertical ? "pt-0.5" : "mt-3", children: [_jsx("p", { className: "font-semibold text-ink", children: step.title }), step.description ? (_jsx("p", { className: "mt-1 text-sm text-ink/60", children: step.description })) : null] })] }, `${step.title}-${i}`));
                }) })) : (_jsx("div", { className: "rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60", children: "Add tracker steps" }))] }));
}
