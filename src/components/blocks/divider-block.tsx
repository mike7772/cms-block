import type { DividerBlock as DividerBlockType } from "@/lib/types";

const styleClass: Record<string, string> = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

const widthClass: Record<string, string> = {
  small: "max-w-xs",
  medium: "max-w-md",
  large: "max-w-2xl",
  full: "max-w-none",
};

const spacingClass: Record<string, string> = {
  small: "my-4",
  medium: "my-8",
  large: "my-14",
};

export default function DividerBlock({ block }: { block: DividerBlockType }) {
  const style = styleClass[block.style ?? "solid"] ?? styleClass.solid;
  const width = widthClass[block.width ?? "full"] ?? widthClass.full;
  const spacing = spacingClass[block.spacing ?? "medium"] ?? spacingClass.medium;

  return (
    <div className={`mx-auto w-full px-6 ${width} ${spacing}`}>
      <hr className={`border-t border-sky-dark/30 ${style}`} />
    </div>
  );
}
