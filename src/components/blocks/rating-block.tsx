import type { RatingBlock as RatingBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

export default function RatingBlock({ block }: { block: RatingBlockType }) {
  const value = Math.min(5, Math.max(1, Number(block.value) || 1));
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;

  return (
    <div className={`flex flex-col gap-2 ${align}`}>
      <div
        className="flex gap-1 text-court"
        aria-label={`${value} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-2xl leading-none ${
              i < value ? "opacity-100" : "opacity-25"
            }`}
            aria-hidden
          >
            ★
          </span>
        ))}
      </div>
      {block.label ? (
        <p className="text-sm font-medium text-ink/70">{block.label}</p>
      ) : null}
    </div>
  );
}
