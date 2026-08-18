"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { $getTableCellNodeFromLexicalNode, $getTableNodeFromLexicalNodeOrThrow, $isTableCellNode, $isTableNode, $isTableRowNode, $isTableSelection, } from "@lexical/table";
import { calculateZoomLevel } from "@lexical/utils";
import { $getNodeByKey, $getSelection, $isRangeSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND, SKIP_SCROLL_INTO_VIEW_TAG, } from "lexical";
const MIN_TABLE_WIDTH = 150;
const MIN_COLUMN_WIDTH = 48;
const MIN_ROW_HEIGHT = 28;
const HANDLE_SIZE = 10;
function getTableDom(editorElement) {
    if (!editorElement)
        return null;
    if (editorElement.tagName === "TABLE")
        return editorElement;
    return editorElement.querySelector("table");
}
export function TableResizeHandlePlugin() {
    const [editor] = useLexicalComposerContext();
    const isEditable = useLexicalEditable();
    const [tableKey, setTableKey] = useState(null);
    const [handlePos, setHandlePos] = useState(null);
    const draggingRef = useRef(false);
    const startPosRef = useRef(null);
    const startColWidthsRef = useRef(null);
    const startRowHeightsRef = useRef(null);
    const startTableWidthRef = useRef(0);
    const startTableHeightRef = useRef(0);
    const tableKeyRef = useRef(null);
    const updateHandle = useCallback(() => {
        editor.read("latest", () => {
            const selection = $getSelection();
            let cell = null;
            if ($isRangeSelection(selection)) {
                cell = $getTableCellNodeFromLexicalNode(selection.anchor.getNode());
            }
            else if ($isTableSelection(selection)) {
                const node = selection.anchor.getNode();
                cell = $isTableCellNode(node)
                    ? node
                    : $getTableCellNodeFromLexicalNode(node);
            }
            if (!cell) {
                setTableKey(null);
                tableKeyRef.current = null;
                setHandlePos(null);
                return;
            }
            try {
                const tableNode = $getTableNodeFromLexicalNodeOrThrow(cell);
                const key = tableNode.getKey();
                setTableKey(key);
                tableKeyRef.current = key;
                const tableDom = getTableDom(editor.getElementByKey(key));
                if (!tableDom) {
                    setHandlePos(null);
                    return;
                }
                const rect = tableDom.getBoundingClientRect();
                setHandlePos({
                    top: rect.bottom - HANDLE_SIZE / 2,
                    left: rect.right - HANDLE_SIZE / 2,
                });
            }
            catch (_a) {
                setTableKey(null);
                tableKeyRef.current = null;
                setHandlePos(null);
            }
        });
    }, [editor]);
    useEffect(() => {
        if (!isEditable)
            return;
        return editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
            updateHandle();
            return false;
        }, COMMAND_PRIORITY_CRITICAL);
    }, [editor, isEditable, updateHandle]);
    useEffect(() => {
        if (!isEditable)
            return;
        return editor.registerUpdateListener(() => {
            if (!draggingRef.current)
                updateHandle();
        });
    }, [editor, isEditable, updateHandle]);
    useEffect(() => {
        if (!isEditable)
            return;
        const onScrollOrResize = () => {
            if (!draggingRef.current)
                updateHandle();
        };
        window.addEventListener("scroll", onScrollOrResize, true);
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            window.removeEventListener("scroll", onScrollOrResize, true);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, [isEditable, updateHandle]);
    const onPointerDown = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        const key = tableKeyRef.current;
        if (!key)
            return;
        const tableDom = getTableDom(editor.getElementByKey(key));
        if (!tableDom)
            return;
        const rect = tableDom.getBoundingClientRect();
        startPosRef.current = { x: event.clientX, y: event.clientY };
        startTableWidthRef.current = rect.width;
        startTableHeightRef.current = rect.height;
        editor.read("latest", () => {
            const tableNode = $getNodeByKey(key);
            if (!$isTableNode(tableNode))
                return;
            const colWidths = tableNode.getColWidths();
            if (colWidths) {
                startColWidthsRef.current = [...colWidths];
            }
            else {
                const count = tableNode.getColumnCount();
                const even = rect.width / Math.max(count, 1);
                startColWidthsRef.current = Array.from({ length: count }, () => even);
            }
            startRowHeightsRef.current = tableNode.getChildren().map((row) => {
                var _a, _b;
                if (!$isTableRowNode(row))
                    return undefined;
                return ((_a = row.getHeight()) !== null && _a !== void 0 ? _a : (_b = editor.getElementByKey(row.getKey())) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().height);
            });
        });
        draggingRef.current = true;
        const onMove = (e) => {
            var _a;
            e.preventDefault();
            const start = startPosRef.current;
            const startWidths = startColWidthsRef.current;
            const startHeights = startRowHeightsRef.current;
            if (!start || !startWidths)
                return;
            const zoom = calculateZoomLevel(tableDom);
            const dx = (e.clientX - start.x) / zoom;
            const dy = (e.clientY - start.y) / zoom;
            const startWidth = startTableWidthRef.current || 1;
            const startHeight = startTableHeightRef.current || 1;
            const scaleX = Math.max((startWidth + dx) / startWidth, MIN_TABLE_WIDTH / startWidth);
            const scaleY = Math.max((startHeight + dy) / startHeight, 0.25);
            editor.update(() => {
                const tableNode = $getNodeByKey(key);
                if (!$isTableNode(tableNode))
                    return;
                tableNode.setColWidths(startWidths.map((w) => Math.max(Math.round(w * scaleX), MIN_COLUMN_WIDTH)));
                if (startHeights) {
                    tableNode.getChildren().forEach((row, i) => {
                        if (!$isTableRowNode(row))
                            return;
                        const h = startHeights[i];
                        if (h == null)
                            return;
                        row.setHeight(Math.max(Math.round(h * scaleY), MIN_ROW_HEIGHT));
                    });
                }
            }, { tag: SKIP_SCROLL_INTO_VIEW_TAG });
            const nextDom = (_a = getTableDom(editor.getElementByKey(key))) !== null && _a !== void 0 ? _a : tableDom;
            const nextRect = nextDom.getBoundingClientRect();
            setHandlePos({
                top: nextRect.bottom - HANDLE_SIZE / 2,
                left: nextRect.right - HANDLE_SIZE / 2,
            });
        };
        const onUp = () => {
            draggingRef.current = false;
            startPosRef.current = null;
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
            updateHandle();
        };
        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
    }, [editor, updateHandle]);
    if (!isEditable ||
        !tableKey ||
        !handlePos ||
        typeof document === "undefined") {
        return null;
    }
    return createPortal(_jsx("div", { role: "separator", "aria-label": "Resize table", title: "Resize table", onPointerDown: onPointerDown, className: "pointer-events-auto fixed z-[85] rounded-sm border border-sky-dark/50 bg-sky-light shadow-md", style: {
            top: handlePos.top,
            left: handlePos.left,
            width: HANDLE_SIZE,
            height: HANDLE_SIZE,
            cursor: "nwse-resize",
        } }), document.body);
}
