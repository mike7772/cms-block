import type { ReactNode } from "react";
import { type BlockAdvanced, type BlockStyle } from "../../puck/block-style.js";
export default function BlockStyleShell({ style, advanced, children, className, }: {
    style?: BlockStyle | null;
    advanced?: BlockAdvanced | null;
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
//# sourceMappingURL=block-style-shell.d.ts.map