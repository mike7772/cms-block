"use client";

import { useEffect, useRef, useState } from "react";
import type { NumberCounterBlock as NumberCounterBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function NumberCounterBlock({
  block,
}: {
  block: NumberCounterBlockType;
}) {
  const target = block.value ?? 0;
  const duration = block.durationMs ?? 2000;
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

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-md ${alignClass[block.align ?? "center"]}`}
    >
      {block.heading ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-ink/50">
          {block.heading}
        </p>
      ) : null}
      <p className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
        {block.prefix}
        {value}
        {block.suffix}
      </p>
      {block.label ? (
        <p className="mt-2 text-base text-ink/65">{block.label}</p>
      ) : null}
    </div>
  );
}
