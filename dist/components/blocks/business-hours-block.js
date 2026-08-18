"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
const DAY_ORDER = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];
const DAY_LABEL = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
};
const DEFAULT_DAYS = DAY_ORDER.map((day) => ({
    day,
    openTime: day === "saturday" || day === "sunday" ? null : "09:00",
    closeTime: day === "saturday" || day === "sunday" ? null : "17:00",
    closed: day === "saturday" || day === "sunday",
}));
function parseTimeToMinutes(value) {
    if (!value)
        return null;
    const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
    if (!match)
        return null;
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (hours > 23 || minutes > 59)
        return null;
    return hours * 60 + minutes;
}
function isOpenNow(days) {
    const now = new Date();
    const jsDay = now.getDay(); // 0 Sunday
    const keyed = DAY_ORDER[(jsDay + 6) % 7];
    const today = days.find((d) => d.day === keyed);
    if (!today || today.closed)
        return false;
    const open = parseTimeToMinutes(today.openTime);
    const close = parseTimeToMinutes(today.closeTime);
    if (open == null || close == null)
        return false;
    const current = now.getHours() * 60 + now.getMinutes();
    return current >= open && current < close;
}
export default function BusinessHoursBlock({ block, }) {
    const days = useMemo(() => {
        var _a;
        const provided = (_a = block.days) !== null && _a !== void 0 ? _a : [];
        if (!provided.length)
            return DEFAULT_DAYS;
        const map = new Map(provided.map((d) => [d.day, d]));
        return DAY_ORDER.map((day) => { var _a; return (_a = map.get(day)) !== null && _a !== void 0 ? _a : { day, closed: true }; });
    }, [block.days]);
    const open = isOpenNow(days);
    const todayKey = DAY_ORDER[(new Date().getDay() + 6) % 7];
    return (_jsxs("section", { className: "mx-auto max-w-md rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8", children: [_jsxs("div", { className: "mb-5 flex items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-ink", children: block.heading || "Business hours" }), block.timezoneNote ? (_jsx("p", { className: "mt-1 text-xs text-ink/50", children: block.timezoneNote })) : null] }), block.showOpenBadge !== false ? (_jsx("span", { className: `shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${open
                            ? "bg-foliage/15 text-foliage"
                            : "bg-ink/10 text-ink/60"}`, children: open ? "Open now" : "Closed" })) : null] }), _jsx("ul", { className: "divide-y divide-sky-dark/15", children: days.map((day) => {
                    const isToday = day.day === todayKey;
                    return (_jsxs("li", { className: `flex items-center justify-between gap-4 py-2.5 text-sm ${isToday ? "font-semibold text-ink" : "text-ink/70"}`, children: [_jsx("span", { children: DAY_LABEL[day.day] }), _jsx("span", { children: day.closed
                                    ? "Closed"
                                    : `${day.openTime || "—"} – ${day.closeTime || "—"}` })] }, day.day));
                }) })] }));
}
