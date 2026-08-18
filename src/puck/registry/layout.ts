import SectionBlock from "@/components/blocks/section-block";
import ColumnsBlock from "@/components/blocks/columns-block";
import HeaderBlock from "@/components/blocks/header-block";
import FooterBlock from "@/components/blocks/footer-block";
import ButtonBlock from "@/components/blocks/button-block";
import ButtonGroupBlock from "@/components/blocks/button-group-block";
import DividerBlock from "@/components/blocks/divider-block";
import IconListBlock from "@/components/blocks/icon-list-block";
import HtmlEmbedBlock from "@/components/blocks/html-embed-block";
import IframeEmbedBlock from "@/components/blocks/iframe-embed-block";
import BannerBlock from "@/components/blocks/banner-block";
import TimelineBlock from "@/components/blocks/timeline-block";
import StepsBlock from "@/components/blocks/steps-block";
import BeforeAfterBlock from "@/components/blocks/before-after-block";
import ModalBlock from "@/components/blocks/modal-block";
import AudioPlayerBlock from "@/components/blocks/audio-player-block";
import FileDownloadBlock from "@/components/blocks/file-download-block";
import MarqueeBlock from "@/components/blocks/marquee-block";
import RatingBlock from "@/components/blocks/rating-block";
import ChartBlock from "@/components/blocks/chart-block";
import ReadingProgressBlock from "@/components/blocks/reading-progress-block";
import BackToTopBlock from "@/components/blocks/back-to-top-block";
import BusinessHoursBlock from "@/components/blocks/business-hours-block";
import {
  jsonToSlot,
  slotToJson,
} from "@/components/blocks/slot-json";
import {
  FOOTER_DEFAULT_BOTTOM,
  FOOTER_DEFAULT_COLUMN1,
  FOOTER_DEFAULT_COLUMN2,
  FOOTER_DEFAULT_COLUMN3,
  FOOTER_DEFAULT_COLUMN4,
  FOOTER_DEFAULT_TOP,
  HEADER_DEFAULT_CENTER,
  HEADER_DEFAULT_LEFT,
  HEADER_DEFAULT_RIGHT,
} from "@/puck/chrome-defaults";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import { boolField, selectField, selectOptions } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";
import type {
  AudioPlayerBlock as AudioPlayerBlockType,
  BannerBlock as BannerBlockType,
  BeforeAfterBlock as BeforeAfterBlockType,
  ButtonBlock as ButtonBlockType,
  ButtonGroupBlock as ButtonGroupBlockType,
  ChartBlock as ChartBlockType,
  ColumnsBlock as ColumnsBlockType,
  DividerBlock as DividerBlockType,
  FileDownloadBlock as FileDownloadBlockType,
  FooterBlock as FooterBlockType,
  HeaderBlock as HeaderBlockType,
  HtmlEmbedBlock as HtmlEmbedBlockType,
  IconListBlock as IconListBlockType,
  IframeEmbedBlock as IframeEmbedBlockType,
  MarqueeBlock as MarqueeBlockType,
  ModalBlock as ModalBlockType,
  RatingBlock as RatingBlockType,
  SectionBlock as SectionBlockType,
  StepsBlock as StepsBlockType,
  TimelineBlock as TimelineBlockType,
  ReadingProgressBlock as ReadingProgressBlockType,
  BackToTopBlock as BackToTopBlockType,
  BusinessHoursBlock as BusinessHoursBlockType,
} from "@/lib/types";

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

type SectionProps = {
  content: unknown;
  background: string;
  backgroundImageUrl: string;
  paddingY: string;
  maxWidth: string;
  align: string;
};

function sectionToBlock(props: SectionProps): SectionBlockType {
  return {
    __component: "shared.section",
    id: 0,
    contentJson: slotToJson(props.content),
    background: (props.background as SectionBlockType["background"]) || null,
    backgroundImage: stubMedia(props.backgroundImageUrl),
    paddingY: (props.paddingY as SectionBlockType["paddingY"]) || null,
    maxWidth: (props.maxWidth as SectionBlockType["maxWidth"]) || null,
    align: (props.align as SectionBlockType["align"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Columns                                                                    */
/* -------------------------------------------------------------------------- */

type ColumnsProps = {
  columnCount: string;
  gap: string;
  stackOnMobile: boolean;
  column1: unknown;
  column2: unknown;
  column3: unknown;
  column4: unknown;
};

function columnsToBlock(props: ColumnsProps): ColumnsBlockType {
  return {
    __component: "shared.columns",
    id: 0,
    columnCount: (props.columnCount as ColumnsBlockType["columnCount"]) || null,
    gap: (props.gap as ColumnsBlockType["gap"]) || null,
    stackOnMobile: props.stackOnMobile ?? null,
    column1Json: slotToJson(props.column1),
    column2Json: slotToJson(props.column2),
    column3Json: slotToJson(props.column3),
    column4Json: slotToJson(props.column4),
  };
}

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonProps = {
  label: string;
  url: string;
  variant: string;
  size: string;
  align: string;
  openInNewTab: boolean;
};

function buttonToBlock(props: ButtonProps): ButtonBlockType {
  return {
    __component: "shared.button",
    id: 0,
    label: props.label,
    url: props.url,
    variant: (props.variant as ButtonBlockType["variant"]) || null,
    size: (props.size as ButtonBlockType["size"]) || null,
    align: (props.align as ButtonBlockType["align"]) || null,
    openInNewTab: props.openInNewTab ?? null,
  };
}

/* -------------------------------------------------------------------------- */
/* Button Group                                                               */
/* -------------------------------------------------------------------------- */

type ButtonGroupProps = {
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
  align: string;
  stackOnMobile: boolean;
};

function buttonGroupToBlock(props: ButtonGroupProps): ButtonGroupBlockType {
  return {
    __component: "shared.button-group",
    id: 0,
    primaryLabel: props.primaryLabel,
    primaryUrl: props.primaryUrl,
    secondaryLabel: props.secondaryLabel || null,
    secondaryUrl: props.secondaryUrl || null,
    align: (props.align as ButtonGroupBlockType["align"]) || null,
    stackOnMobile: props.stackOnMobile ?? null,
  };
}

/* -------------------------------------------------------------------------- */
/* Divider                                                                    */
/* -------------------------------------------------------------------------- */

type DividerProps = {
  style: string;
  width: string;
  spacing: string;
};

function dividerToBlock(props: DividerProps): DividerBlockType {
  return {
    __component: "shared.divider",
    id: 0,
    style: (props.style as DividerBlockType["style"]) || null,
    width: (props.width as DividerBlockType["width"]) || null,
    spacing: (props.spacing as DividerBlockType["spacing"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Icon List                                                                  */
/* -------------------------------------------------------------------------- */

type IconListProps = {
  title: string;
  columns: string;
  items: Array<{ iconUrl: string; title: string; description: string }>;
};

function iconListToBlock(props: IconListProps): IconListBlockType {
  return {
    __component: "shared.icon-list",
    id: 0,
    title: props.title || null,
    columns: (props.columns as IconListBlockType["columns"]) || null,
    items: (props.items ?? []).map((item, i) => ({
      id: i,
      iconUrl: item.iconUrl || null,
      title: item.title,
      description: item.description || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* HTML Embed                                                                 */
/* -------------------------------------------------------------------------- */

type HtmlEmbedProps = {
  html: string;
  maxWidth: string;
};

function htmlEmbedToBlock(props: HtmlEmbedProps): HtmlEmbedBlockType {
  return {
    __component: "shared.html-embed",
    id: 0,
    html: props.html,
    maxWidth: (props.maxWidth as HtmlEmbedBlockType["maxWidth"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Iframe Embed                                                               */
/* -------------------------------------------------------------------------- */

type IframeEmbedProps = {
  url: string;
  title: string;
  height: string;
  aspectRatio: string;
};

function iframeEmbedToBlock(props: IframeEmbedProps): IframeEmbedBlockType {
  return {
    __component: "shared.iframe-embed",
    id: 0,
    url: props.url,
    title: props.title || null,
    height: (props.height as IframeEmbedBlockType["height"]) || null,
    aspectRatio:
      (props.aspectRatio as IframeEmbedBlockType["aspectRatio"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Banner                                                                     */
/* -------------------------------------------------------------------------- */

type BannerProps = {
  message: string;
  linkLabel: string;
  linkUrl: string;
  variant: string;
  dismissible: boolean;
};

function bannerToBlock(props: BannerProps): BannerBlockType {
  return {
    __component: "shared.banner",
    id: 0,
    message: props.message,
    linkLabel: props.linkLabel || null,
    linkUrl: props.linkUrl || null,
    variant: (props.variant as BannerBlockType["variant"]) || null,
    dismissible: props.dismissible ?? null,
  };
}

/* -------------------------------------------------------------------------- */
/* Timeline                                                                   */
/* -------------------------------------------------------------------------- */

type TimelineProps = {
  title: string;
  items: Array<{ date: string; title: string; description: string }>;
};

function timelineToBlock(props: TimelineProps): TimelineBlockType {
  return {
    __component: "shared.timeline",
    id: 0,
    title: props.title || null,
    items: (props.items ?? []).map((item, i) => ({
      id: i,
      date: item.date || null,
      title: item.title,
      description: item.description || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Steps                                                                      */
/* -------------------------------------------------------------------------- */

type StepsProps = {
  title: string;
  layout: string;
  items: Array<{ title: string; description: string }>;
};

function stepsToBlock(props: StepsProps): StepsBlockType {
  return {
    __component: "shared.steps",
    id: 0,
    title: props.title || null,
    layout: (props.layout as StepsBlockType["layout"]) || null,
    items: (props.items ?? []).map((item, i) => ({
      id: i,
      title: item.title,
      description: item.description || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Before / After                                                             */
/* -------------------------------------------------------------------------- */

type BeforeAfterProps = {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeLabel: string;
  afterLabel: string;
};

function beforeAfterToBlock(props: BeforeAfterProps): BeforeAfterBlockType {
  return {
    __component: "shared.before-after",
    id: 0,
    beforeImage: stubMedia(props.beforeImageUrl),
    afterImage: stubMedia(props.afterImageUrl),
    beforeLabel: props.beforeLabel || null,
    afterLabel: props.afterLabel || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Modal                                                                      */
/* -------------------------------------------------------------------------- */

type ModalProps = {
  triggerLabel: string;
  title: string;
  content: string;
  size: string;
};

function modalToBlock(props: ModalProps): ModalBlockType {
  return {
    __component: "shared.modal",
    id: 0,
    triggerLabel: props.triggerLabel,
    title: props.title || null,
    content: props.content || null,
    size: (props.size as ModalBlockType["size"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Audio Player                                                               */
/* -------------------------------------------------------------------------- */

type AudioPlayerProps = {
  title: string;
  src: string;
  caption: string;
};

function audioPlayerToBlock(props: AudioPlayerProps): AudioPlayerBlockType {
  return {
    __component: "shared.audio-player",
    id: 0,
    title: props.title || null,
    src: props.src,
    caption: props.caption || null,
  };
}

/* -------------------------------------------------------------------------- */
/* File Download                                                              */
/* -------------------------------------------------------------------------- */

type FileDownloadProps = {
  title: string;
  description: string;
  fileUrl: string;
  fileLabel: string;
  fileType: string;
};

function fileDownloadToBlock(props: FileDownloadProps): FileDownloadBlockType {
  return {
    __component: "shared.file-download",
    id: 0,
    title: props.title,
    description: props.description || null,
    fileUrl: props.fileUrl,
    fileLabel: props.fileLabel || null,
    fileType: props.fileType || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Marquee                                                                    */
/* -------------------------------------------------------------------------- */

type MarqueeProps = {
  items: string;
  speed: string;
  pauseOnHover: boolean;
};

function marqueeToBlock(props: MarqueeProps): MarqueeBlockType {
  return {
    __component: "shared.marquee",
    id: 0,
    items: props.items,
    speed: (props.speed as MarqueeBlockType["speed"]) || null,
    pauseOnHover: props.pauseOnHover ?? null,
  };
}

/* -------------------------------------------------------------------------- */
/* Rating                                                                     */
/* -------------------------------------------------------------------------- */

type RatingProps = {
  value: string;
  label: string;
  align: string;
};

function ratingToBlock(props: RatingProps): RatingBlockType {
  return {
    __component: "shared.rating",
    id: 0,
    value: (props.value as RatingBlockType["value"]) || "5",
    label: props.label || null,
    align: (props.align as RatingBlockType["align"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Chart                                                                      */
/* -------------------------------------------------------------------------- */

type ChartProps = {
  title: string;
  dataJson: string;
  variant: string;
};

function chartToBlock(props: ChartProps): ChartBlockType {
  return {
    __component: "shared.chart",
    id: 0,
    title: props.title || null,
    dataJson: props.dataJson,
    variant: (props.variant as ChartBlockType["variant"]) || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const layoutRegistry: RegistryEntry[] = [
  {
    puckType: "Section",
    strapiComponent: "shared.section",
    label: "Section",
    category: "Layout",
    fields: {
      content: { type: "slot" },
      background: selectField(["none", "pale", "sky", "ink", "image"]),
      backgroundImageUrl: { type: "text" },
      paddingY: selectField(["none", "small", "medium", "large"]),
      maxWidth: selectField(["sm", "md", "lg", "xl", "full"]),
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      content: [],
      background: "none",
      backgroundImageUrl: "",
      paddingY: "medium",
      maxWidth: "lg",
      align: "left",
    },
    fromBlock: (block: any) => ({
      content: jsonToSlot(block.contentJson),
      background: block.background ?? "none",
      backgroundImageUrl: stripMediaUrl(block.backgroundImage),
      paddingY: block.paddingY ?? "medium",
      maxWidth: block.maxWidth ?? "lg",
      align: block.align ?? "left",
    }),
    toBlock: sectionToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(SectionBlock, {
        block: {
          __component: "shared.section",
          id: 0,
          content: props.content,
          background: props.background,
          backgroundImage: stubMedia(props.backgroundImageUrl),
          paddingY: props.paddingY,
          maxWidth: props.maxWidth,
          align: props.align,
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "Columns",
    strapiComponent: "shared.columns",
    label: "Columns",
    category: "Layout",
    fields: {
      columnCount: selectField(["2", "3", "4"]),
      gap: selectField(["small", "medium", "large"]),
      stackOnMobile: boolField(),
      column1: { type: "slot" },
      column2: { type: "slot" },
      column3: { type: "slot" },
      column4: { type: "slot" },
    },
    defaultProps: {
      columnCount: "2",
      gap: "medium",
      stackOnMobile: true,
      column1: [],
      column2: [],
      column3: [],
      column4: [],
    },
    fromBlock: (block: any) => ({
      columnCount: block.columnCount ?? "2",
      gap: block.gap ?? "medium",
      stackOnMobile: block.stackOnMobile ?? true,
      column1: jsonToSlot(block.column1Json),
      column2: jsonToSlot(block.column2Json),
      column3: jsonToSlot(block.column3Json),
      column4: jsonToSlot(block.column4Json),
    }),
    toBlock: columnsToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ColumnsBlock, {
        block: {
          __component: "shared.columns",
          id: 0,
          columnCount: props.columnCount,
          gap: props.gap,
          stackOnMobile: props.stackOnMobile,
          column1: props.column1,
          column2: props.column2,
          column3: props.column3,
          column4: props.column4,
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "Header",
    strapiComponent: "shared.header",
    label: "Header",
    category: "Layout",
    fields: {
      left: { type: "slot" },
      center: { type: "slot" },
      right: { type: "slot" },
      sticky: boolField(),
      transparent: boolField(),
      showBorder: boolField(),
      showLanguageSwitcher: boolField(),
      background: selectField(["white", "pale", "sky", "ink", "transparent"]),
      maxWidth: selectField(["md", "lg", "xl", "full"]),
      height: selectField(["compact", "default", "tall"]),
    },
    defaultProps: {
      left: HEADER_DEFAULT_LEFT,
      center: HEADER_DEFAULT_CENTER,
      right: HEADER_DEFAULT_RIGHT,
      sticky: true,
      transparent: false,
      showBorder: true,
      showLanguageSwitcher: true,
      background: "white",
      maxWidth: "xl",
      height: "default",
    },
    fromBlock: (block: any) => ({
      left: jsonToSlot(block.leftJson),
      center: jsonToSlot(block.centerJson),
      right: jsonToSlot(block.rightJson),
      sticky: block.sticky ?? true,
      transparent: block.transparent ?? false,
      showBorder: block.showBorder ?? true,
      showLanguageSwitcher: block.showLanguageSwitcher ?? true,
      background: block.background ?? "white",
      maxWidth: block.maxWidth ?? "xl",
      height: block.height ?? "default",
    }),
    toBlock: ((props: any): HeaderBlockType => ({
      __component: "shared.header",
      id: 0,
      left: props.left,
      center: props.center,
      right: props.right,
      leftJson: slotToJson(props.left),
      centerJson: slotToJson(props.center),
      rightJson: slotToJson(props.right),
      sticky: props.sticky ?? true,
      transparent: props.transparent ?? false,
      showBorder: props.showBorder ?? true,
      showLanguageSwitcher: props.showLanguageSwitcher ?? true,
      background: props.background || "white",
      maxWidth: props.maxWidth || "xl",
      height: props.height || "default",
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(HeaderBlock, {
        block: {
          __component: "shared.header",
          id: 0,
          sticky: props.sticky,
          transparent: props.transparent,
          showBorder: props.showBorder,
          showLanguageSwitcher: props.showLanguageSwitcher,
          background: props.background,
          maxWidth: props.maxWidth,
          height: props.height,
        },
        left: props.left,
        center: props.center,
        right: props.right,
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "Footer",
    strapiComponent: "shared.footer",
    label: "Footer",
    category: "Layout",
    fields: {
      columnCount: {
        type: "select",
        label: "Columns",
        options: selectOptions(["1", "2", "3", "4", "5", "6"]),
      },
      background: selectField(["ink", "trunk", "pale", "white"]),
      maxWidth: selectField(["md", "lg", "xl", "full"]),
      showTopBorder: boolField(),
      top: { type: "slot" },
      column1: { type: "slot" },
      column2: { type: "slot" },
      column3: { type: "slot" },
      column4: { type: "slot" },
      column5: { type: "slot" },
      column6: { type: "slot" },
      bottom: { type: "slot" },
    },
    defaultProps: {
      top: FOOTER_DEFAULT_TOP,
      column1: FOOTER_DEFAULT_COLUMN1,
      column2: FOOTER_DEFAULT_COLUMN2,
      column3: FOOTER_DEFAULT_COLUMN3,
      column4: FOOTER_DEFAULT_COLUMN4,
      column5: [],
      column6: [],
      bottom: FOOTER_DEFAULT_BOTTOM,
      columnCount: "4",
      background: "pale",
      maxWidth: "xl",
      showTopBorder: true,
    },
    fromBlock: (block: any) => ({
      top: jsonToSlot(block.topJson),
      column1: jsonToSlot(block.column1Json),
      column2: jsonToSlot(block.column2Json),
      column3: jsonToSlot(block.column3Json),
      column4: jsonToSlot(block.column4Json),
      column5: jsonToSlot(block.column5Json),
      column6: jsonToSlot(block.column6Json),
      bottom: jsonToSlot(block.bottomJson),
      columnCount: block.columnCount ?? "4",
      background: block.background ?? "pale",
      maxWidth: block.maxWidth ?? "xl",
      showTopBorder: block.showTopBorder ?? true,
    }),
    toBlock: ((props: any): FooterBlockType => ({
      __component: "shared.footer",
      id: 0,
      top: props.top,
      column1: props.column1,
      column2: props.column2,
      column3: props.column3,
      column4: props.column4,
      column5: props.column5,
      column6: props.column6,
      bottom: props.bottom,
      topJson: slotToJson(props.top),
      column1Json: slotToJson(props.column1),
      column2Json: slotToJson(props.column2),
      column3Json: slotToJson(props.column3),
      column4Json: slotToJson(props.column4),
      column5Json: slotToJson(props.column5),
      column6Json: slotToJson(props.column6),
      bottomJson: slotToJson(props.bottom),
      columnCount: props.columnCount || "4",
      background: props.background || "pale",
      maxWidth: props.maxWidth || "xl",
      showTopBorder: props.showTopBorder ?? true,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(FooterBlock, {
        block: {
          __component: "shared.footer",
          id: 0,
          columnCount: props.columnCount,
          background: props.background,
          maxWidth: props.maxWidth,
          showTopBorder: props.showTopBorder,
        },
        top: props.top,
        column1: props.column1,
        column2: props.column2,
        column3: props.column3,
        column4: props.column4,
        column5: props.column5,
        column6: props.column6,
        bottom: props.bottom,
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "Button",
    strapiComponent: "shared.button",
    label: "Button",
    category: "Layout",
    fields: {
      label: { type: "text" },
      url: { type: "text" },
      variant: selectField(["primary", "secondary", "outline", "ghost"]),
      size: selectField(["small", "medium", "large"]),
      align: selectField(["left", "center", "right"]),
      openInNewTab: boolField(),
    },
    defaultProps: {
      label: "Manage users",
      url: "/",
      variant: "primary",
      size: "medium",
      align: "left",
      openInNewTab: false,
    },
    fromBlock: (block: any) => ({
      label: block.label ?? "",
      url: block.url ?? "",
      variant: block.variant ?? "primary",
      size: block.size ?? "medium",
      align: block.align ?? "left",
      openInNewTab: block.openInNewTab ?? false,
    }),
    toBlock: buttonToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ButtonBlock, { block: buttonToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "ButtonGroup",
    strapiComponent: "shared.button-group",
    label: "Button Group",
    category: "Layout",
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
      secondaryLabel: "View pricing",
      secondaryUrl: "/",
      align: "left",
      stackOnMobile: true,
    },
    fromBlock: (block: any) => ({
      primaryLabel: block.primaryLabel ?? "",
      primaryUrl: block.primaryUrl ?? "",
      secondaryLabel: block.secondaryLabel ?? "",
      secondaryUrl: block.secondaryUrl ?? "",
      align: block.align ?? "left",
      stackOnMobile: block.stackOnMobile ?? true,
    }),
    toBlock: buttonGroupToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ButtonGroupBlock, { block: buttonGroupToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Divider",
    strapiComponent: "shared.divider",
    label: "Divider",
    category: "Layout",
    fields: {
      style: selectField(["solid", "dashed", "dotted"]),
      width: selectField(["small", "medium", "large", "full"]),
      spacing: selectField(["small", "medium", "large"]),
    },
    defaultProps: {
      style: "solid",
      width: "full",
      spacing: "medium",
    },
    fromBlock: (block: any) => ({
      style: block.style ?? "solid",
      width: block.width ?? "full",
      spacing: block.spacing ?? "medium",
    }),
    toBlock: dividerToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(DividerBlock, { block: dividerToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "IconList",
    strapiComponent: "shared.icon-list",
    label: "Icon List",
    category: "Content",
    fields: {
      title: { type: "text" },
      columns: selectField(["1", "2"]),
      items: {
        type: "array",
        arrayFields: {
          iconUrl: { type: "text" },
          title: { type: "text" },
          description: { type: "textarea" },
        },
      },
    },
    defaultProps: {
      title: "Why teams switch",
      columns: "1",
      items: [
        {
          iconUrl: "",
          title: "Collaboration",
          description:
            "Editors and designers work in one place with shared drafts and clear ownership.",
        },
        {
          iconUrl: "",
          title: "Permissions",
          description:
            "Control who can edit, review, and publish so releases stay intentional.",
        },
        {
          iconUrl: "",
          title: "Audit trail",
          description:
            "See who changed what and when—helpful for compliance and handoffs.",
        },
      ],
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      columns: block.columns ?? "1",
      items: (block.items ?? []).map((item: any) => ({
        iconUrl: item.iconUrl ?? "",
        title: item.title ?? "",
        description: item.description ?? "",
      })),
    }),
    toBlock: iconListToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(IconListBlock, { block: iconListToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "HtmlEmbed",
    strapiComponent: "shared.html-embed",
    label: "HTML Embed",
    category: "Content",
    fields: {
      html: { type: "textarea" },
      maxWidth: selectField(["sm", "md", "lg", "xl", "full"]),
    },
    defaultProps: {
      html: "",
      maxWidth: "lg",
    },
    fromBlock: (block: any) => ({
      html: block.html ?? "",
      maxWidth: block.maxWidth ?? "lg",
    }),
    toBlock: htmlEmbedToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(HtmlEmbedBlock, { block: htmlEmbedToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Timeline",
    strapiComponent: "shared.timeline",
    label: "Timeline",
    category: "Content",
    fields: {
      title: { type: "text" },
      items: {
        type: "array",
        arrayFields: {
          date: { type: "text" },
          title: { type: "text" },
          description: { type: "textarea" },
        },
      },
    },
    defaultProps: {
      title: "Our journey",
      items: [
        {
          date: "2023",
          title: "Founded",
          description:
            "Started with a simple idea: page builders should drop in looking finished, not empty.",
        },
        {
          date: "2024",
          title: "First 1,000 teams",
          description:
            "Product and marketing teams adopted the platform to ship polished pages faster.",
        },
        {
          date: "2025",
          title: "Global launch",
          description:
            "Expanded integrations, enterprise controls, and multi-region publishing support.",
        },
      ],
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      items: (block.items ?? []).map((item: any) => ({
        date: item.date ?? "",
        title: item.title ?? "",
        description: item.description ?? "",
      })),
    }),
    toBlock: timelineToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(TimelineBlock, { block: timelineToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Steps",
    strapiComponent: "shared.steps",
    label: "Steps",
    category: "Content",
    fields: {
      title: { type: "text" },
      layout: selectField(["horizontal", "vertical"]),
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          description: { type: "textarea" },
        },
      },
    },
    defaultProps: {
      title: "Get started in minutes",
      layout: "horizontal",
      items: [
        {
          title: "Create account",
          description:
            "Sign up and create a workspace tailored to your brand and content needs.",
        },
        {
          title: "Invite your team",
          description:
            "Add editors and reviewers with the right roles so collaboration stays smooth.",
        },
        {
          title: "Publish your page",
          description:
            "Compose with polished blocks, preview, and go live when you're ready.",
        },
      ],
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      layout: block.layout ?? "horizontal",
      items: (block.items ?? []).map((item: any) => ({
        title: item.title ?? "",
        description: item.description ?? "",
      })),
    }),
    toBlock: stepsToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(StepsBlock, { block: stepsToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "FileDownload",
    strapiComponent: "shared.file-download",
    label: "File Download",
    category: "Content",
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
      fileUrl: { type: "text" },
      fileLabel: { type: "text" },
      fileType: { type: "text" },
    },
    defaultProps: {
      title: "Download guide",
      description: "Get the latest PDF guide.",
      fileUrl: "",
      fileLabel: "Download",
      fileType: "PDF",
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      description: block.description ?? "",
      fileUrl: block.fileUrl ?? "",
      fileLabel: block.fileLabel ?? "",
      fileType: block.fileType ?? "",
    }),
    toBlock: fileDownloadToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(FileDownloadBlock, { block: fileDownloadToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "IframeEmbed",
    strapiComponent: "shared.iframe-embed",
    label: "Iframe Embed",
    category: "Media",
    fields: {
      url: { type: "text" },
      title: { type: "text" },
      height: selectField(["small", "medium", "large"]),
      aspectRatio: selectField(["auto", "16:9", "4:3", "1:1", "21:9"]),
    },
    defaultProps: {
      url: "",
      title: "Embedded content",
      height: "medium",
      aspectRatio: "16:9",
    },
    fromBlock: (block: any) => ({
      url: block.url ?? "",
      title: block.title ?? "",
      height: block.height ?? "medium",
      aspectRatio: block.aspectRatio ?? "16:9",
    }),
    toBlock: iframeEmbedToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(IframeEmbedBlock, { block: iframeEmbedToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "BeforeAfter",
    strapiComponent: "shared.before-after",
    label: "Before / After",
    category: "Media",
    fields: {
      beforeImageUrl: { type: "text" },
      afterImageUrl: { type: "text" },
      beforeLabel: { type: "text" },
      afterLabel: { type: "text" },
    },
    defaultProps: {
      beforeImageUrl: "",
      afterImageUrl: "",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    fromBlock: (block: any) => ({
      beforeImageUrl: stripMediaUrl(block.beforeImage),
      afterImageUrl: stripMediaUrl(block.afterImage),
      beforeLabel: block.beforeLabel ?? "",
      afterLabel: block.afterLabel ?? "",
    }),
    toBlock: beforeAfterToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(BeforeAfterBlock, { block: beforeAfterToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "AudioPlayer",
    strapiComponent: "shared.audio-player",
    label: "Audio Player",
    category: "Media",
    fields: {
      title: { type: "text" },
      src: { type: "text" },
      caption: { type: "text" },
    },
    defaultProps: {
      title: "Audio",
      src: "",
      caption: "",
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      src: block.src ?? "",
      caption: block.caption ?? "",
    }),
    toBlock: audioPlayerToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(AudioPlayerBlock, { block: audioPlayerToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Chart",
    strapiComponent: "shared.chart",
    label: "Chart",
    category: "Media",
    fields: {
      title: { type: "text" },
      dataJson: { type: "textarea" },
      variant: selectField(["bar", "horizontal"]),
    },
    defaultProps: {
      title: "Case mix",
      dataJson:
        '[{"label":"Civil","value":40},{"label":"Criminal","value":34},{"label":"Family","value":17}]',
      variant: "bar",
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      dataJson: block.dataJson ?? "[]",
      variant: block.variant ?? "bar",
    }),
    toBlock: chartToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ChartBlock, { block: chartToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Banner",
    strapiComponent: "shared.banner",
    label: "Banner",
    category: "Marketing",
    fields: {
      message: { type: "text" },
      linkLabel: { type: "text" },
      linkUrl: { type: "text" },
      variant: selectField(["info", "success", "warning", "danger"]),
      dismissible: boolField(),
    },
    defaultProps: {
      message: "New: Theme Builder is now available in Studio.",
      linkLabel: "Explore templates",
      linkUrl: "/",
      variant: "info",
      dismissible: true,
    },
    fromBlock: (block: any) => ({
      message: block.message ?? "",
      linkLabel: block.linkLabel ?? "",
      linkUrl: block.linkUrl ?? "",
      variant: block.variant ?? "info",
      dismissible: block.dismissible ?? false,
    }),
    toBlock: bannerToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(BannerBlock, { block: bannerToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Marquee",
    strapiComponent: "shared.marquee",
    label: "Marquee",
    category: "Marketing",
    fields: {
      items: { type: "textarea" },
      speed: selectField(["slow", "normal", "fast"]),
      pauseOnHover: boolField(),
    },
    defaultProps: {
      items: "Case filing open\nTraining registration\nSystem maintenance Saturday",
      speed: "normal",
      pauseOnHover: true,
    },
    fromBlock: (block: any) => ({
      items: block.items ?? "",
      speed: block.speed ?? "normal",
      pauseOnHover: block.pauseOnHover ?? true,
    }),
    toBlock: marqueeToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(MarqueeBlock, { block: marqueeToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Rating",
    strapiComponent: "shared.rating",
    label: "Rating",
    category: "Marketing",
    fields: {
      value: selectField(["1", "2", "3", "4", "5"]),
      label: { type: "text" },
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      value: "5",
      label: "Average rating",
      align: "left",
    },
    fromBlock: (block: any) => ({
      value: block.value ?? "5",
      label: block.label ?? "",
      align: block.align ?? "left",
    }),
    toBlock: ratingToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(RatingBlock, { block: ratingToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Modal",
    strapiComponent: "shared.modal",
    label: "Modal",
    category: "Marketing",
    fields: {
      triggerLabel: { type: "text" },
      title: { type: "text" },
      content: { type: "textarea" },
      size: selectField(["small", "medium", "large"]),
    },
    defaultProps: {
      triggerLabel: "Schedule a walkthrough",
      title: "Book a product demo",
      content:
        "Join a 30-minute walkthrough with our team. We'll cover the editor, publishing flow, and how to tailor blocks to your brand—then answer any questions live.",
      size: "medium",
    },
    fromBlock: (block: any) => ({
      triggerLabel: block.triggerLabel ?? "",
      title: block.title ?? "",
      content: block.content ?? "",
      size: block.size ?? "medium",
    }),
    toBlock: modalToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ModalBlock, { block: modalToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "ReadingProgress",
    strapiComponent: "shared.reading-progress",
    label: "Reading Progress",
    category: "Layout",
    fields: {
      position: selectField(["top", "bottom"]),
      heightPx: { type: "number" },
      color: { type: "text" },
    },
    defaultProps: {
      position: "top",
      heightPx: 4,
      color: "#7BB8E3",
    },
    fromBlock: (block: any) => {
      const b = block as ReadingProgressBlockType;
      return {
        position: b.position ?? "top",
        heightPx: b.heightPx ?? 4,
        color: b.color ?? "#7BB8E3",
      };
    },
    toBlock: ((props: any): ReadingProgressBlockType => ({
      __component: "shared.reading-progress",
      id: 0,
      position: props.position || null,
      heightPx:
        props.heightPx === "" || props.heightPx == null
          ? null
          : Number(props.heightPx),
      color: props.color || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ReadingProgressBlock, {
        block: {
          __component: "shared.reading-progress",
          id: 0,
          position: props.position || null,
          heightPx:
            props.heightPx === "" || props.heightPx == null
              ? null
              : Number(props.heightPx),
          color: props.color || null,
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "BackToTop",
    strapiComponent: "shared.back-to-top",
    label: "Back to Top",
    category: "Layout",
    fields: {
      label: { type: "text" },
      showAfterPx: { type: "number" },
      position: selectField(["bottom-right", "bottom-left"]),
    },
    defaultProps: {
      label: "Top",
      showAfterPx: 400,
      position: "bottom-right",
    },
    fromBlock: (block: any) => {
      const b = block as BackToTopBlockType;
      return {
        label: b.label ?? "Top",
        showAfterPx: b.showAfterPx ?? 400,
        position: b.position ?? "bottom-right",
      };
    },
    toBlock: ((props: any): BackToTopBlockType => ({
      __component: "shared.back-to-top",
      id: 0,
      label: props.label || null,
      showAfterPx:
        props.showAfterPx === "" || props.showAfterPx == null
          ? null
          : Number(props.showAfterPx),
      position: props.position || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(BackToTopBlock, {
        block: {
          __component: "shared.back-to-top",
          id: 0,
          label: props.label || null,
          showAfterPx:
            props.showAfterPx === "" || props.showAfterPx == null
              ? null
              : Number(props.showAfterPx),
          position: props.position || null,
        },
      }),
  } as unknown as RegistryEntry,

  {
    puckType: "BusinessHours",
    strapiComponent: "shared.business-hours",
    label: "Business Hours",
    category: "Layout",
    fields: {
      heading: { type: "text" },
      timezoneNote: { type: "text" },
      showOpenBadge: boolField(),
      days: {
        type: "array",
        arrayFields: {
          day: selectField([
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ]),
          openTime: { type: "text" },
          closeTime: { type: "text" },
          closed: boolField(),
        },
      },
    },
    defaultProps: {
      heading: "Business hours",
      timezoneNote: "",
      showOpenBadge: true,
      days: [
        { day: "monday", openTime: "09:00", closeTime: "17:00", closed: false },
        { day: "tuesday", openTime: "09:00", closeTime: "17:00", closed: false },
        {
          day: "wednesday",
          openTime: "09:00",
          closeTime: "17:00",
          closed: false,
        },
        {
          day: "thursday",
          openTime: "09:00",
          closeTime: "17:00",
          closed: false,
        },
        { day: "friday", openTime: "09:00", closeTime: "17:00", closed: false },
        { day: "saturday", openTime: "", closeTime: "", closed: true },
        { day: "sunday", openTime: "", closeTime: "", closed: true },
      ],
    },
    fromBlock: (block: any) => {
      const b = block as BusinessHoursBlockType;
      return {
        heading: b.heading ?? "Business hours",
        timezoneNote: b.timezoneNote ?? "",
        showOpenBadge: b.showOpenBadge ?? true,
        days: (b.days ?? []).map((day) => ({
          day: day.day,
          openTime: day.openTime ?? "",
          closeTime: day.closeTime ?? "",
          closed: day.closed ?? false,
        })),
      };
    },
    toBlock: ((props: any): BusinessHoursBlockType => ({
      __component: "shared.business-hours",
      id: 0,
      heading: props.heading || null,
      timezoneNote: props.timezoneNote || null,
      showOpenBadge: props.showOpenBadge ?? null,
      days: (props.days ?? []).map((day: any) => ({
        day: day.day,
        openTime: day.openTime || null,
        closeTime: day.closeTime || null,
        closed: day.closed ?? null,
      })),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(BusinessHoursBlock, {
        block: {
          __component: "shared.business-hours",
          id: 0,
          heading: props.heading || null,
          timezoneNote: props.timezoneNote || null,
          showOpenBadge: props.showOpenBadge ?? null,
          days: (props.days ?? []).map((day: any) => ({
            day: day.day,
            openTime: day.openTime || null,
            closeTime: day.closeTime || null,
            closed: day.closed ?? null,
          })),
        },
      }),
  } as unknown as RegistryEntry,
];
