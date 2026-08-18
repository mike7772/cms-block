import type { DOMConversionMap, DOMExportOutput, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from "lexical";
import { DecoratorNode } from "lexical";
import type { JSX } from "react";
export type SerializedImageNode = Spread<{
    src: string;
    altText: string;
    width?: number;
    height?: number;
}, SerializedLexicalNode>;
export declare class ImageNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __altText: string;
    __width: number | "inherit";
    __height: number | "inherit";
    static getType(): string;
    static clone(node: ImageNode): ImageNode;
    static importJSON(serializedNode: SerializedImageNode): ImageNode;
    static importDOM(): DOMConversionMap | null;
    constructor(src: string, altText: string, width?: number | "inherit", height?: number | "inherit", key?: NodeKey);
    exportDOM(): DOMExportOutput;
    exportJSON(): SerializedImageNode;
    getSrc(): string;
    getAltText(): string;
    setSrcAndAlt(src: string, altText: string): void;
    setWidthAndHeight(width: number | "inherit", height: number | "inherit"): void;
    createDOM(): HTMLElement;
    updateDOM(): false;
    decorate(): JSX.Element;
    isInline(): boolean;
    isKeyboardSelectable(): boolean;
}
export declare function $createImageNode(src: string, altText: string, width?: number, height?: number): ImageNode;
export declare function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode;
//# sourceMappingURL=ImageNode.d.ts.map