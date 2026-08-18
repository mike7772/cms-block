"use client";

import type { ReactNode } from "react";
import {
  blockChromeClassName,
  blockChromeToCss,
  isDefaultBlockChrome,
  normalizeBlockAdvanced,
  normalizeBlockStyle,
  type BlockAdvanced,
  type BlockStyle,
} from "@/puck/block-style";
import { cn } from "@/lib/utils";

export default function BlockStyleShell({
  style,
  advanced,
  children,
  className,
}: {
  style?: BlockStyle | null;
  advanced?: BlockAdvanced | null;
  children: ReactNode;
  className?: string;
}) {
  const normalizedStyle = normalizeBlockStyle(style);
  const normalizedAdvanced = normalizeBlockAdvanced(advanced);

  // Support legacy pages that only stored layout on `style`
  const effectiveAdvanced =
    advanced == null && style && typeof style === "object"
      ? normalizeBlockAdvanced({
          ...normalizedAdvanced,
          ...(style as BlockAdvanced),
        })
      : normalizedAdvanced;

  if (isDefaultBlockChrome(normalizedStyle, effectiveAdvanced)) {
    return <>{children}</>;
  }

  const id = (effectiveAdvanced.cssId || "").trim() || undefined;

  return (
    <div
      id={id}
      className={cn(
        blockChromeClassName(normalizedStyle, effectiveAdvanced),
        className,
      )}
      style={blockChromeToCss(normalizedStyle, effectiveAdvanced)}
      data-puck-block-style
    >
      {children}
    </div>
  );
}
