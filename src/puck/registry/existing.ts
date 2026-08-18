import HeroBlock from "@/components/blocks/hero-block";
import RichTextBlock from "@/components/blocks/rich-text-block";
import LexicalRichTextBlock from "@/components/blocks/lexical-rich-text-block";
import MediaBlock from "@/components/blocks/media-block";
import QuoteBlock from "@/components/blocks/quote-block";
import SliderBlock from "@/components/blocks/slider-block";
import CtaBlock from "@/components/blocks/cta-block";
import { LexicalBodyField } from "@/components/puck/lexical-body-field";
import LexicalRichTextInlineEditor from "@/components/puck/lexical-rich-text-inline";
import { stubMedia, stubMediaList, stripMediaUrl } from "@/puck/media";
import { selectField } from "@/puck/registry/helpers";
import { createElement } from "react";
import type { RegistryEntry } from "@/puck/registry/types";
import type {
  HeroBlock as HeroBlockType,
  RichTextBlock as RichTextBlockType,
  LexicalRichTextBlock as LexicalRichTextBlockType,
  MediaBlock as MediaBlockType,
  QuoteBlock as QuoteBlockType,
  SliderBlock as SliderBlockType,
  CtaBlock as CtaBlockType,
} from "@/lib/types";

type HeroProps = {
  title: string;
  subtitle: string;
  align: string;
  imageUrl: string;
};

function heroToBlock(props: HeroProps): HeroBlockType {
  return {
    __component: "shared.hero",
    id: 0,
    title: props.title,
    subtitle: props.subtitle || null,
    align: (props.align as "left" | "center") || null,
    image: stubMedia(props.imageUrl),
  };
}

type RichTextProps = {
  body: string;
};

function richTextToBlock(props: RichTextProps): RichTextBlockType {
  return {
    __component: "shared.rich-text",
    id: 0,
    body: props.body,
  };
}

type LexicalRichTextProps = {
  body: string;
};

function lexicalRichTextToBlock(
  props: LexicalRichTextProps,
): LexicalRichTextBlockType {
  return {
    __component: "shared.lexical-rich-text",
    id: 0,
    body: props.body,
  };
}

type MediaProps = {
  imageUrl: string;
  altText: string;
};

function mediaToBlock(props: MediaProps): MediaBlockType {
  return {
    __component: "shared.media",
    id: 0,
    file: stubMedia(props.imageUrl, props.altText),
  };
}

type QuoteProps = {
  title: string;
  body: string;
};

function quoteToBlock(props: QuoteProps): QuoteBlockType {
  return {
    __component: "shared.quote",
    id: 0,
    title: props.title || null,
    body: props.body || null,
  };
}

type SliderProps = {
  imageUrls: Array<{ url: string }>;
};

function sliderToBlock(props: SliderProps): SliderBlockType {
  return {
    __component: "shared.slider",
    id: 0,
    files: stubMediaList(props.imageUrls),
  };
}

type CtaProps = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonUrl: string;
};

function ctaToBlock(props: CtaProps): CtaBlockType {
  return {
    __component: "shared.cta",
    id: 0,
    title: props.title,
    body: props.body || null,
    buttonLabel: props.buttonLabel,
    buttonUrl: props.buttonUrl,
  };
}

export const existingRegistry: RegistryEntry[] = [
  {
    puckType: "Hero",
    strapiComponent: "shared.hero",
    label: "Hero",
    category: "Content",
    fields: {
      title: { type: "text" },
      subtitle: { type: "textarea" },
      align: selectField(["left", "center"]),
      imageUrl: { type: "text" },
    },
    defaultProps: {
      title: "Build pages that feel finished",
      subtitle:
        "Compose layouts with polished blocks—publish with confidence.",
      align: "center",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      subtitle: block.subtitle ?? "",
      align: block.align ?? "center",
      imageUrl: stripMediaUrl(block.image),
    }),
    toBlock: heroToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(HeroBlock, { block: heroToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "RichText",
    strapiComponent: "shared.rich-text",
    label: "Rich Text",
    category: "Content",
    fields: {
      body: { type: "textarea" },
    },
    defaultProps: {
      body: "Our platform helps teams compose polished pages from reusable blocks—so you can ship updates faster without sacrificing design quality.",
    },
    fromBlock: (block: any) => ({
      body: block.body ?? "",
    }),
    toBlock: richTextToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(RichTextBlock, { block: richTextToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "LexicalRichText",
    strapiComponent: "shared.lexical-rich-text",
    label: "Lexical Rich Text",
    category: "Content",
    fields: {
      body: {
        type: "custom",
        render: ({
          value,
          onChange,
        }: {
          value: string;
          onChange: (value: string) => void;
        }) =>
          createElement(LexicalBodyField, {
            value: value ?? "",
            onChange,
          }),
      },
    },
    defaultProps: {
      body: "",
    },
    fromBlock: (block: any) => ({
      body: block.body ?? "",
    }),
    toBlock: lexicalRichTextToBlock as RegistryEntry["toBlock"],
    render: (props: any) =>
      props.puck?.isEditing
        ? createElement(LexicalRichTextInlineEditor, {
            id: props.id as string,
            body: (props.body as string) ?? "",
          })
        : createElement(LexicalRichTextBlock, {
            block: lexicalRichTextToBlock(props),
          }),
  } as unknown as RegistryEntry,

  {
    puckType: "Media",
    strapiComponent: "shared.media",
    label: "Media",
    category: "Content",
    fields: {
      imageUrl: { type: "text" },
      altText: { type: "text" },
    },
    defaultProps: {
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      altText: "Product workspace overview",
    },
    fromBlock: (block: any) => ({
      imageUrl: stripMediaUrl(block.file),
      altText: block.file?.alternativeText ?? "",
    }),
    toBlock: mediaToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(MediaBlock, { block: mediaToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Quote",
    strapiComponent: "shared.quote",
    label: "Quote",
    category: "Content",
    fields: {
      title: { type: "text" },
      body: { type: "textarea" },
    },
    defaultProps: {
      title: "What our customers say",
      body: '"This platform cut our page launch time in half—our team finally ships polished sites without waiting on engineering." — Maya Chen, Head of Product',
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      body: block.body ?? "",
    }),
    toBlock: quoteToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(QuoteBlock, { block: quoteToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "Slider",
    strapiComponent: "shared.slider",
    label: "Slider",
    category: "Content",
    fields: {
      imageUrls: {
        type: "array",
        arrayFields: {
          url: { type: "text" },
        },
      },
    },
    defaultProps: {
      imageUrls: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        },
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        },
      ],
    },
    fromBlock: (block: any) => ({
      imageUrls: (block.files ?? []).map((f: any) => ({
        url: stripMediaUrl(f),
      })),
    }),
    toBlock: sliderToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(SliderBlock, { block: sliderToBlock(props) }),
  } as unknown as RegistryEntry,

  {
    puckType: "CTA",
    strapiComponent: "shared.cta",
    label: "CTA",
    category: "Content",
    fields: {
      title: { type: "text" },
      body: { type: "textarea" },
      buttonLabel: { type: "text" },
      buttonUrl: { type: "text" },
    },
    defaultProps: {
      title: "Ready to get started?",
      body: "Invite your team and publish your first page in minutes.",
      buttonLabel: "Start free trial",
      buttonUrl: "/",
    },
    fromBlock: (block: any) => ({
      title: block.title ?? "",
      body: block.body ?? "",
      buttonLabel: block.buttonLabel ?? "",
      buttonUrl: block.buttonUrl ?? "",
    }),
    toBlock: ctaToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(CtaBlock, { block: ctaToBlock(props) }),
  } as unknown as RegistryEntry,
];
