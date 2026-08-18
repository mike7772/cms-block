import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { initialLetter } from "@/puck/registry/helpers";
const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
};
export default function BlurbBlock({ block }) {
    var _a, _b, _c;
    const layout = (_a = block.layout) !== null && _a !== void 0 ? _a : "stacked";
    const align = (_c = alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "center"]) !== null && _c !== void 0 ? _c : alignClass.center;
    return (_jsxs("div", { className: `mx-auto flex max-w-md gap-4 rounded-2xl border border-sky-dark/25 bg-white p-6 ${layout === "horizontal" ? "flex-row items-start" : `flex-col ${align}`}`, children: [block.iconUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            _jsx("img", { src: block.iconUrl, alt: "", className: "h-12 w-12 shrink-0 object-contain" })) : (_jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-trunk", children: initialLetter(block.title) })), _jsxs("div", { className: layout === "horizontal" ? "min-w-0 flex-1" : "", children: [_jsx("h3", { className: "text-lg font-semibold text-ink", children: block.title }), block.description ? (_jsx("p", { className: "mt-2 text-sm leading-6 text-ink/65", children: block.description })) : null, block.buttonLabel && block.buttonUrl ? (_jsx(Link, { href: block.buttonUrl, className: "mt-4 inline-flex text-sm font-semibold text-trunk hover:underline", children: block.buttonLabel })) : null] })] }));
}
