import AdvancedHeadingBlock from "../../components/blocks/advanced-heading-block.js";
import AnimatedHeadlineBlock from "../../components/blocks/animated-headline-block.js";
import AlertBlock from "../../components/blocks/alert-block.js";
import AccordionBlock from "../../components/blocks/accordion-block.js";
import TabsBlock from "../../components/blocks/tabs-block.js";
import IconBoxBlock from "../../components/blocks/icon-box-block.js";
import ImageBoxBlock from "../../components/blocks/image-box-block.js";
import ContentCardsBlock from "../../components/blocks/content-cards-block.js";
import CodeHighlightBlock from "../../components/blocks/code-highlight-block.js";
import DataTableBlock from "../../components/blocks/data-table-block.js";
import SpacerBlock from "../../components/blocks/spacer-block.js";
import ImageAccordionBlock from "../../components/blocks/image-accordion-block.js";
import DualButtonBlock from "../../components/blocks/dual-button-block.js";
import ProtectedContentBlock from "../../components/blocks/protected-content-block.js";
import { stubMedia, stripMediaUrl } from "../../puck/media.js";
import { boolField, selectField } from "../../puck/registry/helpers.js";
import { createElement } from "react";
function parseJsonArray(value) {
    try {
        const parsed = JSON.parse(value || "[]");
        return Array.isArray(parsed) ? parsed : [];
    }
    catch (_a) {
        return [];
    }
}
function advancedHeadingToBlock(props) {
    return {
        __component: "shared.advanced-heading",
        id: 0,
        eyebrow: props.eyebrow || null,
        title: props.title,
        subtitle: props.subtitle || null,
        headingLevel: props.headingLevel || null,
        align: props.align || null,
    };
}
function animatedHeadlineToBlock(props) {
    return {
        __component: "shared.animated-headline",
        id: 0,
        prefixText: props.prefixText || null,
        animatedWords: props.animatedWords,
        suffixText: props.suffixText || null,
        animationType: props.animationType ||
            null,
        headingLevel: props.headingLevel || null,
        align: props.align || null,
        animationSpeed: props.animationSpeed ||
            null,
    };
}
function alertToBlock(props) {
    var _a;
    return {
        __component: "shared.alert",
        id: 0,
        variant: props.variant || "info",
        title: props.title,
        message: props.message,
        dismissible: (_a = props.dismissible) !== null && _a !== void 0 ? _a : null,
        icon: stubMedia(props.iconUrl),
    };
}
function accordionToBlock(props) {
    var _a;
    return {
        __component: "shared.accordion",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item, i) => {
            var _a;
            return ({
                id: i,
                title: item.title,
                content: item.content,
                defaultOpen: (_a = item.defaultOpen) !== null && _a !== void 0 ? _a : null,
            });
        }),
    };
}
function tabsToBlock(props) {
    var _a;
    return {
        __component: "shared.tabs",
        id: 0,
        layout: props.layout || null,
        tabs: ((_a = props.tabs) !== null && _a !== void 0 ? _a : []).map((tab, i) => ({
            id: i,
            label: tab.label,
            content: tab.content,
            icon: stubMedia(tab.iconUrl),
        })),
    };
}
function iconBoxToBlock(props) {
    return {
        __component: "shared.icon-box",
        id: 0,
        icon: stubMedia(props.iconUrl),
        title: props.title,
        description: props.description || null,
        align: props.align || null,
        linkUrl: props.linkUrl || null,
    };
}
function imageBoxToBlock(props) {
    return {
        __component: "shared.image-box",
        id: 0,
        image: stubMedia(props.imageUrl),
        title: props.title,
        description: props.description || null,
        linkUrl: props.linkUrl || null,
        linkLabel: props.linkLabel || null,
        align: props.align || null,
    };
}
function contentCardsToBlock(props) {
    var _a;
    return {
        __component: "shared.content-cards",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        cards: ((_a = props.cards) !== null && _a !== void 0 ? _a : []).map((card, i) => ({
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
function codeHighlightToBlock(props) {
    var _a, _b;
    return {
        __component: "shared.code-highlight",
        id: 0,
        code: props.code,
        language: props.language || null,
        showLineNumbers: (_a = props.showLineNumbers) !== null && _a !== void 0 ? _a : null,
        showCopyButton: (_b = props.showCopyButton) !== null && _b !== void 0 ? _b : null,
        theme: props.theme || null,
        caption: props.caption || null,
    };
}
function dataTableToBlock(props) {
    var _a, _b;
    return {
        __component: "shared.data-table",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        striped: (_a = props.striped) !== null && _a !== void 0 ? _a : null,
        bordered: (_b = props.bordered) !== null && _b !== void 0 ? _b : null,
        headers: parseJsonArray(props.headersJson),
        rows: parseJsonArray(props.rowsJson),
    };
}
function spacerToBlock(props) {
    var _a;
    return {
        __component: "shared.spacer",
        id: 0,
        height: props.height || null,
        showDivider: (_a = props.showDivider) !== null && _a !== void 0 ? _a : null,
        dividerStyle: props.dividerStyle || null,
    };
}
/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */
export const contentRegistry = [
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
            subtitle: "Everything you need to launch polished pages without starting from scratch.",
            headingLevel: "h2",
            align: "left",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            return ({
                eyebrow: (_a = block.eyebrow) !== null && _a !== void 0 ? _a : "",
                title: (_b = block.title) !== null && _b !== void 0 ? _b : "",
                subtitle: (_c = block.subtitle) !== null && _c !== void 0 ? _c : "",
                headingLevel: (_d = block.headingLevel) !== null && _d !== void 0 ? _d : "h2",
                align: (_e = block.align) !== null && _e !== void 0 ? _e : "left",
            });
        },
        toBlock: advancedHeadingToBlock,
        render: (props) => createElement(AdvancedHeadingBlock, { block: advancedHeadingToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return ({
                prefixText: (_a = block.prefixText) !== null && _a !== void 0 ? _a : "",
                animatedWords: (_b = block.animatedWords) !== null && _b !== void 0 ? _b : "",
                suffixText: (_c = block.suffixText) !== null && _c !== void 0 ? _c : "",
                animationType: (_d = block.animationType) !== null && _d !== void 0 ? _d : "rotating",
                headingLevel: (_e = block.headingLevel) !== null && _e !== void 0 ? _e : "h2",
                align: (_f = block.align) !== null && _f !== void 0 ? _f : "center",
                animationSpeed: (_g = block.animationSpeed) !== null && _g !== void 0 ? _g : "normal",
            });
        },
        toBlock: animatedHeadlineToBlock,
        render: (props) => createElement(AnimatedHeadlineBlock, { block: animatedHeadlineToBlock(props) }),
    },
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
            message: "Version 2.4 includes faster publishing and improved templates.",
            dismissible: false,
            iconUrl: "",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                variant: (_a = block.variant) !== null && _a !== void 0 ? _a : "info",
                title: (_b = block.title) !== null && _b !== void 0 ? _b : "",
                message: (_c = block.message) !== null && _c !== void 0 ? _c : "",
                dismissible: (_d = block.dismissible) !== null && _d !== void 0 ? _d : false,
                iconUrl: stripMediaUrl(block.icon),
            });
        },
        toBlock: alertToBlock,
        render: (props) => createElement(AlertBlock, { block: alertToBlock(props) }),
    },
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
                    content: "Open your draft in the editor, review the preview, then click Publish. Changes go live immediately on connected sites.",
                    defaultOpen: true,
                },
                {
                    title: "Can I reuse layouts across pages?",
                    content: "Yes. Save sections as templates or duplicate existing pages so your team starts from proven layouts every time.",
                    defaultOpen: false,
                },
                {
                    title: "Who can edit content?",
                    content: "Workspace admins control roles and permissions. Editors can update pages; publishers approve and release them.",
                    defaultOpen: false,
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
                items: ((_c = block.items) !== null && _c !== void 0 ? _c : []).map((item) => {
                    var _a, _b, _c;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        content: (_b = item.content) !== null && _b !== void 0 ? _b : "",
                        defaultOpen: (_c = item.defaultOpen) !== null && _c !== void 0 ? _c : false,
                    });
                }),
            });
        },
        toBlock: accordionToBlock,
        render: (props) => createElement(AccordionBlock, { block: accordionToBlock(props) }),
    },
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
                    content: "Compose pages from polished blocks that already look production-ready. Invite your team, iterate quickly, and publish with confidence—without rebuilding layouts from scratch each time.",
                    iconUrl: "",
                },
                {
                    label: "Security",
                    content: "Role-based access, optional SSO, and audit trails keep publishing controlled as your organization grows. Protect drafts and production sites with permissions that match how your team works.",
                    iconUrl: "",
                },
                {
                    label: "Integrations",
                    content: "Connect analytics, CRM, and collaboration tools your team already relies on. Sync content and trigger workflows so launches stay aligned across product, marketing, and support.",
                    iconUrl: "",
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b;
            return ({
                layout: (_a = block.layout) !== null && _a !== void 0 ? _a : "horizontal",
                tabs: ((_b = block.tabs) !== null && _b !== void 0 ? _b : []).map((tab) => {
                    var _a, _b;
                    return ({
                        label: (_a = tab.label) !== null && _a !== void 0 ? _a : "",
                        content: (_b = tab.content) !== null && _b !== void 0 ? _b : "",
                        iconUrl: stripMediaUrl(tab.icon),
                    });
                }),
            });
        },
        toBlock: tabsToBlock,
        render: (props) => createElement(TabsBlock, { block: tabsToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                iconUrl: stripMediaUrl(block.icon),
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                description: (_b = block.description) !== null && _b !== void 0 ? _b : "",
                align: (_c = block.align) !== null && _c !== void 0 ? _c : "center",
                linkUrl: (_d = block.linkUrl) !== null && _d !== void 0 ? _d : "",
            });
        },
        toBlock: iconBoxToBlock,
        render: (props) => createElement(IconBoxBlock, { block: iconBoxToBlock(props) }),
    },
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
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
            title: "User Management",
            description: "Add and control users efficiently.",
            linkUrl: "/",
            linkLabel: "Manage users",
            align: "left",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            return ({
                imageUrl: stripMediaUrl(block.image),
                title: (_a = block.title) !== null && _a !== void 0 ? _a : "",
                description: (_b = block.description) !== null && _b !== void 0 ? _b : "",
                linkUrl: (_c = block.linkUrl) !== null && _c !== void 0 ? _c : "",
                linkLabel: (_d = block.linkLabel) !== null && _d !== void 0 ? _d : "",
                align: (_e = block.align) !== null && _e !== void 0 ? _e : "left",
            });
        },
        toBlock: imageBoxToBlock,
        render: (props) => createElement(ImageBoxBlock, { block: imageBoxToBlock(props) }),
    },
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
                    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
                    title: "User Management",
                    excerpt: "Learn how to invite teammates, set roles, and keep access organized as your workspace grows.",
                    linkUrl: "/",
                    linkLabel: "Read article",
                    badge: "Guide",
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
                    title: "Analytics Dashboard",
                    excerpt: "See which pages convert, where visitors drop off, and how to act on clear performance signals.",
                    linkUrl: "/",
                    linkLabel: "Read article",
                    badge: "Product",
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                    title: "Integrations",
                    excerpt: "Connect the tools your team already uses so content, analytics, and workflows stay in sync.",
                    linkUrl: "/",
                    linkLabel: "Read article",
                    badge: "Update",
                },
            ],
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            return ({
                heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
                columns: (_c = block.columns) !== null && _c !== void 0 ? _c : "3",
                cards: ((_d = block.cards) !== null && _d !== void 0 ? _d : []).map((card) => {
                    var _a, _b, _c, _d, _e;
                    return ({
                        imageUrl: stripMediaUrl(card.image),
                        title: (_a = card.title) !== null && _a !== void 0 ? _a : "",
                        excerpt: (_b = card.excerpt) !== null && _b !== void 0 ? _b : "",
                        linkUrl: (_c = card.linkUrl) !== null && _c !== void 0 ? _c : "",
                        linkLabel: (_d = card.linkLabel) !== null && _d !== void 0 ? _d : "",
                        badge: (_e = card.badge) !== null && _e !== void 0 ? _e : "",
                    });
                }),
            });
        },
        toBlock: contentCardsToBlock,
        render: (props) => createElement(ContentCardsBlock, { block: contentCardsToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                code: (_a = block.code) !== null && _a !== void 0 ? _a : "",
                language: (_b = block.language) !== null && _b !== void 0 ? _b : "plaintext",
                showLineNumbers: (_c = block.showLineNumbers) !== null && _c !== void 0 ? _c : true,
                showCopyButton: (_d = block.showCopyButton) !== null && _d !== void 0 ? _d : true,
                theme: (_e = block.theme) !== null && _e !== void 0 ? _e : "dark",
                caption: (_f = block.caption) !== null && _f !== void 0 ? _f : "",
            });
        },
        toBlock: codeHighlightToBlock,
        render: (props) => createElement(CodeHighlightBlock, { block: codeHighlightToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
                striped: (_c = block.striped) !== null && _c !== void 0 ? _c : true,
                bordered: (_d = block.bordered) !== null && _d !== void 0 ? _d : true,
                headersJson: JSON.stringify((_e = block.headers) !== null && _e !== void 0 ? _e : [], null, 2),
                rowsJson: JSON.stringify((_f = block.rows) !== null && _f !== void 0 ? _f : [], null, 2),
            });
        },
        toBlock: dataTableToBlock,
        render: (props) => createElement(DataTableBlock, { block: dataTableToBlock(props) }),
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            return ({
                height: (_a = block.height) !== null && _a !== void 0 ? _a : "medium",
                showDivider: (_b = block.showDivider) !== null && _b !== void 0 ? _b : false,
                dividerStyle: (_c = block.dividerStyle) !== null && _c !== void 0 ? _c : "solid",
            });
        },
        toBlock: spacerToBlock,
        render: (props) => {
            var _a;
            return createElement(SpacerBlock, {
                block: spacerToBlock(props),
                isEditing: Boolean((_a = props.puck) === null || _a === void 0 ? void 0 : _a.isEditing),
            });
        },
    },
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
        fromBlock: (block) => {
            var _a, _b, _c;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                height: (_b = b.height) !== null && _b !== void 0 ? _b : "medium",
                items: ((_c = b.items) !== null && _c !== void 0 ? _c : []).map((item) => {
                    var _a, _b, _c, _d;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        subtitle: (_b = item.subtitle) !== null && _b !== void 0 ? _b : "",
                        imageUrl: (_c = item.imageUrl) !== null && _c !== void 0 ? _c : "",
                        url: (_d = item.url) !== null && _d !== void 0 ? _d : "",
                    });
                }),
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.image-accordion",
                id: 0,
                heading: props.heading || null,
                height: props.height || null,
                items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
                    title: item.title || "",
                    subtitle: item.subtitle || null,
                    imageUrl: item.imageUrl || "",
                    url: item.url || null,
                })),
            });
        }),
        render: (props) => {
            var _a;
            return createElement(ImageAccordionBlock, {
                block: {
                    __component: "shared.image-accordion",
                    id: 0,
                    heading: props.heading || null,
                    height: props.height || null,
                    items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
                        title: item.title || "",
                        subtitle: item.subtitle || null,
                        imageUrl: item.imageUrl || "",
                        url: item.url || null,
                    })),
                },
            });
        },
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                primaryLabel: (_a = b.primaryLabel) !== null && _a !== void 0 ? _a : "Get started",
                primaryUrl: (_b = b.primaryUrl) !== null && _b !== void 0 ? _b : "/",
                secondaryLabel: (_c = b.secondaryLabel) !== null && _c !== void 0 ? _c : "Learn more",
                secondaryUrl: (_d = b.secondaryUrl) !== null && _d !== void 0 ? _d : "/",
                align: (_e = b.align) !== null && _e !== void 0 ? _e : "center",
                stackOnMobile: (_f = b.stackOnMobile) !== null && _f !== void 0 ? _f : true,
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.dual-button",
                id: 0,
                primaryLabel: props.primaryLabel || "Get started",
                primaryUrl: props.primaryUrl || "/",
                secondaryLabel: props.secondaryLabel || "Learn more",
                secondaryUrl: props.secondaryUrl || "/",
                align: props.align || null,
                stackOnMobile: (_a = props.stackOnMobile) !== null && _a !== void 0 ? _a : null,
            });
        }),
        render: (props) => {
            var _a;
            return createElement(DualButtonBlock, {
                block: {
                    __component: "shared.dual-button",
                    id: 0,
                    primaryLabel: props.primaryLabel || "Get started",
                    primaryUrl: props.primaryUrl || "/",
                    secondaryLabel: props.secondaryLabel || "Learn more",
                    secondaryUrl: props.secondaryUrl || "/",
                    align: props.align || null,
                    stackOnMobile: (_a = props.stackOnMobile) !== null && _a !== void 0 ? _a : null,
                },
            });
        },
    },
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
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "Protected content",
                message: (_b = b.message) !== null && _b !== void 0 ? _b : "",
                password: (_c = b.password) !== null && _c !== void 0 ? _c : "",
                buttonLabel: (_d = b.buttonLabel) !== null && _d !== void 0 ? _d : "Unlock",
                contentHtml: (_e = b.contentHtml) !== null && _e !== void 0 ? _e : "",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.protected-content",
            id: 0,
            heading: props.heading || null,
            message: props.message || null,
            password: props.password || "",
            buttonLabel: props.buttonLabel || null,
            contentHtml: props.contentHtml || "",
        })),
        render: (props) => createElement(ProtectedContentBlock, {
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
    },
];
