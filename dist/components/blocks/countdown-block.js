"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
function calcRemaining(target) {
    const end = new Date(target).getTime();
    if (Number.isNaN(end)) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    const diff = end - Date.now();
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, expired: false };
}
export default function CountdownBlock({ block, }) {
    const [remaining, setRemaining] = useState(() => calcRemaining(block.targetDate));
    useEffect(() => {
        setRemaining(calcRemaining(block.targetDate));
        const id = window.setInterval(() => {
            setRemaining(calcRemaining(block.targetDate));
        }, 1000);
        return () => window.clearInterval(id);
    }, [block.targetDate]);
    const units = [
        { key: "days", label: "Days", show: block.showDays !== false },
        { key: "hours", label: "Hours", show: block.showHours !== false },
        { key: "minutes", label: "Minutes", show: block.showMinutes !== false },
        { key: "seconds", label: "Seconds", show: block.showSeconds !== false },
    ];
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-trunk to-trunk-dark px-6 py-14 text-center text-white sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl", children: [block.heading ? (_jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-white/75", children: block.subheading })) : null] })), remaining.expired ? (_jsx("p", { className: "text-xl font-medium text-sky-light", children: block.expiredMessage || "This event has ended." })) : (_jsx("div", { className: "mx-auto flex max-w-2xl flex-wrap justify-center gap-4", children: units
                    .filter((u) => u.show)
                    .map((unit) => (_jsxs("div", { className: "min-w-[4.5rem] rounded-2xl border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-sm", children: [_jsx("p", { className: "text-3xl font-semibold tabular-nums sm:text-4xl", children: String(remaining[unit.key]).padStart(2, "0") }), _jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-white/70", children: unit.label })] }, unit.key))) }))] }));
}
