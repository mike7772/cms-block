export type HomeFaqWidgetProps = {
    title: string;
    description: string;
    viewAllLabel: string;
    faq1: string;
    faq1Answer: string;
    faq2: string;
    faq2Answer: string;
    faq3: string;
    faq3Answer: string;
    faq4: string;
    faq4Answer: string;
    faq5: string;
    faq5Answer: string;
};
/**
 * Click-to-expand accordion, matching the interaction pattern of the
 * generic FaqBlock (blocks/faq-block.tsx) — this section previously only
 * rendered the question with no answer data or click behavior at all.
 * Extracted into its own "use client" file (rather than marking all of
 * home.tsx client) so every other section in that file stays a plain
 * server-renderable component, matching the HomeUpdatesWidget precedent.
 */
export declare function HomeFaqWidgetSection(props: HomeFaqWidgetProps): import("react").JSX.Element;
//# sourceMappingURL=home-faq-widget.d.ts.map