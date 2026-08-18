import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { SectionBlock as SectionBlockType } from "@/lib/types";
import { renderSlot } from "./nested-blocks";

const paddingClass: Record<string, string> = {
  none: "py-0",
  small: "py-6",
  medium: "py-12",
  large: "py-20",
};

const maxWidthClass: Record<string, string> = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

const alignClass: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const bgClass: Record<string, string> = {
  none: "bg-transparent",
  pale: "bg-sky-pale",
  sky: "bg-sky",
  ink: "bg-ink text-white",
};

export default function SectionBlock({ block }: { block: SectionBlockType }) {
  const background = block.background ?? "none";
  const padding = paddingClass[block.paddingY ?? "medium"] ?? paddingClass.medium;
  const maxWidth = maxWidthClass[block.maxWidth ?? "lg"] ?? maxWidthClass.lg;
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;
  const image = getPreferredImage(block.backgroundImage);
  const isImage = background === "image";
  const isInk = background === "ink";

  return (
    <section
      className={`relative w-full overflow-hidden ${padding} ${
        isImage ? "bg-ink" : (bgClass[background] ?? bgClass.none)
      }`}
    >
      {isImage && image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt || ""}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </>
      ) : null}
      <div
        className={`relative z-10 mx-auto px-6 ${maxWidth} ${align} ${
          isImage || isInk ? "text-white" : "text-ink"
        }`}
      >
        {renderSlot(block.content)}
      </div>
    </section>
  );
}
