import type { TimelineBlock as TimelineBlockType } from "@/lib/types";

export default function TimelineBlock({ block }: { block: TimelineBlockType }) {
  const items = block.items ?? [];

  return (
    <section className="mx-auto max-w-3xl px-6">
      {block.title ? (
        <h2 className="section-heading mb-10 text-center text-3xl sm:text-4xl">
          {block.title}
        </h2>
      ) : null}
      {items.length ? (
        <ol className="relative space-y-0 border-l border-sky-dark/30 pl-8">
          {items.map((item, i) => (
            <li key={`${item.title}-${i}`} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.4rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-trunk bg-white" />
              {item.date ? (
                <p className="eyebrow mb-1">{item.date}</p>
              ) : null}
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              {item.description ? (
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  {item.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add timeline items
        </div>
      )}
    </section>
  );
}
