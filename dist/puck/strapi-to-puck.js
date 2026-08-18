import { registryByStrapiComponent } from "./registry/index.js";
let idCounter = 0;
function nextId() {
    idCounter += 1;
    return `puck-${Date.now()}-${idCounter}`;
}
export function strapiBlocksToPuckData(blocks) {
    if (!blocks || blocks.length === 0) {
        return { content: [], root: {} };
    }
    const content = [];
    for (const block of blocks) {
        const entry = registryByStrapiComponent.get(block.__component);
        if (!entry)
            continue;
        const props = entry.fromBlock(block);
        content.push({
            type: entry.puckType,
            props: Object.assign({ id: nextId() }, props),
        });
    }
    return { content, root: {} };
}
