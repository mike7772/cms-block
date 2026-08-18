import type { MarqueeBlock as MarqueeBlockType } from "@/lib/types";
import { asPlainText } from "@/puck/registry/helpers";

function parseItems(raw: unknown): string[] {
  const text = asPlainText(raw);
  if (!text.trim()) return [];
  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      return parsed.map(String).filter(Boolean);
    }
  } catch {
    // fall through to newline parse
  }
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

const speedDuration: Record<string, string> = {
  slow: "40s",
  normal: "25s",
  fast: "12s",
};

export default function MarqueeBlock({ block }: { block: MarqueeBlockType }) {
  const items = parseItems(block.items);
  const duration = speedDuration[block.speed ?? "normal"] ?? speedDuration.normal;
  const pause = block.pauseOnHover !== false;
  const loop = items.length ? [...items, ...items] : [];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-8 text-center text-ink/50">
        Add marquee items
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-y border-sky-dark/20 bg-sky-pale/60 py-3">
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          pause ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marquee-scroll ${duration} linear infinite`,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm font-semibold tracking-wide text-ink"
          >
            {item}
            <span className="ml-10 text-court" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
