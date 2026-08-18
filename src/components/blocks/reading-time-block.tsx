import type { ReadingTimeBlock as ReadingTimeBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

function countWordsFromHtml(html: string): number {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return 0;
  return text.split(" ").filter(Boolean).length;
}

export default function ReadingTimeBlock({
  block,
}: {
  block: ReadingTimeBlockType;
}) {
  const wpm = block.wordsPerMinute ?? 200;
  const words =
    typeof block.wordCount === "number" && block.wordCount > 0
      ? block.wordCount
      : countWordsFromHtml(block.contentHtml ?? "");
  const minutes = Math.max(1, Math.ceil(words / Math.max(1, wpm)));

  return (
    <div
      className={`flex items-center gap-2 text-sm text-ink/65 ${
        alignClass[block.align ?? "left"]
      }`}
    >
      {block.showIcon !== false ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 text-trunk"
          aria-hidden
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ) : null}
      <span>
        {minutes} {block.label || "min read"}
      </span>
    </div>
  );
}
