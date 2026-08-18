"use client";

import { useEffect, useState } from "react";
import type { ReadingProgressBlock as ReadingProgressBlockType } from "@/lib/types";

export default function ReadingProgressBlock({
  block,
}: {
  block: ReadingProgressBlockType;
}) {
  const [progress, setProgress] = useState(0);
  const position = block.position ?? "top";
  const height = Math.min(12, Math.max(2, block.heightPx ?? 4));
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

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-[60] ${
        position === "bottom" ? "bottom-0" : "top-0"
      }`}
      style={{ height }}
      aria-hidden
    >
      <div
        className="h-full origin-left transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
}
