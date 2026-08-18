import type { ContentBlock } from "@/lib/types";
import { registryByStrapiComponent } from "@/puck/registry";

export default function BlockRenderer({ blocks }: { blocks?: ContentBlock[] }) {
  if (!blocks?.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-16">
      {blocks.map((block, index) => {
        const entry = registryByStrapiComponent.get(block.__component);
        if (!entry) return null;

        const props = entry.fromBlock(block as never);
        return (
          <div key={`${block.__component}-${block.id ?? index}`}>
            {entry.render(props as never)}
          </div>
        );
      })}
    </div>
  );
}
