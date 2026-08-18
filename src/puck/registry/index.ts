import { existingRegistry } from "./existing";
import { contentRegistry } from "./content";
import { layoutRegistry } from "./layout";
import { marketingRegistry } from "./marketing";
import { mediaRegistry } from "./media";
import { formsRegistry } from "./forms";
import { dynamicRegistry } from "./dynamic";
import { navigationRegistry } from "./navigation";
import { bricksDiviRegistry } from "./bricks-divi";
import type { RegistryEntry } from "./types";
import type { ContentBlock } from "@/lib/types";

export const allRegistryEntries: RegistryEntry[] = [
  ...existingRegistry,
  ...layoutRegistry,
  ...contentRegistry,
  ...marketingRegistry,
  ...mediaRegistry,
  ...formsRegistry,
  ...dynamicRegistry,
  ...navigationRegistry,
  ...bricksDiviRegistry,
];

export const registryByPuckType = new Map(
  allRegistryEntries.map((entry) => [entry.puckType, entry]),
);

export const registryByStrapiComponent = new Map(
  allRegistryEntries.map((entry) => [entry.strapiComponent, entry]),
);

export function getEntryForBlock(
  block: ContentBlock,
): RegistryEntry | undefined {
  return registryByStrapiComponent.get(block.__component);
}
