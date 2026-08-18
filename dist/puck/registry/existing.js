import HeroBlock from "../../components/blocks/hero-block.js";
import RichTextBlock from "../../components/blocks/rich-text-block.js";
import LexicalRichTextBlock from "../../components/blocks/lexical-rich-text-block.js";
import MediaBlock from "../../components/blocks/media-block.js";
import QuoteBlock from "../../components/blocks/quote-block.js";
import SliderBlock from "../../components/blocks/slider-block.js";
import CtaBlock from "../../components/blocks/cta-block.js";
import { LexicalBodyField } from "../../components/puck/lexical-body-field.js";
import LexicalRichTextInlineEditor from "../../components/puck/lexical-rich-text-inline.js";
import { stubMedia, stubMediaList, stripMediaUrl } from "../../puck/media.js";
import { selectField } from "../../puck/registry/helpers.js";
import { createElement } from "react";
function heroToBlock(props) {
    return {
        __component: "shared.hero",
        id: 0,
        title: props.title,
        subtitle: props.subtitle || null,
        align: props.align || null,
        image: stubMedia(props.imageUrl),
    };
}
function richTextToBlock(props) {
    return {
        __component: "shared.rich-text",
        id: 0,
        body: props.body,
    };
}
function lexicalRichTextToBlock(props) {
    return {
        __component: "shared.lexical-rich-text",
        id: 0,
        body: props.body,
    };
}
function mediaToBlock(props) {
    return {
        __component: "shared.media",
        id: 0,
        file: stubMedia(props.imageUrl, props.altText),
    };
}
function quoteToBlock(props) {
    return {
        __component: "shared.quote",
        id: 0,
        title: props.title || null,
        body: props.body || null,
    };
}
function sliderToBlock(props) {
    return {
        __component: "shared.slider",
        id: 0,
        files: stubMediaList(props.imageUrls),
    };
}
function ctaToBlock(props) {
    return {
        __component: "shared.cta",
        id: 0,
        title: props.title,
        body: props.body || null,
        buttonLabel: props.buttonLabel,
        buttonUrl: props.buttonUrl,
    };
}
export const existingRegistry = [
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
            subtitle: "Compose layouts with polished blocks—publish with confidence.",
            align: "center",
            imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                subtitle: (_b = block.subtitle) !== null && _b !== void 0 ? _b : "",
                align: (_c = block.align) !== null && _c !== void 0 ? _c : "center",
                imageUrl: stripMediaUrl(block.image),
            });
        },
        toBlock: heroToBlock,
        render: (props) => createElement(HeroBlock, { block: heroToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a;
            return ({
                body: (_a = block.body) !== null && _a !== void 0 ? _a : "",
            });
        },
        toBlock: richTextToBlock,
        render: (props) => createElement(RichTextBlock, { block: richTextToBlock(props) }),
    },
    {
        puckType: "LexicalRichText",
        strapiComponent: "shared.lexical-rich-text",
        label: "Lexical Rich Text",
        category: "Content",
        fields: {
            body: {
                type: "custom",
                render: ({ value, onChange, }) => createElement(LexicalBodyField, {
                    value: value !== null && value !== void 0 ? value : "",
                    onChange,
                }),
            },
        },
        defaultProps: {
            body: "",
        },
        fromBlock: (block) => {
            var _a;
            return ({
                body: (_a = block.body) !== null && _a !== void 0 ? _a : "",
            });
        },
        toBlock: lexicalRichTextToBlock,
        render: (props) => {
            var _a, _b;
            return ((_a = props.puck) === null || _a === void 0 ? void 0 : _a.isEditing)
                ? createElement(LexicalRichTextInlineEditor, {
                    id: props.id,
                    body: (_b = props.body) !== null && _b !== void 0 ? _b : "",
                })
                : createElement(LexicalRichTextBlock, {
                    block: lexicalRichTextToBlock(props),
                });
        },
    },
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
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            altText: "Product workspace overview",
        },
        fromBlock: (block) => {
            var _a, _b;
            return ({
                imageUrl: stripMediaUrl(block.file),
                altText: (_b = (_a = block.file) === null || _a === void 0 ? void 0 : _a.alternativeText) !== null && _b !== void 0 ? _b : "",
            });
        },
        toBlock: mediaToBlock,
        render: (props) => createElement(MediaBlock, { block: mediaToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                body: (_b = block.body) !== null && _b !== void 0 ? _b : "",
            });
        },
        toBlock: quoteToBlock,
        render: (props) => createElement(QuoteBlock, { block: quoteToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a;
            return ({
                imageUrls: ((_a = block.files) !== null && _a !== void 0 ? _a : []).map((f) => ({
                    url: stripMediaUrl(f),
                })),
            });
        },
        toBlock: sliderToBlock,
        render: (props) => createElement(SliderBlock, { block: sliderToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                body: (_b = block.body) !== null && _b !== void 0 ? _b : "",
                buttonLabel: (_c = block.buttonLabel) !== null && _c !== void 0 ? _c : "",
                buttonUrl: (_d = block.buttonUrl) !== null && _d !== void 0 ? _d : "",
            });
        },
        toBlock: ctaToBlock,
        render: (props) => createElement(CtaBlock, { block: ctaToBlock(props) }),
    },
];
