export declare const DEFAULT_HOW_TO_USE_STEPS: string[];
export type CourtFeeCalculatorWidgetProps = {
    howToUseStep1?: string;
    howToUseStep2?: string;
    howToUseStep3?: string;
    howToUseStep4?: string;
};
/** Interactive court-fee calculator: debounced amount input, live POST to
 * OCCMS-Backend's calculation endpoint, plus the "How to Use" card (CMS-
 * editable, one field per step) and the static fee-schedule list — a full,
 * identical port of PUBLIC_PORTAL's CourtFeeCalculatorNew (same container/
 * grid structure as the original, so it renders the same wherever it's
 * embedded: home page, services page). */
export declare function CourtFeeCalculatorWidget(props: CourtFeeCalculatorWidgetProps): import("react").JSX.Element;
//# sourceMappingURL=fee-calculator-widget.d.ts.map