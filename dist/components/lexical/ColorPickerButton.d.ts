interface ColorPickerButtonProps {
    onColorChange: (color: string) => void;
    currentColor?: string;
    label?: string;
    title?: string;
    mode?: "text" | "background";
}
export declare function ColorPickerButton({ onColorChange, currentColor, label, title, mode, }: ColorPickerButtonProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ColorPickerButton.d.ts.map