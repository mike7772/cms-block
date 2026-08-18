"use client";

import Link from "next/link";
import { useState } from "react";
import type { ImageAccordionBlock as ImageAccordionBlockType } from "@/lib/types";

const heightClass: Record<string, string> = {
  small: "h-48 sm:h-56",
  medium: "h-64 sm:h-80",
  large: "h-80 sm:h-[28rem]",
};

export default function ImageAccordionBlock({
  block,
}: {
  block: ImageAccordionBlockType;
}) {
  const items = block.items?.filter((i) => i.imageUrl && i.title) ?? [];
  const [active, setActive] = useState(0);
  const height = heightClass[block.height ?? "medium"] ?? heightClass.medium;

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-10 text-center text-ink/50">
        Add image accordion panels
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      <div className={`flex gap-2 overflow-hidden rounded-2xl ${height}`}>
        {items.map((item, index) => {
          const expanded = active === index;
          const inner = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
              <div
                className={`absolute inset-x-0 bottom-0 p-4 transition ${
                  expanded ? "opacity-100" : "opacity-90"
                }`}
              >
                <h3
                  className={`font-semibold text-white ${
                    expanded ? "text-lg sm:text-xl" : "truncate text-sm"
                  }`}
                >
                  {item.title}
                </h3>
                {expanded && item.subtitle ? (
                  <p className="mt-1 text-sm text-white/75">{item.subtitle}</p>
                ) : null}
              </div>
            </>
          );

          const className = `relative overflow-hidden transition-all duration-500 ease-out ${
            expanded ? "flex-[3]" : "flex-1"
          }`;

          if (item.url) {
            return (
              <Link
                key={`${item.title}-${index}`}
                href={item.url}
                className={className}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                {inner}
              </Link>
            );
          }

          return (
            <div
              key={`${item.title}-${index}`}
              className={className}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              role="button"
              tabIndex={0}
            >
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
