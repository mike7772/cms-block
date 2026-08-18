import type { ReactNode } from "react";
import type { Fields } from "@puckeditor/core";
import type { ContentBlock } from "../../lib/types.js";
import type { PuckCategory } from "./helpers.js";
export type RegistryEntry = {
    puckType: string;
    strapiComponent: ContentBlock["__component"];
    label: string;
    category: PuckCategory;
    fields: Fields;
    defaultProps: Record<string, unknown>;
    fromBlock: (block: ContentBlock) => Record<string, unknown>;
    toBlock: (props: Record<string, unknown>) => ContentBlock;
    render: (props: Record<string, unknown>) => ReactNode;
};
//# sourceMappingURL=types.d.ts.map