import { createElement, type ComponentType, type ReactNode } from "react";
import { registryByPuckType } from "@/puck/registry";

export type NestedItem = {
  type: string;
  props?: Record<string, unknown>;
};

/**
 * Renders nested Puck ComponentData outside the editor (public pages).
 * Inside Puck, slot fields are already transformed into render functions.
 */
export function NestedBlocks({
  items,
  className,
  itemClassName,
}: {
  items?: NestedItem[] | null;
  className?: string;
  /** Use "contents" so parent flex/grid lays out children directly */
  itemClassName?: string;
}) {
  if (!items?.length) return null;

  return createElement(
    "div",
    className ? { className } : null,
    items.map((item, index) => {
      const entry = registryByPuckType.get(item.type);
      if (!entry) return null;
      const { id: _id, ...props } = (item.props ?? {}) as Record<
        string,
        unknown
      > & { id?: string };
      const key = (item.props?.id as string) || `${item.type}-${index}`;
      return createElement(
        "div",
        { key, className: itemClassName },
        entry.render(props),
      );
    }),
  );
}

export function renderSlot(
  slot: unknown,
  className?: string,
  options?: { itemClassName?: string },
): ReactNode {
  if (!slot) return null;

  if (typeof slot === "function") {
    const Slot = slot as ComponentType<{ className?: string }>;
    return createElement(Slot, className ? { className } : null);
  }

  if (Array.isArray(slot)) {
    return createElement(NestedBlocks, {
      items: slot as NestedItem[],
      className,
      itemClassName: options?.itemClassName,
    });
  }

  if (className) {
    return createElement("div", { className }, slot as ReactNode);
  }

  return slot as ReactNode;
}

export { jsonToSlot, slotToJson } from "./slot-json";
