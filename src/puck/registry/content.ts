import AdvancedHeadingBlock from "@/components/blocks/advanced-heading-block";
import AnimatedHeadlineBlock from "@/components/blocks/animated-headline-block";
import AlertBlock from "@/components/blocks/alert-block";
import AccordionBlock from "@/components/blocks/accordion-block";
import TabsBlock from "@/components/blocks/tabs-block";
import IconBoxBlock from "@/components/blocks/icon-box-block";
import ImageBoxBlock from "@/components/blocks/image-box-block";
import ContentCardsBlock from "@/components/blocks/content-cards-block";
import CodeHighlightBlock from "@/components/blocks/code-highlight-block";
import DataTableBlock from "@/components/blocks/data-table-block";
import SpacerBlock from "@/components/blocks/spacer-block";
import ImageAccordionBlock from "@/components/blocks/image-accordion-block";
import DualButtonBlock from "@/components/blocks/dual-button-block";
import ProtectedContentBlock from "@/components/blocks/protected-content-block";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import { boolField, selectField } from "@/puck/registry/helpers";
import { createElement } from "react";
import type { RegistryEntry } from "@/puck/registry/types";
import type {
  AdvancedHeadingBlock as AdvancedHeadingBlockType,
  AnimatedHeadlineBlock as AnimatedHeadlineBlockType,
  AlertBlock as AlertBlockType,
  AccordionBlock as AccordionBlockType,
  TabsBlock as TabsBlockType,
  IconBoxBlock as IconBoxBlockType,
  ImageBoxBlock as ImageBoxBlockType,
  ContentCardsBlock as ContentCardsBlockType,
  CodeHighlightBlock as CodeHighlightBlockType,
  DataTableBlock as DataTableBlockType,
  SpacerBlock as SpacerBlockType,
  ImageAccordionBlock as ImageAccordionBlockType,
  DualButtonBlock as DualButtonBlockType,
  ProtectedContentBlock as ProtectedContentBlockType,
} from "@/lib/types";

function parseJsonArray(value: string): unknown[] {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* -------------------------------------------------------------------------- */
/* Advanced Heading                                                           */
/* -------------------------------------------------------------------------- */

type AdvancedHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  headingLevel: string;
  align: string;
};

function advancedHeadingToBlock(
  props: AdvancedHeadingProps,
): AdvancedHeadingBlockType {
  return {
    __component: "shared.advanced-heading",
    id: 0,
    eyebrow: props.eyebrow || null,
    title: props.title,
    subtitle: props.subtitle || null,
    headingLevel:
      (props.headingLevel as AdvancedHeadingBlockType["headingLevel"]) || null,
    align: (props.align as AdvancedHeadingBlockType["align"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Animated Headline                                                          */
/* -------------------------------------------------------------------------- */

type AnimatedHeadlineProps = {
  prefixText: string;
  animatedWords: string;
  suffixText: string;
  animationType: string;
  headingLevel: string;
  align: string;
  animationSpeed: string;
};

function animatedHeadlineToBlock(
  props: AnimatedHeadlineProps,
): AnimatedHeadlineBlockType {
  return {
    __component: "shared.animated-headline",
    id: 0,
    prefixText: props.prefixText || null,
    animatedWords: props.animatedWords,
    suffixText: props.suffixText || null,
    animationType:
      (props.animationType as AnimatedHeadlineBlockType["animationType"]) ||
      null,
    headingLevel:
      (props.headingLevel as AnimatedHeadlineBlockType["headingLevel"]) || null,
    align: (props.align as AnimatedHeadlineBlockType["align"]) || null,
    animationSpeed:
      (props.animationSpeed as AnimatedHeadlineBlockType["animationSpeed"]) ||
      null,
  };
}

/* -------------------------------------------------------------------------- */
/* Alert                                                                      */
/* -------------------------------------------------------------------------- */

type AlertProps = {
  variant: string;
  title: string;
  message: string;
  dismissible: boolean;
  iconUrl: string;
};

function alertToBlock(props: AlertProps): AlertBlockType {
  return {
    __component: "shared.alert",
    id: 0,
    variant: (props.variant as AlertBlockType["variant"]) || "info",
    title: props.title,
    message: props.message,
    dismissible: props.dismissible ?? null,
    icon: stubMedia(props.iconUrl),
  };
}

/* -------------------------------------------------------------------------- */
/* Accordion                                                                  */
/* -------------------------------------------------------------------------- */

type AccordionProps = {
  heading: string;
  subheading: string;
  items: Array<{ title: string; content: string; defaultOpen: boolean }>;
};

function accordionToBlock(props: AccordionProps): AccordionBlockType {
  return {
    __component: "shared.accordion",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    items: (props.items ?? []).map((item, i) => ({
      id: i,
      title: item.title,
      content: item.content,
      defaultOpen: item.defaultOpen ?? null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Tabs                                                                       */
/* -------------------------------------------------------------------------- */

type TabsProps = {
  layout: string;
  tabs: Array<{ label: string; content: string; iconUrl: string }>;
};

function tabsToBlock(props: TabsProps): TabsBlockType {
  return {
    __component: "shared.tabs",
    id: 0,
    layout: (props.layout as TabsBlockType["layout"]) || null,
    tabs: (props.tabs ?? []).map((tab, i) => ({
      id: i,
      label: tab.label,
      content: tab.content,
      icon: stubMedia(tab.iconUrl),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Icon Box                                                                   */
/* -------------------------------------------------------------------------- */

type IconBoxProps = {
  iconUrl: string;
  title: string;
  description: string;
  align: string;
  linkUrl: string;
};

function iconBoxToBlock(props: IconBoxProps): IconBoxBlockType {
  return {
    __component: "shared.icon-box",
    id: 0,
    icon: stubMedia(props.iconUrl),
    title: props.title,
    description: props.description || null,
    align: (props.align as IconBoxBlockType["align"]) || null,
    linkUrl: props.linkUrl || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Image Box                                                                  */
/* -------------------------------------------------------------------------- */

type ImageBoxProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
  align: string;
};

function imageBoxToBlock(props: ImageBoxProps): ImageBoxBlockType {
  return {
    __component: "shared.image-box",
    id: 0,
    image: stubMedia(props.imageUrl),
    title: props.title,
    description: props.description || null,
    linkUrl: props.linkUrl || null,
    linkLabel: props.linkLabel || null,
    align: (props.align as ImageBoxBlockType["align"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Content Cards                                                              */
/* -------------------------------------------------------------------------- */

type ContentCardsProps = {
  heading: string;
  subheading: string;
  columns: string;
  cards: Array<{
    imageUrl: string;
    title: string;
    excerpt: string;
    linkUrl: string;
    linkLabel: string;
    badge: string;
  }>;
};

function contentCardsToBlock(props: ContentCardsProps): ContentCardsBlockType {
  return {
    __component: "shared.content-cards",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    columns: (props.columns as ContentCardsBlockType["columns"]) || null,
    cards: (props.cards ?? []).map((card, i) => ({
      id: i,
      image: stubMedia(card.imageUrl),
      title: card.title,
      excerpt: card.excerpt || null,
      linkUrl: card.linkUrl || null,
      linkLabel: card.linkLabel || null,
      badge: card.badge || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Code Highlight                                                             */
/* -------------------------------------------------------------------------- */

type CodeHighlightProps = {
  code: string;
  language: string;
  showLineNumbers: boolean;
  showCopyButton: boolean;
  theme: string;
  caption: string;
};

function codeHighlightToBlock(
  props: CodeHighlightProps,
): CodeHighlightBlockType {
  return {
    __component: "shared.code-highlight",
    id: 0,
    code: props.code,
    language:
      (props.language as CodeHighlightBlockType["language"]) || null,
    showLineNumbers: props.showLineNumbers ?? null,
    showCopyButton: props.showCopyButton ?? null,
    theme: (props.theme as CodeHighlightBlockType["theme"]) || null,
    caption: props.caption || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Data Table                                                                 */
/* -------------------------------------------------------------------------- */

type DataTableProps = {
  heading: string;
  subheading: string;
  striped: boolean;
  bordered: boolean;
  headersJson: string;
  rowsJson: string;
};

function dataTableToBlock(props: DataTableProps): DataTableBlockType {
  return {
    __component: "shared.data-table",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    striped: props.striped ?? null,
    bordered: props.bordered ?? null,
    headers: parseJsonArray(props.headersJson),
    rows: parseJsonArray(props.rowsJson),
  };
}

/* -------------------------------------------------------------------------- */
/* Spacer                                                                     */
/* -------------------------------------------------------------------------- */

type SpacerProps = {
  height: string;
  showDivider: boolean;
  dividerStyle: string;
};

function spacerToBlock(props: SpacerProps): SpacerBlockType {
  return {
    __component: "shared.spacer",
    id: 0,
    height: (props.height as SpacerBlockType["height"]) || null,
    showDivider: props.showDivider ?? null,
    dividerStyle:
      (props.dividerStyle as SpacerBlockType["dividerStyle"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const contentRegistry: RegistryEntry[] = [
  {
    puckType: "AdvancedHeading",
    strapiComponent: "shared.advanced-heading",
    label: "Advanced Heading",
    category: "Content",
    fields: {
      eyebrow: { type: "text" },
      title: { type: "text" },
      subtitle: { type: "textarea" },
      headingLevel: selectField(["h1", "h2", "h3", "h4", "h5", "h6"]),
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      eyebrow: "Platform",
      title: "Designed for modern teams",
      subtitle:
        "Everything you need to launch polished pages without starting from scratch.",
      headingLevel: "h2",
      align: "left",
    },
    fromBlock: (block: any) => ({
      eyebrow: block.eyebrow ?? "",
      title: block.title ?? "",
      subtitle: block.subtitle ?? "",
      headingLevel: block.headingLevel ?? "h2",
      align: block.align ?? "left",
    }),
    toBlock: advancedHeadingToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(AdvancedHeadingBlock, { block: advancedHeadingToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "AnimatedHeadline",
    strapiComponent: "shared.animated-headline",
    label: "Animated Headline",
    category: "Content",
    fields: {
      prefixText: { type: "text" },
      animatedWords: { type: "text" },
      suffixText: { type: "text" },
      animationType: selectField([
        "typing",
        "rotating",
        "fade",
        "slide",
        "highlight",
      ]),
      headingLevel: selectField(["h1", "h2", "h3", "h4", "h5", "h6"]),
      align: selectField(["left", "center", "right"]),
      animationSpeed: selectField(["slow", "normal", "fast"]),
    },
    defaultProps: {
      prefixText: "We build",
      animatedWords: "websites, apps, experiences",
      suffixText: "for everyone.",
      animationType: "rotating",
      headingLevel: "h2",
      align: "center",
      animationSpeed: "normal",
    },
    fromBlock: (block: any) => ({
      prefixText: block.prefixText ?? "",
      animatedWords: block.animatedWords ?? "",
      suffixText: block.suffixText ?? "",
      animationType: block.animationType ?? "rotating",
      headingLevel: block.headingLevel ?? "h2",
      align: block.align ?? "center",
      animationSpeed: block.animationSpeed ?? "normal",
    }),
    toBlock: animatedHeadlineToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(AnimatedHeadlineBlock, { block: animatedHeadlineToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Alert",
    strapiComponent: "shared.alert",
    label: "Alert",
    category: "Content",
    fields: {
      variant: selectField(["info", "success", "warning", "danger"]),
      title: { type: "text" },
      message: { type: "textarea" },
      dismissible: boolField(),
      iconUrl: { type: "text" },
    },
    defaultProps: {
      variant: "info",
      title: "New release available",
      message:
        "Version 2.4 includes faster publishing and improved templates.",
      dismissible: false,
      iconUrl: "",
    },
    fromBlock: (block: any) => ({
      variant: block.variant ?? "info",
      title: block.title ?? "",
      message: block.message ?? "",
      dismissible: block.dismissible ?? false,
      iconUrl: stripMediaUrl(block.icon),
    }),
    toBlock: alertToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(AlertBlock, { block: alertToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Accordion",
    strapiComponent: "shared.accordion",
    label: "Accordion",
    category: "Content",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          content: { type: "textarea" },
          defaultOpen: boolField(),
        },
      },
    },
    defaultProps: {
      heading: "Common questions",
      subheading: "Find answers without leaving the page.",
      items: [
        {
          title: "How do I publish a page?",
          content:
            "Open your draft in the editor, review the preview, then click Publish. Changes go live immediately on connected sites.",
          defaultOpen: true,
        },
        {
          title: "Can I reuse layouts across pages?",
          content:
            "Yes. Save sections as templates or duplicate existing pages so your team starts from proven layouts every time.",
          defaultOpen: false,
        },
        {
          title: "Who can edit content?",
          content:
            "Workspace admins control roles and permissions. Editors can update pages; publishers approve and release them.",
          defaultOpen: false,
        },
      ],
    },
    fromBlock: (block: any) => ({
      heading: block.heading ?? "",
      subheading: block.subheading ?? "",
      items: (block.items ?? []).map((item: any) => ({
        title: item.title ?? "",
        content: item.content ?? "",
        defaultOpen: item.defaultOpen ?? false,
      })),
    }),
    toBlock: accordionToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(AccordionBlock, { block: accordionToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Tabs",
    strapiComponent: "shared.tabs",
    label: "Tabs",
    category: "Content",
    fields: {
      layout: selectField(["horizontal", "vertical"]),
      tabs: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          content: { type: "textarea" },
          iconUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      layout: "horizontal",
      tabs: [
        {
          label: "Overview",
          content:
            "Compose pages from polished blocks that already look production-ready. Invite your team, iterate quickly, and publish with confidence—without rebuilding layouts from scratch each time.",
          iconUrl: "",
        },
        {
          label: "Security",
          content:
            "Role-based access, optional SSO, and audit trails keep publishing controlled as your organization grows. Protect drafts and production sites with permissions that match how your team works.",
          iconUrl: "",
        },
        {
          label: "Integrations",
          content:
            "Connect analytics, CRM, and collaboration tools your team already relies on. Sync content and trigger workflows so launches stay aligned across product, marketing, and support.",
          iconUrl: "",
        },
      ],
    },
    fromBlock: (block: any) => ({
      layout: block.layout ?? "horizontal",
      tabs: (block.tabs ?? []).map((tab: any) => ({
        label: tab.label ?? "",
        content: tab.content ?? "",
        iconUrl: stripMediaUrl(tab.icon),
      })),
    }),
    toBlock: tabsToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(TabsBlock, { block: tabsToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "IconBox",
    strapiComponent: "shared.icon-box",
    label: "Icon Box",
    category: "Content",
    fields: {
      iconUrl: { type: "text" },
      title: { type: "text" },
      description: { type: "textarea" },
      align: selectField(["left", "center", "right"]),
      linkUrl: { type: "text" },
    },
    defaultProps: {
      iconUrl: "",
      title: "User Management",
      description: "Add and control users efficiently.",
      align: "center",
      linkUrl: "/",
    },
    fromBlock: (block: any) => ({
      iconUrl: stripMediaUrl(block.icon),
      title: block.title ?? "",
      description: block.description ?? "",
      align: block.align ?? "center",
      linkUrl: block.linkUrl ?? "",
    }),
    toBlock: iconBoxToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(IconBoxBlock, { block: iconBoxToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "ImageBox",
    strapiComponent: "shared.image-box",
    label: "Image Box",
    category: "Content",
    fields: {
      imageUrl: { type: "text" },
      title: { type: "text" },
      description: { type: "textarea" },
      linkUrl: { type: "text" },
      linkLabel: { type: "text" },
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      title: "User Management",
      description: "Add and control users efficiently.",
      linkUrl: "/",
      linkLabel: "Manage users",
      align: "left",
    },
    fromBlock: (block: any) => ({
      imageUrl: stripMediaUrl(block.image),
      title: block.title ?? "",
      description: block.description ?? "",
      linkUrl: block.linkUrl ?? "",
      linkLabel: block.linkLabel ?? "",
      align: block.align ?? "left",
    }),
    toBlock: imageBoxToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(ImageBoxBlock, { block: imageBoxToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "ContentCards",
    strapiComponent: "shared.content-cards",
    label: "Content Cards",
    category: "Content",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      cards: {
        type: "array",
        arrayFields: {
          imageUrl: { type: "text" },
          title: { type: "text" },
          excerpt: { type: "textarea" },
          linkUrl: { type: "text" },
          linkLabel: { type: "text" },
          badge: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Latest insights",
      subheading: "Guides and updates from the product team.",
      columns: "3",
      cards: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          title: "User Management",
          excerpt:
            "Learn how to invite teammates, set roles, and keep access organized as your workspace grows.",
          linkUrl: "/",
          linkLabel: "Read article",
          badge: "Guide",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
          title: "Analytics Dashboard",
          excerpt:
            "See which pages convert, where visitors drop off, and how to act on clear performance signals.",
          linkUrl: "/",
          linkLabel: "Read article",
          badge: "Product",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          title: "Integrations",
          excerpt:
            "Connect the tools your team already uses so content, analytics, and workflows stay in sync.",
          linkUrl: "/",
          linkLabel: "Read article",
          badge: "Update",
        },
      ],
    },
    fromBlock: (block: any) => ({
      heading: block.heading ?? "",
      subheading: block.subheading ?? "",
      columns: block.columns ?? "3",
      cards: (block.cards ?? []).map((card: any) => ({
        imageUrl: stripMediaUrl(card.image),
        title: card.title ?? "",
        excerpt: card.excerpt ?? "",
        linkUrl: card.linkUrl ?? "",
        linkLabel: card.linkLabel ?? "",
        badge: card.badge ?? "",
      })),
    }),
    toBlock: contentCardsToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(ContentCardsBlock, { block: contentCardsToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "CodeHighlight",
    strapiComponent: "shared.code-highlight",
    label: "Code Highlight",
    category: "Content",
    fields: {
      code: { type: "textarea" },
      language: selectField([
        "javascript",
        "typescript",
        "python",
        "html",
        "css",
        "json",
        "bash",
        "sql",
        "plaintext",
      ]),
      showLineNumbers: boolField(),
      showCopyButton: boolField(),
      theme: selectField(["light", "dark"]),
      caption: { type: "text" },
    },
    defaultProps: {
      code: "console.log('Hello world');",
      language: "javascript",
      showLineNumbers: true,
      showCopyButton: true,
      theme: "dark",
      caption: "",
    },
    fromBlock: (block: any) => ({
      code: block.code ?? "",
      language: block.language ?? "plaintext",
      showLineNumbers: block.showLineNumbers ?? true,
      showCopyButton: block.showCopyButton ?? true,
      theme: block.theme ?? "dark",
      caption: block.caption ?? "",
    }),
    toBlock: codeHighlightToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(CodeHighlightBlock, { block: codeHighlightToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "DataTable",
    strapiComponent: "shared.data-table",
    label: "Data Table",
    category: "Content",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      striped: boolField(),
      bordered: boolField(),
      headersJson: { type: "textarea" },
      rowsJson: { type: "textarea" },
    },
    defaultProps: {
      heading: "",
      subheading: "",
      striped: true,
      bordered: true,
      headersJson: '["Name", "Role"]',
      rowsJson: '[["Ada Lovelace", "Mathematician"], ["Grace Hopper", "Admiral"]]',
    },
    fromBlock: (block: any) => ({
      heading: block.heading ?? "",
      subheading: block.subheading ?? "",
      striped: block.striped ?? true,
      bordered: block.bordered ?? true,
      headersJson: JSON.stringify(block.headers ?? [], null, 2),
      rowsJson: JSON.stringify(block.rows ?? [], null, 2),
    }),
    toBlock: dataTableToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(DataTableBlock, { block: dataTableToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Spacer",
    strapiComponent: "shared.spacer",
    label: "Spacer / Divider",
    category: "Content",
    fields: {
      height: selectField(["small", "medium", "large", "xlarge"]),
      showDivider: boolField(),
      dividerStyle: selectField(["solid", "dashed", "dotted"]),
    },
    defaultProps: {
      height: "medium",
      showDivider: false,
      dividerStyle: "solid",
    },
    fromBlock: (block: any) => ({
      height: block.height ?? "medium",
      showDivider: block.showDivider ?? false,
      dividerStyle: block.dividerStyle ?? "solid",
    }),
    toBlock: spacerToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(SpacerBlock, {
        block: spacerToBlock(props),
        isEditing: Boolean(props.puck?.isEditing),
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "ImageAccordion",
    strapiComponent: "shared.image-accordion",
    label: "Image Accordion",
    category: "Content",
    fields: {
      heading: { type: "text" },
      height: selectField(["small", "medium", "large"]),
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          subtitle: { type: "text" },
          imageUrl: { type: "text" },
          url: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "",
      height: "medium",
      items: [
        {
          title: "Product",
          subtitle: "See what you can build",
          imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
          url: "",
        },
        {
          title: "Customers",
          subtitle: "Stories from modern teams",
          imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
          url: "",
        },
        {
          title: "Careers",
          subtitle: "Join the people behind it",
          imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
          url: "",
        },
      ],
    },
    fromBlock: (block: any) => {
      const b = block as ImageAccordionBlockType;
      return {
        heading: b.heading ?? "",
        height: b.height ?? "medium",
        items: (b.items ?? []).map((item) => ({
          title: item.title ?? "",
          subtitle: item.subtitle ?? "",
          imageUrl: item.imageUrl ?? "",
          url: item.url ?? "",
        })),
      };
    },
    toBlock: ((props: any): ImageAccordionBlockType => ({
      __component: "shared.image-accordion",
      id: 0,
      heading: props.heading || null,
      height: props.height || null,
      items: (props.items ?? []).map((item: any) => ({
        title: item.title || "",
        subtitle: item.subtitle || null,
        imageUrl: item.imageUrl || "",
        url: item.url || null,
      })),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ImageAccordionBlock, {
        block: {
          __component: "shared.image-accordion",
          id: 0,
          heading: props.heading || null,
          height: props.height || null,
          items: (props.items ?? []).map((item: any) => ({
            title: item.title || "",
            subtitle: item.subtitle || null,
            imageUrl: item.imageUrl || "",
            url: item.url || null,
          })),
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "DualButton",
    strapiComponent: "shared.dual-button",
    label: "Dual Button",
    category: "Content",
    fields: {
      primaryLabel: { type: "text" },
      primaryUrl: { type: "text" },
      secondaryLabel: { type: "text" },
      secondaryUrl: { type: "text" },
      align: selectField(["left", "center", "right"]),
      stackOnMobile: boolField(),
    },
    defaultProps: {
      primaryLabel: "Start free trial",
      primaryUrl: "/",
      secondaryLabel: "Book a demo",
      secondaryUrl: "/",
      align: "center",
      stackOnMobile: true,
    },
    fromBlock: (block: any) => {
      const b = block as DualButtonBlockType;
      return {
        primaryLabel: b.primaryLabel ?? "Get started",
        primaryUrl: b.primaryUrl ?? "/",
        secondaryLabel: b.secondaryLabel ?? "Learn more",
        secondaryUrl: b.secondaryUrl ?? "/",
        align: b.align ?? "center",
        stackOnMobile: b.stackOnMobile ?? true,
      };
    },
    toBlock: ((props: any): DualButtonBlockType => ({
      __component: "shared.dual-button",
      id: 0,
      primaryLabel: props.primaryLabel || "Get started",
      primaryUrl: props.primaryUrl || "/",
      secondaryLabel: props.secondaryLabel || "Learn more",
      secondaryUrl: props.secondaryUrl || "/",
      align: props.align || null,
      stackOnMobile: props.stackOnMobile ?? null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(DualButtonBlock, {
        block: {
          __component: "shared.dual-button",
          id: 0,
          primaryLabel: props.primaryLabel || "Get started",
          primaryUrl: props.primaryUrl || "/",
          secondaryLabel: props.secondaryLabel || "Learn more",
          secondaryUrl: props.secondaryUrl || "/",
          align: props.align || null,
          stackOnMobile: props.stackOnMobile ?? null,
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "ProtectedContent",
    strapiComponent: "shared.protected-content",
    label: "Protected Content",
    category: "Content",
    fields: {
      heading: { type: "text" },
      message: { type: "textarea" },
      password: { type: "text" },
      buttonLabel: { type: "text" },
      contentHtml: { type: "textarea" },
    },
    defaultProps: {
      heading: "Protected content",
      message: "Enter the password to view this content.",
      password: "secret",
      buttonLabel: "Unlock",
      contentHtml: "<p>This content is now unlocked.</p>",
    },
    fromBlock: (block: any) => {
      const b = block as ProtectedContentBlockType;
      return {
        heading: b.heading ?? "Protected content",
        message: b.message ?? "",
        password: b.password ?? "",
        buttonLabel: b.buttonLabel ?? "Unlock",
        contentHtml: b.contentHtml ?? "",
      };
    },
    toBlock: ((props: any): ProtectedContentBlockType => ({
      __component: "shared.protected-content",
      id: 0,
      heading: props.heading || null,
      message: props.message || null,
      password: props.password || "",
      buttonLabel: props.buttonLabel || null,
      contentHtml: props.contentHtml || "",
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ProtectedContentBlock, {
        block: {
          __component: "shared.protected-content",
          id: 0,
          heading: props.heading || null,
          message: props.message || null,
          password: props.password || "",
          buttonLabel: props.buttonLabel || null,
          contentHtml: props.contentHtml || "",
        },
      }),
  } as unknown as RegistryEntry,
];
