import type { ContentBlock } from "@/lib/types";
import type { Data, ComponentData } from "@puckeditor/core";
import { registryByStrapiComponent } from "./registry";

let idCounter = 0;
function nextId(): string {
  idCounter += 1;
  return `puck-${Date.now()}-${idCounter}`;
}

export function strapiBlocksToPuckData(
  blocks: ContentBlock[] | undefined | null,
): Data {
  if (!blocks || blocks.length === 0) {
    return { content: [], root: {} };
  }

  const content: ComponentData[] = [];

  for (const block of blocks) {
    const entry = registryByStrapiComponent.get(block.__component);
    if (!entry) continue;

    const props = entry.fromBlock(block as never);
    content.push({
      type: entry.puckType,
      props: {
        id: nextId(),
        ...props,
      },
    } as unknown as ComponentData);
  }

  return { content, root: {} };
}
