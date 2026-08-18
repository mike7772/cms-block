"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { DropdownBlock as DropdownBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function DropdownBlock({ block }: { block: DropdownBlockType }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const items = block.items ?? [];

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className={`relative flex ${alignClass[block.align ?? "left"]}`}>
      <div ref={ref} className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-sky-dark/30 bg-white px-4 py-2.5 text-sm font-medium text-ink hover:bg-sky-pale"
          aria-expanded={open}
        >
          {block.label}
          <span aria-hidden>{open ? "▴" : "▾"}</span>
        </button>
        {open && items.length > 0 ? (
          <ul className="absolute left-0 z-20 mt-2 min-w-[12rem] overflow-hidden rounded-xl border border-sky-dark/25 bg-white py-1 shadow-lg">
            {items.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link
                  href={item.url}
                  className="block px-4 py-2.5 text-sm text-ink hover:bg-sky-pale"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
