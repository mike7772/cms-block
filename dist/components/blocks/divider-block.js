import { jsx as _jsx } from "react/jsx-runtime";
const styleClass = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
};
const widthClass = {
    small: "max-w-xs",
    medium: "max-w-md",
    large: "max-w-2xl",
    full: "max-w-none",
};
const spacingClass = {
    small: "my-4",
    medium: "my-8",
    large: "my-14",
};
export default function DividerBlock({ block }) {
    var _a, _b, _c, _d, _e, _f;
    const style = (_b = styleClass[(_a = block.style) !== null && _a !== void 0 ? _a : "solid"]) !== null && _b !== void 0 ? _b : styleClass.solid;
    const width = (_d = widthClass[(_c = block.width) !== null && _c !== void 0 ? _c : "full"]) !== null && _d !== void 0 ? _d : widthClass.full;
    const spacing = (_f = spacingClass[(_e = block.spacing) !== null && _e !== void 0 ? _e : "medium"]) !== null && _f !== void 0 ? _f : spacingClass.medium;
    return (_jsx("div", { className: `mx-auto w-full px-6 ${width} ${spacing}`, children: _jsx("hr", { className: `border-t border-sky-dark/30 ${style}` }) }));
}
