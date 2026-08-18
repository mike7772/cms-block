import Image from "next/image";
import type { IconListBlock as IconListBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

export default function IconListBlock({ block }: { block: IconListBlockType }) {
  const items = block.items ?? [];
  const twoCol = block.columns === "2";

  return (
    <section className="mx-auto max-w-5xl px-6">
      {block.title ? (
        <h2 className="section-heading mb-8 text-3xl sm:text-4xl">
          {block.title}
        </h2>
      ) : null}
      <ul
        className={`grid gap-6 ${twoCol ? "sm:grid-cols-2" : "grid-cols-1"}`}
      >
        {items.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className="flex gap-4 rounded-2xl border border-sky-dark/20 bg-white p-5"
          >
            {item.iconUrl ? (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-sky-pale">
                <Image
                  src={item.iconUrl}
                  alt=""
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </div>
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-court">
                {initialLetter(item.title)}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              {item.description ? (
                <p className="mt-1 text-sm leading-6 text-ink/70">
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
