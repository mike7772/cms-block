import ToggleBlock from "../../components/blocks/toggle-block.js";
import ContentToggleBlock from "../../components/blocks/content-toggle-block.js";
import NumberCounterBlock from "../../components/blocks/number-counter-block.js";
import CircleCounterBlock from "../../components/blocks/circle-counter-block.js";
import PostSliderBlock from "../../components/blocks/post-slider-block.js";
import VideoSliderBlock from "../../components/blocks/video-slider-block.js";
import FilterablePortfolioBlock from "../../components/blocks/filterable-portfolio-block.js";
import PostNavigationBlock from "../../components/blocks/post-navigation-block.js";
import ReadingTimeBlock from "../../components/blocks/reading-time-block.js";
import LogoBlock from "../../components/blocks/logo-block.js";
import IconBlock from "../../components/blocks/icon-block.js";
import BlurbBlock from "../../components/blocks/blurb-block.js";
import DropdownBlock from "../../components/blocks/dropdown-block.js";
import PromoBoxBlock from "../../components/blocks/promo-box-block.js";
import { boolField, selectField } from "./helpers.js";
import { createElement } from "react";
function num(value, fallback = null) {
    if (value === "" || value == null)
        return fallback;
    return Number(value);
}
export const bricksDiviRegistry = [
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
            content: "Yes. Starter includes core blocks for personal projects so you can compose and publish polished pages without paying upfront. Upgrade anytime when your team needs more seats or advanced controls.",
            openByDefault: false,
            iconStyle: "plus",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d;
            const b = block;
            return {
                title: (_a = b.title) !== null && _a !== void 0 ? _a : "",
                content: (_b = b.content) !== null && _b !== void 0 ? _b : "",
                openByDefault: (_c = b.openByDefault) !== null && _c !== void 0 ? _c : false,
                iconStyle: (_d = b.iconStyle) !== null && _d !== void 0 ? _d : "plus",
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.toggle",
                id: 0,
                title: props.title || "Toggle",
                content: props.content || "",
                openByDefault: (_a = props.openByDefault) !== null && _a !== void 0 ? _a : null,
                iconStyle: props.iconStyle || null,
            });
        }),
        render: (props) => {
            var _a;
            return createElement(ToggleBlock, {
                block: {
                    __component: "shared.toggle",
                    id: 0,
                    title: props.title || "Toggle",
                    content: props.content || "",
                    openByDefault: (_a = props.openByDefault) !== null && _a !== void 0 ? _a : null,
                    iconStyle: props.iconStyle || null,
                },
            });
        },
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
            contentA: "Pay month to month with full flexibility. Change plans anytime and keep access to every feature included in your tier.",
            contentB: "Choose yearly billing and save 20%. Lock in your rate for twelve months while your team ships without interruption.",
            defaultPane: "a",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                labelA: (_b = b.labelA) !== null && _b !== void 0 ? _b : "Option A",
                labelB: (_c = b.labelB) !== null && _c !== void 0 ? _c : "Option B",
                contentA: (_d = b.contentA) !== null && _d !== void 0 ? _d : "",
                contentB: (_e = b.contentB) !== null && _e !== void 0 ? _e : "",
                defaultPane: (_f = b.defaultPane) !== null && _f !== void 0 ? _f : "a",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.content-toggle",
            id: 0,
            heading: props.heading || null,
            labelA: props.labelA || "Option A",
            labelB: props.labelB || "Option B",
            contentA: props.contentA || "",
            contentB: props.contentB || "",
            defaultPane: props.defaultPane || null,
        })),
        render: (props) => createElement(ContentToggleBlock, {
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                iconUrl: (_a = b.iconUrl) !== null && _a !== void 0 ? _a : "",
                title: (_b = b.title) !== null && _b !== void 0 ? _b : "",
                description: (_c = b.description) !== null && _c !== void 0 ? _c : "",
                buttonLabel: (_d = b.buttonLabel) !== null && _d !== void 0 ? _d : "",
                buttonUrl: (_e = b.buttonUrl) !== null && _e !== void 0 ? _e : "",
                align: (_f = b.align) !== null && _f !== void 0 ? _f : "center",
                layout: (_g = b.layout) !== null && _g !== void 0 ? _g : "stacked",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.blurb",
            id: 0,
            iconUrl: props.iconUrl || null,
            title: props.title || "Blurb",
            description: props.description || null,
            buttonLabel: props.buttonLabel || null,
            buttonUrl: props.buttonUrl || null,
            align: props.align || null,
            layout: props.layout || null,
        })),
        render: (props) => createElement(BlurbBlock, {
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
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                iconName: (_a = b.iconName) !== null && _a !== void 0 ? _a : "star",
                imageUrl: (_b = b.imageUrl) !== null && _b !== void 0 ? _b : "",
                size: (_c = b.size) !== null && _c !== void 0 ? _c : "medium",
                color: (_d = b.color) !== null && _d !== void 0 ? _d : "#1B4332",
                linkUrl: (_e = b.linkUrl) !== null && _e !== void 0 ? _e : "",
                align: (_f = b.align) !== null && _f !== void 0 ? _f : "center",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.icon",
            id: 0,
            iconName: props.iconName || null,
            imageUrl: props.imageUrl || null,
            size: props.size || null,
            color: props.color || null,
            linkUrl: props.linkUrl || null,
            align: props.align || null,
        })),
        render: (props) => createElement(IconBlock, {
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                eyebrow: (_a = b.eyebrow) !== null && _a !== void 0 ? _a : "",
                heading: (_b = b.heading) !== null && _b !== void 0 ? _b : "",
                text: (_c = b.text) !== null && _c !== void 0 ? _c : "",
                imageUrl: (_d = b.imageUrl) !== null && _d !== void 0 ? _d : "",
                buttonLabel: (_e = b.buttonLabel) !== null && _e !== void 0 ? _e : "",
                buttonUrl: (_f = b.buttonUrl) !== null && _f !== void 0 ? _f : "",
                layout: (_g = b.layout) !== null && _g !== void 0 ? _g : "image-left",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.promo-box",
            id: 0,
            eyebrow: props.eyebrow || null,
            heading: props.heading || "Promo",
            text: props.text || null,
            imageUrl: props.imageUrl || null,
            buttonLabel: props.buttonLabel || null,
            buttonUrl: props.buttonUrl || null,
            layout: props.layout || null,
        })),
        render: (props) => createElement(PromoBoxBlock, {
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                prefix: (_b = b.prefix) !== null && _b !== void 0 ? _b : "",
                value: (_c = b.value) !== null && _c !== void 0 ? _c : 0,
                suffix: (_d = b.suffix) !== null && _d !== void 0 ? _d : "",
                label: (_e = b.label) !== null && _e !== void 0 ? _e : "",
                durationMs: (_f = b.durationMs) !== null && _f !== void 0 ? _f : 2000,
                align: (_g = b.align) !== null && _g !== void 0 ? _g : "center",
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.number-counter",
                id: 0,
                heading: props.heading || null,
                prefix: props.prefix || null,
                value: (_a = num(props.value, 0)) !== null && _a !== void 0 ? _a : 0,
                suffix: props.suffix || null,
                label: props.label || null,
                durationMs: num(props.durationMs),
                align: props.align || null,
            });
        }),
        render: (props) => {
            var _a;
            return createElement(NumberCounterBlock, {
                block: {
                    __component: "shared.number-counter",
                    id: 0,
                    heading: props.heading || null,
                    prefix: props.prefix || null,
                    value: (_a = num(props.value, 0)) !== null && _a !== void 0 ? _a : 0,
                    suffix: props.suffix || null,
                    label: props.label || null,
                    durationMs: num(props.durationMs),
                    align: props.align || null,
                },
            });
        },
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                value: (_b = b.value) !== null && _b !== void 0 ? _b : 0,
                label: (_c = b.label) !== null && _c !== void 0 ? _c : "",
                suffix: (_d = b.suffix) !== null && _d !== void 0 ? _d : "%",
                size: (_e = b.size) !== null && _e !== void 0 ? _e : "medium",
                color: (_f = b.color) !== null && _f !== void 0 ? _f : "#7BB8E3",
                durationMs: (_g = b.durationMs) !== null && _g !== void 0 ? _g : 1500,
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.circle-counter",
                id: 0,
                heading: props.heading || null,
                value: (_a = num(props.value, 0)) !== null && _a !== void 0 ? _a : 0,
                label: props.label || null,
                suffix: props.suffix || null,
                size: props.size || null,
                color: props.color || null,
                durationMs: num(props.durationMs),
            });
        }),
        render: (props) => {
            var _a;
            return createElement(CircleCounterBlock, {
                block: {
                    __component: "shared.circle-counter",
                    id: 0,
                    heading: props.heading || null,
                    value: (_a = num(props.value, 0)) !== null && _a !== void 0 ? _a : 0,
                    label: props.label || null,
                    suffix: props.suffix || null,
                    size: props.size || null,
                    color: props.color || null,
                    durationMs: num(props.durationMs),
                },
            });
        },
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
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                imageUrl: (_a = b.imageUrl) !== null && _a !== void 0 ? _a : "",
                alt: (_b = b.alt) !== null && _b !== void 0 ? _b : "Logo",
                url: (_c = b.url) !== null && _c !== void 0 ? _c : "/",
                widthPx: (_d = b.widthPx) !== null && _d !== void 0 ? _d : 160,
                align: (_e = b.align) !== null && _e !== void 0 ? _e : "left",
            };
        },
        toBlock: ((props) => ({
            __component: "shared.logo",
            id: 0,
            imageUrl: props.imageUrl || "",
            alt: props.alt || null,
            url: props.url || null,
            widthPx: num(props.widthPx),
            align: props.align || null,
        })),
        render: (props) => createElement(LogoBlock, {
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
            var _a, _b, _c, _d;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                showArrows: (_b = b.showArrows) !== null && _b !== void 0 ? _b : true,
                showDots: (_c = b.showDots) !== null && _c !== void 0 ? _c : true,
                items: ((_d = b.items) !== null && _d !== void 0 ? _d : []).map((item) => {
                    var _a, _b, _c;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        videoUrl: (_b = item.videoUrl) !== null && _b !== void 0 ? _b : "",
                        posterUrl: (_c = item.posterUrl) !== null && _c !== void 0 ? _c : "",
                    });
                }),
            };
        },
        toBlock: ((props) => {
            var _a, _b, _c;
            return ({
                __component: "shared.video-slider",
                id: 0,
                heading: props.heading || null,
                showArrows: (_a = props.showArrows) !== null && _a !== void 0 ? _a : null,
                showDots: (_b = props.showDots) !== null && _b !== void 0 ? _b : null,
                items: ((_c = props.items) !== null && _c !== void 0 ? _c : []).map((item) => ({
                    title: item.title || null,
                    videoUrl: item.videoUrl || "",
                    posterUrl: item.posterUrl || null,
                })),
            });
        }),
        render: (props) => {
            var _a, _b, _c;
            return createElement(VideoSliderBlock, {
                block: {
                    __component: "shared.video-slider",
                    id: 0,
                    heading: props.heading || null,
                    showArrows: (_a = props.showArrows) !== null && _a !== void 0 ? _a : null,
                    showDots: (_b = props.showDots) !== null && _b !== void 0 ? _b : null,
                    items: ((_c = props.items) !== null && _c !== void 0 ? _c : []).map((item) => ({
                        title: item.title || null,
                        videoUrl: item.videoUrl || "",
                        posterUrl: item.posterUrl || null,
                    })),
                },
            });
        },
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                columns: (_c = b.columns) !== null && _c !== void 0 ? _c : "3",
                filterStyle: (_d = b.filterStyle) !== null && _d !== void 0 ? _d : "pills",
                allLabel: (_e = b.allLabel) !== null && _e !== void 0 ? _e : "All",
                showCounts: (_f = b.showCounts) !== null && _f !== void 0 ? _f : false,
                items: ((_g = b.items) !== null && _g !== void 0 ? _g : []).map((item) => {
                    var _a, _b, _c, _d, _e;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        category: (_b = item.category) !== null && _b !== void 0 ? _b : "",
                        imageUrl: (_c = item.imageUrl) !== null && _c !== void 0 ? _c : "",
                        url: (_d = item.url) !== null && _d !== void 0 ? _d : "",
                        description: (_e = item.description) !== null && _e !== void 0 ? _e : "",
                    });
                }),
            };
        },
        toBlock: ((props) => {
            var _a, _b;
            return ({
                __component: "shared.filterable-portfolio",
                id: 0,
                heading: props.heading || null,
                subheading: props.subheading || null,
                columns: props.columns || null,
                filterStyle: props.filterStyle || null,
                allLabel: props.allLabel || null,
                showCounts: (_a = props.showCounts) !== null && _a !== void 0 ? _a : null,
                items: ((_b = props.items) !== null && _b !== void 0 ? _b : []).map((item) => ({
                    title: item.title || "",
                    category: item.category || "",
                    imageUrl: item.imageUrl || "",
                    url: item.url || null,
                    description: item.description || null,
                })),
            });
        }),
        render: (props) => {
            var _a, _b;
            return createElement(FilterablePortfolioBlock, {
                block: {
                    __component: "shared.filterable-portfolio",
                    id: 0,
                    heading: props.heading || null,
                    subheading: props.subheading || null,
                    columns: props.columns || null,
                    filterStyle: props.filterStyle || null,
                    allLabel: props.allLabel || null,
                    showCounts: (_a = props.showCounts) !== null && _a !== void 0 ? _a : null,
                    items: ((_b = props.items) !== null && _b !== void 0 ? _b : []).map((item) => ({
                        title: item.title || "",
                        category: item.category || "",
                        imageUrl: item.imageUrl || "",
                        url: item.url || null,
                        description: item.description || null,
                    })),
                },
            });
        },
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                categorySlug: (_c = b.categorySlug) !== null && _c !== void 0 ? _c : "",
                postsLimit: (_d = b.postsLimit) !== null && _d !== void 0 ? _d : 5,
                orderBy: (_e = b.orderBy) !== null && _e !== void 0 ? _e : "newest",
                showExcerpt: (_f = b.showExcerpt) !== null && _f !== void 0 ? _f : true,
                showDate: (_g = b.showDate) !== null && _g !== void 0 ? _g : true,
                autoplay: (_h = b.autoplay) !== null && _h !== void 0 ? _h : true,
                autoplaySpeed: (_j = b.autoplaySpeed) !== null && _j !== void 0 ? _j : 5000,
            };
        },
        toBlock: ((props) => {
            var _a, _b, _c;
            return ({
                __component: "shared.post-slider",
                id: 0,
                heading: props.heading || null,
                subheading: props.subheading || null,
                categorySlug: props.categorySlug || null,
                postsLimit: num(props.postsLimit),
                orderBy: props.orderBy || null,
                showExcerpt: (_a = props.showExcerpt) !== null && _a !== void 0 ? _a : null,
                showDate: (_b = props.showDate) !== null && _b !== void 0 ? _b : null,
                autoplay: (_c = props.autoplay) !== null && _c !== void 0 ? _c : null,
                autoplaySpeed: num(props.autoplaySpeed),
            });
        }),
        render: (props) => {
            var _a, _b, _c;
            return createElement(PostSliderBlock, {
                block: {
                    __component: "shared.post-slider",
                    id: 0,
                    heading: props.heading || null,
                    subheading: props.subheading || null,
                    categorySlug: props.categorySlug || null,
                    postsLimit: num(props.postsLimit),
                    orderBy: props.orderBy || null,
                    showExcerpt: (_a = props.showExcerpt) !== null && _a !== void 0 ? _a : null,
                    showDate: (_b = props.showDate) !== null && _b !== void 0 ? _b : null,
                    autoplay: (_c = props.autoplay) !== null && _c !== void 0 ? _c : null,
                    autoplaySpeed: num(props.autoplaySpeed),
                },
            });
        },
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                prevLabel: (_a = b.prevLabel) !== null && _a !== void 0 ? _a : "Previous",
                nextLabel: (_b = b.nextLabel) !== null && _b !== void 0 ? _b : "Next",
                prevTitle: (_c = b.prevTitle) !== null && _c !== void 0 ? _c : "",
                prevUrl: (_d = b.prevUrl) !== null && _d !== void 0 ? _d : "",
                nextTitle: (_e = b.nextTitle) !== null && _e !== void 0 ? _e : "",
                nextUrl: (_f = b.nextUrl) !== null && _f !== void 0 ? _f : "",
                showLabels: (_g = b.showLabels) !== null && _g !== void 0 ? _g : true,
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.post-navigation",
                id: 0,
                prevLabel: props.prevLabel || null,
                nextLabel: props.nextLabel || null,
                prevTitle: props.prevTitle || null,
                prevUrl: props.prevUrl || null,
                nextTitle: props.nextTitle || null,
                nextUrl: props.nextUrl || null,
                showLabels: (_a = props.showLabels) !== null && _a !== void 0 ? _a : null,
            });
        }),
        render: (props) => {
            var _a;
            return createElement(PostNavigationBlock, {
                block: {
                    __component: "shared.post-navigation",
                    id: 0,
                    prevLabel: props.prevLabel || null,
                    nextLabel: props.nextLabel || null,
                    prevTitle: props.prevTitle || null,
                    prevUrl: props.prevUrl || null,
                    nextTitle: props.nextTitle || null,
                    nextUrl: props.nextUrl || null,
                    showLabels: (_a = props.showLabels) !== null && _a !== void 0 ? _a : null,
                },
            });
        },
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
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                label: (_a = b.label) !== null && _a !== void 0 ? _a : "min read",
                wordsPerMinute: (_b = b.wordsPerMinute) !== null && _b !== void 0 ? _b : 200,
                wordCount: (_c = b.wordCount) !== null && _c !== void 0 ? _c : 0,
                contentHtml: (_d = b.contentHtml) !== null && _d !== void 0 ? _d : "",
                align: (_e = b.align) !== null && _e !== void 0 ? _e : "left",
                showIcon: (_f = b.showIcon) !== null && _f !== void 0 ? _f : true,
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.reading-time",
                id: 0,
                label: props.label || null,
                wordsPerMinute: num(props.wordsPerMinute),
                wordCount: num(props.wordCount),
                contentHtml: props.contentHtml || null,
                align: props.align || null,
                showIcon: (_a = props.showIcon) !== null && _a !== void 0 ? _a : null,
            });
        }),
        render: (props) => {
            var _a;
            return createElement(ReadingTimeBlock, {
                block: {
                    __component: "shared.reading-time",
                    id: 0,
                    label: props.label || null,
                    wordsPerMinute: num(props.wordsPerMinute),
                    wordCount: num(props.wordCount),
                    contentHtml: props.contentHtml || null,
                    align: props.align || null,
                    showIcon: (_a = props.showIcon) !== null && _a !== void 0 ? _a : null,
                },
            });
        },
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
            var _a, _b, _c;
            const b = block;
            return {
                label: (_a = b.label) !== null && _a !== void 0 ? _a : "Menu",
                align: (_b = b.align) !== null && _b !== void 0 ? _b : "left",
                items: ((_c = b.items) !== null && _c !== void 0 ? _c : []).map((item) => {
                    var _a, _b;
                    return ({
                        label: (_a = item.label) !== null && _a !== void 0 ? _a : "",
                        url: (_b = item.url) !== null && _b !== void 0 ? _b : "",
                    });
                }),
            };
        },
        toBlock: ((props) => {
            var _a;
            return ({
                __component: "shared.dropdown",
                id: 0,
                label: props.label || "Menu",
                align: props.align || null,
                items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
                    label: item.label || "",
                    url: item.url || "/",
                })),
            });
        }),
        render: (props) => {
            var _a;
            return createElement(DropdownBlock, {
                block: {
                    __component: "shared.dropdown",
                    id: 0,
                    label: props.label || "Menu",
                    align: props.align || null,
                    items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
                        label: item.label || "",
                        url: item.url || "/",
                    })),
                },
            });
        },
    },
];
