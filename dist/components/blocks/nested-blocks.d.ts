import { type ReactNode } from "react";
export type NestedItem = {
    type: string;
    props?: Record<string, unknown>;
};
/**
 * Renders nested Puck ComponentData outside the editor (public pages).
 * Inside Puck, slot fields are already transformed into render functions.
 */
export declare function NestedBlocks({ items, className, itemClassName, }: {
    items?: NestedItem[] | null;
    className?: string;
    /** Use "contents" so parent flex/grid lays out children directly */
    itemClassName?: string;
}): import("react").DetailedReactHTMLElement<{
    className: string;
}, HTMLElement> | null;
export declare function renderSlot(slot: unknown, className?: string, options?: {
    itemClassName?: string;
}): ReactNode;
export { jsonToSlot, slotToJson } from "./slot-json";
//# sourceMappingURL=nested-blocks.d.ts.map