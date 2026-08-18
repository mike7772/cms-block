"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function BackToTopBlock({ block, }) {
    var _a, _b;
    const [visible, setVisible] = useState(false);
    const threshold = (_a = block.showAfterPx) !== null && _a !== void 0 ? _a : 400;
    const position = (_b = block.position) !== null && _b !== void 0 ? _b : "bottom-right";
    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY >= threshold);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);
    if (!visible)
        return null;
    return (_jsxs("button", { type: "button", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), className: `fixed z-50 inline-flex items-center gap-2 rounded-full bg-trunk px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-trunk-dark ${position === "bottom-left" ? "bottom-6 left-6" : "bottom-6 right-6"}`, "aria-label": block.label || "Back to top", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-4 w-4", "aria-hidden": true, children: _jsx("path", { d: "M12 19V5M5 12l7-7 7 7" }) }), block.label || "Top"] }));
}
