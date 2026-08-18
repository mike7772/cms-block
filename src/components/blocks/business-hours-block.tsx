"use client";

import { useMemo } from "react";
import type {
  BusinessHoursBlock as BusinessHoursBlockType,
  BusinessHoursDay,
} from "@/lib/types";

const DAY_ORDER: BusinessHoursDay["day"][] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const DAY_LABEL: Record<BusinessHoursDay["day"], string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const DEFAULT_DAYS: BusinessHoursDay[] = DAY_ORDER.map((day) => ({
  day,
  openTime: day === "saturday" || day === "sunday" ? null : "09:00",
  closeTime: day === "saturday" || day === "sunday" ? null : "17:00",
  closed: day === "saturday" || day === "sunday",
}));

function parseTimeToMinutes(value: string | null | undefined): number | null {
  if (!value) return null;
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

function isOpenNow(days: BusinessHoursDay[]): boolean {
  const now = new Date();
  const jsDay = now.getDay(); // 0 Sunday
  const keyed = DAY_ORDER[(jsDay + 6) % 7];
  const today = days.find((d) => d.day === keyed);
  if (!today || today.closed) return false;
  const open = parseTimeToMinutes(today.openTime);
  const close = parseTimeToMinutes(today.closeTime);
  if (open == null || close == null) return false;
  const current = now.getHours() * 60 + now.getMinutes();
  return current >= open && current < close;
}

export default function BusinessHoursBlock({
  block,
}: {
  block: BusinessHoursBlockType;
}) {
  const days = useMemo(() => {
    const provided = block.days ?? [];
    if (!provided.length) return DEFAULT_DAYS;
    const map = new Map(provided.map((d) => [d.day, d]));
    return DAY_ORDER.map((day) => map.get(day) ?? { day, closed: true });
  }, [block.days]);

  const open = isOpenNow(days);
  const todayKey = DAY_ORDER[(new Date().getDay() + 6) % 7];

  return (
    <section className="mx-auto max-w-md rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-ink">
            {block.heading || "Business hours"}
          </h2>
          {block.timezoneNote ? (
            <p className="mt-1 text-xs text-ink/50">{block.timezoneNote}</p>
          ) : null}
        </div>
        {block.showOpenBadge !== false ? (
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              open
                ? "bg-foliage/15 text-foliage"
                : "bg-ink/10 text-ink/60"
            }`}
          >
            {open ? "Open now" : "Closed"}
          </span>
        ) : null}
      </div>
      <ul className="divide-y divide-sky-dark/15">
        {days.map((day) => {
          const isToday = day.day === todayKey;
          return (
            <li
              key={day.day}
              className={`flex items-center justify-between gap-4 py-2.5 text-sm ${
                isToday ? "font-semibold text-ink" : "text-ink/70"
              }`}
            >
              <span>{DAY_LABEL[day.day]}</span>
              <span>
                {day.closed
                  ? "Closed"
                  : `${day.openTime || "—"} – ${day.closeTime || "—"}`}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
