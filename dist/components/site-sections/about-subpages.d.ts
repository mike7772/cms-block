/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /about/president and /about/vision-mission pages verbatim.
 */
export type AboutSubpageHeroProps = {
    backLabel: string;
    backUrl: string;
    title: string;
    subtitle: string;
};
export declare function AboutSubpageHeroSection(props: AboutSubpageHeroProps): import("react").JSX.Element;
export type AboutPresidentMessageProps = {
    imageUrl: string;
    imageCaptionTitle: string;
    imageCaptionSubtitle: string;
    quoteText: string;
    bodyHeading: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    bodyParagraph3: string;
    bodyParagraph4: string;
    commitmentHeading: string;
    commitment1: string;
    commitment2: string;
    commitment3: string;
    commitment4: string;
};
export declare function AboutPresidentMessageSection(props: AboutPresidentMessageProps): import("react").JSX.Element;
export type AboutVisionSectionProps = {
    heading: string;
    text: string;
};
export declare function AboutVisionSection(props: AboutVisionSectionProps): import("react").JSX.Element;
export type AboutMissionSectionProps = {
    heading: string;
    text: string;
    pillar1Title: string;
    pillar1Description: string;
    pillar2Title: string;
    pillar2Description: string;
    pillar3Title: string;
    pillar3Description: string;
};
export declare function AboutMissionSection(props: AboutMissionSectionProps): import("react").JSX.Element;
export type AboutCoreValuesSectionProps = {
    heading: string;
    description: string;
    value1Title: string;
    value1Description: string;
    value2Title: string;
    value2Description: string;
    value3Title: string;
    value3Description: string;
    value4Title: string;
    value4Description: string;
};
export declare function AboutCoreValuesSection(props: AboutCoreValuesSectionProps): import("react").JSX.Element;
export type AboutImageBannerProps = {
    imageUrl: string;
    captionTitle: string;
    captionText: string;
};
export declare function AboutImageBannerSection(props: AboutImageBannerProps): import("react").JSX.Element;
//# sourceMappingURL=about-subpages.d.ts.map