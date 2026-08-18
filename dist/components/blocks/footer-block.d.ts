import type { ReactNode } from "react";
import type { FooterBlock as FooterBlockType } from "../../lib/types.js";
type FooterChrome = Omit<FooterBlockType, "top" | "column1" | "column2" | "column3" | "column4" | "column5" | "column6" | "bottom" | "topJson" | "column1Json" | "column2Json" | "column3Json" | "column4Json" | "column5Json" | "column6Json" | "bottomJson">;
export default function FooterBlock({ block, top, column1, column2, column3, column4, column5, column6, bottom, }: {
    block: FooterChrome;
    top?: ReactNode;
    column1?: ReactNode;
    column2?: ReactNode;
    column3?: ReactNode;
    column4?: ReactNode;
    column5?: ReactNode;
    column6?: ReactNode;
    bottom?: ReactNode;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=footer-block.d.ts.map