import type { DOMConversionMap, DOMConversionOutput, DOMExportOutput, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from "lexical";
import { DecoratorNode, $applyNodeReplacement } from "lexical";
import type { JSX } from "react";
import { withBasePath } from "@/lib/utils";

export type SerializedImageNode = Spread<
  {
    src: string;
    altText: string;
    width?: number;
    height?: number;
  },
  SerializedLexicalNode
>;

function convertImageElement(domNode: Node): null | DOMConversionOutput {
  if (domNode instanceof HTMLImageElement) {
    const { src, alt } = domNode;
    const node = $createImageNode(src, alt);
    return { node };
  }
  return null;
}

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __altText: string;
  __width: number | "inherit";
  __height: number | "inherit";

  static getType(): string {
    return "image";
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__width,
      node.__height,
      node.__key
    );
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { src, altText, width, height } = serializedNode;
    return $createImageNode(src, altText, width, height);
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertImageElement,
        priority: 0,
      }),
    };
  }

  constructor(
    src: string,
    altText: string,
    width: number | "inherit" = "inherit",
    height: number | "inherit" = "inherit",
    key?: NodeKey
  ) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width;
    this.__height = height;
  }

  exportDOM(): DOMExportOutput {
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

  exportJSON(): SerializedImageNode {
    return {
      type: "image",
      version: 1,
      src: this.getSrc(),
      altText: this.getAltText(),
      width: this.__width === "inherit" ? undefined : this.__width,
      height: this.__height === "inherit" ? undefined : this.__height,
    };
  }

  getSrc(): string {
    return this.__src;
  }

  getAltText(): string {
    return this.__altText;
  }

  setSrcAndAlt(src: string, altText: string): void {
    const writable = this.getWritable();
    writable.__src = src;
    writable.__altText = altText;
  }

  setWidthAndHeight(
    width: number | "inherit",
    height: number | "inherit"
  ): void {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }

  createDOM(): HTMLElement {
    const span = document.createElement("span");
    return span;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <ImageDecorator
        src={withBasePath(this.__src)}
        altText={this.__altText}
        width={this.__width}
        height={this.__height}
        nodeKey={this.getKey()}
      />
    );
  }

  isInline(): boolean {
    return false;
  }

  isKeyboardSelectable(): boolean {
    return true;
  }
}

function ImageDecorator({
  src,
  altText,
  width,
  height,
}: {
  src: string;
  altText: string;
  width: number | "inherit";
  height: number | "inherit";
  nodeKey: NodeKey;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={altText}
      width={width === "inherit" ? undefined : width}
      height={height === "inherit" ? undefined : height}
      className="mx-auto my-3 max-w-full rounded-md border"
      style={{ maxWidth: "100%" }}
    />
  );
}

export function $createImageNode(
  src: string,
  altText: string,
  width?: number,
  height?: number
): ImageNode {
  const node = new ImageNode(
    src,
    altText,
    width ?? "inherit",
    height ?? "inherit"
  );
  return $applyNodeReplacement(node) as ImageNode;
}

export function $isImageNode(
  node: LexicalNode | null | undefined
): node is ImageNode {
  return node instanceof ImageNode;
}
