"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};
export default function NumberCounterBlock({ block, }) {
    var _a, _b, _c;
    const target = (_a = block.value) !== null && _a !== void 0 ? _a : 0;
    const duration = (_b = block.durationMs) !== null && _b !== void 0 ? _b : 2000;
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
    return (_jsxs("div", { ref: ref, className: `mx-auto max-w-md ${alignClass[(_c = block.align) !== null && _c !== void 0 ? _c : "center"]}`, children: [block.heading ? (_jsx("p", { className: "mb-2 text-sm font-medium uppercase tracking-wide text-ink/50", children: block.heading })) : null, _jsxs("p", { className: "text-5xl font-semibold tracking-tight text-ink sm:text-6xl", children: [block.prefix, value, block.suffix] }), block.label ? (_jsx("p", { className: "mt-2 text-base text-ink/65", children: block.label })) : null] }));
}
