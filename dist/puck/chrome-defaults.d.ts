/** Nested demo content for Header / Footer model components */
import type { Data } from "@puckeditor/core";
type NestedItem = {
    type: string;
    props: Record<string, unknown>;
};
export declare const HEADER_DEFAULT_LEFT: NestedItem[];
/** Primary header mega-menu sample (Home + Product/Company dropdowns). */
export declare const MENU_DEFAULT_GROUP: {
    title: string;
    description: string;
    panelImageUrl: string;
    ctaLabel: string;
    ctaUrl: string;
    children: {
        label: string;
        url: string;
        iconName: string;
        openInNewTab: boolean;
    }[];
};
export declare const MENU_DEFAULT_LINKS: {
    label: string;
    url: string;
    iconUrl: string;
    openInNewTab: boolean;
    isButton: boolean;
    groups: Array<typeof MENU_DEFAULT_GROUP>;
}[];
/** Defaults when adding a single dropdown item in the Menu editor. */
export declare const MENU_DEFAULT_DROPDOWN_ITEM: {
    label: string;
    url: string;
    iconUrl: string;
    openInNewTab: boolean;
    isButton: boolean;
    groups: {
        title: string;
        description: string;
        panelImageUrl: string;
        ctaLabel: string;
        ctaUrl: string;
        children: {
            label: string;
            url: string;
            iconName: string;
            openInNewTab: boolean;
        }[];
    }[];
};
export declare const HEADER_DEFAULT_CENTER: NestedItem[];
export declare const HEADER_DEFAULT_RIGHT: NestedItem[];
export declare const FOOTER_DEFAULT_TOP: NestedItem[];
export declare const FOOTER_DEFAULT_COLUMN1: NestedItem[];
export declare const FOOTER_DEFAULT_COLUMN2: NestedItem[];
export declare const FOOTER_DEFAULT_COLUMN3: NestedItem[];
export declare const FOOTER_DEFAULT_COLUMN4: NestedItem[];
export declare const FOOTER_DEFAULT_BOTTOM: NestedItem[];
export declare function buildModelHeaderData(): Data;
export declare function buildModelFooterData(): Data;
export {};
//# sourceMappingURL=chrome-defaults.d.ts.map