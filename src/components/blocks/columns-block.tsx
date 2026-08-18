import type { ColumnsBlock as ColumnsBlockType } from "@/lib/types";
import { renderSlot } from "./nested-blocks";

const gapClass: Record<string, string> = {
  small: "gap-4",
  medium: "gap-6",
  large: "gap-10",
};

const stackColClass: Record<string, string> = {
  "2": "grid-cols-1 md:grid-cols-2",
  "3": "grid-cols-1 md:grid-cols-3",
  "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const flatColClass: Record<string, string> = {
  "2": "grid-cols-2",
  "3": "grid-cols-3",
  "4": "grid-cols-2 lg:grid-cols-4",
};

export default function ColumnsBlock({ block }: { block: ColumnsBlockType }) {
  const count = block.columnCount ?? "2";
  const gap = gapClass[block.gap ?? "medium"] ?? gapClass.medium;
  const stack = block.stackOnMobile !== false;
  const columns = [
    block.column1,
    block.column2,
    block.column3,
    block.column4,
  ].slice(0, Number(count));
  const cols = stack
    ? (stackColClass[count] ?? stackColClass["2"])
    : (flatColClass[count] ?? flatColClass["2"]);

  return (
    <div className={`mx-auto grid max-w-7xl px-6 ${gap} ${cols}`}>
      {columns.map((column, i) => (
        <div key={i} className="min-w-0">
          {renderSlot(column)}
        </div>
      ))}
    </div>
  );
}
