import type { SpacerBlock as SpacerBlockType } from "@/lib/types";

const heightClass = {
  small: "h-8",
  medium: "h-16",
  large: "h-24",
  xlarge: "h-40",
} as const;

const heightLabel = {
  small: "S",
  medium: "M",
  large: "L",
  xlarge: "XL",
} as const;

const dividerClass = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
} as const;

export default function SpacerBlock({
  block,
  isEditing = false,
}: {
  block: SpacerBlockType;
  isEditing?: boolean;
}) {
  const size = block.height ?? "medium";
  const height = heightClass[size] ?? heightClass.medium;
  const style =
    dividerClass[block.dividerStyle ?? "solid"] ?? dividerClass.solid;

  return (
    <div
      className={`relative flex w-full items-center justify-center ${height} ${
        isEditing
          ? "rounded-md border border-dashed border-sky-dark/40 bg-sky-pale/40"
          : ""
      }`}
      aria-hidden={!isEditing}
    >
      {block.showDivider ? (
        <div
          className={`absolute inset-x-0 top-1/2 border-t border-sky-dark/30 ${style}`}
        />
      ) : null}
      {isEditing ? (
        <span className="relative z-10 rounded bg-white/90 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink/50">
          Spacer / Divider · {heightLabel[size] ?? "M"}
          {block.showDivider ? ` · ${block.dividerStyle ?? "solid"}` : ""}
        </span>
      ) : null}
    </div>
  );
}
