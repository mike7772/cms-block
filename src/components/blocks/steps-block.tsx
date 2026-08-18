import type { StepsBlock as StepsBlockType } from "@/lib/types";

export default function StepsBlock({ block }: { block: StepsBlockType }) {
  const items = block.items ?? [];
  const vertical = block.layout === "vertical";

  return (
    <section className="mx-auto max-w-5xl px-6">
      {block.title ? (
        <h2 className="section-heading mb-10 text-center text-3xl sm:text-4xl">
          {block.title}
        </h2>
      ) : null}
      {items.length ? (
        <ol
          className={
            vertical
              ? "mx-auto flex max-w-2xl flex-col gap-0"
              : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {items.map((item, i) => (
            <li
              key={`${item.title}-${i}`}
              className={`relative flex ${
                vertical ? "gap-4 pb-8 last:pb-0" : "flex-col"
              }`}
            >
              {vertical && i < items.length - 1 ? (
                <span className="absolute left-4 top-10 h-[calc(100%-2rem)] w-px bg-sky-dark/25" />
              ) : null}
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-trunk text-sm font-semibold text-white">
                {i + 1}
              </div>
              <div className={vertical ? "pt-0.5" : "mt-3"}>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                {item.description ? (
                  <p className="mt-1 text-sm leading-6 text-ink/70">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add steps
        </div>
      )}
    </section>
  );
}
