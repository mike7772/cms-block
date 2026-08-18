import type { ProgressBarsBlock as ProgressBarsBlockType } from "@/lib/types";

const colorClass: Record<string, string> = {
  primary: "bg-trunk",
  success: "bg-emerald-600",
  warning: "bg-amber-500",
  danger: "bg-red-600",
  info: "bg-sky-dark",
};

export default function ProgressBarsBlock({
  block,
}: {
  block: ProgressBarsBlockType;
}) {
  const bars = block.bars ?? [];

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-sky-dark/20 bg-white px-8 py-10">
      {block.heading ? (
        <h2 className="section-heading mb-8 text-center text-2xl">
          {block.heading}
        </h2>
      ) : null}
      {bars.length ? (
        <ul className="flex flex-col gap-5">
          {bars.map((bar, i) => {
            const pct = Math.max(0, Math.min(100, bar.percentage ?? 0));
            const color =
              colorClass[bar.color ?? "primary"] ?? colorClass.primary;
            return (
              <li key={`${bar.label}-${i}`}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{bar.label}</span>
                  <span className="text-ink/50">{pct}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-sky-pale">
                  <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-ink/50">Add progress bars</p>
      )}
    </section>
  );
}
