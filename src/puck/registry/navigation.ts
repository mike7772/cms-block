import BreadcrumbsBlock from "@/components/blocks/breadcrumbs-block";
import MenuBlock from "@/components/blocks/menu-block";
import MenuAnchorBlock from "@/components/blocks/menu-anchor-block";
import ShareButtonsBlock from "@/components/blocks/share-buttons-block";
import SitemapBlock from "@/components/blocks/sitemap-block";
import SocialIconsBlock from "@/components/blocks/social-icons-block";
import TableOfContentsBlock from "@/components/blocks/table-of-contents-block";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import type {
  BreadcrumbsBlock as BreadcrumbsBlockType,
  MenuBlock as MenuBlockType,
  MenuAnchorBlock as MenuAnchorBlockType,
  ShareButtonsBlock as ShareButtonsBlockType,
  SitemapBlock as SitemapBlockType,
  SocialIconsBlock as SocialIconsBlockType,
  TableOfContentsBlock as TableOfContentsBlockType,
} from "@/lib/types";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";
import {
  MENU_DEFAULT_DROPDOWN_ITEM,
  MENU_DEFAULT_GROUP,
  MENU_DEFAULT_LINKS,
} from "@/puck/chrome-defaults";

function mapMenuChildren(children: any[] | undefined) {
  return (children ?? []).map((child: any, j: number) => ({
    id: j,
    label: child.label ?? "",
    url: child.url ?? "",
    iconName: child.iconName || null,
    openInNewTab: child.openInNewTab ?? null,
  }));
}

function mapMenuGroups(link: any) {
  const groups = Array.isArray(link.groups) ? link.groups : [];
  if (groups.length) {
    return groups.map((group: any, g: number) => ({
      id: g,
      title: group.title || null,
      description: group.description || null,
      panelImage: stubMedia(group.panelImageUrl ?? ""),
      ctaLabel: group.ctaLabel || null,
      ctaUrl: group.ctaUrl || null,
      children: mapMenuChildren(group.children),
    }));
  }

  if (
    link.description ||
    link.panelImageUrl ||
    link.ctaLabel ||
    (link.children ?? []).length
  ) {
    return [
      {
        id: 0,
        title: link.label || null,
        description: link.description || null,
        panelImage: stubMedia(link.panelImageUrl ?? ""),
        ctaLabel: link.ctaLabel || null,
        ctaUrl: link.ctaUrl || null,
        children: mapMenuChildren(link.children),
      },
    ];
  }

  return [];
}

const breadcrumbsToBlock = (props: any): BreadcrumbsBlockType => ({
  __component: "shared.breadcrumbs",
  id: 0,
  separator: props.separator || null,
  showHomePage: props.showHomePage ?? null,
  homePageLabel: props.homePageLabel || null,
  align: props.align || null,
  style: props.style || null,
});

const menuToBlock = (props: any): MenuBlockType => ({
  __component: "shared.menu",
  id: 0,
  heading: props.heading || null,
  orientation: props.orientation || null,
  style: props.style || null,
  links: (props.links ?? []).map((link: any, i: number) => ({
    id: i,
    label: link.label ?? "",
    url: link.url ?? "",
    icon: stubMedia(link.iconUrl ?? ""),
    openInNewTab: link.openInNewTab ?? null,
    isButton: link.isButton ?? null,
    groups: mapMenuGroups(link),
  })),
});

const menuAnchorToBlock = (props: any): MenuAnchorBlockType => ({
  __component: "shared.menu-anchor",
  id: 0,
  anchorId: props.anchorId ?? "",
  label: props.label || null,
});

const shareButtonsToBlock = (props: any): ShareButtonsBlockType => ({
  __component: "shared.share-buttons",
  id: 0,
  heading: props.heading || null,
  platforms: props.platforms || null,
  style: props.style || null,
  align: props.align || null,
  shape: props.shape || null,
});

const sitemapToBlock = (props: any): SitemapBlockType => ({
  __component: "shared.sitemap",
  id: 0,
  heading: props.heading || null,
  layout: props.layout || null,
  columns: props.columns || null,
  showDescriptions: props.showDescriptions ?? null,
  maxDepth:
    props.maxDepth === "" || props.maxDepth == null
      ? null
      : Number(props.maxDepth),
});

const socialIconsToBlock = (props: any): SocialIconsBlockType => ({
  __component: "shared.social-icons",
  id: 0,
  heading: props.heading || null,
  align: props.align || null,
  icons: (props.icons ?? []).map((icon: any, i: number) => ({
    id: i,
    platform: icon.platform || "website",
    url: icon.url ?? "",
    label: icon.label || null,
  })),
});

const tocToBlock = (props: any): TableOfContentsBlockType => ({
  __component: "shared.table-of-contents",
  id: 0,
  heading: props.heading || null,
  mode: props.mode || null,
  items: (props.items ?? []).map((item: any, i: number) => ({
    id: i,
    label: item.label ?? "",
    anchorId: item.anchorId ?? "",
  })),
  sticky: props.sticky ?? null,
  showNumbers: props.showNumbers ?? null,
});

export const navigationRegistry: RegistryEntry[] = [
  {
    puckType: "Breadcrumbs",
    strapiComponent: "shared.breadcrumbs",
    label: "Breadcrumbs",
    category: "Navigation",
    fields: {
      separator: selectField(["slash", "chevron", "arrow", "dot"]),
      showHomePage: boolField(),
      homePageLabel: { type: "text" },
      align: selectField(["left", "center", "right"]),
      style: selectField(["plain", "background", "bordered"]),
    },
    defaultProps: {
      separator: "slash",
      showHomePage: true,
      homePageLabel: "Home",
      align: "left",
      style: "plain",
    },
    fromBlock: (block) => {
      const b = block as BreadcrumbsBlockType;
      return {
        separator: b.separator ?? "slash",
        showHomePage: b.showHomePage ?? true,
        homePageLabel: b.homePageLabel ?? "Home",
        align: b.align ?? "left",
        style: b.style ?? "plain",
      };
    },
    toBlock: breadcrumbsToBlock,
    render: (props: any) => createElement(BreadcrumbsBlock, { block: breadcrumbsToBlock(props) }),
  },
  {
    puckType: "Menu",
    strapiComponent: "shared.menu",
    label: "Menu",
    category: "Navigation",
    fields: {
      heading: { type: "text", contentEditable: true },
      orientation: selectField(["horizontal", "vertical"]),
      style: selectField(["plain", "pills", "underline", "buttons"]),
      links: {
        type: "array",
        arrayFields: {
          label: { type: "text", contentEditable: true },
          url: { type: "text" },
          iconUrl: { type: "text" },
          openInNewTab: boolField(),
          isButton: boolField(),
          groups: {
            type: "array",
            label: "Mega menu rows",
            arrayFields: {
              title: { type: "text", contentEditable: true },
              description: { type: "textarea", contentEditable: true },
              panelImageUrl: { type: "text", label: "Panel image URL" },
              ctaLabel: { type: "text", contentEditable: true },
              ctaUrl: { type: "text" },
              children: {
                type: "array",
                arrayFields: {
                  label: { type: "text", contentEditable: true },
                  url: { type: "text" },
                  iconName: {
                    type: "select",
                    label: "Icon",
                    options: [
                      { label: "None", value: "" },
                      { label: "Building", value: "building" },
                      { label: "Briefcase", value: "briefcase" },
                      { label: "Mail", value: "mail" },
                      { label: "Newspaper", value: "newspaper" },
                      { label: "File Text", value: "file-text" },
                      { label: "Bar Chart", value: "bar-chart" },
                      { label: "Layout Dashboard", value: "layout-dashboard" },
                      { label: "Video", value: "video" },
                      { label: "Puzzle", value: "puzzle" },
                      { label: "Git Branch", value: "git-branch" },
                      { label: "Layout Template", value: "layout-template" },
                      { label: "Code", value: "code" },
                      { label: "Users", value: "users" },
                      { label: "Globe", value: "globe" },
                      { label: "Phone", value: "phone" },
                      { label: "Map Pin", value: "map-pin" },
                      { label: "Sparkles", value: "sparkles" },
                      { label: "Star", value: "star" },
                      { label: "Heart", value: "heart" },
                      { label: "Check", value: "check" },
                    ],
                  },
                  openInNewTab: boolField(),
                },
                defaultItemProps: {
                  label: "Reports",
                  url: "/#reports",
                  iconName: "file-text",
                  openInNewTab: false,
                },
                getItemSummary: (item: { label?: string }) =>
                  item.label || "Sub-link",
              },
            },
            defaultItemProps: MENU_DEFAULT_GROUP,
            getItemSummary: (item: {
              title?: string;
              children?: unknown[];
            }) =>
              `${item.title || "Row"}${
                item.children?.length ? ` (${item.children.length})` : ""
              }`,
          },
        },
        defaultItemProps: MENU_DEFAULT_DROPDOWN_ITEM,
        getItemSummary: (item: { label?: string; groups?: unknown[] }) =>
          item.groups?.length
            ? `${item.label || "Item"} ▾`
            : item.label || "Link",
      },
    },
    defaultProps: {
      heading: "",
      orientation: "horizontal",
      style: "plain",
      links: MENU_DEFAULT_LINKS,
    },
    fromBlock: (block) => {
      const b = block as MenuBlockType;
      return {
        heading: b.heading ?? "",
        orientation: b.orientation ?? "horizontal",
        style: b.style ?? "plain",
        links: (b.links ?? []).map((link) => {
          const groups =
            link.groups?.length
              ? link.groups
              : link.children?.length ||
                  link.description ||
                  link.panelImage ||
                  link.ctaLabel
                ? [
                    {
                      title: link.label,
                      description: link.description,
                      panelImage: link.panelImage,
                      ctaLabel: link.ctaLabel,
                      ctaUrl: link.ctaUrl,
                      children: link.children,
                    },
                  ]
                : [];

          return {
            label: link.label ?? "",
            url: link.url ?? "",
            iconUrl: stripMediaUrl(link.icon),
            openInNewTab: link.openInNewTab ?? false,
            isButton: link.isButton ?? false,
            groups: groups.map((group) => ({
              title: group.title ?? "",
              description: group.description ?? "",
              panelImageUrl: stripMediaUrl(group.panelImage),
              ctaLabel: group.ctaLabel ?? "",
              ctaUrl: group.ctaUrl ?? "",
              children: (group.children ?? []).map((child) => ({
                label: child.label ?? "",
                url: child.url ?? "",
                iconName: child.iconName ?? "",
                openInNewTab: child.openInNewTab ?? false,
              })),
            })),
          };
        }),
      };
    },
    toBlock: menuToBlock,
    render: (props: any) =>
      createElement(MenuBlock, {
        block: menuToBlock(props),
        isEditing: Boolean(props.puck?.isEditing),
      }),
  },
  {
    puckType: "MenuAnchor",
    strapiComponent: "shared.menu-anchor",
    label: "Menu Anchor",
    category: "Navigation",
    fields: {
      anchorId: { type: "text" },
      label: { type: "text" },
    },
    defaultProps: {
      anchorId: "section",
      label: "",
    },
    fromBlock: (block) => {
      const b = block as MenuAnchorBlockType;
      return {
        anchorId: b.anchorId ?? "",
        label: b.label ?? "",
      };
    },
    toBlock: menuAnchorToBlock,
    render: (props: any) => createElement(MenuAnchorBlock, { block: menuAnchorToBlock(props) }),
  },
  {
    puckType: "ShareButtons",
    strapiComponent: "shared.share-buttons",
    label: "Share Buttons",
    category: "Navigation",
    fields: {
      heading: { type: "text" },
      platforms: selectField([
        "facebook",
        "twitter",
        "linkedin",
        "whatsapp",
        "telegram",
        "email",
        "copy",
      ]),
      style: selectField(["icon", "icon-text", "text"]),
      align: selectField(["left", "center", "right"]),
      shape: selectField(["circle", "square", "rounded"]),
    },
    defaultProps: {
      heading: "Share",
      platforms: "facebook",
      style: "icon-text",
      align: "left",
      shape: "rounded",
    },
    fromBlock: (block) => {
      const b = block as ShareButtonsBlockType;
      return {
        heading: b.heading ?? "",
        platforms: b.platforms ?? "facebook",
        style: b.style ?? "icon-text",
        align: b.align ?? "left",
        shape: b.shape ?? "rounded",
      };
    },
    toBlock: shareButtonsToBlock,
    render: (props: any) => createElement(ShareButtonsBlock, { block: shareButtonsToBlock(props) }),
  },
  {
    puckType: "Sitemap",
    strapiComponent: "shared.sitemap",
    label: "Sitemap",
    category: "Navigation",
    fields: {
      heading: { type: "text" },
      layout: selectField(["tree", "grid", "list"]),
      columns: selectField(["1", "2", "3", "4"]),
      showDescriptions: boolField(),
      maxDepth: { type: "number" },
    },
    defaultProps: {
      heading: "Sitemap",
      layout: "list",
      columns: "2",
      showDescriptions: false,
      maxDepth: 3,
    },
    fromBlock: (block) => {
      const b = block as SitemapBlockType;
      return {
        heading: b.heading ?? "",
        layout: b.layout ?? "list",
        columns: b.columns ?? "2",
        showDescriptions: b.showDescriptions ?? false,
        maxDepth: b.maxDepth ?? 3,
      };
    },
    toBlock: sitemapToBlock,
    render: (props: any) => createElement(SitemapBlock, { block: sitemapToBlock(props) }),
  },
  {
    puckType: "SocialIcons",
    strapiComponent: "shared.social-icons",
    label: "Social Icons",
    category: "Navigation",
    fields: {
      heading: { type: "text" },
      align: selectField(["left", "center", "right"]),
      icons: {
        type: "array",
        arrayFields: {
          platform: selectField([
            "facebook",
            "twitter",
            "linkedin",
            "instagram",
            "youtube",
            "telegram",
            "whatsapp",
            "email",
            "website",
          ]),
          url: { type: "text" },
          label: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Follow us",
      align: "center",
      icons: [],
    },
    fromBlock: (block) => {
      const b = block as SocialIconsBlockType;
      return {
        heading: b.heading ?? "",
        align: b.align ?? "center",
        icons: (b.icons ?? []).map((icon) => ({
          platform: icon.platform ?? "website",
          url: icon.url ?? "",
          label: icon.label ?? "",
        })),
      };
    },
    toBlock: socialIconsToBlock,
    render: (props: any) => createElement(SocialIconsBlock, { block: socialIconsToBlock(props) }),
  },
  {
    puckType: "TableOfContents",
    strapiComponent: "shared.table-of-contents",
    label: "Table of Contents",
    category: "Navigation",
    fields: {
      heading: { type: "text" },
      mode: selectField(["auto", "manual"]),
      sticky: boolField(),
      showNumbers: boolField(),
      items: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          anchorId: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "On this page",
      mode: "manual",
      sticky: false,
      showNumbers: true,
      items: [],
    },
    fromBlock: (block) => {
      const b = block as TableOfContentsBlockType;
      return {
        heading: b.heading ?? "",
        mode: b.mode ?? "manual",
        sticky: b.sticky ?? false,
        showNumbers: b.showNumbers ?? true,
        items: (b.items ?? []).map((item) => ({
          label: item.label ?? "",
          anchorId: item.anchorId ?? "",
        })),
      };
    },
    toBlock: tocToBlock,
    render: (props: any) => createElement(TableOfContentsBlock, { block: tocToBlock(props) }),
  },
];
