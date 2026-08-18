import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const heightClass = {
    small: "h-8",
    medium: "h-16",
    large: "h-24",
    xlarge: "h-40",
};
const heightLabel = {
    small: "S",
    medium: "M",
    large: "L",
    xlarge: "XL",
};
const dividerClass = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
};
export default function SpacerBlock({ block, isEditing = false, }) {
    var _a, _b, _c, _d, _e, _f;
    const size = (_a = block.height) !== null && _a !== void 0 ? _a : "medium";
    const height = (_b = heightClass[size]) !== null && _b !== void 0 ? _b : heightClass.medium;
    const style = (_d = dividerClass[(_c = block.dividerStyle) !== null && _c !== void 0 ? _c : "solid"]) !== null && _d !== void 0 ? _d : dividerClass.solid;
    return (_jsxs("div", { className: `relative flex w-full items-center justify-center ${height} ${isEditing
            ? "rounded-md border border-dashed border-sky-dark/40 bg-sky-pale/40"
            : ""}`, "aria-hidden": !isEditing, children: [block.showDivider ? (_jsx("div", { className: `absolute inset-x-0 top-1/2 border-t border-sky-dark/30 ${style}` })) : null, isEditing ? (_jsxs("span", { className: "relative z-10 rounded bg-white/90 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink/50", children: ["Spacer / Divider \u00B7 ", (_e = heightLabel[size]) !== null && _e !== void 0 ? _e : "M", block.showDivider ? ` · ${(_f = block.dividerStyle) !== null && _f !== void 0 ? _f : "solid"}` : ""] })) : null] }));
}
