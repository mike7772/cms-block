"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HorizontalRuleNode, INSERT_HORIZONTAL_RULE_COMMAND, } from "@lexical/react/LexicalHorizontalRuleNode";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TRANSFORMERS } from "@lexical/markdown";
import { $patchStyleText, $setBlocksType, $getSelectionStyleValueForProperty, } from "@lexical/selection";
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister, } from "@lexical/utils";
import { $getRoot, $getSelection, $getPreviousSelection, $setSelection, $isRangeSelection, $isTextNode, $createParagraphNode, $isElementNode, COMMAND_PRIORITY_CRITICAL, FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND, SELECTION_CHANGE_COMMAND, UNDO_COMMAND, REDO_COMMAND, CAN_UNDO_COMMAND, CAN_REDO_COMMAND, } from "lexical";
import { HeadingNode, QuoteNode, $createHeadingNode, $createQuoteNode, $isHeadingNode, $isQuoteNode, } from "@lexical/rich-text";
import { CodeNode, $createCodeNode, $isCodeNode, } from "@lexical/code";
import { ListNode, ListItemNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, INSERT_CHECK_LIST_COMMAND, REMOVE_LIST_COMMAND, } from "@lexical/list";
import { LinkNode, $isLinkNode, TOGGLE_LINK_COMMAND, } from "@lexical/link";
import { TableNode, TableRowNode, TableCellNode, INSERT_TABLE_COMMAND, } from "@lexical/table";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { ImageNode, $createImageNode } from "./lexical/ImageNode.js";
import { InsertTableDialog } from "./lexical/InsertTableDialog.js";
import { InsertLinkDialog } from "./lexical/InsertLinkDialog.js";
import { InsertImageDialog } from "./lexical/InsertImageDialog.js";
import { TableActionMenuPlugin } from "./lexical/TableActionMenuPlugin.js";
import { TableCellResizerPlugin } from "./lexical/TableCellResizerPlugin.js";
import { TableResizeHandlePlugin } from "./lexical/TableResizeHandlePlugin.js";
import { ColorPickerButton } from "./lexical/ColorPickerButton.js";
import { StyleDropdown } from "./lexical/StyleDropdown.js";
import { FontSizeControl } from "./lexical/FontSizeControl.js";
import { Bold, Italic, Underline, Strikethrough, Subscript, Superscript, Highlighter, List, ListOrdered, ListChecks, ListX, Unlink, Undo, Redo, Code, IndentIncrease, IndentDecrease, AlignLeft, AlignCenter, AlignRight, AlignJustify, SeparatorHorizontal, RemoveFormatting, CaseUpper, CaseLower, CaseSensitive, } from "lucide-react";
import { cn } from "../lib/utils.js";
const MOD = typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad|iPod/.test(navigator.platform)
    ? "⌘"
    : "Ctrl+";
const theme = {
    paragraph: "text-base mb-2 leading-relaxed",
    heading: {
        h1: "text-2xl font-bold mb-3 mt-2",
        h2: "text-xl font-semibold mb-2 mt-4",
        h3: "text-lg font-medium mb-2 mt-3",
        h4: "text-base font-semibold mb-2 mt-3",
        h5: "text-sm font-semibold mb-2 mt-2",
        h6: "text-sm font-medium mb-2 mt-2",
    },
    list: {
        ul: "list-disc list-outside mb-3 pl-6",
        ol: "list-decimal list-outside mb-3 pl-6",
        listitem: "mb-1 ml-1",
        listitemChecked: "relative list-none mb-1 pl-6 line-through text-muted-foreground before:absolute before:left-0 before:top-1 before:h-4 before:w-4 before:rounded before:border before:border-sky-dark/40 before:bg-sky-pale before:content-[''] after:absolute after:left-[3px] after:top-1.5 after:h-2 after:w-2.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-foliage after:content-['']",
        listitemUnchecked: "relative list-none mb-1 pl-6 before:absolute before:left-0 before:top-1 before:h-4 before:w-4 before:rounded before:border before:border-sky-dark/40 before:bg-background before:content-['']",
        checklist: "list-none mb-3 pl-1",
        nested: {
            list: "list-disc list-outside ml-4 mt-1 mb-1",
            listitem: "mb-0.5",
        },
    },
    text: {
        bold: "font-bold",
        italic: "italic",
        code: "bg-muted px-1 py-0.5 rounded font-mono text-sm",
        underline: "underline",
        strikethrough: "line-through",
        subscript: "align-sub text-[0.75em]",
        superscript: "align-super text-[0.75em]",
        highlight: "bg-yellow-200/60 rounded px-0.5",
        lowercase: "lowercase",
        uppercase: "uppercase",
        capitalize: "capitalize",
    },
    link: "text-sky-dark underline underline-offset-2 hover:text-foliage transition-colors",
    quote: "border-l-4 border-sky-dark/40 pl-4 italic text-muted-foreground mb-3 my-3",
    code: "bg-muted rounded-md p-3 font-mono text-sm overflow-x-auto mb-3 border border-sky-dark/20",
    hr: "border-0 border-t border-sky-dark/30 my-6",
    horizontalrule: "border-0 border-t border-sky-dark/30 my-6",
    table: "border-collapse table-fixed my-3 max-w-full text-sm border border-sky-dark/30 rounded-md",
    tableRow: "border-b border-sky-dark/25",
    tableRowStriping: "[&_tr:nth-of-type(even)]:bg-sky-pale/50",
    tableCell: "border border-sky-dark/30 px-1.5 py-1 align-top min-w-[2rem] relative text-[13px] leading-snug",
    tableCellHeader: "bg-sky-light/60 font-semibold text-ink",
    tableCellSelected: "bg-sky/35 outline outline-2 outline-sky-dark/45",
    tableHeader: "bg-sky-light/60 font-semibold",
    tableScrollableWrapper: "overflow-x-auto w-full my-3 rounded-md border border-sky-dark/25",
    tableSelected: "outline outline-2 outline-sky-dark/40",
    image: "mx-auto my-3 max-w-full rounded-md border border-sky-dark/25",
};
const BLOCK_TYPE_OPTIONS = [
    { label: "Paragraph", value: "paragraph" },
    { label: "Heading 1", value: "h1" },
    { label: "Heading 2", value: "h2" },
    { label: "Heading 3", value: "h3" },
    { label: "Heading 4", value: "h4" },
    { label: "Heading 5", value: "h5" },
    { label: "Heading 6", value: "h6" },
    { label: "Quote", value: "quote" },
    { label: "Code block", value: "code" },
];
const FONT_FAMILY_OPTIONS = [
    { label: "Default", value: "" },
    { label: "Arial", value: "Arial, Helvetica, sans-serif" },
    { label: "Helvetica", value: "Helvetica, Arial, sans-serif" },
    { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
    { label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
    { label: "Trebuchet MS", value: "'Trebuchet MS', Helvetica, sans-serif" },
    { label: "Gill Sans", value: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif" },
    { label: "Optima", value: "Optima, Segoe, 'Segoe UI', Candara, sans-serif" },
    { label: "Calibri", value: "Calibri, Candara, Segoe, sans-serif" },
    { label: "Segoe UI", value: "'Segoe UI', Tahoma, Geneva, sans-serif" },
    { label: "Candara", value: "Candara, Calibri, Segoe, sans-serif" },
    { label: "Century Gothic", value: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" },
    { label: "Lucida Sans", value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" },
    { label: "Futura", value: "Futura, 'Century Gothic', CenturyGothic, sans-serif" },
    { label: "Franklin Gothic", value: "'Franklin Gothic Medium', 'Arial Narrow Bold', sans-serif" },
    { label: "Avant Garde", value: "AvantGarde, 'Avant Garde', CenturyGothic, sans-serif" },
    { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
    { label: "Georgia", value: "Georgia, Cambria, 'Times New Roman', serif" },
    { label: "Garamond", value: "Garamond, Baskerville, 'Baskerville Old Face', 'Hoefler Text', serif" },
    { label: "Baskerville", value: "Baskerville, 'Baskerville Old Face', Garamond, serif" },
    { label: "Cambria", value: "Cambria, Georgia, serif" },
    { label: "Palatino", value: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif" },
    { label: "Book Antiqua", value: "'Book Antiqua', Palatino, 'Palatino Linotype', serif" },
    { label: "Hoefler Text", value: "'Hoefler Text', 'Baskerville Old Face', Garamond, serif" },
    { label: "Big Caslon", value: "'Big Caslon', 'Book Antiqua', 'Palatino Linotype', serif" },
    { label: "Bodoni MT", value: "'Bodoni MT', Didot, serif" },
    { label: "Didot", value: "Didot, 'Bodoni MT', serif" },
    { label: "Constantia", value: "Constantia, Georgia, serif" },
    { label: "Courier New", value: "'Courier New', Courier, monospace" },
    { label: "Consolas", value: "Consolas, 'Lucida Console', monospace" },
    { label: "Lucida Console", value: "'Lucida Console', Monaco, monospace" },
    { label: "Monaco", value: "Monaco, 'Lucida Console', monospace" },
    { label: "Andale Mono", value: "'Andale Mono', 'Lucida Console', monospace" },
    { label: "Menlo", value: "Menlo, Consolas, monospace" },
    { label: "Brush Script", value: "'Brush Script MT', cursive" },
    { label: "Lucida Handwriting", value: "'Lucida Handwriting', cursive" },
    { label: "Comic Sans", value: "'Comic Sans MS', 'Chalkboard SE', cursive" },
    { label: "Apple Chancery", value: "'Apple Chancery', 'Snell Roundhand', cursive" },
    { label: "Papyrus", value: "Papyrus, fantasy" },
    { label: "Impact", value: "Impact, Haettenschweiler, fantasy" },
    { label: "Roboto", value: "Roboto, Arial, sans-serif" },
    { label: "Open Sans", value: "'Open Sans', Arial, sans-serif" },
    { label: "Lato", value: "Lato, Arial, sans-serif" },
    { label: "Montserrat", value: "Montserrat, Arial, sans-serif" },
    { label: "Source Sans", value: "'Source Sans Pro', Arial, sans-serif" },
    { label: "Raleway", value: "Raleway, Arial, sans-serif" },
    { label: "Nunito", value: "Nunito, Arial, sans-serif" },
    { label: "Inter", value: "Inter, Arial, sans-serif" },
    { label: "Poppins", value: "Poppins, Arial, sans-serif" },
    { label: "Oswald", value: "Oswald, Arial, sans-serif" },
    { label: "PT Sans", value: "'PT Sans', Arial, sans-serif" },
    { label: "Ubuntu", value: "Ubuntu, Arial, sans-serif" },
    { label: "Playfair Display", value: "'Playfair Display', Georgia, serif" },
    { label: "Merriweather", value: "Merriweather, Georgia, serif" },
    { label: "Lora", value: "Lora, Georgia, serif" },
    { label: "PT Serif", value: "'PT Serif', Georgia, serif" },
    { label: "Crimson Text", value: "'Crimson Text', Georgia, serif" },
    { label: "Source Serif", value: "'Source Serif Pro', Georgia, serif" },
    { label: "Roboto Slab", value: "'Roboto Slab', Georgia, serif" },
    { label: "Roboto Mono", value: "'Roboto Mono', Consolas, monospace" },
    { label: "Source Code", value: "'Source Code Pro', Consolas, monospace" },
    { label: "Fira Code", value: "'Fira Code', Consolas, monospace" },
    { label: "JetBrains Mono", value: "'JetBrains Mono', Consolas, monospace" },
    { label: "Space Mono", value: "'Space Mono', Consolas, monospace" },
];
const TEXT_FORMATS = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "subscript",
    "superscript",
    "highlight",
    "code",
    "lowercase",
    "uppercase",
    "capitalize",
];
function onError(error) {
    console.error(error);
}
function ToolbarSeparator() {
    return _jsx("span", { className: "mx-1 h-5 w-px shrink-0 bg-border", "aria-hidden": true });
}
/** Keep editor selection when interacting with toolbar controls. */
function preserveEditorSelection(event) {
    event.preventDefault();
}
/** Prefer the live selection; fall back to the last known range. */
function $getActiveRangeSelection() {
    var _a;
    const selection = (_a = $getSelection()) !== null && _a !== void 0 ? _a : $getPreviousSelection();
    if (!$isRangeSelection(selection))
        return null;
    $setSelection(selection.clone());
    const next = $getSelection();
    return $isRangeSelection(next) ? next : null;
}
function ToolbarButton({ onClick, active = false, disabled = false, label, children, }) {
    return (_jsx("button", { type: "button", onMouseDown: preserveEditorSelection, onClick: onClick, disabled: disabled, "aria-label": label, title: label, className: cn("inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-40", active &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"), children: children }));
}
function getSelectedBlockType() {
    const selection = $getSelection();
    if (!$isRangeSelection(selection))
        return "paragraph";
    const anchorNode = selection.anchor.getNode();
    let element = anchorNode.getKey() === "root"
        ? anchorNode
        : $findMatchingParent(anchorNode, (node) => {
            const parent = node.getParent();
            return parent !== null && parent.getKey() === "root";
        });
    if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
    }
    if ($isHeadingNode(element))
        return element.getTag();
    if ($isQuoteNode(element))
        return "quote";
    if ($isCodeNode(element))
        return "code";
    const listNode = $getNearestNodeOfType(anchorNode, ListNode);
    if (listNode) {
        const listType = listNode.getListType();
        if (listType === "number")
            return "number";
        if (listType === "check")
            return "check";
        return "bullet";
    }
    return "paragraph";
}
function Toolbar() {
    const [editor] = useLexicalComposerContext();
    const [isActive, setIsActive] = useState({});
    const [elementFormat, setElementFormat] = useState("");
    const [blockType, setBlockType] = useState("paragraph");
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [linkUrl, setLinkUrl] = useState("https://");
    const [currentFontSize, setCurrentFontSize] = useState(null);
    const [currentFontFamily, setCurrentFontFamily] = useState(null);
    const [currentTextColor, setCurrentTextColor] = useState("");
    const [currentBgColor, setCurrentBgColor] = useState("");
    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection))
            return;
        setIsActive({
            bold: selection.hasFormat("bold"),
            italic: selection.hasFormat("italic"),
            underline: selection.hasFormat("underline"),
            strikethrough: selection.hasFormat("strikethrough"),
            subscript: selection.hasFormat("subscript"),
            superscript: selection.hasFormat("superscript"),
            highlight: selection.hasFormat("highlight"),
            code: selection.hasFormat("code"),
            uppercase: selection.hasFormat("uppercase"),
            lowercase: selection.hasFormat("lowercase"),
            capitalize: selection.hasFormat("capitalize"),
        });
        setBlockType(getSelectedBlockType());
        const node = selection.anchor.getNode();
        const element = node.getKey() === "root"
            ? node
            : $findMatchingParent(node, (n) => $isElementNode(n) && !n.isInline());
        if (element && $isElementNode(element)) {
            setElementFormat(element.getFormatType());
        }
        else {
            setElementFormat("");
        }
        const linkParent = $findMatchingParent(node, $isLinkNode);
        setIsLink($isLinkNode(linkParent));
        setLinkUrl($isLinkNode(linkParent) ? linkParent.getURL() : "https://");
        const fontSize = $getSelectionStyleValueForProperty(selection, "font-size", "");
        setCurrentFontSize(fontSize ? parseInt(fontSize, 10) || null : null);
        const fontFamily = $getSelectionStyleValueForProperty(selection, "font-family", "");
        setCurrentFontFamily(fontFamily || null);
        setCurrentTextColor($getSelectionStyleValueForProperty(selection, "color", ""));
        setCurrentBgColor($getSelectionStyleValueForProperty(selection, "background-color", ""));
    }, []);
    useEffect(() => {
        return mergeRegister(editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateToolbar();
            });
        }), editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
            updateToolbar();
            return false;
        }, COMMAND_PRIORITY_CRITICAL), editor.registerCommand(CAN_UNDO_COMMAND, (payload) => {
            setCanUndo(payload);
            return false;
        }, COMMAND_PRIORITY_CRITICAL), editor.registerCommand(CAN_REDO_COMMAND, (payload) => {
            setCanRedo(payload);
            return false;
        }, COMMAND_PRIORITY_CRITICAL));
    }, [editor, updateToolbar]);
    function formatBlock(type) {
        editor.update(() => {
            const selection = $getActiveRangeSelection();
            if (!selection)
                return;
            if (type === "paragraph") {
                $setBlocksType(selection, () => $createParagraphNode());
                return;
            }
            if (type === "quote") {
                $setBlocksType(selection, () => $createQuoteNode());
                return;
            }
            if (type === "code") {
                $setBlocksType(selection, () => $createCodeNode());
                return;
            }
            $setBlocksType(selection, () => $createHeadingNode(type));
        });
    }
    function applyStyle(patch) {
        editor.update(() => {
            const selection = $getActiveRangeSelection();
            if (selection) {
                $patchStyleText(selection, patch);
            }
        });
    }
    function clearFormatting() {
        editor.update(() => {
            const selection = $getActiveRangeSelection();
            if (!selection)
                return;
            $patchStyleText(selection, {
                color: null,
                "background-color": null,
                "font-size": null,
                "font-family": null,
            });
            for (const format of TEXT_FORMATS) {
                if (selection.hasFormat(format)) {
                    selection.toggleFormat(format);
                }
            }
            for (const node of selection.getNodes()) {
                if ($isTextNode(node)) {
                    node.setFormat(0);
                    node.setStyle("");
                }
                else if ($isElementNode(node) && !node.isInline()) {
                    node.setFormat("");
                }
            }
        });
    }
    function insertImage(url, alt) {
        editor.update(() => {
            const selection = $getActiveRangeSelection();
            if (!selection)
                return;
            selection.insertNodes([$createImageNode(url, alt)]);
        });
    }
    function insertTable(rows, columns) {
        editor.dispatchCommand(INSERT_TABLE_COMMAND, {
            rows: String(rows),
            columns: String(columns),
        });
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const top = selection.anchor.getNode().getTopLevelElement();
                if (top) {
                    top.insertAfter($createParagraphNode());
                }
            }
        });
    }
    const blockDropdownValue = blockType === "bullet" ||
        blockType === "number" ||
        blockType === "check"
        ? "paragraph"
        : blockType;
    return (_jsxs("div", { className: "sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b border-sky-dark/25 bg-muted/60 px-1.5 py-1.5 backdrop-blur-sm", onMouseDown: (e) => {
            // Don't steal focus from the editor when clicking toolbar chrome.
            // Inputs/selects inside still receive focus when intended.
            const target = e.target;
            if (target.closest("input, textarea, select, [data-allow-toolbar-focus='true']")) {
                return;
            }
            preserveEditorSelection(e);
        }, children: [_jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(UNDO_COMMAND, undefined), disabled: !canUndo, label: `Undo (${MOD}Z)`, children: _jsx(Undo, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(REDO_COMMAND, undefined), disabled: !canRedo, label: `Redo (${MOD}⇧Z)`, children: _jsx(Redo, { className: "h-4 w-4" }) }), _jsx(ToolbarSeparator, {}), _jsx(StyleDropdown, { label: "Style", options: BLOCK_TYPE_OPTIONS, onSelect: formatBlock, width: "w-28", currentValue: blockDropdownValue }), _jsx(ToolbarSeparator, {}), _jsx(StyleDropdown, { label: "Font", options: FONT_FAMILY_OPTIONS, onSelect: (family) => applyStyle({ "font-family": family || null }), width: "w-24", searchable: true, currentValue: currentFontFamily !== null && currentFontFamily !== void 0 ? currentFontFamily : undefined, previewFont: true }), _jsx(FontSizeControl, { currentSize: currentFontSize, onSetSize: (size) => applyStyle({ "font-size": size || null }) }), _jsx(ToolbarSeparator, {}), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"), active: isActive.bold, label: `Bold (${MOD}B)`, children: _jsx(Bold, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"), active: isActive.italic, label: `Italic (${MOD}I)`, children: _jsx(Italic, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"), active: isActive.underline, label: `Underline (${MOD}U)`, children: _jsx(Underline, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough"), active: isActive.strikethrough, label: "Strikethrough", children: _jsx(Strikethrough, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "highlight"), active: isActive.highlight, label: "Highlight", children: _jsx(Highlighter, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code"), active: isActive.code, label: "Inline code", children: _jsx(Code, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript"), active: isActive.subscript, label: "Subscript", children: _jsx(Subscript, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript"), active: isActive.superscript, label: "Superscript", children: _jsx(Superscript, { className: "h-4 w-4" }) }), _jsx(ToolbarSeparator, {}), _jsx(ColorPickerButton, { mode: "text", title: "Text color", currentColor: currentTextColor, onColorChange: (color) => applyStyle({ color: color || null }) }), _jsx(ColorPickerButton, { mode: "background", title: "Background color", currentColor: currentBgColor, onColorChange: (color) => applyStyle({ "background-color": color || null }) }), _jsx(ToolbarSeparator, {}), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left"), active: elementFormat === "left" ||
                    elementFormat === "start" ||
                    elementFormat === "", label: "Align left", children: _jsx(AlignLeft, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center"), active: elementFormat === "center", label: "Align center", children: _jsx(AlignCenter, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right"), active: elementFormat === "right" || elementFormat === "end", label: "Align right", children: _jsx(AlignRight, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify"), active: elementFormat === "justify", label: "Justify", children: _jsx(AlignJustify, { className: "h-4 w-4" }) }), _jsx(ToolbarSeparator, {}), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined), active: blockType === "bullet", label: "Bullet list", children: _jsx(List, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined), active: blockType === "number", label: "Numbered list", children: _jsx(ListOrdered, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined), active: blockType === "check", label: "Checklist", children: _jsx(ListChecks, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined), label: "Remove list", children: _jsx(ListX, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined), label: "Decrease indent", children: _jsx(IndentDecrease, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined), label: "Increase indent", children: _jsx(IndentIncrease, { className: "h-4 w-4" }) }), _jsx(ToolbarSeparator, {}), _jsx(InsertLinkDialog, { active: isLink, initialUrl: linkUrl, title: `Insert link (${MOD}K)`, onInsert: (url) => editor.dispatchCommand(TOGGLE_LINK_COMMAND, url) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(TOGGLE_LINK_COMMAND, null), disabled: !isLink, label: "Remove link", children: _jsx(Unlink, { className: "h-4 w-4" }) }), _jsx(InsertImageDialog, { onInsert: insertImage }), _jsx(InsertTableDialog, { onInsert: insertTable }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined), label: "Horizontal rule", children: _jsx(SeparatorHorizontal, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: clearFormatting, label: "Clear formatting", children: _jsx(RemoveFormatting, { className: "h-4 w-4" }) }), _jsx(ToolbarSeparator, {}), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "uppercase"), active: isActive.uppercase, label: "Uppercase", children: _jsx(CaseUpper, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "lowercase"), active: isActive.lowercase, label: "Lowercase", children: _jsx(CaseLower, { className: "h-4 w-4" }) }), _jsx(ToolbarButton, { onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "capitalize"), active: isActive.capitalize, label: "Capitalize", children: _jsx(CaseSensitive, { className: "h-4 w-4" }) })] }));
}
function HtmlImportPlugin({ value, autosaveKey, lastEmittedHtmlRef, isInternalUpdateRef, }) {
    const [editor] = useLexicalComposerContext();
    const lastImportedHtml = useRef(null);
    const didInitialImport = useRef(false);
    const storageKeyRef = useRef(autosaveKey !== null && autosaveKey !== void 0 ? autosaveKey : "");
    storageKeyRef.current = autosaveKey !== null && autosaveKey !== void 0 ? autosaveKey : "";
    useEffect(() => {
        let nextValue = value;
        if (!didInitialImport.current) {
            didInitialImport.current = true;
            if (!nextValue && storageKeyRef.current) {
                try {
                    const draft = localStorage.getItem(storageKeyRef.current);
                    if (draft)
                        nextValue = draft;
                }
                catch (_a) {
                    // ignore storage errors
                }
            }
        }
        else {
            if (nextValue === lastEmittedHtmlRef.current) {
                lastImportedHtml.current = nextValue;
                isInternalUpdateRef.current = false;
                return;
            }
            if (nextValue === lastImportedHtml.current)
                return;
            if (isInternalUpdateRef.current)
                return;
        }
        if (!nextValue) {
            if (lastImportedHtml.current === "")
                return;
            lastImportedHtml.current = "";
            editor.update(() => {
                $getRoot().clear();
                $getRoot().append($createParagraphNode());
            });
            return;
        }
        if (nextValue === lastImportedHtml.current)
            return;
        lastImportedHtml.current = nextValue;
        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(nextValue, "text/html");
            const nodes = $generateNodesFromDOM(editor, dom);
            const root = $getRoot();
            root.clear();
            if (nodes.length > 0) {
                root.append(...nodes);
            }
            else {
                root.append($createParagraphNode());
            }
        });
    }, [editor, value]);
    return null;
}
function WordCountPlugin({ onCountChange, }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const text = $getRoot().getTextContent();
                const characters = text.length;
                const trimmed = text.trim();
                const words = trimmed ? trimmed.split(/\s+/).length : 0;
                onCountChange(words, characters);
            });
        });
    }, [editor, onCountChange]);
    return null;
}
function EditablePlugin({ editable }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.setEditable(editable);
    }, [editor, editable]);
    return null;
}
function EditorRefPlugin({ editorRef, }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editorRef.current = editor;
    }, [editor, editorRef]);
    return null;
}
function AutosavePlugin({ storageKey, onStatusChange, }) {
    const [editor] = useLexicalComposerContext();
    const timerRef = useRef(null);
    const lastSavedRef = useRef(null);
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            let html = "";
            editorState.read(() => {
                html = $generateHtmlFromNodes(editor);
            });
            if (html === lastSavedRef.current)
                return;
            onStatusChange("saving");
            if (timerRef.current)
                clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                try {
                    localStorage.setItem(storageKey, html);
                    lastSavedRef.current = html;
                    onStatusChange("saved");
                }
                catch (_a) {
                    onStatusChange("idle");
                }
            }, 800);
        });
    }, [editor, storageKey, onStatusChange]);
    useEffect(() => {
        return () => {
            if (timerRef.current)
                clearTimeout(timerRef.current);
        };
    }, []);
    return null;
}
class EditorErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, info) {
        this.props.onError(error);
        console.error("Lexical editor error:", error, info);
    }
    render() {
        if (this.state.error) {
            return (_jsxs("div", { className: "m-4 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive", children: [_jsx("p", { className: "font-medium", children: "Something went wrong in the editor." }), _jsx("p", { className: "mt-1 text-muted-foreground", children: this.state.error.message || "An unexpected error occurred." }), _jsx("button", { type: "button", className: "mt-3 rounded-md border px-2 py-1 text-xs hover:bg-accent", onClick: () => this.setState({ error: null }), children: "Try again" })] }));
        }
        return this.props.children;
    }
}
export default function LexicalEditor({ value, onChange, autosaveKey, placeholder = "Start writing…", minHeight = "24rem", className, editable = true, autoFocus = false, }) {
    const editorRef = useRef(null);
    const lastEmittedHtmlRef = useRef(null);
    const isInternalUpdateRef = useRef(false);
    const [autosaveStatus, setAutosaveStatus] = useState("idle");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const initialConfig = useMemo(() => ({
        namespace: "PortalRichTextEditor",
        editable,
        nodes: [
            HeadingNode,
            QuoteNode,
            CodeNode,
            ListNode,
            ListItemNode,
            LinkNode,
            HorizontalRuleNode,
            TableNode,
            TableRowNode,
            TableCellNode,
            ImageNode,
        ],
        onError,
        theme,
    }), 
    // editable is synced via EditablePlugin after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const resolvedMinHeight = typeof minHeight === "number" ? `${minHeight}px` : minHeight;
    const handleChange = useCallback((editorState, editor) => {
        editorState.read(() => {
            const html = $generateHtmlFromNodes(editor);
            lastEmittedHtmlRef.current = html;
            isInternalUpdateRef.current = true;
            onChange(html);
        });
    }, [onChange]);
    const handleCountChange = useCallback((words, characters) => {
        setWordCount(words);
        setCharCount(characters);
    }, []);
    return (_jsx(LexicalComposer, { initialConfig: initialConfig, children: _jsxs("div", { className: cn("overflow-hidden rounded-md border border-sky-dark/25 bg-background shadow-sm focus-within:ring-2 focus-within:ring-sky-dark/30 focus-within:ring-offset-1", className), children: [_jsx(Toolbar, {}), _jsx(HtmlImportPlugin, { value: value, autosaveKey: autosaveKey, lastEmittedHtmlRef: lastEmittedHtmlRef, isInternalUpdateRef: isInternalUpdateRef }), _jsx("div", { className: "relative resize-y overflow-y-auto", style: { minHeight: resolvedMinHeight }, children: _jsx(RichTextPlugin, { contentEditable: _jsx(ContentEditable, { className: "editor-content max-w-none min-h-96 px-4 py-3 text-foreground outline-none focus:outline-none [&_a]:text-sky-dark [&_a]:underline", "aria-placeholder": placeholder, placeholder: _jsx("div", { className: "pointer-events-none absolute left-4 top-3 text-sm text-muted-foreground", children: placeholder }), style: { minHeight: resolvedMinHeight } }), ErrorBoundary: EditorErrorBoundary }) }), _jsxs("div", { className: "flex items-center justify-between gap-3 border-t border-sky-dark/20 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("span", { children: [wordCount, " ", wordCount === 1 ? "word" : "words"] }), _jsx("span", { "aria-hidden": true, children: "\u00B7" }), _jsxs("span", { children: [charCount, " ", charCount === 1 ? "character" : "characters"] })] }), autosaveKey ? (_jsxs("span", { children: [autosaveStatus === "saving" && "Saving draft…", autosaveStatus === "saved" && "Draft saved"] })) : null] }), _jsx(HistoryPlugin, {}), _jsx(ListPlugin, {}), _jsx(CheckListPlugin, {}), _jsx(LinkPlugin, {}), _jsx(TablePlugin, { hasHorizontalScroll: true, hasCellMerge: true, hasCellBackgroundColor: true }), _jsx(TableActionMenuPlugin, {}), _jsx(TableCellResizerPlugin, {}), _jsx(TableResizeHandlePlugin, {}), _jsx(HorizontalRulePlugin, {}), _jsx(TabIndentationPlugin, {}), _jsx(MarkdownShortcutPlugin, { transformers: TRANSFORMERS }), _jsx(EditablePlugin, { editable: editable }), autoFocus ? _jsx(AutoFocusPlugin, {}) : null, _jsx(EditorRefPlugin, { editorRef: editorRef }), _jsx(OnChangePlugin, { onChange: handleChange, ignoreSelectionChange: true }), _jsx(WordCountPlugin, { onCountChange: handleCountChange }), autosaveKey ? (_jsx(AutosavePlugin, { storageKey: autosaveKey, onStatusChange: setAutosaveStatus })) : null] }) }));
}
