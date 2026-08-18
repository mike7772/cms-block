import type { ReactNode } from "react";
import type { HeaderBlock as HeaderBlockType } from "@/lib/types";
type HeaderChrome = Omit<HeaderBlockType, "left" | "center" | "right" | "leftJson" | "centerJson" | "rightJson">;
export default function HeaderBlock({ block, left, center, right, }: {
    block: HeaderChrome;
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=header-block.d.ts.map