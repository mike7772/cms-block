import { jsx as _jsx } from "react/jsx-runtime";
import { registryByStrapiComponent } from "../../puck/registry/index.js";
export default function BlockRenderer({ blocks }) {
    if (!(blocks === null || blocks === void 0 ? void 0 : blocks.length)) {
        return null;
    }
    return (_jsx("div", { className: "flex flex-col gap-16", children: blocks.map((block, index) => {
            var _a;
            const entry = registryByStrapiComponent.get(block.__component);
            if (!entry)
                return null;
            const props = entry.fromBlock(block);
            return (_jsx("div", { children: entry.render(props) }, `${block.__component}-${(_a = block.id) !== null && _a !== void 0 ? _a : index}`));
        }) }));
}
