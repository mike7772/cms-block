import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { asPlainText } from "@/puck/registry/helpers";
function parseItems(raw) {
    const text = asPlainText(raw);
    if (!text.trim())
        return [];
    try {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
            return parsed.map(String).filter(Boolean);
        }
    }
    catch (_a) {
        // fall through to newline parse
    }
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}
const speedDuration = {
    slow: "40s",
    normal: "25s",
    fast: "12s",
};
export default function MarqueeBlock({ block }) {
    var _a, _b;
    const items = parseItems(block.items);
    const duration = (_b = speedDuration[(_a = block.speed) !== null && _a !== void 0 ? _a : "normal"]) !== null && _b !== void 0 ? _b : speedDuration.normal;
    const pause = block.pauseOnHover !== false;
    const loop = items.length ? [...items, ...items] : [];
    if (!items.length) {
        return (_jsx("div", { className: "rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-8 text-center text-ink/50", children: "Add marquee items" }));
    }
    return (_jsxs("div", { className: "overflow-hidden border-y border-sky-dark/20 bg-sky-pale/60 py-3", children: [_jsx("div", { className: `flex w-max gap-10 whitespace-nowrap ${pause ? "hover:[animation-play-state:paused]" : ""}`, style: {
                    animation: `marquee-scroll ${duration} linear infinite`,
                }, children: loop.map((item, i) => (_jsxs("span", { className: "text-sm font-semibold tracking-wide text-ink", children: [item, _jsx("span", { className: "ml-10 text-court", "aria-hidden": true, children: "\u2022" })] }, `${item}-${i}`))) }), _jsx("style", { children: `
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      ` })] }));
}
