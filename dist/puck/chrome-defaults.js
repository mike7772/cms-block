/** Nested demo content for Header / Footer model components */
function withIds(items, prefix) {
    return items.map((item, index) => (Object.assign(Object.assign({}, item), { props: Object.assign(Object.assign({}, item.props), { id: item.props.id || `${prefix}-${item.type}-${index}` }) })));
}
export const HEADER_DEFAULT_LEFT = withIds([
    {
        type: "Logo",
        props: {
            imageUrl: "https://placehold.co/160x40/0158ad/ffffff?text=OiCCMS",
            alt: "OiCCMS",
            url: "/",
            widthPx: 140,
            align: "left",
        },
    },
], "hdr-left");
/** Primary header mega-menu sample (Home + Product/Company dropdowns). */
export const MENU_DEFAULT_GROUP = {
    title: "Product",
    description: "Managing a small business today is already tough.",
    panelImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
    ctaLabel: "Book a call today",
    ctaUrl: "/#demo",
    children: [
        {
            label: "Reports",
            url: "/#reports",
            iconName: "file-text",
            openInNewTab: false,
        },
        {
            label: "Statistics",
            url: "/#statistics",
            iconName: "bar-chart",
            openInNewTab: false,
        },
        {
            label: "Dashboards",
            url: "/#dashboards",
            iconName: "layout-dashboard",
            openInNewTab: false,
        },
        {
            label: "Recordings",
            url: "/#recordings",
            iconName: "video",
            openInNewTab: false,
        },
    ],
};
export const MENU_DEFAULT_LINKS = [
    {
        label: "Home",
        url: "/",
        iconUrl: "",
        openInNewTab: false,
        isButton: false,
        groups: [],
    },
    {
        label: "Product",
        url: "/#product",
        iconUrl: "",
        openInNewTab: false,
        isButton: false,
        groups: [
            Object.assign({}, MENU_DEFAULT_GROUP),
            {
                title: "Automation",
                description: "Connect workflows and keep your team in sync.",
                panelImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80",
                ctaLabel: "Explore tools",
                ctaUrl: "/#automation",
                children: [
                    {
                        label: "Integrations",
                        url: "/#integrations",
                        iconName: "puzzle",
                        openInNewTab: false,
                    },
                    {
                        label: "Workflows",
                        url: "/#workflows",
                        iconName: "git-branch",
                        openInNewTab: false,
                    },
                    {
                        label: "Templates",
                        url: "/#templates",
                        iconName: "layout-template",
                        openInNewTab: false,
                    },
                    {
                        label: "API",
                        url: "/#api",
                        iconName: "code",
                        openInNewTab: false,
                    },
                ],
            },
        ],
    },
    {
        label: "Company",
        url: "/#company",
        iconUrl: "",
        openInNewTab: false,
        isButton: false,
        groups: [
            {
                title: "Company",
                description: "Learn who we are and how we work with partners.",
                panelImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80",
                ctaLabel: "About us",
                ctaUrl: "/about",
                children: [
                    {
                        label: "About",
                        url: "/about",
                        iconName: "building",
                        openInNewTab: false,
                    },
                    {
                        label: "Careers",
                        url: "/#careers",
                        iconName: "briefcase",
                        openInNewTab: false,
                    },
                    {
                        label: "Contact",
                        url: "/#contact",
                        iconName: "mail",
                        openInNewTab: false,
                    },
                    {
                        label: "Press",
                        url: "/#press",
                        iconName: "newspaper",
                        openInNewTab: false,
                    },
                ],
            },
        ],
    },
];
/** Defaults when adding a single dropdown item in the Menu editor. */
export const MENU_DEFAULT_DROPDOWN_ITEM = {
    label: "Product",
    url: "/#product",
    iconUrl: "",
    openInNewTab: false,
    isButton: false,
    groups: [Object.assign({}, MENU_DEFAULT_GROUP)],
};
export const HEADER_DEFAULT_CENTER = withIds([
    {
        type: "Menu",
        props: {
            heading: "",
            orientation: "horizontal",
            style: "plain",
            links: MENU_DEFAULT_LINKS,
        },
    },
], "hdr-center");
export const HEADER_DEFAULT_RIGHT = withIds([
    {
        type: "Button",
        props: {
            label: "Book a demo",
            url: "/#demo",
            variant: "outline",
            size: "small",
            align: "right",
            openInNewTab: false,
        },
    },
    {
        type: "Button",
        props: {
            label: "Get started",
            url: "/#start",
            variant: "primary",
            size: "small",
            align: "right",
            openInNewTab: false,
        },
    },
], "hdr-right");
export const FOOTER_DEFAULT_TOP = withIds([
    {
        type: "Newsletter",
        props: {
            heading: "Stay in the loop",
            subheading: "Product updates and release notes—no spam.",
            placeholderText: "you@example.com",
            buttonLabel: "Subscribe",
            backgroundImageUrl: "",
            layout: "inline",
        },
    },
], "ftr-top");
export const FOOTER_DEFAULT_COLUMN1 = withIds([
    {
        type: "Logo",
        props: {
            imageUrl: "https://placehold.co/160x40/0158ad/ffffff?text=OiCCMS",
            alt: "OiCCMS",
            url: "/",
            widthPx: 140,
            align: "left",
        },
    },
    {
        type: "RichText",
        props: {
            body: "Build and publish polished pages with a visual editor your whole team can use.",
        },
    },
], "ftr-c1");
export const FOOTER_DEFAULT_COLUMN2 = withIds([
    {
        type: "Menu",
        props: {
            heading: "Product",
            orientation: "vertical",
            style: "plain",
            links: [
                {
                    label: "Features",
                    url: "/#features",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Pricing",
                    url: "/#pricing",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Templates",
                    url: "/admin/templates",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Changelog",
                    url: "/#changelog",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
            ],
        },
    },
], "ftr-c2");
export const FOOTER_DEFAULT_COLUMN3 = withIds([
    {
        type: "Menu",
        props: {
            heading: "Company",
            orientation: "vertical",
            style: "plain",
            links: [
                {
                    label: "About",
                    url: "/about",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Careers",
                    url: "/#careers",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Contact",
                    url: "/#contact",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Support",
                    url: "/#support",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
            ],
        },
    },
], "ftr-c3");
export const FOOTER_DEFAULT_COLUMN4 = withIds([
    {
        type: "SocialIcons",
        props: {
            heading: "Follow",
            align: "left",
            icons: [
                {
                    platform: "linkedin",
                    url: "https://linkedin.com",
                    label: "LinkedIn",
                },
                { platform: "twitter", url: "https://x.com", label: "X" },
                {
                    platform: "youtube",
                    url: "https://youtube.com",
                    label: "YouTube",
                },
            ],
        },
    },
], "ftr-c4");
export const FOOTER_DEFAULT_BOTTOM = withIds([
    {
        type: "RichText",
        props: {
            body: "© 2026 OiCCMS Studio. All rights reserved.",
        },
    },
    {
        type: "Menu",
        props: {
            heading: "",
            orientation: "horizontal",
            style: "plain",
            links: [
                {
                    label: "Privacy",
                    url: "/#privacy",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
                {
                    label: "Terms",
                    url: "/#terms",
                    iconUrl: "",
                    openInNewTab: false,
                    isButton: false,
                },
            ],
        },
    },
], "ftr-bottom");
export function buildModelHeaderData() {
    return {
        root: { props: {} },
        content: [
            {
                type: "Header",
                props: {
                    id: "model-header",
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
            },
        ],
    };
}
export function buildModelFooterData() {
    return {
        root: { props: {} },
        content: [
            {
                type: "Footer",
                props: {
                    id: "model-footer",
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
            },
        ],
    };
}
