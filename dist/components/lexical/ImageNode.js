import { jsx as _jsx } from "react/jsx-runtime";
import { DecoratorNode, $applyNodeReplacement } from "lexical";
import { withBasePath } from "../../lib/utils.js";
function convertImageElement(domNode) {
    if (domNode instanceof HTMLImageElement) {
        const { src, alt } = domNode;
        const node = $createImageNode(src, alt);
        return { node };
    }
    return null;
}
export class ImageNode extends DecoratorNode {
    static getType() {
        return "image";
    }
    static clone(node) {
        return new ImageNode(node.__src, node.__altText, node.__width, node.__height, node.__key);
    }
    static importJSON(serializedNode) {
        const { src, altText, width, height } = serializedNode;
        return $createImageNode(src, altText, width, height);
    }
    static importDOM() {
        return {
            img: () => ({
                conversion: convertImageElement,
                priority: 0,
            }),
        };
    }
    constructor(src, altText, width = "inherit", height = "inherit", key) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__width = width;
        this.__height = height;
    }
    exportDOM() {
        const element = document.createElement("img");
        element.setAttribute("src", this.__src);
        element.setAttribute("alt", this.__altText);
        if (this.__width !== "inherit") {
            element.setAttribute("width", String(this.__width));
        }
        if (this.__height !== "inherit") {
            element.setAttribute("height", String(this.__height));
        }
        return { element };
    }
    exportJSON() {
        return {
            type: "image",
            version: 1,
            src: this.getSrc(),
            altText: this.getAltText(),
            width: this.__width === "inherit" ? undefined : this.__width,
            height: this.__height === "inherit" ? undefined : this.__height,
        };
    }
    getSrc() {
        return this.__src;
    }
    getAltText() {
        return this.__altText;
    }
    setSrcAndAlt(src, altText) {
        const writable = this.getWritable();
        writable.__src = src;
        writable.__altText = altText;
    }
    setWidthAndHeight(width, height) {
        const writable = this.getWritable();
        writable.__width = width;
        writable.__height = height;
    }
    createDOM() {
        const span = document.createElement("span");
        return span;
    }
    updateDOM() {
        return false;
    }
    decorate() {
        return (_jsx(ImageDecorator, { src: withBasePath(this.__src), altText: this.__altText, width: this.__width, height: this.__height, nodeKey: this.getKey() }));
    }
    isInline() {
        return false;
    }
    isKeyboardSelectable() {
        return true;
    }
}
function ImageDecorator({ src, altText, width, height, }) {
    return (
    // eslint-disable-next-line @next/next/no-img-element
    _jsx("img", { src: src, alt: altText, width: width === "inherit" ? undefined : width, height: height === "inherit" ? undefined : height, className: "mx-auto my-3 max-w-full rounded-md border", style: { maxWidth: "100%" } }));
}
export function $createImageNode(src, altText, width, height) {
    const node = new ImageNode(src, altText, width !== null && width !== void 0 ? width : "inherit", height !== null && height !== void 0 ? height : "inherit");
    return $applyNodeReplacement(node);
}
export function $isImageNode(node) {
    return node instanceof ImageNode;
}
