import type { Config } from "@puckeditor/core";
import { createElement } from "react";
import BlockStyleShell from "@/components/puck/block-style-shell";
import {
  DEFAULT_BLOCK_ADVANCED,
  DEFAULT_BLOCK_STYLE,
  blockStyleFields,
  type BlockAdvanced,
  type BlockStyle,
} from "@/puck/block-style";
import { allRegistryEntries } from "./registry";
import { enableContentEditableFields } from "./registry/helpers";
import { siteSectionComponents, siteSectionCategories } from "./site-sections-registration";

const components: Config["components"] = {};
const categories: NonNullable<Config["categories"]> = {};

for (const entry of allRegistryEntries) {
  const fields = enableContentEditableFields({
    ...entry.fields,
    ...blockStyleFields,
  });

  components[entry.puckType] = {
    label: entry.label,
    fields,
    defaultProps: {
      ...entry.defaultProps,
      style: { ...DEFAULT_BLOCK_STYLE },
      advanced: { ...DEFAULT_BLOCK_ADVANCED },
    },
    render: ((props: Record<string, unknown>) =>
      createElement(BlockStyleShell, {
        style: props.style as BlockStyle | undefined,
        advanced: props.advanced as BlockAdvanced | undefined,
        children: entry.render(props),
      })) as Config["components"][string]["render"],
  };

  const cat = entry.category;
  if (!categories[cat]) {
    categories[cat] = { title: cat, components: [] };
  }
  categories[cat].components!.push(entry.puckType);
}

export const puckConfig: Config = {
  root: {
    fields: {},
  },
  categories: { ...categories, ...siteSectionCategories },
  components: { ...components, ...siteSectionComponents },
};

export default puckConfig;
