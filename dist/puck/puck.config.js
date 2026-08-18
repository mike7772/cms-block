import { createElement } from "react";
import BlockStyleShell from "@/components/puck/block-style-shell";
import { DEFAULT_BLOCK_ADVANCED, DEFAULT_BLOCK_STYLE, blockStyleFields, } from "@/puck/block-style";
import { allRegistryEntries } from "./registry";
import { enableContentEditableFields } from "./registry/helpers";
const components = {};
const categories = {};
for (const entry of allRegistryEntries) {
    const fields = enableContentEditableFields(Object.assign(Object.assign({}, entry.fields), blockStyleFields));
    components[entry.puckType] = {
        label: entry.label,
        fields,
        defaultProps: Object.assign(Object.assign({}, entry.defaultProps), { style: Object.assign({}, DEFAULT_BLOCK_STYLE), advanced: Object.assign({}, DEFAULT_BLOCK_ADVANCED) }),
        render: ((props) => createElement(BlockStyleShell, {
            style: props.style,
            advanced: props.advanced,
            children: entry.render(props),
        })),
    };
    const cat = entry.category;
    if (!categories[cat]) {
        categories[cat] = { title: cat, components: [] };
    }
    categories[cat].components.push(entry.puckType);
}
export const puckConfig = {
    root: {
        fields: {},
    },
    categories,
    components,
};
export default puckConfig;
