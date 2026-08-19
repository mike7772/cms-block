import { createElement } from "react";
import BlockStyleShell from "../components/puck/block-style-shell.js";
import { DEFAULT_BLOCK_ADVANCED, DEFAULT_BLOCK_STYLE, blockStyleFields, } from "../puck/block-style.js";
import { allRegistryEntries } from "./registry/index.js";
import { enableContentEditableFields } from "./registry/helpers.js";
import { siteSectionComponents, siteSectionCategories } from "./site-sections-registration.js";
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
    categories: Object.assign(Object.assign({}, categories), siteSectionCategories),
    components: Object.assign(Object.assign({}, components), siteSectionComponents),
};
export default puckConfig;
