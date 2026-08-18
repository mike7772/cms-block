"use client";

import { useEffect, useRef, useState } from "react";
import type { CircleCounterBlock as CircleCounterBlockType } from "@/lib/types";

const sizeMap: Record<string, { box: number; stroke: number }> = {
  small: { box: 96, stroke: 8 },
  medium: { box: 140, stroke: 10 },
  large: { box: 180, stroke: 12 },
};

export default function CircleCounterBlock({
  block,
}: {
  block: CircleCounterBlockType;
}) {
  const target = Math.min(100, Math.max(0, block.value ?? 0));
  const duration = block.durationMs ?? 1500;
  const color = block.color || "#7BB8E3";
  const { box, stroke } = sizeMap[block.size ?? "medium"] ?? sizeMap.medium;
  const radius = (box - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) animate();
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="mx-auto flex max-w-xs flex-col items-center text-center">
      {block.heading ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-ink/50">
          {block.heading}
        </p>
      ) : null}
      <div className="relative" style={{ width: box, height: box }}>
        <svg width={box} height={box} className="-rotate-90">
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            className="text-sky-pale"
          />
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-75"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-ink sm:text-3xl">
            {value}
            {block.suffix ?? "%"}
          </span>
        </div>
      </div>
      {block.label ? (
        <p className="mt-4 text-base text-ink/65">{block.label}</p>
      ) : null}
    </div>
  );
}
