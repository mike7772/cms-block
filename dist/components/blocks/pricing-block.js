import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { asPlainText } from "../../puck/registry/helpers.js";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
function planFeatures(features) {
    if (Array.isArray(features))
        return features.map(String);
    const text = asPlainText(features);
    if (text) {
        return text
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
    }
    return [];
}
export default function PricingBlock({ block, }) {
    var _a, _b, _c;
    const columns = (_a = block.columns) !== null && _a !== void 0 ? _a : "3";
    const plans = (_b = block.plans) !== null && _b !== void 0 ? _b : [];
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-white via-sky-pale to-sky-light px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: `mx-auto grid max-w-6xl gap-6 ${(_c = columnClass[columns]) !== null && _c !== void 0 ? _c : columnClass["3"]}`, children: plans.map((plan, i) => {
                    const features = planFeatures(plan.features);
                    const featured = Boolean(plan.isFeatured);
                    return (_jsxs("article", { className: `flex flex-col rounded-2xl border p-6 shadow-sm ${featured
                            ? "border-court bg-trunk text-white shadow-trunk/20"
                            : "border-sky-dark/20 bg-white/90 shadow-sky-dark/10"}`, children: [_jsx("h3", { className: `text-lg font-semibold ${featured ? "text-white" : "text-ink"}`, children: plan.planName }), _jsxs("p", { className: "mt-3", children: [_jsx("span", { className: "text-4xl font-semibold tracking-tight", children: plan.price }), plan.period ? (_jsx("span", { className: `text-sm ${featured ? "text-white/70" : "text-ink/60"}`, children: plan.period })) : null] }), plan.description ? (_jsx("p", { className: `mt-3 text-sm ${featured ? "text-white/75" : "text-ink/70"}`, children: plan.description })) : null, features.length > 0 ? (_jsx("ul", { className: `mt-5 space-y-2 text-sm ${featured ? "text-white/85" : "text-ink/70"}`, children: features.map((f, fi) => (_jsxs("li", { className: "flex gap-2", children: [_jsx("span", { "aria-hidden": true, children: "\u2713" }), _jsx("span", { children: f })] }, fi))) })) : null, plan.buttonLabel && plan.buttonUrl ? (_jsx("div", { className: "mt-auto pt-6", children: plan.buttonUrl.startsWith("/") ? (_jsx(Link, { href: plan.buttonUrl, className: featured
                                        ? "btn-primary w-full bg-court"
                                        : "inline-flex w-full items-center justify-center rounded-full border border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk hover:text-white", children: plan.buttonLabel })) : (_jsx("a", { href: plan.buttonUrl, className: featured
                                        ? "btn-primary w-full bg-court"
                                        : "inline-flex w-full items-center justify-center rounded-full border border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk hover:text-white", children: plan.buttonLabel })) })) : null] }, i));
                }) })] }));
}
