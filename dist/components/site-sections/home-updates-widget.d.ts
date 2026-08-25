export type HomeUpdatesWidgetProps = {
    title: string;
    viewAllLabel: string;
    readMoreLabel: string;
};
/**
 * Live-fetches real published posts from the CMS instead of the fixed
 * three-slot placeholder content the site sections started with — handles
 * 0, 1, 2, or any number of published posts gracefully (no fixed count).
 * Fetches client-side (matching CaseSearchWidget/CourtFeeCalculatorWidget's
 * pattern in this same registry) rather than via a Puck resolveData hook, so
 * the same component works unchanged in both the live site (PUBLIC_PORTAL)
 * and the Puck editor's canvas (portal-frontend).
 */
export declare function HomeUpdatesWidgetSection(props: HomeUpdatesWidgetProps): import("react").JSX.Element | null;
//# sourceMappingURL=home-updates-widget.d.ts.map