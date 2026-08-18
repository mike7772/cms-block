import Link from "next/link";
import type { BlurbBlock as BlurbBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const alignClass: Record<string, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function BlurbBlock({ block }: { block: BlurbBlockType }) {
  const layout = block.layout ?? "stacked";
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;

  return (
    <div
      className={`mx-auto flex max-w-md gap-4 rounded-2xl border border-sky-dark/25 bg-white p-6 ${
        layout === "horizontal" ? "flex-row items-start" : `flex-col ${align}`
      }`}
    >
      {block.iconUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={block.iconUrl}
          alt=""
          className="h-12 w-12 shrink-0 object-contain"
        />
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-trunk">
          {initialLetter(block.title)}
        </div>
      )}
      <div className={layout === "horizontal" ? "min-w-0 flex-1" : ""}>
        <h3 className="text-lg font-semibold text-ink">{block.title}</h3>
        {block.description ? (
          <p className="mt-2 text-sm leading-6 text-ink/65">{block.description}</p>
        ) : null}
        {block.buttonLabel && block.buttonUrl ? (
          <Link
            href={block.buttonUrl}
            className="mt-4 inline-flex text-sm font-semibold text-trunk hover:underline"
          >
            {block.buttonLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
