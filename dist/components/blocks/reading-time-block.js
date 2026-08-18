import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const alignClass = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
};
function countWordsFromHtml(html) {
    const text = html
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    if (!text)
        return 0;
    return text.split(" ").filter(Boolean).length;
}
export default function ReadingTimeBlock({ block, }) {
    var _a, _b, _c;
    const wpm = (_a = block.wordsPerMinute) !== null && _a !== void 0 ? _a : 200;
    const words = typeof block.wordCount === "number" && block.wordCount > 0
        ? block.wordCount
        : countWordsFromHtml((_b = block.contentHtml) !== null && _b !== void 0 ? _b : "");
    const minutes = Math.max(1, Math.ceil(words / Math.max(1, wpm)));
    return (_jsxs("div", { className: `flex items-center gap-2 text-sm text-ink/65 ${alignClass[(_c = block.align) !== null && _c !== void 0 ? _c : "left"]}`, children: [block.showIcon !== false ? (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-4 w-4 text-trunk", "aria-hidden": true, children: [_jsx("circle", { cx: "12", cy: "12", r: "9" }), _jsx("path", { d: "M12 7v5l3 2" })] })) : null, _jsxs("span", { children: [minutes, " ", block.label || "min read"] })] }));
}
