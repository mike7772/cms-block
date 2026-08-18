"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function ReadingProgressBlock({ block, }) {
    var _a, _b;
    const [progress, setProgress] = useState(0);
    const position = (_a = block.position) !== null && _a !== void 0 ? _a : "top";
    const height = Math.min(12, Math.max(2, (_b = block.heightPx) !== null && _b !== void 0 ? _b : 4));
    const color = block.color || "#7BB8E3";
    useEffect(() => {
        function onScroll() {
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop || document.body.scrollTop;
            const scrollHeight = doc.scrollHeight - doc.clientHeight;
            const next = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, next)));
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    return (_jsx("div", { className: `pointer-events-none fixed inset-x-0 z-[60] ${position === "bottom" ? "bottom-0" : "top-0"}`, style: { height }, "aria-hidden": true, children: _jsx("div", { className: "h-full origin-left transition-[width] duration-75 ease-out", style: { width: `${progress}%`, backgroundColor: color } }) }));
}
