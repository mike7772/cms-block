/**
 * Content-editable section components reproducing the OCCMS public portal's
 * "/" landing page. Structural layout and icons are fixed; text, links, and
 * list items are prop-driven so an admin can edit them per-instance in the
 * Puck page-builder. HomeSearch and HomeFeeCalculator are intentionally NOT
 * here — they embed live, app-specific widgets (case search, fee calculator)
 * that only exist in the consuming portal app, so they're registered locally
 * there instead (see that app's lib/cms/puck-config.tsx).
 */
export type HomeHeroProps = {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    fileNewCaseLabel: string;
    trackCaseStatusLabel: string;
    imageUrl: string;
    buildingCaption: string;
};
export declare function HomeHeroSection(props: HomeHeroProps): import("react").JSX.Element;
export type HomeAboutUsProps = {
    badge: string;
    heading: string;
    description: string;
    visionHeading: string;
    visionText: string;
    missionHeading: string;
    missionText: string;
    ctaLabel: string;
    ctaUrl: string;
    videoUrl: string;
};
export declare function HomeAboutUsSection(props: HomeAboutUsProps): import("react").JSX.Element;
export type HomeFeaturesProps = {
    feature1Title: string;
    feature1Description: string;
    feature2Title: string;
    feature2Description: string;
    feature3Title: string;
    feature3Description: string;
    feature4Title: string;
    feature4Description: string;
};
export declare function HomeFeaturesSection(props: HomeFeaturesProps): import("react").JSX.Element;
export type HomeCoreFeaturesProps = {
    badge: string;
    title: string;
    description: string;
    learnMoreLabel: string;
    item1Title: string;
    item1Description: string;
    item2Title: string;
    item2Description: string;
    item3Title: string;
    item3Description: string;
};
export declare function HomeCoreFeaturesSection(props: HomeCoreFeaturesProps): import("react").JSX.Element;
export type HomeStatsProps = {
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
};
export declare function HomeStatsSection(props: HomeStatsProps): import("react").JSX.Element;
export type HomeCtaProps = {
    heading: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    newsletterHeading: string;
    newsletterDescription: string;
    emailPlaceholder: string;
    subscribeButtonLabel: string;
    disclaimerText: string;
};
export declare function HomeCtaSection(props: HomeCtaProps): import("react").JSX.Element;
export type HomeContactInfoProps = {
    visitTitle: string;
    visitAddress: string;
    visitActionLabel: string;
    callTitle: string;
    callPhone: string;
    callHours: string;
    callActionLabel: string;
    callHref: string;
    emailTitle: string;
    emailAddress: string;
    emailResponseTime: string;
    emailActionLabel: string;
    emailHref: string;
};
export declare function HomeContactInfoSection(props: HomeContactInfoProps): import("react").JSX.Element;
//# sourceMappingURL=home.d.ts.map