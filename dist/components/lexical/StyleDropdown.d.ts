interface StyleDropdownProps {
    label: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    onSelect: (value: string) => void;
    width?: string;
    searchable?: boolean;
    currentValue?: string;
    previewFont?: boolean;
}
export declare function StyleDropdown({ label, options, onSelect, width, searchable, currentValue, previewFont, }: StyleDropdownProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=StyleDropdown.d.ts.map