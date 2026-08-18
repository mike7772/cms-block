import { existingRegistry } from "./existing.js";
import { contentRegistry } from "./content.js";
import { layoutRegistry } from "./layout.js";
import { marketingRegistry } from "./marketing.js";
import { mediaRegistry } from "./media.js";
import { formsRegistry } from "./forms.js";
import { dynamicRegistry } from "./dynamic.js";
import { navigationRegistry } from "./navigation.js";
import { bricksDiviRegistry } from "./bricks-divi.js";
export const allRegistryEntries = [
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
export const registryByPuckType = new Map(allRegistryEntries.map((entry) => [entry.puckType, entry]));
export const registryByStrapiComponent = new Map(allRegistryEntries.map((entry) => [entry.strapiComponent, entry]));
export function getEntryForBlock(block) {
    return registryByStrapiComponent.get(block.__component);
}
