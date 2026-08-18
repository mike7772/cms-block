import type { ChartBlock as ChartBlockType } from "@/lib/types";
import { asPlainText } from "@/puck/registry/helpers";

type ChartDatum = { label: string; value: number };

function parseData(raw: unknown): ChartDatum[] {
  try {
    const parsed = JSON.parse(asPlainText(raw) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({
        label: String(item?.label ?? ""),
        value: Number(item?.value) || 0,
      }))
      .filter((item) => item.label);
  } catch {
    return [];
  }
}

export default function ChartBlock({ block }: { block: ChartBlockType }) {
  const data = parseData(block.dataJson);
  const max = Math.max(...data.map((d) => d.value), 1);
  const horizontal = block.variant === "horizontal";

  return (
    <section className="mx-auto max-w-3xl px-6">
      {block.title ? (
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-ink">
          {block.title}
        </h2>
      ) : null}
      {data.length ? (
        horizontal ? (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.label}>
                <div className="mb-1 flex justify-between text-sm text-ink">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-ink/60">{item.value}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-sky-pale">
                  <div
                    className="h-full rounded-full bg-court"
                    style={{ width: `${(item.value / max) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex h-56 items-end gap-3 border-b border-sky-dark/20 pb-0">
            {data.map((item) => (
              <div
                key={item.label}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-xs font-medium text-ink/60">
                  {item.value}
                </span>
                <div
                  className="w-full max-w-[4rem] rounded-t-lg bg-court"
                  style={{ height: `${(item.value / max) * 100}%` }}
                  title={`${item.label}: ${item.value}`}
                />
                <span className="truncate text-xs font-medium text-ink">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add chart data JSON
        </div>
      )}
    </section>
  );
}
