import type { ReactNode } from "react";
import type { RichTextBlock as RichTextBlockType } from "../../lib/types.js";
type RichTextBody = string | ReactNode;
export default function RichTextBlock({ block, }: {
    block: Omit<RichTextBlockType, "body"> & {
        body: RichTextBody;
    };
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=rich-text-block.d.ts.map