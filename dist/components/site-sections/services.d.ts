/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /services page. ServicesFeeCalculator is intentionally NOT here — it embeds
 * a live, app-specific widget, so it's registered locally in the consuming
 * portal app instead (see that app's lib/cms/puck-config.tsx).
 */
export type ServicesHeroProps = {
    title: string;
    description: string;
};
export declare function ServicesHeroSection(props: ServicesHeroProps): import("react").JSX.Element;
export type ServicesGridProps = {
    service1Title: string;
    service1Description: string;
    service1Features: string;
    service2Title: string;
    service2Description: string;
    service2Features: string;
    service3Title: string;
    service3Description: string;
    service3Features: string;
    service4Title: string;
    service4Description: string;
    service4Features: string;
    service5Title: string;
    service5Description: string;
    service5Features: string;
    service6Title: string;
    service6Description: string;
    service6Features: string;
};
export declare function ServicesGridSection(props: ServicesGridProps): import("react").JSX.Element;
export type ServicesAdditionalProps = {
    heading: string;
    description: string;
    item1Title: string;
    item1Description: string;
    item2Title: string;
    item2Description: string;
    item3Title: string;
    item3Description: string;
    item4Title: string;
    item4Description: string;
};
export declare function ServicesAdditionalSection(props: ServicesAdditionalProps): import("react").JSX.Element;
//# sourceMappingURL=services.d.ts.map