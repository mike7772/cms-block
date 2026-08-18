import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { FooterBlock as FooterBlockType } from "@/lib/types";
import { renderSlot } from "./nested-blocks";

const maxWidthClass: Record<string, string> = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

const bgClass: Record<string, string> = {
  pale: "bg-[#f5f5f5] text-[#181818]",
  white: "bg-white text-[#181818]",
  ink: "bg-[#181818] text-white",
  trunk: "bg-[#3d2a1a] text-white",
};

const colClass: Record<string, string> = {
  "1": "grid-cols-1",
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
  "5": "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  "6": "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

const lightNestedContrast =
  "[&_.prose]:text-[#404040] [&_.prose_p]:text-[#404040] [&_.section-heading]:text-[#767676] [&_nav_a]:!text-[#404040] [&_nav_a:hover]:!text-[#0158ad] [&_nav_p]:text-[#767676] [&_a]:!text-[#404040] [&_a:hover]:!text-[#0158ad]";

const darkNestedContrast =
  "[&_.prose]:prose-invert [&_.prose]:!text-white/80 [&_.prose_p]:!text-white/80 [&_.prose_a]:!text-white [&_.section-heading]:!text-white/70 [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-white/80 [&_nav_a]:!text-white/80 [&_nav_a:hover]:!text-white [&_nav_p]:!text-white/50 [&_a]:!text-white/80 [&_a:hover]:!text-white";

type FooterChrome = Omit<
  FooterBlockType,
  | "top"
  | "column1"
  | "column2"
  | "column3"
  | "column4"
  | "column5"
  | "column6"
  | "bottom"
  | "topJson"
  | "column1Json"
  | "column2Json"
  | "column3Json"
  | "column4Json"
  | "column5Json"
  | "column6Json"
  | "bottomJson"
>;

export default function FooterBlock({
  block,
  top,
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  bottom,
}: {
  block: FooterChrome;
  top?: ReactNode;
  column1?: ReactNode;
  column2?: ReactNode;
  column3?: ReactNode;
  column4?: ReactNode;
  column5?: ReactNode;
  column6?: ReactNode;
  bottom?: ReactNode;
}) {
  const background = block.background ?? "pale";
  const maxWidth = maxWidthClass[block.maxWidth ?? "xl"] ?? maxWidthClass.xl;
  const count = (block.columnCount ?? "4") as keyof typeof colClass;
  const columns = colClass[count] ?? colClass["4"];
  const visibleCount = Math.min(Math.max(Number(count) || 4, 1), 6);
  const isDark = background === "ink" || background === "trunk";
  const topNode = renderSlot(top);
  const columnSlots = [column1, column2, column3, column4, column5, column6].slice(
    0,
    visibleCount,
  );

  return (
    <footer
      className={cn(
        "theme-footer mt-auto w-full",
        bgClass[background] ?? bgClass.pale,
        isDark ? darkNestedContrast : lightNestedContrast,
        block.showTopBorder !== false
          ? isDark
            ? "border-t border-white/10"
            : "border-t border-[#dcdcdc]"
          : null,
      )}
    >
      {topNode ? (
        <div
          className={cn(
            "mx-auto px-4 py-8 sm:px-6",
            maxWidth,
            isDark ? "border-b border-white/10" : "border-b border-[#dcdcdc]",
          )}
        >
          <div
            className={cn(
              "rounded-xl px-5 py-6 sm:px-8",
              isDark
                ? "border border-white/10 bg-white/5"
                : "border border-[#dcdcdc] bg-white shadow-sm",
            )}
          >
            {topNode}
          </div>
        </div>
      ) : null}

      <div className={cn("mx-auto px-4 py-12 sm:px-6", maxWidth)}>
        <div className={cn("grid grid-cols-1 gap-8 sm:gap-10", columns)}>
          {columnSlots.map((column, index) => (
            <div
              key={index}
              className={cn(
                "min-w-0 space-y-4 [&_nav]:mx-0 [&_nav]:max-w-none",
                "[&_h2]:mb-3 [&_h2]:text-left [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:tracking-[0.14em] [&_h2]:uppercase",
                isDark ? "[&_h2]:text-white/55" : "[&_h2]:text-[#767676]",
              )}
            >
              {renderSlot(column)}
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          isDark
            ? "border-t border-white/10 bg-black/25"
            : "border-t border-[#dcdcdc] bg-white/70",
        )}
      >
        <div
          className={cn(
            "mx-auto flex flex-col gap-3 px-4 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6",
            maxWidth,
            isDark ? "text-white/65" : "text-[#5a5a5a]",
          )}
        >
          {renderSlot(bottom)}
        </div>
      </div>
    </footer>
  );
}
