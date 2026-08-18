import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { HeaderBlock as HeaderBlockType } from "@/lib/types";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { renderSlot } from "./nested-blocks";

const maxWidthClass: Record<string, string> = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

const heightClass: Record<string, string> = {
  compact: "min-h-14 py-2",
  default: "min-h-16 py-3",
  tall: "min-h-20 py-4",
};

const bgClass: Record<string, string> = {
  white: "bg-white text-[#181818]",
  pale: "bg-[#f5f8fb] text-[#181818]",
  sky: "bg-[var(--sky-light)] text-[#181818]",
  ink: "bg-[#181818] text-white",
  transparent: "bg-transparent text-[#181818]",
};

type HeaderChrome = Omit<
  HeaderBlockType,
  "left" | "center" | "right" | "leftJson" | "centerJson" | "rightJson"
>;

export default function HeaderBlock({
  block,
  left,
  center,
  right,
}: {
  block: HeaderChrome;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}) {
  const background = block.background ?? "white";
  const maxWidth = maxWidthClass[block.maxWidth ?? "xl"] ?? maxWidthClass.xl;
  const height = heightClass[block.height ?? "default"] ?? heightClass.default;
  const isDark = background === "ink";
  const showLanguageSwitcher = block.showLanguageSwitcher !== false;

  return (
    <header
      className={cn(
        "relative z-40 w-full overflow-visible",
        block.sticky ? "sticky top-0" : null,
        block.transparent
          ? "bg-transparent"
          : (bgClass[background] ?? bgClass.white),
        block.showBorder !== false
          ? isDark
            ? "border-b border-white/10"
            : "border-b border-[#dcdcdc]"
          : null,
        block.sticky && !block.transparent
          ? isDark
            ? "supports-backdrop-filter:bg-[#181818]/95"
            : "supports-backdrop-filter:bg-white/95"
          : null,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col gap-3 overflow-visible px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6",
          maxWidth,
          height,
        )}
      >
        <div className="flex min-w-0 shrink-0 items-center justify-start gap-3 overflow-visible [&_nav]:mx-0 [&_nav]:max-w-none">
          {renderSlot(left, "flex flex-row flex-wrap items-center gap-3", {
            itemClassName: "contents",
          })}
        </div>

        <div className="relative z-[70] flex min-w-0 flex-1 items-center justify-start overflow-visible lg:justify-center [&_nav]:mx-0 [&_nav]:max-w-none [&_h2]:mb-0 [&_h2]:text-left [&_h2]:text-base">
          {renderSlot(center, "flex flex-row flex-wrap items-center gap-3", {
            itemClassName: "relative z-[70]",
          })}
        </div>

        <div className="flex min-w-0 shrink-0 items-center justify-end gap-2">
          {renderSlot(
            right,
            "flex flex-row flex-wrap items-center justify-end gap-2",
            { itemClassName: "contents" },
          )}
          {showLanguageSwitcher ? (
            <div
              className={cn(
                "shrink-0",
                isDark &&
                  "[&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20",
              )}
            >
              <LanguageSwitcher />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
