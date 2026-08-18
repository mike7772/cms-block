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
import { jsonToSlot, slotToJson, } from "@/components/blocks/slot-json";
import { FOOTER_DEFAULT_BOTTOM, FOOTER_DEFAULT_COLUMN1, FOOTER_DEFAULT_COLUMN2, FOOTER_DEFAULT_COLUMN3, FOOTER_DEFAULT_COLUMN4, FOOTER_DEFAULT_TOP, HEADER_DEFAULT_CENTER, HEADER_DEFAULT_LEFT, HEADER_DEFAULT_RIGHT, } from "@/puck/chrome-defaults";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import { boolField, selectField, selectOptions } from "./helpers";
import { createElement } from "react";
function sectionToBlock(props) {
    return {
        __component: "shared.section",
        id: 0,
        contentJson: slotToJson(props.content),
        background: props.background || null,
        backgroundImage: stubMedia(props.backgroundImageUrl),
        paddingY: props.paddingY || null,
        maxWidth: props.maxWidth || null,
        align: props.align || null,
    };
}
function columnsToBlock(props) {
    var _a;
    return {
        __component: "shared.columns",
        id: 0,
        columnCount: props.columnCount || null,
        gap: props.gap || null,
        stackOnMobile: (_a = props.stackOnMobile) !== null && _a !== void 0 ? _a : null,
        column1Json: slotToJson(props.column1),
        column2Json: slotToJson(props.column2),
        column3Json: slotToJson(props.column3),
        column4Json: slotToJson(props.column4),
    };
}
function buttonToBlock(props) {
    var _a;
    return {
        __component: "shared.button",
        id: 0,
        label: props.label,
        url: props.url,
        variant: props.variant || null,
        size: props.size || null,
        align: props.align || null,
        openInNewTab: (_a = props.openInNewTab) !== null && _a !== void 0 ? _a : null,
    };
}
function buttonGroupToBlock(props) {
    var _a;
    return {
        __component: "shared.button-group",
        id: 0,
        primaryLabel: props.primaryLabel,
        primaryUrl: props.primaryUrl,
        secondaryLabel: props.secondaryLabel || null,
        secondaryUrl: props.secondaryUrl || null,
        align: props.align || null,
        stackOnMobile: (_a = props.stackOnMobile) !== null && _a !== void 0 ? _a : null,
    };
}
function dividerToBlock(props) {
    return {
        __component: "shared.divider",
        id: 0,
        style: props.style || null,
        width: props.width || null,
        spacing: props.spacing || null,
    };
}
function iconListToBlock(props) {
    var _a;
    return {
        __component: "shared.icon-list",
        id: 0,
        title: props.title || null,
        columns: props.columns || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item, i) => ({
            id: i,
            iconUrl: item.iconUrl || null,
            title: item.title,
            description: item.description || null,
        })),
    };
}
function htmlEmbedToBlock(props) {
    return {
        __component: "shared.html-embed",
        id: 0,
        html: props.html,
        maxWidth: props.maxWidth || null,
    };
}
function iframeEmbedToBlock(props) {
    return {
        __component: "shared.iframe-embed",
        id: 0,
        url: props.url,
        title: props.title || null,
        height: props.height || null,
        aspectRatio: props.aspectRatio || null,
    };
}
function bannerToBlock(props) {
    var _a;
    return {
        __component: "shared.banner",
        id: 0,
        message: props.message,
        linkLabel: props.linkLabel || null,
        linkUrl: props.linkUrl || null,
        variant: props.variant || null,
        dismissible: (_a = props.dismissible) !== null && _a !== void 0 ? _a : null,
    };
}
function timelineToBlock(props) {
    var _a;
    return {
        __component: "shared.timeline",
        id: 0,
        title: props.title || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item, i) => ({
            id: i,
            date: item.date || null,
            title: item.title,
            description: item.description || null,
        })),
    };
}
function stepsToBlock(props) {
    var _a;
    return {
        __component: "shared.steps",
        id: 0,
        title: props.title || null,
        layout: props.layout || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item, i) => ({
            id: i,
            title: item.title,
            description: item.description || null,
        })),
    };
}
function beforeAfterToBlock(props) {
    return {
        __component: "shared.before-after",
        id: 0,
        beforeImage: stubMedia(props.beforeImageUrl),
        afterImage: stubMedia(props.afterImageUrl),
        beforeLabel: props.beforeLabel || null,
        afterLabel: props.afterLabel || null,
    };
}
function modalToBlock(props) {
    return {
        __component: "shared.modal",
        id: 0,
        triggerLabel: props.triggerLabel,
        title: props.title || null,
        content: props.content || null,
        size: props.size || null,
    };
}
function audioPlayerToBlock(props) {
    return {
        __component: "shared.audio-player",
        id: 0,
        title: props.title || null,
        src: props.src,
        caption: props.caption || null,
    };
}
function fileDownloadToBlock(props) {
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
function marqueeToBlock(props) {
    var _a;
    return {
        __component: "shared.marquee",
        id: 0,
        items: props.items,
        speed: props.speed || null,
        pauseOnHover: (_a = props.pauseOnHover) !== null && _a !== void 0 ? _a : null,
    };
}
function ratingToBlock(props) {
    return {
        __component: "shared.rating",
        id: 0,
        value: props.value || "5",
        label: props.label || null,
        align: props.align || null,
    };
}
function chartToBlock(props) {
    return {
        __component: "shared.chart",
        id: 0,
        title: props.title || null,
        dataJson: props.dataJson,
        variant: props.variant || null,
    };
}
/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */
export const layoutRegistry = [
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                content: jsonToSlot(block.contentJson),
                background: (_a = block.background) !== null && _a !== void 0 ? _a : "none",
                backgroundImageUrl: stripMediaUrl(block.backgroundImage),
                paddingY: (_b = block.paddingY) !== null && _b !== void 0 ? _b : "medium",
                maxWidth: (_c = block.maxWidth) !== null && _c !== void 0 ? _c : "lg",
                align: (_d = block.align) !== null && _d !== void 0 ? _d : "left",
            });
        },
        toBlock: sectionToBlock,
        render: (props) => createElement(SectionBlock, {
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
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                columnCount: (_a = block.columnCount) !== null && _a !== void 0 ? _a : "2",
                gap: (_b = block.gap) !== null && _b !== void 0 ? _b : "medium",
                stackOnMobile: (_c = block.stackOnMobile) !== null && _c !== void 0 ? _c : true,
                column1: jsonToSlot(block.column1Json),
                column2: jsonToSlot(block.column2Json),
                column3: jsonToSlot(block.column3Json),
                column4: jsonToSlot(block.column4Json),
            });
        },
        toBlock: columnsToBlock,
        render: (props) => createElement(ColumnsBlock, {
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
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return ({
                left: jsonToSlot(block.leftJson),
                center: jsonToSlot(block.centerJson),
                right: jsonToSlot(block.rightJson),
                sticky: (_a = block.sticky) !== null && _a !== void 0 ? _a : true,
                transparent: (_b = block.transparent) !== null && _b !== void 0 ? _b : false,
                showBorder: (_c = block.showBorder) !== null && _c !== void 0 ? _c : true,
                showLanguageSwitcher: (_d = block.showLanguageSwitcher) !== null && _d !== void 0 ? _d : true,
                background: (_e = block.background) !== null && _e !== void 0 ? _e : "white",
                maxWidth: (_f = block.maxWidth) !== null && _f !== void 0 ? _f : "xl",
                height: (_g = block.height) !== null && _g !== void 0 ? _g : "default",
            });
        },
        toBlock: ((props) => {
            var _a, _b, _c, _d;
            return ({
                __component: "shared.header",
                id: 0,
                left: props.left,
                center: props.center,
                right: props.right,
                leftJson: slotToJson(props.left),
                centerJson: slotToJson(props.center),
                rightJson: slotToJson(props.right),
                sticky: (_a = props.sticky) !== null && _a !== void 0 ? _a : true,
                transparent: (_b = props.transparent) !== null && _b !== void 0 ? _b : false,
                showBorder: (_c = props.showBorder) !== null && _c !== void 0 ? _c : true,
                showLanguageSwitcher: (_d = props.showLanguageSwitcher) !== null && _d !== void 0 ? _d : true,
                background: props.background || "white",
                maxWidth: props.maxWidth || "xl",
                height: props.height || "default",
            });
        }),
        render: (props) => createElement(HeaderBlock, {
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
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                top: jsonToSlot(block.topJson),
                column1: jsonToSlot(block.column1Json),
                column2: jsonToSlot(block.column2Json),
                column3: jsonToSlot(block.column3Json),
                column4: jsonToSlot(block.column4Json),
                column5: jsonToSlot(block.column5Json),
                column6: jsonToSlot(block.column6Json),
                bottom: jsonToSlot(block.bottomJson),
                columnCount: (_a = block.columnCount) !== null && _a !== void 0 ? _a : "4",
                background: (_b = block.background) !== null && _b !== void 0 ? _b : "pale",
                maxWidth: (_c = block.maxWidth) !== null && _c !== void 0 ? _c : "xl",
                showTopBorder: (_d = block.showTopBorder) !== null && _d !== void 0 ? _d : true,
            });
        },
        toBlock: ((props) => {
            var _a;
            return ({
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
                showTopBorder: (_a = props.showTopBorder) !== null && _a !== void 0 ? _a : true,
            });
        }),
        render: (props) => createElement(FooterBlock, {
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
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                label: (_a = block.label) !== null && _a !== void 0 ? _a : "",
                url: (_b = block.url) !== null && _b !== void 0 ? _b : "",
                variant: (_c = block.variant) !== null && _c !== void 0 ? _c : "primary",
                size: (_d = block.size) !== null && _d !== void 0 ? _d : "medium",
                align: (_e = block.align) !== null && _e !== void 0 ? _e : "left",
                openInNewTab: (_f = block.openInNewTab) !== null && _f !== void 0 ? _f : false,
            });
        },
        toBlock: buttonToBlock,
        render: (props) => createElement(ButtonBlock, { block: buttonToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                primaryLabel: (_a = block.primaryLabel) !== null && _a !== void 0 ? _a : "",
                primaryUrl: (_b = block.primaryUrl) !== null && _b !== void 0 ? _b : "",
                secondaryLabel: (_c = block.secondaryLabel) !== null && _c !== void 0 ? _c : "",
                secondaryUrl: (_d = block.secondaryUrl) !== null && _d !== void 0 ? _d : "",
                align: (_e = block.align) !== null && _e !== void 0 ? _e : "left",
                stackOnMobile: (_f = block.stackOnMobile) !== null && _f !== void 0 ? _f : true,
            });
        },
        toBlock: buttonGroupToBlock,
        render: (props) => createElement(ButtonGroupBlock, { block: buttonGroupToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                style: (_a = block.style) !== null && _a !== void 0 ? _a : "solid",
                width: (_b = block.width) !== null && _b !== void 0 ? _b : "full",
                spacing: (_c = block.spacing) !== null && _c !== void 0 ? _c : "medium",
            });
        },
        toBlock: dividerToBlock,
        render: (props) => createElement(DividerBlock, { block: dividerToBlock(props) }),
    },
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
                    description: "Editors and designers work in one place with shared drafts and clear ownership.",
                },
                {
                    iconUrl: "",
                    title: "Permissions",
                    description: "Control who can edit, review, and publish so releases stay intentional.",
                },
                {
                    iconUrl: "",
                    title: "Audit trail",
                    description: "See who changed what and when—helpful for compliance and handoffs.",
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                columns: (_b = block.columns) !== null && _b !== void 0 ? _b : "1",
                items: ((_c = block.items) !== null && _c !== void 0 ? _c : []).map((item) => {
                    var _a, _b, _c;
                    return ({
                        iconUrl: (_a = item.iconUrl) !== null && _a !== void 0 ? _a : "",
                        title: (_b = item.title) !== null && _b !== void 0 ? _b : "",
                        description: (_c = item.description) !== null && _c !== void 0 ? _c : "",
                    });
                }),
            });
        },
        toBlock: iconListToBlock,
        render: (props) => createElement(IconListBlock, { block: iconListToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b;
            return ({
                html: (_a = block.html) !== null && _a !== void 0 ? _a : "",
                maxWidth: (_b = block.maxWidth) !== null && _b !== void 0 ? _b : "lg",
            });
        },
        toBlock: htmlEmbedToBlock,
        render: (props) => createElement(HtmlEmbedBlock, { block: htmlEmbedToBlock(props) }),
    },
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
                    description: "Started with a simple idea: page builders should drop in looking finished, not empty.",
                },
                {
                    date: "2024",
                    title: "First 1,000 teams",
                    description: "Product and marketing teams adopted the platform to ship polished pages faster.",
                },
                {
                    date: "2025",
                    title: "Global launch",
                    description: "Expanded integrations, enterprise controls, and multi-region publishing support.",
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                items: ((_b = block.items) !== null && _b !== void 0 ? _b : []).map((item) => {
                    var _a, _b, _c;
                    return ({
                        date: (_a = item.date) !== null && _a !== void 0 ? _a : "",
                        title: (_b = item.title) !== null && _b !== void 0 ? _b : "",
                        description: (_c = item.description) !== null && _c !== void 0 ? _c : "",
                    });
                }),
            });
        },
        toBlock: timelineToBlock,
        render: (props) => createElement(TimelineBlock, { block: timelineToBlock(props) }),
    },
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
                    description: "Sign up and create a workspace tailored to your brand and content needs.",
                },
                {
                    title: "Invite your team",
                    description: "Add editors and reviewers with the right roles so collaboration stays smooth.",
                },
                {
                    title: "Publish your page",
                    description: "Compose with polished blocks, preview, and go live when you're ready.",
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                layout: (_b = block.layout) !== null && _b !== void 0 ? _b : "horizontal",
                items: ((_c = block.items) !== null && _c !== void 0 ? _c : []).map((item) => {
                    var _a, _b;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        description: (_b = item.description) !== null && _b !== void 0 ? _b : "",
                    });
                }),
            });
        },
        toBlock: stepsToBlock,
        render: (props) => createElement(StepsBlock, { block: stepsToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                description: (_b = block.description) !== null && _b !== void 0 ? _b : "",
                fileUrl: (_c = block.fileUrl) !== null && _c !== void 0 ? _c : "",
                fileLabel: (_d = block.fileLabel) !== null && _d !== void 0 ? _d : "",
                fileType: (_e = block.fileType) !== null && _e !== void 0 ? _e : "",
            });
        },
        toBlock: fileDownloadToBlock,
        render: (props) => createElement(FileDownloadBlock, { block: fileDownloadToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                url: (_a = block.url) !== null && _a !== void 0 ? _a : "",
                title: (_b = block.title) !== null && _b !== void 0 ? _b : "",
                height: (_c = block.height) !== null && _c !== void 0 ? _c : "medium",
                aspectRatio: (_d = block.aspectRatio) !== null && _d !== void 0 ? _d : "16:9",
            });
        },
        toBlock: iframeEmbedToBlock,
        render: (props) => createElement(IframeEmbedBlock, { block: iframeEmbedToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b;
            return ({
                beforeImageUrl: stripMediaUrl(block.beforeImage),
                afterImageUrl: stripMediaUrl(block.afterImage),
                beforeLabel: (_a = block.beforeLabel) !== null && _a !== void 0 ? _a : "",
                afterLabel: (_b = block.afterLabel) !== null && _b !== void 0 ? _b : "",
            });
        },
        toBlock: beforeAfterToBlock,
        render: (props) => createElement(BeforeAfterBlock, { block: beforeAfterToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                src: (_b = block.src) !== null && _b !== void 0 ? _b : "",
                caption: (_c = block.caption) !== null && _c !== void 0 ? _c : "",
            });
        },
        toBlock: audioPlayerToBlock,
        render: (props) => createElement(AudioPlayerBlock, { block: audioPlayerToBlock(props) }),
    },
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
            dataJson: '[{"label":"Civil","value":40},{"label":"Criminal","value":34},{"label":"Family","value":17}]',
            variant: "bar",
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                dataJson: (_b = block.dataJson) !== null && _b !== void 0 ? _b : "[]",
                variant: (_c = block.variant) !== null && _c !== void 0 ? _c : "bar",
            });
        },
        toBlock: chartToBlock,
        render: (props) => createElement(ChartBlock, { block: chartToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            return ({
                message: (_a = block.message) !== null && _a !== void 0 ? _a : "",
                linkLabel: (_b = block.linkLabel) !== null && _b !== void 0 ? _b : "",
                linkUrl: (_c = block.linkUrl) !== null && _c !== void 0 ? _c : "",
                variant: (_d = block.variant) !== null && _d !== void 0 ? _d : "info",
                dismissible: (_e = block.dismissible) !== null && _e !== void 0 ? _e : false,
            });
        },
        toBlock: bannerToBlock,
        render: (props) => createElement(BannerBlock, { block: bannerToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                items: (_a = block.items) !== null && _a !== void 0 ? _a : "",
                speed: (_b = block.speed) !== null && _b !== void 0 ? _b : "normal",
                pauseOnHover: (_c = block.pauseOnHover) !== null && _c !== void 0 ? _c : true,
            });
        },
        toBlock: marqueeToBlock,
        render: (props) => createElement(MarqueeBlock, { block: marqueeToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                value: (_a = block.value) !== null && _a !== void 0 ? _a : "5",
                label: (_b = block.label) !== null && _b !== void 0 ? _b : "",
                align: (_c = block.align) !== null && _c !== void 0 ? _c : "left",
            });
        },
        toBlock: ratingToBlock,
        render: (props) => createElement(RatingBlock, { block: ratingToBlock(props) }),
    },
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
            content: "Join a 30-minute walkthrough with our team. We'll cover the editor, publishing flow, and how to tailor blocks to your brand—then answer any questions live.",
            size: "medium",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                triggerLabel: (_a = block.triggerLabel) !== null && _a !== void 0 ? _a : "",
                title: (_b = block.title) !== null && _b !== void 0 ? _b : "",
                content: (_c = block.content) !== null && _c !== void 0 ? _c : "",
                size: (_d = block.size) !== null && _d !== void 0 ? _d : "medium",
            });
        },
        toBlock: modalToBlock,
        render: (props) => createElement(ModalBlock, { block: modalToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            const b = block;
            return {
                position: (_a = b.position) !== null && _a !== void 0 ? _a : "top",
                heightPx: (_b = b.heightPx) !== null && _b !== void 0 ? _b : 4,
                color: (_c = b.color) !== null && _c !== void 0 ? _c : "#7BB8E3",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.reading-progress",
            id: 0,
            position: props.position || null,
            heightPx: props.heightPx === "" || props.heightPx == null
                ? null
                : Number(props.heightPx),
            color: props.color || null,
        })),
        render: (props) => createElement(ReadingProgressBlock, {
            block: {
                __component: "shared.reading-progress",
                id: 0,
                position: props.position || null,
                heightPx: props.heightPx === "" || props.heightPx == null
                    ? null
                    : Number(props.heightPx),
                color: props.color || null,
            },
        }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            const b = block;
            return {
                label: (_a = b.label) !== null && _a !== void 0 ? _a : "Top",
                showAfterPx: (_b = b.showAfterPx) !== null && _b !== void 0 ? _b : 400,
                position: (_c = b.position) !== null && _c !== void 0 ? _c : "bottom-right",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.back-to-top",
            id: 0,
            label: props.label || null,
            showAfterPx: props.showAfterPx === "" || props.showAfterPx == null
                ? null
                : Number(props.showAfterPx),
            position: props.position || null,
        })),
        render: (props) => createElement(BackToTopBlock, {
            block: {
                __component: "shared.back-to-top",
                id: 0,
                label: props.label || null,
                showAfterPx: props.showAfterPx === "" || props.showAfterPx == null
                    ? null
                    : Number(props.showAfterPx),
                position: props.position || null,
            },
        }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "Business hours",
                timezoneNote: (_b = b.timezoneNote) !== null && _b !== void 0 ? _b : "",
                showOpenBadge: (_c = b.showOpenBadge) !== null && _c !== void 0 ? _c : true,
                days: ((_d = b.days) !== null && _d !== void 0 ? _d : []).map((day) => {
                    var _a, _b, _c;
                    return ({
                        day: day.day,
                        openTime: (_a = day.openTime) !== null && _a !== void 0 ? _a : "",
                        closeTime: (_b = day.closeTime) !== null && _b !== void 0 ? _b : "",
                        closed: (_c = day.closed) !== null && _c !== void 0 ? _c : false,
                    });
                }),
            };
        },
        toBlock: ((props) => {
            var _a, _b;
            return ({
                __component: "shared.business-hours",
                id: 0,
                heading: props.heading || null,
                timezoneNote: props.timezoneNote || null,
                showOpenBadge: (_a = props.showOpenBadge) !== null && _a !== void 0 ? _a : null,
                days: ((_b = props.days) !== null && _b !== void 0 ? _b : []).map((day) => {
                    var _a;
                    return ({
                        day: day.day,
                        openTime: day.openTime || null,
                        closeTime: day.closeTime || null,
                        closed: (_a = day.closed) !== null && _a !== void 0 ? _a : null,
                    });
                }),
            });
        }),
        render: (props) => {
            var _a, _b;
            return createElement(BusinessHoursBlock, {
                block: {
                    __component: "shared.business-hours",
                    id: 0,
                    heading: props.heading || null,
                    timezoneNote: props.timezoneNote || null,
                    showOpenBadge: (_a = props.showOpenBadge) !== null && _a !== void 0 ? _a : null,
                    days: ((_b = props.days) !== null && _b !== void 0 ? _b : []).map((day) => {
                        var _a;
                        return ({
                            day: day.day,
                            openTime: day.openTime || null,
                            closeTime: day.closeTime || null,
                            closed: (_a = day.closed) !== null && _a !== void 0 ? _a : null,
                        });
                    }),
                },
            });
        },
    },
];
