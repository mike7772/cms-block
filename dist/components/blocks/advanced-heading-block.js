import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};
export default function AdvancedHeadingBlock({ block, }) {
    var _a, _b, _c;
    const Tag = ((_a = block.headingLevel) !== null && _a !== void 0 ? _a : "h2");
    const align = (_c = alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "left"]) !== null && _c !== void 0 ? _c : alignClass.left;
    return (_jsxs("section", { className: `mx-auto max-w-3xl ${align}`, children: [block.eyebrow ? _jsx("p", { className: "eyebrow mb-3", children: block.eyebrow }) : null, _jsx(Tag, { className: "section-heading", children: block.title }), block.subtitle ? (_jsx("p", { className: "mt-4 text-lg leading-8 text-ink/70", children: block.subtitle })) : null] }));
}
