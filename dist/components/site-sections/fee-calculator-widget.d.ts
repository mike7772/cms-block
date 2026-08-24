export declare const DEFAULT_HOW_TO_USE_STEPS: string[];
export type CourtFeeCalculatorWidgetProps = {
    howToUseStep1?: string;
    howToUseStep2?: string;
    howToUseStep3?: string;
    howToUseStep4?: string;
} & ServiceFeesListProps;
/** Interactive court-fee calculator: debounced amount input, live POST to
 * OCCMS-Backend's calculation endpoint, plus the "How to Use" card (CMS-
 * editable, one field per step) and the static fee-schedule list — a full,
 * identical port of PUBLIC_PORTAL's CourtFeeCalculatorNew (same container/
 * grid structure as the original, so it renders the same wherever it's
 * embedded: home page, services page). */
export declare function CourtFeeCalculatorWidget(props: CourtFeeCalculatorWidgetProps): import("react").JSX.Element;
type ServiceFeeItem = {
    description: string;
    fee: string;
};
/** One line per item: "description | fee". Lets editors add/remove/reorder
 * items in a single textarea instead of needing a field per item. */
export declare function serializeFeeItems(items: ServiceFeeItem[]): string;
/** Puck field key (in DEFAULT_SERVICE_CATEGORIES order) for each category's
 * items — one pipe-delimited textarea per category, title stays fixed. */
export declare const CATEGORY_ITEM_KEYS: string[];
export type ServiceFeesListProps = Partial<Record<(typeof CATEGORY_ITEM_KEYS)[number], string>>;
/** The registry's defaultProps for the categoryNItems fields — each
 * pre-filled with its category's current default items, serialized. */
export declare function defaultServiceFeesListProps(): Record<string, string>;
export {};
//# sourceMappingURL=fee-calculator-widget.d.ts.map