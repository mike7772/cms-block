interface LexicalEditorProps {
    value: string;
    onChange: (html: string) => void;
    autosaveKey?: string;
    placeholder?: string;
    minHeight?: string | number;
    className?: string;
    editable?: boolean;
    autoFocus?: boolean;
}
export default function LexicalEditor({ value, onChange, autosaveKey, placeholder, minHeight, className, editable, autoFocus, }: LexicalEditorProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=LexicalEditor.d.ts.map