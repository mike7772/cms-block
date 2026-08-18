import Link from "next/link";
import type { DualButtonBlock as DualButtonBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function DualButtonBlock({
  block,
}: {
  block: DualButtonBlockType;
}) {
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;
  const stack = block.stackOnMobile !== false;

  return (
    <div
      className={`flex ${align} ${
        stack ? "flex-col sm:flex-row" : "flex-row flex-wrap"
      } gap-3`}
    >
      <Link
        href={block.primaryUrl || "/"}
        className="inline-flex items-center justify-center rounded-full bg-trunk px-6 py-3 text-sm font-semibold text-white transition hover:bg-trunk-dark"
      >
        {block.primaryLabel}
      </Link>
      <Link
        href={block.secondaryUrl || "/"}
        className="inline-flex items-center justify-center rounded-full border-2 border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk/5"
      >
        {block.secondaryLabel}
      </Link>
    </div>
  );
}
