"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const sizeMap = {
    small: { box: 96, stroke: 8 },
    medium: { box: 140, stroke: 10 },
    large: { box: 180, stroke: 12 },
};
export default function CircleCounterBlock({ block, }) {
    var _a, _b, _c, _d, _e;
    const target = Math.min(100, Math.max(0, (_a = block.value) !== null && _a !== void 0 ? _a : 0));
    const duration = (_b = block.durationMs) !== null && _b !== void 0 ? _b : 1500;
    const color = block.color || "#7BB8E3";
    const { box, stroke } = (_d = sizeMap[(_c = block.size) !== null && _c !== void 0 ? _c : "medium"]) !== null && _d !== void 0 ? _d : sizeMap.medium;
    const radius = (box - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const animate = () => {
            if (started.current)
                return;
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
                const t = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                setValue(Math.round(target * eased));
                if (t < 1)
                    requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting))
                animate();
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);
    const offset = circumference - (value / 100) * circumference;
    return (_jsxs("div", { ref: ref, className: "mx-auto flex max-w-xs flex-col items-center text-center", children: [block.heading ? (_jsx("p", { className: "mb-4 text-sm font-medium uppercase tracking-wide text-ink/50", children: block.heading })) : null, _jsxs("div", { className: "relative", style: { width: box, height: box }, children: [_jsxs("svg", { width: box, height: box, className: "-rotate-90", children: [_jsx("circle", { cx: box / 2, cy: box / 2, r: radius, fill: "none", stroke: "currentColor", strokeWidth: stroke, className: "text-sky-pale" }), _jsx("circle", { cx: box / 2, cy: box / 2, r: radius, fill: "none", stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: offset, className: "transition-[stroke-dashoffset] duration-75" })] }), _jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: _jsxs("span", { className: "text-2xl font-semibold text-ink sm:text-3xl", children: [value, (_e = block.suffix) !== null && _e !== void 0 ? _e : "%"] }) })] }), block.label ? (_jsx("p", { className: "mt-4 text-base text-ink/65", children: block.label })) : null] }));
}
