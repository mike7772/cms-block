import BreadcrumbsBlock from "@/components/blocks/breadcrumbs-block";
import MenuBlock from "@/components/blocks/menu-block";
import MenuAnchorBlock from "@/components/blocks/menu-anchor-block";
import ShareButtonsBlock from "@/components/blocks/share-buttons-block";
import SitemapBlock from "@/components/blocks/sitemap-block";
import SocialIconsBlock from "@/components/blocks/social-icons-block";
import TableOfContentsBlock from "@/components/blocks/table-of-contents-block";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import { MENU_DEFAULT_DROPDOWN_ITEM, MENU_DEFAULT_GROUP, MENU_DEFAULT_LINKS, } from "@/puck/chrome-defaults";
function mapMenuChildren(children) {
    return (children !== null && children !== void 0 ? children : []).map((child, j) => {
        var _a, _b, _c;
        return ({
            id: j,
            label: (_a = child.label) !== null && _a !== void 0 ? _a : "",
            url: (_b = child.url) !== null && _b !== void 0 ? _b : "",
            iconName: child.iconName || null,
            openInNewTab: (_c = child.openInNewTab) !== null && _c !== void 0 ? _c : null,
        });
    });
}
function mapMenuGroups(link) {
    var _a, _b;
    const groups = Array.isArray(link.groups) ? link.groups : [];
    if (groups.length) {
        return groups.map((group, g) => {
            var _a;
            return ({
                id: g,
                title: group.title || null,
                description: group.description || null,
                panelImage: stubMedia((_a = group.panelImageUrl) !== null && _a !== void 0 ? _a : ""),
                ctaLabel: group.ctaLabel || null,
                ctaUrl: group.ctaUrl || null,
                children: mapMenuChildren(group.children),
            });
        });
    }
    if (link.description ||
        link.panelImageUrl ||
        link.ctaLabel ||
        ((_a = link.children) !== null && _a !== void 0 ? _a : []).length) {
        return [
            {
                id: 0,
                title: link.label || null,
                description: link.description || null,
                panelImage: stubMedia((_b = link.panelImageUrl) !== null && _b !== void 0 ? _b : ""),
                ctaLabel: link.ctaLabel || null,
                ctaUrl: link.ctaUrl || null,
                children: mapMenuChildren(link.children),
            },
        ];
    }
    return [];
}
const breadcrumbsToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.breadcrumbs",
        id: 0,
        separator: props.separator || null,
        showHomePage: (_a = props.showHomePage) !== null && _a !== void 0 ? _a : null,
        homePageLabel: props.homePageLabel || null,
        align: props.align || null,
        style: props.style || null,
    });
};
const menuToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.menu",
        id: 0,
        heading: props.heading || null,
        orientation: props.orientation || null,
        style: props.style || null,
        links: ((_a = props.links) !== null && _a !== void 0 ? _a : []).map((link, i) => {
            var _a, _b, _c, _d, _e;
            return ({
                id: i,
                label: (_a = link.label) !== null && _a !== void 0 ? _a : "",
                url: (_b = link.url) !== null && _b !== void 0 ? _b : "",
                icon: stubMedia((_c = link.iconUrl) !== null && _c !== void 0 ? _c : ""),
                openInNewTab: (_d = link.openInNewTab) !== null && _d !== void 0 ? _d : null,
                isButton: (_e = link.isButton) !== null && _e !== void 0 ? _e : null,
                groups: mapMenuGroups(link),
            });
        }),
    });
};
const menuAnchorToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.menu-anchor",
        id: 0,
        anchorId: (_a = props.anchorId) !== null && _a !== void 0 ? _a : "",
        label: props.label || null,
    });
};
const shareButtonsToBlock = (props) => ({
    __component: "shared.share-buttons",
    id: 0,
    heading: props.heading || null,
    platforms: props.platforms || null,
    style: props.style || null,
    align: props.align || null,
    shape: props.shape || null,
});
const sitemapToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.sitemap",
        id: 0,
        heading: props.heading || null,
        layout: props.layout || null,
        columns: props.columns || null,
        showDescriptions: (_a = props.showDescriptions) !== null && _a !== void 0 ? _a : null,
        maxDepth: props.maxDepth === "" || props.maxDepth == null
            ? null
            : Number(props.maxDepth),
    });
};
const socialIconsToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.social-icons",
        id: 0,
        heading: props.heading || null,
        align: props.align || null,
        icons: ((_a = props.icons) !== null && _a !== void 0 ? _a : []).map((icon, i) => {
            var _a;
            return ({
                id: i,
                platform: icon.platform || "website",
                url: (_a = icon.url) !== null && _a !== void 0 ? _a : "",
                label: icon.label || null,
            });
        }),
    });
};
const tocToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.table-of-contents",
        id: 0,
        heading: props.heading || null,
        mode: props.mode || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item, i) => {
            var _a, _b;
            return ({
                id: i,
                label: (_a = item.label) !== null && _a !== void 0 ? _a : "",
                anchorId: (_b = item.anchorId) !== null && _b !== void 0 ? _b : "",
            });
        }),
        sticky: (_b = props.sticky) !== null && _b !== void 0 ? _b : null,
        showNumbers: (_c = props.showNumbers) !== null && _c !== void 0 ? _c : null,
    });
};
export const navigationRegistry = [
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
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                separator: (_a = b.separator) !== null && _a !== void 0 ? _a : "slash",
                showHomePage: (_b = b.showHomePage) !== null && _b !== void 0 ? _b : true,
                homePageLabel: (_c = b.homePageLabel) !== null && _c !== void 0 ? _c : "Home",
                align: (_d = b.align) !== null && _d !== void 0 ? _d : "left",
                style: (_e = b.style) !== null && _e !== void 0 ? _e : "plain",
            };
        },
        toBlock: breadcrumbsToBlock,
        render: (props) => createElement(BreadcrumbsBlock, { block: breadcrumbsToBlock(props) }),
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
                                getItemSummary: (item) => item.label || "Sub-link",
                            },
                        },
                        defaultItemProps: MENU_DEFAULT_GROUP,
                        getItemSummary: (item) => {
                            var _a;
                            return `${item.title || "Row"}${((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) ? ` (${item.children.length})` : ""}`;
                        },
                    },
                },
                defaultItemProps: MENU_DEFAULT_DROPDOWN_ITEM,
                getItemSummary: (item) => {
                    var _a;
                    return ((_a = item.groups) === null || _a === void 0 ? void 0 : _a.length)
                        ? `${item.label || "Item"} ▾`
                        : item.label || "Link";
                },
            },
        },
        defaultProps: {
            heading: "",
            orientation: "horizontal",
            style: "plain",
            links: MENU_DEFAULT_LINKS,
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                orientation: (_b = b.orientation) !== null && _b !== void 0 ? _b : "horizontal",
                style: (_c = b.style) !== null && _c !== void 0 ? _c : "plain",
                links: ((_d = b.links) !== null && _d !== void 0 ? _d : []).map((link) => {
                    var _a, _b, _c, _d, _e, _f;
                    const groups = ((_a = link.groups) === null || _a === void 0 ? void 0 : _a.length)
                        ? link.groups
                        : ((_b = link.children) === null || _b === void 0 ? void 0 : _b.length) ||
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
                        label: (_c = link.label) !== null && _c !== void 0 ? _c : "",
                        url: (_d = link.url) !== null && _d !== void 0 ? _d : "",
                        iconUrl: stripMediaUrl(link.icon),
                        openInNewTab: (_e = link.openInNewTab) !== null && _e !== void 0 ? _e : false,
                        isButton: (_f = link.isButton) !== null && _f !== void 0 ? _f : false,
                        groups: groups.map((group) => {
                            var _a, _b, _c, _d, _e;
                            return ({
                                title: (_a = group.title) !== null && _a !== void 0 ? _a : "",
                                description: (_b = group.description) !== null && _b !== void 0 ? _b : "",
                                panelImageUrl: stripMediaUrl(group.panelImage),
                                ctaLabel: (_c = group.ctaLabel) !== null && _c !== void 0 ? _c : "",
                                ctaUrl: (_d = group.ctaUrl) !== null && _d !== void 0 ? _d : "",
                                children: ((_e = group.children) !== null && _e !== void 0 ? _e : []).map((child) => {
                                    var _a, _b, _c, _d;
                                    return ({
                                        label: (_a = child.label) !== null && _a !== void 0 ? _a : "",
                                        url: (_b = child.url) !== null && _b !== void 0 ? _b : "",
                                        iconName: (_c = child.iconName) !== null && _c !== void 0 ? _c : "",
                                        openInNewTab: (_d = child.openInNewTab) !== null && _d !== void 0 ? _d : false,
                                    });
                                }),
                            });
                        }),
                    };
                }),
            };
        },
        toBlock: menuToBlock,
        render: (props) => {
            var _a;
            return createElement(MenuBlock, {
                block: menuToBlock(props),
                isEditing: Boolean((_a = props.puck) === null || _a === void 0 ? void 0 : _a.isEditing),
            });
        },
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
            var _a, _b;
            const b = block;
            return {
                anchorId: (_a = b.anchorId) !== null && _a !== void 0 ? _a : "",
                label: (_b = b.label) !== null && _b !== void 0 ? _b : "",
            };
        },
        toBlock: menuAnchorToBlock,
        render: (props) => createElement(MenuAnchorBlock, { block: menuAnchorToBlock(props) }),
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
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                platforms: (_b = b.platforms) !== null && _b !== void 0 ? _b : "facebook",
                style: (_c = b.style) !== null && _c !== void 0 ? _c : "icon-text",
                align: (_d = b.align) !== null && _d !== void 0 ? _d : "left",
                shape: (_e = b.shape) !== null && _e !== void 0 ? _e : "rounded",
            };
        },
        toBlock: shareButtonsToBlock,
        render: (props) => createElement(ShareButtonsBlock, { block: shareButtonsToBlock(props) }),
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
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                layout: (_b = b.layout) !== null && _b !== void 0 ? _b : "list",
                columns: (_c = b.columns) !== null && _c !== void 0 ? _c : "2",
                showDescriptions: (_d = b.showDescriptions) !== null && _d !== void 0 ? _d : false,
                maxDepth: (_e = b.maxDepth) !== null && _e !== void 0 ? _e : 3,
            };
        },
        toBlock: sitemapToBlock,
        render: (props) => createElement(SitemapBlock, { block: sitemapToBlock(props) }),
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
            var _a, _b, _c;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                align: (_b = b.align) !== null && _b !== void 0 ? _b : "center",
                icons: ((_c = b.icons) !== null && _c !== void 0 ? _c : []).map((icon) => {
                    var _a, _b, _c;
                    return ({
                        platform: (_a = icon.platform) !== null && _a !== void 0 ? _a : "website",
                        url: (_b = icon.url) !== null && _b !== void 0 ? _b : "",
                        label: (_c = icon.label) !== null && _c !== void 0 ? _c : "",
                    });
                }),
            };
        },
        toBlock: socialIconsToBlock,
        render: (props) => createElement(SocialIconsBlock, { block: socialIconsToBlock(props) }),
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
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                mode: (_b = b.mode) !== null && _b !== void 0 ? _b : "manual",
                sticky: (_c = b.sticky) !== null && _c !== void 0 ? _c : false,
                showNumbers: (_d = b.showNumbers) !== null && _d !== void 0 ? _d : true,
                items: ((_e = b.items) !== null && _e !== void 0 ? _e : []).map((item) => {
                    var _a, _b;
                    return ({
                        label: (_a = item.label) !== null && _a !== void 0 ? _a : "",
                        anchorId: (_b = item.anchorId) !== null && _b !== void 0 ? _b : "",
                    });
                }),
            };
        },
        toBlock: tocToBlock,
        render: (props) => createElement(TableOfContentsBlock, { block: tocToBlock(props) }),
    },
];
