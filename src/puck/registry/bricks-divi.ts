import ToggleBlock from "@/components/blocks/toggle-block";
import ContentToggleBlock from "@/components/blocks/content-toggle-block";
import NumberCounterBlock from "@/components/blocks/number-counter-block";
import CircleCounterBlock from "@/components/blocks/circle-counter-block";
import PostSliderBlock from "@/components/blocks/post-slider-block";
import VideoSliderBlock from "@/components/blocks/video-slider-block";
import FilterablePortfolioBlock from "@/components/blocks/filterable-portfolio-block";
import PostNavigationBlock from "@/components/blocks/post-navigation-block";
import ReadingTimeBlock from "@/components/blocks/reading-time-block";
import LogoBlock from "@/components/blocks/logo-block";
import IconBlock from "@/components/blocks/icon-block";
import BlurbBlock from "@/components/blocks/blurb-block";
import DropdownBlock from "@/components/blocks/dropdown-block";
import PromoBoxBlock from "@/components/blocks/promo-box-block";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";
import type {
  ToggleBlock as ToggleBlockType,
  ContentToggleBlock as ContentToggleBlockType,
  NumberCounterBlock as NumberCounterBlockType,
  CircleCounterBlock as CircleCounterBlockType,
  PostSliderBlock as PostSliderBlockType,
  VideoSliderBlock as VideoSliderBlockType,
  FilterablePortfolioBlock as FilterablePortfolioBlockType,
  PostNavigationBlock as PostNavigationBlockType,
  ReadingTimeBlock as ReadingTimeBlockType,
  LogoBlock as LogoBlockType,
  IconBlock as IconBlockType,
  BlurbBlock as BlurbBlockType,
  DropdownBlock as DropdownBlockType,
  PromoBoxBlock as PromoBoxBlockType,
} from "@/lib/types";

function num(value: unknown, fallback: number | null = null) {
  if (value === "" || value == null) return fallback;
  return Number(value);
}

export const bricksDiviRegistry: RegistryEntry[] = [
  {
    puckType: "Toggle",
    strapiComponent: "shared.toggle",
    label: "Toggle",
    category: "Content",
    fields: {
      title: { type: "text" },
      content: { type: "textarea" },
      openByDefault: boolField(),
      iconStyle: selectField(["plus", "chevron", "caret"]),
    },
    defaultProps: {
      title: "Is there a free plan?",
      content:
        "Yes. Starter includes core blocks for personal projects so you can compose and publish polished pages without paying upfront. Upgrade anytime when your team needs more seats or advanced controls.",
      openByDefault: false,
      iconStyle: "plus",
    },
    fromBlock: (block) => {
      const b = block as ToggleBlockType;
      return {
        title: b.title ?? "",
        content: b.content ?? "",
        openByDefault: b.openByDefault ?? false,
        iconStyle: b.iconStyle ?? "plus",
      };
    },
    toBlock: ((props: any): ToggleBlockType => ({
      __component: "shared.toggle",
      id: 0,
      title: props.title || "Toggle",
      content: props.content || "",
      openByDefault: props.openByDefault ?? null,
      iconStyle: props.iconStyle || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ToggleBlock, {
        block: {
          __component: "shared.toggle",
          id: 0,
          title: props.title || "Toggle",
          content: props.content || "",
          openByDefault: props.openByDefault ?? null,
          iconStyle: props.iconStyle || null,
        },
      }),
  },
  {
    puckType: "ContentToggle",
    strapiComponent: "shared.content-toggle",
    label: "Content Toggle",
    category: "Content",
    fields: {
      heading: { type: "text" },
      labelA: { type: "text" },
      labelB: { type: "text" },
      contentA: { type: "textarea" },
      contentB: { type: "textarea" },
      defaultPane: selectField(["a", "b"]),
    },
    defaultProps: {
      heading: "Compare billing",
      labelA: "Monthly",
      labelB: "Yearly",
      contentA:
        "Pay month to month with full flexibility. Change plans anytime and keep access to every feature included in your tier.",
      contentB:
        "Choose yearly billing and save 20%. Lock in your rate for twelve months while your team ships without interruption.",
      defaultPane: "a",
    },
    fromBlock: (block) => {
      const b = block as ContentToggleBlockType;
      return {
        heading: b.heading ?? "",
        labelA: b.labelA ?? "Option A",
        labelB: b.labelB ?? "Option B",
        contentA: b.contentA ?? "",
        contentB: b.contentB ?? "",
        defaultPane: b.defaultPane ?? "a",
      };
    },
    toBlock: ((props: any): ContentToggleBlockType => ({
      __component: "shared.content-toggle",
      id: 0,
      heading: props.heading || null,
      labelA: props.labelA || "Option A",
      labelB: props.labelB || "Option B",
      contentA: props.contentA || "",
      contentB: props.contentB || "",
      defaultPane: props.defaultPane || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ContentToggleBlock, {
        block: {
          __component: "shared.content-toggle",
          id: 0,
          heading: props.heading || null,
          labelA: props.labelA || "Option A",
          labelB: props.labelB || "Option B",
          contentA: props.contentA || "",
          contentB: props.contentB || "",
          defaultPane: props.defaultPane || null,
        },
      }),
  },
  {
    puckType: "Blurb",
    strapiComponent: "shared.blurb",
    label: "Blurb",
    category: "Content",
    fields: {
      iconUrl: { type: "text" },
      title: { type: "text" },
      description: { type: "textarea" },
      buttonLabel: { type: "text" },
      buttonUrl: { type: "text" },
      align: selectField(["left", "center", "right"]),
      layout: selectField(["stacked", "horizontal"]),
    },
    defaultProps: {
      iconUrl: "",
      title: "User Management",
      description: "Add and control users efficiently.",
      buttonLabel: "Manage users",
      buttonUrl: "/",
      align: "center",
      layout: "stacked",
    },
    fromBlock: (block) => {
      const b = block as BlurbBlockType;
      return {
        iconUrl: b.iconUrl ?? "",
        title: b.title ?? "",
        description: b.description ?? "",
        buttonLabel: b.buttonLabel ?? "",
        buttonUrl: b.buttonUrl ?? "",
        align: b.align ?? "center",
        layout: b.layout ?? "stacked",
      };
    },
    toBlock: ((props: any): BlurbBlockType => ({
      __component: "shared.blurb",
      id: 0,
      iconUrl: props.iconUrl || null,
      title: props.title || "Blurb",
      description: props.description || null,
      buttonLabel: props.buttonLabel || null,
      buttonUrl: props.buttonUrl || null,
      align: props.align || null,
      layout: props.layout || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(BlurbBlock, {
        block: {
          __component: "shared.blurb",
          id: 0,
          iconUrl: props.iconUrl || null,
          title: props.title || "Blurb",
          description: props.description || null,
          buttonLabel: props.buttonLabel || null,
          buttonUrl: props.buttonUrl || null,
          align: props.align || null,
          layout: props.layout || null,
        },
      }),
  },
  {
    puckType: "Icon",
    strapiComponent: "shared.icon",
    label: "Icon",
    category: "Content",
    fields: {
      iconName: selectField([
        "star",
        "heart",
        "check",
        "arrow",
        "mail",
        "phone",
        "map",
        "user",
        "globe",
        "spark",
      ]),
      imageUrl: { type: "text" },
      size: selectField(["small", "medium", "large"]),
      color: { type: "text" },
      linkUrl: { type: "text" },
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      iconName: "star",
      imageUrl: "",
      size: "medium",
      color: "#1B4332",
      linkUrl: "",
      align: "center",
    },
    fromBlock: (block) => {
      const b = block as IconBlockType;
      return {
        iconName: b.iconName ?? "star",
        imageUrl: b.imageUrl ?? "",
        size: b.size ?? "medium",
        color: b.color ?? "#1B4332",
        linkUrl: b.linkUrl ?? "",
        align: b.align ?? "center",
      };
    },
    toBlock: ((props: any): IconBlockType => ({
      __component: "shared.icon",
      id: 0,
      iconName: props.iconName || null,
      imageUrl: props.imageUrl || null,
      size: props.size || null,
      color: props.color || null,
      linkUrl: props.linkUrl || null,
      align: props.align || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(IconBlock, {
        block: {
          __component: "shared.icon",
          id: 0,
          iconName: props.iconName || null,
          imageUrl: props.imageUrl || null,
          size: props.size || null,
          color: props.color || null,
          linkUrl: props.linkUrl || null,
          align: props.align || null,
        },
      }),
  },
  {
    puckType: "PromoBox",
    strapiComponent: "shared.promo-box",
    label: "Promo Box",
    category: "Marketing",
    fields: {
      eyebrow: { type: "text" },
      heading: { type: "text" },
      text: { type: "textarea" },
      imageUrl: { type: "text" },
      buttonLabel: { type: "text" },
      buttonUrl: { type: "text" },
      layout: selectField(["image-left", "image-right", "overlay"]),
    },
    defaultProps: {
      eyebrow: "New",
      heading: "Ship your next page faster",
      text: "Start from polished templates and publish with confidence.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      buttonLabel: "Explore templates",
      buttonUrl: "/",
      layout: "image-left",
    },
    fromBlock: (block) => {
      const b = block as PromoBoxBlockType;
      return {
        eyebrow: b.eyebrow ?? "",
        heading: b.heading ?? "",
        text: b.text ?? "",
        imageUrl: b.imageUrl ?? "",
        buttonLabel: b.buttonLabel ?? "",
        buttonUrl: b.buttonUrl ?? "",
        layout: b.layout ?? "image-left",
      };
    },
    toBlock: ((props: any): PromoBoxBlockType => ({
      __component: "shared.promo-box",
      id: 0,
      eyebrow: props.eyebrow || null,
      heading: props.heading || "Promo",
      text: props.text || null,
      imageUrl: props.imageUrl || null,
      buttonLabel: props.buttonLabel || null,
      buttonUrl: props.buttonUrl || null,
      layout: props.layout || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(PromoBoxBlock, {
        block: {
          __component: "shared.promo-box",
          id: 0,
          eyebrow: props.eyebrow || null,
          heading: props.heading || "Promo",
          text: props.text || null,
          imageUrl: props.imageUrl || null,
          buttonLabel: props.buttonLabel || null,
          buttonUrl: props.buttonUrl || null,
          layout: props.layout || null,
        },
      }),
  },
  {
    puckType: "NumberCounter",
    strapiComponent: "shared.number-counter",
    label: "Number Counter",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      prefix: { type: "text" },
      value: { type: "number" },
      suffix: { type: "text" },
      label: { type: "text" },
      durationMs: { type: "number" },
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      heading: "",
      prefix: "",
      value: 100,
      suffix: "+",
      label: "Happy clients",
      durationMs: 2000,
      align: "center",
    },
    fromBlock: (block) => {
      const b = block as NumberCounterBlockType;
      return {
        heading: b.heading ?? "",
        prefix: b.prefix ?? "",
        value: b.value ?? 0,
        suffix: b.suffix ?? "",
        label: b.label ?? "",
        durationMs: b.durationMs ?? 2000,
        align: b.align ?? "center",
      };
    },
    toBlock: ((props: any): NumberCounterBlockType => ({
      __component: "shared.number-counter",
      id: 0,
      heading: props.heading || null,
      prefix: props.prefix || null,
      value: num(props.value, 0) ?? 0,
      suffix: props.suffix || null,
      label: props.label || null,
      durationMs: num(props.durationMs),
      align: props.align || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(NumberCounterBlock, {
        block: {
          __component: "shared.number-counter",
          id: 0,
          heading: props.heading || null,
          prefix: props.prefix || null,
          value: num(props.value, 0) ?? 0,
          suffix: props.suffix || null,
          label: props.label || null,
          durationMs: num(props.durationMs),
          align: props.align || null,
        },
      }),
  },
  {
    puckType: "CircleCounter",
    strapiComponent: "shared.circle-counter",
    label: "Circle Counter",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      value: { type: "number" },
      label: { type: "text" },
      suffix: { type: "text" },
      size: selectField(["small", "medium", "large"]),
      color: { type: "text" },
      durationMs: { type: "number" },
    },
    defaultProps: {
      heading: "",
      value: 75,
      label: "Completion",
      suffix: "%",
      size: "medium",
      color: "#7BB8E3",
      durationMs: 1500,
    },
    fromBlock: (block) => {
      const b = block as CircleCounterBlockType;
      return {
        heading: b.heading ?? "",
        value: b.value ?? 0,
        label: b.label ?? "",
        suffix: b.suffix ?? "%",
        size: b.size ?? "medium",
        color: b.color ?? "#7BB8E3",
        durationMs: b.durationMs ?? 1500,
      };
    },
    toBlock: ((props: any): CircleCounterBlockType => ({
      __component: "shared.circle-counter",
      id: 0,
      heading: props.heading || null,
      value: num(props.value, 0) ?? 0,
      label: props.label || null,
      suffix: props.suffix || null,
      size: props.size || null,
      color: props.color || null,
      durationMs: num(props.durationMs),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(CircleCounterBlock, {
        block: {
          __component: "shared.circle-counter",
          id: 0,
          heading: props.heading || null,
          value: num(props.value, 0) ?? 0,
          label: props.label || null,
          suffix: props.suffix || null,
          size: props.size || null,
          color: props.color || null,
          durationMs: num(props.durationMs),
        },
      }),
  },
  {
    puckType: "Logo",
    strapiComponent: "shared.logo",
    label: "Logo",
    category: "Media",
    fields: {
      imageUrl: { type: "text" },
      alt: { type: "text" },
      url: { type: "text" },
      widthPx: { type: "number" },
      align: selectField(["left", "center", "right"]),
    },
    defaultProps: {
      imageUrl: "https://placehold.co/160x48/png?text=Logo",
      alt: "Logo",
      url: "/",
      widthPx: 160,
      align: "left",
    },
    fromBlock: (block) => {
      const b = block as LogoBlockType;
      return {
        imageUrl: b.imageUrl ?? "",
        alt: b.alt ?? "Logo",
        url: b.url ?? "/",
        widthPx: b.widthPx ?? 160,
        align: b.align ?? "left",
      };
    },
    toBlock: ((props: any): LogoBlockType => ({
      __component: "shared.logo",
      id: 0,
      imageUrl: props.imageUrl || "",
      alt: props.alt || null,
      url: props.url || null,
      widthPx: num(props.widthPx),
      align: props.align || null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(LogoBlock, {
        block: {
          __component: "shared.logo",
          id: 0,
          imageUrl: props.imageUrl || "",
          alt: props.alt || null,
          url: props.url || null,
          widthPx: num(props.widthPx),
          align: props.align || null,
        },
      }),
  },
  {
    puckType: "VideoSlider",
    strapiComponent: "shared.video-slider",
    label: "Video Slider",
    category: "Media",
    fields: {
      heading: { type: "text" },
      showArrows: boolField(),
      showDots: boolField(),
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          videoUrl: { type: "text" },
          posterUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Videos",
      showArrows: true,
      showDots: true,
      items: [
        {
          title: "Sample video",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          posterUrl: "",
        },
      ],
    },
    fromBlock: (block) => {
      const b = block as VideoSliderBlockType;
      return {
        heading: b.heading ?? "",
        showArrows: b.showArrows ?? true,
        showDots: b.showDots ?? true,
        items: (b.items ?? []).map((item) => ({
          title: item.title ?? "",
          videoUrl: item.videoUrl ?? "",
          posterUrl: item.posterUrl ?? "",
        })),
      };
    },
    toBlock: ((props: any): VideoSliderBlockType => ({
      __component: "shared.video-slider",
      id: 0,
      heading: props.heading || null,
      showArrows: props.showArrows ?? null,
      showDots: props.showDots ?? null,
      items: (props.items ?? []).map((item: any) => ({
        title: item.title || null,
        videoUrl: item.videoUrl || "",
        posterUrl: item.posterUrl || null,
      })),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(VideoSliderBlock, {
        block: {
          __component: "shared.video-slider",
          id: 0,
          heading: props.heading || null,
          showArrows: props.showArrows ?? null,
          showDots: props.showDots ?? null,
          items: (props.items ?? []).map((item: any) => ({
            title: item.title || null,
            videoUrl: item.videoUrl || "",
            posterUrl: item.posterUrl || null,
          })),
        },
      }),
  },
  {
    puckType: "FilterablePortfolio",
    strapiComponent: "shared.filterable-portfolio",
    label: "Filterable Portfolio",
    category: "Media",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      filterStyle: selectField(["pills", "dropdown", "tabs"]),
      allLabel: { type: "text" },
      showCounts: boolField(),
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          category: { type: "text" },
          imageUrl: { type: "text" },
          url: { type: "text" },
          description: { type: "textarea" },
        },
      },
    },
    defaultProps: {
      heading: "Our work",
      subheading: "",
      columns: "3",
      filterStyle: "pills",
      allLabel: "All",
      showCounts: false,
      items: [
        {
          title: "Project Alpha",
          category: "Branding",
          imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
          url: "/",
          description: "Brand identity system",
        },
        {
          title: "Project Beta",
          category: "Web",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
          url: "/",
          description: "Marketing site",
        },
      ],
    },
    fromBlock: (block) => {
      const b = block as FilterablePortfolioBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        columns: b.columns ?? "3",
        filterStyle: b.filterStyle ?? "pills",
        allLabel: b.allLabel ?? "All",
        showCounts: b.showCounts ?? false,
        items: (b.items ?? []).map((item) => ({
          title: item.title ?? "",
          category: item.category ?? "",
          imageUrl: item.imageUrl ?? "",
          url: item.url ?? "",
          description: item.description ?? "",
        })),
      };
    },
    toBlock: ((props: any): FilterablePortfolioBlockType => ({
      __component: "shared.filterable-portfolio",
      id: 0,
      heading: props.heading || null,
      subheading: props.subheading || null,
      columns: props.columns || null,
      filterStyle: props.filterStyle || null,
      allLabel: props.allLabel || null,
      showCounts: props.showCounts ?? null,
      items: (props.items ?? []).map((item: any) => ({
        title: item.title || "",
        category: item.category || "",
        imageUrl: item.imageUrl || "",
        url: item.url || null,
        description: item.description || null,
      })),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(FilterablePortfolioBlock, {
        block: {
          __component: "shared.filterable-portfolio",
          id: 0,
          heading: props.heading || null,
          subheading: props.subheading || null,
          columns: props.columns || null,
          filterStyle: props.filterStyle || null,
          allLabel: props.allLabel || null,
          showCounts: props.showCounts ?? null,
          items: (props.items ?? []).map((item: any) => ({
            title: item.title || "",
            category: item.category || "",
            imageUrl: item.imageUrl || "",
            url: item.url || null,
            description: item.description || null,
          })),
        },
      }),
  },
  {
    puckType: "PostSlider",
    strapiComponent: "shared.post-slider",
    label: "Post Slider",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      showExcerpt: boolField(),
      showDate: boolField(),
      autoplay: boolField(),
      autoplaySpeed: { type: "number" },
    },
    defaultProps: {
      heading: "Featured stories",
      subheading: "",
      categorySlug: "",
      postsLimit: 5,
      orderBy: "newest",
      showExcerpt: true,
      showDate: true,
      autoplay: true,
      autoplaySpeed: 5000,
    },
    fromBlock: (block) => {
      const b = block as PostSliderBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 5,
        orderBy: b.orderBy ?? "newest",
        showExcerpt: b.showExcerpt ?? true,
        showDate: b.showDate ?? true,
        autoplay: b.autoplay ?? true,
        autoplaySpeed: b.autoplaySpeed ?? 5000,
      };
    },
    toBlock: ((props: any): PostSliderBlockType => ({
      __component: "shared.post-slider",
      id: 0,
      heading: props.heading || null,
      subheading: props.subheading || null,
      categorySlug: props.categorySlug || null,
      postsLimit: num(props.postsLimit),
      orderBy: props.orderBy || null,
      showExcerpt: props.showExcerpt ?? null,
      showDate: props.showDate ?? null,
      autoplay: props.autoplay ?? null,
      autoplaySpeed: num(props.autoplaySpeed),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(PostSliderBlock, {
        block: {
          __component: "shared.post-slider",
          id: 0,
          heading: props.heading || null,
          subheading: props.subheading || null,
          categorySlug: props.categorySlug || null,
          postsLimit: num(props.postsLimit),
          orderBy: props.orderBy || null,
          showExcerpt: props.showExcerpt ?? null,
          showDate: props.showDate ?? null,
          autoplay: props.autoplay ?? null,
          autoplaySpeed: num(props.autoplaySpeed),
        },
      }),
  },
  {
    puckType: "PostNavigation",
    strapiComponent: "shared.post-navigation",
    label: "Post Navigation",
    category: "Dynamic",
    fields: {
      prevLabel: { type: "text" },
      nextLabel: { type: "text" },
      prevTitle: { type: "text" },
      prevUrl: { type: "text" },
      nextTitle: { type: "text" },
      nextUrl: { type: "text" },
      showLabels: boolField(),
    },
    defaultProps: {
      prevLabel: "Previous",
      nextLabel: "Next",
      prevTitle: "Earlier article",
      prevUrl: "/",
      nextTitle: "Next article",
      nextUrl: "/",
      showLabels: true,
    },
    fromBlock: (block) => {
      const b = block as PostNavigationBlockType;
      return {
        prevLabel: b.prevLabel ?? "Previous",
        nextLabel: b.nextLabel ?? "Next",
        prevTitle: b.prevTitle ?? "",
        prevUrl: b.prevUrl ?? "",
        nextTitle: b.nextTitle ?? "",
        nextUrl: b.nextUrl ?? "",
        showLabels: b.showLabels ?? true,
      };
    },
    toBlock: ((props: any): PostNavigationBlockType => ({
      __component: "shared.post-navigation",
      id: 0,
      prevLabel: props.prevLabel || null,
      nextLabel: props.nextLabel || null,
      prevTitle: props.prevTitle || null,
      prevUrl: props.prevUrl || null,
      nextTitle: props.nextTitle || null,
      nextUrl: props.nextUrl || null,
      showLabels: props.showLabels ?? null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(PostNavigationBlock, {
        block: {
          __component: "shared.post-navigation",
          id: 0,
          prevLabel: props.prevLabel || null,
          nextLabel: props.nextLabel || null,
          prevTitle: props.prevTitle || null,
          prevUrl: props.prevUrl || null,
          nextTitle: props.nextTitle || null,
          nextUrl: props.nextUrl || null,
          showLabels: props.showLabels ?? null,
        },
      }),
  },
  {
    puckType: "ReadingTime",
    strapiComponent: "shared.reading-time",
    label: "Reading Time",
    category: "Dynamic",
    fields: {
      label: { type: "text" },
      wordsPerMinute: { type: "number" },
      wordCount: { type: "number" },
      contentHtml: { type: "textarea" },
      align: selectField(["left", "center", "right"]),
      showIcon: boolField(),
    },
    defaultProps: {
      label: "min read",
      wordsPerMinute: 200,
      wordCount: 800,
      contentHtml: "",
      align: "left",
      showIcon: true,
    },
    fromBlock: (block) => {
      const b = block as ReadingTimeBlockType;
      return {
        label: b.label ?? "min read",
        wordsPerMinute: b.wordsPerMinute ?? 200,
        wordCount: b.wordCount ?? 0,
        contentHtml: b.contentHtml ?? "",
        align: b.align ?? "left",
        showIcon: b.showIcon ?? true,
      };
    },
    toBlock: ((props: any): ReadingTimeBlockType => ({
      __component: "shared.reading-time",
      id: 0,
      label: props.label || null,
      wordsPerMinute: num(props.wordsPerMinute),
      wordCount: num(props.wordCount),
      contentHtml: props.contentHtml || null,
      align: props.align || null,
      showIcon: props.showIcon ?? null,
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(ReadingTimeBlock, {
        block: {
          __component: "shared.reading-time",
          id: 0,
          label: props.label || null,
          wordsPerMinute: num(props.wordsPerMinute),
          wordCount: num(props.wordCount),
          contentHtml: props.contentHtml || null,
          align: props.align || null,
          showIcon: props.showIcon ?? null,
        },
      }),
  },
  {
    puckType: "Dropdown",
    strapiComponent: "shared.dropdown",
    label: "Dropdown",
    category: "Navigation",
    fields: {
      label: { type: "text" },
      align: selectField(["left", "center", "right"]),
      items: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          url: { type: "text" },
        },
      },
    },
    defaultProps: {
      label: "Explore",
      align: "left",
      items: [
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Contact", url: "/contact" },
      ],
    },
    fromBlock: (block) => {
      const b = block as DropdownBlockType;
      return {
        label: b.label ?? "Menu",
        align: b.align ?? "left",
        items: (b.items ?? []).map((item) => ({
          label: item.label ?? "",
          url: item.url ?? "",
        })),
      };
    },
    toBlock: ((props: any): DropdownBlockType => ({
      __component: "shared.dropdown",
      id: 0,
      label: props.label || "Menu",
      align: props.align || null,
      items: (props.items ?? []).map((item: any) => ({
        label: item.label || "",
        url: item.url || "/",
      })),
    })) as RegistryEntry["toBlock"],
    render: (props: any) =>
      createElement(DropdownBlock, {
        block: {
          __component: "shared.dropdown",
          id: 0,
          label: props.label || "Menu",
          align: props.align || null,
          items: (props.items ?? []).map((item: any) => ({
            label: item.label || "",
            url: item.url || "/",
          })),
        },
      }),
  },
];
