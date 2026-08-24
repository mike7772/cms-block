export type HowToUseStep = {
    text: string;
};
export declare const DEFAULT_HOW_TO_USE_STEPS: HowToUseStep[];
export type CourtFeeCalculatorWidgetProps = {
    howToUseSteps?: HowToUseStep[];
} & ServiceFeesListProps;
/** Interactive court-fee calculator: debounced amount input, live POST to
 * OCCMS-Backend's calculation endpoint, plus the "How to Use" card (CMS-
 * editable as an add/remove/reorder list, no fixed count) and the static
 * fee-schedule list — a full, identical port of PUBLIC_PORTAL's
 * CourtFeeCalculatorNew (same container/grid structure as the original, so
 * it renders the same wherever it's embedded: home page, services page). */
export declare function CourtFeeCalculatorWidget(props: CourtFeeCalculatorWidgetProps): import("react").JSX.Element;
export type ServiceFeeItem = {
    description: string;
    fee: string;
};
export type ServiceCategory = {
    title: string;
    items: ServiceFeeItem[];
};
export declare const DEFAULT_SERVICE_CATEGORIES: ServiceCategory[];
export type ServiceFeesListProps = {
    feeCategories?: ServiceCategory[];
};
//# sourceMappingURL=fee-calculator-widget.d.ts.map