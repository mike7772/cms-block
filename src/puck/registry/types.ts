import type { ReactNode } from "react";
import type { Fields } from "@puckeditor/core";
import type { ContentBlock } from "@/lib/types";
import type { PuckCategory } from "./helpers";

// Loosely typed so category registries can use concrete prop/block types
// without fighting the ContentBlock union.
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
