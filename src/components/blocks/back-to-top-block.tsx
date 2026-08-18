"use client";

import { useEffect, useState } from "react";
import type { BackToTopBlock as BackToTopBlockType } from "@/lib/types";

export default function BackToTopBlock({
  block,
}: {
  block: BackToTopBlockType;
}) {
  const [visible, setVisible] = useState(false);
  const threshold = block.showAfterPx ?? 400;
  const position = block.position ?? "bottom-right";

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY >= threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-50 inline-flex items-center gap-2 rounded-full bg-trunk px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-trunk-dark ${
        position === "bottom-left" ? "bottom-6 left-6" : "bottom-6 right-6"
      }`}
      aria-label={block.label || "Back to top"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      {block.label || "Top"}
    </button>
  );
}
