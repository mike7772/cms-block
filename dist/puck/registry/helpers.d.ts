import type { Field, Fields } from "@puckeditor/core";
export declare function selectOptions(values: readonly string[]): Array<{
    label: string;
    value: string;
}>;
export declare function selectField(values: readonly string[]): Field;
export declare function boolField(): Field;
export declare function textField(options?: Partial<Extract<Field, {
    type: "text";
}>>): Field;
export declare function textareaField(options?: Partial<Extract<Field, {
    type: "textarea";
}>>): Field;
/** Recursively enable Puck `contentEditable` on text/textarea fields. */
export declare function enableContentEditableFields(fields: Fields): Fields;
/** Coerce Puck inline-edit ReactNode values back to plain strings when needed. */
export declare function asPlainText(value: unknown): string;
/** Safe first character for avatars/fallback glyphs when value may be a ReactNode. */
export declare function initialLetter(value: unknown, fallback?: string): string;
export declare function hasTextContent(value: unknown): boolean;
export type PuckCategory = "Layout" | "Content" | "Marketing" | "Media" | "Forms" | "Dynamic" | "Navigation" | "Home" | "About" | "Contact" | "Services";
//# sourceMappingURL=helpers.d.ts.map