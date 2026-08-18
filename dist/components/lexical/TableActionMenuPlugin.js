"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $deleteTableColumnAtSelection, $deleteTableRowAtSelection, $getTableCellNodeFromLexicalNode, $getTableColumnIndexFromTableCellNode, $getTableNodeFromLexicalNodeOrThrow, $getTableRowIndexFromTableCellNode, $insertTableColumnAtSelection, $insertTableRowAtSelection, $isTableCellNode, $isTableSelection, $mergeCells, $setTableColumnIsHeader, $setTableRowIsHeader, $unmergeCell, TableCellHeaderStates, } from "@lexical/table";
import { $getSelection, $isRangeSelection, } from "lexical";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Columns3, Ellipsis, Grid2x2, Merge, PaintBucket, Plus, Rows3, Split, Trash2, } from "lucide-react";
import { cn } from "@/lib/utils";
import { ColorPickerButton } from "./ColorPickerButton";
const DEFAULT_COLUMN_WIDTH = 88;
function ActionButton({ label, icon, onClick, danger = false, compact = false, disabled = false, active = false, }) {
    return (_jsxs("button", { type: "button", title: label, "aria-label": label, disabled: disabled, onMouseDown: (e) => e.preventDefault(), onClick: onClick, className: cn("inline-flex items-center justify-center gap-1 rounded-md text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40", compact ? "h-6 w-6" : "h-7 px-2", danger
            ? "text-red-700 hover:bg-red-50"
            : active
                ? "bg-sky-pale text-ink"
                : "text-ink/80 hover:bg-sky-pale hover:text-ink"), children: [icon, !compact ? _jsx("span", { className: "hidden sm:inline", children: label }) : null] }));
}
function Separator() {
    return _jsx("span", { className: "mx-0.5 h-5 w-px bg-sky-dark/20", "aria-hidden": true });
}
function $getSelectedTableCell() {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
        return $getTableCellNodeFromLexicalNode(selection.anchor.getNode());
    }
    if ($isTableSelection(selection)) {
        const node = selection.anchor.getNode();
        return $isTableCellNode(node)
            ? node
            : $getTableCellNodeFromLexicalNode(node);
    }
    return null;
}
function $getSelectedTableCells() {
    const selection = $getSelection();
    if ($isTableSelection(selection)) {
        return selection.getNodes().filter($isTableCellNode);
    }
    const cell = $getSelectedTableCell();
    return cell ? [cell] : [];
}
export function TableActionMenuPlugin() {
    const [editor] = useLexicalComposerContext();
    const [active, setActive] = useState(false);
    const [menuPos, setMenuPos] = useState(null);
    const [edgePos, setEdgePos] = useState(null);
    const [isHeaderCell, setIsHeaderCell] = useState(false);
    const [isHeaderRow, setIsHeaderRow] = useState(false);
    const [isHeaderCol, setIsHeaderCol] = useState(false);
    const [rowStriping, setRowStriping] = useState(false);
    const [canMerge, setCanMerge] = useState(false);
    const [canUnmerge, setCanUnmerge] = useState(false);
    const [cellBg, setCellBg] = useState("");
    const [moreOpen, setMoreOpen] = useState(false);
    const moreRef = useRef(null);
    const menuRef = useRef(null);
    const closeMenu = useCallback(() => {
        setActive(false);
        setMenuPos(null);
        setEdgePos(null);
        setMoreOpen(false);
    }, []);
    const refreshMenuState = useCallback(() => {
        editor.read("latest", () => {
            var _a;
            const cell = $getSelectedTableCell();
            if (!cell) {
                closeMenu();
                return;
            }
            setIsHeaderCell(cell.hasHeader());
            setIsHeaderRow(cell.hasHeaderState(TableCellHeaderStates.ROW));
            setIsHeaderCol(cell.hasHeaderState(TableCellHeaderStates.COLUMN));
            setCanUnmerge(cell.getColSpan() > 1 || cell.getRowSpan() > 1);
            setCellBg((_a = cell.getBackgroundColor()) !== null && _a !== void 0 ? _a : "");
            const selection = $getSelection();
            if ($isTableSelection(selection)) {
                const cells = selection.getNodes().filter($isTableCellNode);
                setCanMerge(cells.length > 1);
            }
            else {
                setCanMerge(false);
            }
            try {
                const tableNode = $getTableNodeFromLexicalNodeOrThrow(cell);
                setRowStriping(tableNode.getRowStriping());
                const tableDom = editor.getElementByKey(tableNode.getKey());
                if (tableDom) {
                    const tableEl = tableDom.tagName === "TABLE"
                        ? tableDom
                        : tableDom.querySelector("table");
                    if (tableEl) {
                        const tableRect = tableEl.getBoundingClientRect();
                        setEdgePos({
                            tableTop: tableRect.top,
                            tableLeft: tableRect.left,
                            tableWidth: tableRect.width,
                            tableHeight: tableRect.height,
                        });
                    }
                    else {
                        setEdgePos(null);
                    }
                }
                else {
                    setEdgePos(null);
                }
            }
            catch (_b) {
                setEdgePos(null);
            }
        });
    }, [closeMenu, editor]);
    const openMenuAt = useCallback((clientX, clientY) => {
        const menuWidth = 460;
        setMenuPos({
            top: Math.min(Math.max(8, clientY + 4), window.innerHeight - 80),
            left: Math.min(Math.max(8, clientX + 4), window.innerWidth - menuWidth - 8),
        });
        setActive(true);
        setMoreOpen(false);
        refreshMenuState();
    }, [refreshMenuState]);
    useEffect(() => {
        function onContextMenu(event) {
            var _a;
            const target = event.target;
            if (!(target instanceof Node))
                return;
            const cellDom = target instanceof Element
                ? target.closest("td, th")
                : (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.closest("td, th");
            if (!cellDom) {
                closeMenu();
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            const range = document.createRange();
            range.selectNodeContents(cellDom);
            range.collapse(true);
            const sel = window.getSelection();
            sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
            sel === null || sel === void 0 ? void 0 : sel.addRange(range);
            requestAnimationFrame(() => {
                openMenuAt(event.clientX, event.clientY);
            });
        }
        return editor.registerRootListener((rootElement, prevRootElement) => {
            if (prevRootElement) {
                prevRootElement.removeEventListener("contextmenu", onContextMenu);
            }
            if (rootElement) {
                rootElement.addEventListener("contextmenu", onContextMenu);
            }
        });
    }, [closeMenu, editor, openMenuAt]);
    useEffect(() => {
        if (!active)
            return;
        function onKeyDown(event) {
            if (event.key === "Escape")
                closeMenu();
        }
        function onPointerDown(event) {
            var _a;
            const target = event.target;
            if (!target)
                return;
            if ((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
                return;
            if (target instanceof Element &&
                target.closest('[data-table-edge-action="true"]')) {
                return;
            }
            closeMenu();
        }
        function onScrollOrResize() {
            closeMenu();
        }
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onPointerDown, true);
        window.addEventListener("scroll", onScrollOrResize, true);
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("scroll", onScrollOrResize, true);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, [active, closeMenu]);
    useEffect(() => {
        if (!moreOpen)
            return;
        function onPointerDown(event) {
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setMoreOpen(false);
            }
        }
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [moreOpen]);
    const run = useCallback((fn) => {
        editor.update(() => {
            fn();
        });
        setMoreOpen(false);
        requestAnimationFrame(() => refreshMenuState());
    }, [editor, refreshMenuState]);
    const withTable = useCallback((fn) => {
        run(() => {
            const cell = $getSelectedTableCell();
            if (!cell)
                return;
            const table = $getTableNodeFromLexicalNodeOrThrow(cell);
            fn(table, cell);
        });
    }, [run]);
    const distributeColumns = () => {
        withTable((table) => {
            var _a;
            const count = table.getColumnCount();
            if (count <= 0)
                return;
            const widths = table.getColWidths();
            const total = (_a = widths === null || widths === void 0 ? void 0 : widths.reduce((sum, w) => sum + w, 0)) !== null && _a !== void 0 ? _a : count * DEFAULT_COLUMN_WIDTH;
            const even = Math.max(Math.round(total / count), 48);
            table.setColWidths(Array.from({ length: count }, () => even));
        });
    };
    const autofitColumns = () => {
        withTable((table) => {
            const count = table.getColumnCount();
            if (count <= 0)
                return;
            table.setColWidths(Array.from({ length: count }, () => DEFAULT_COLUMN_WIDTH));
        });
    };
    if (!active || !menuPos || typeof document === "undefined") {
        return null;
    }
    return createPortal(_jsxs(_Fragment, { children: [_jsxs("div", { ref: menuRef, className: "pointer-events-auto fixed z-[80] flex max-w-[calc(100vw-1rem)] flex-wrap items-center gap-0.5 rounded-lg border border-sky-dark/25 bg-white p-1 shadow-lg", style: { top: menuPos.top, left: menuPos.left }, role: "menu", "aria-label": "Table actions", children: [_jsx(ActionButton, { label: "Row above", icon: _jsx(ArrowUp, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $insertTableRowAtSelection(false)) }), _jsx(ActionButton, { label: "Row below", icon: _jsx(ArrowDown, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $insertTableRowAtSelection(true)) }), _jsx(ActionButton, { label: "Col left", icon: _jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $insertTableColumnAtSelection(false)) }), _jsx(ActionButton, { label: "Col right", icon: _jsx(ArrowRight, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $insertTableColumnAtSelection(true)) }), _jsx(Separator, {}), _jsx(ActionButton, { label: "Delete row", icon: _jsx(Rows3, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $deleteTableRowAtSelection()), danger: true }), _jsx(ActionButton, { label: "Delete col", icon: _jsx(Columns3, { className: "h-3.5 w-3.5" }), onClick: () => run(() => $deleteTableColumnAtSelection()), danger: true }), _jsx(ActionButton, { label: "Delete table", icon: _jsx(Trash2, { className: "h-3.5 w-3.5" }), onClick: () => run(() => {
                            const cell = $getSelectedTableCell();
                            if (!cell)
                                return;
                            $getTableNodeFromLexicalNodeOrThrow(cell).remove();
                        }), danger: true }), _jsx(Separator, {}), _jsx(ActionButton, { label: isHeaderCell ? "Clear header" : "Header cell", icon: _jsx("span", { className: "text-[10px] font-bold", children: "H" }), active: isHeaderCell, onClick: () => run(() => {
                            const cell = $getSelectedTableCell();
                            if (!cell)
                                return;
                            if (cell.hasHeader()) {
                                cell.setHeaderStyles(TableCellHeaderStates.NO_STATUS);
                            }
                            else {
                                cell.setHeaderStyles(TableCellHeaderStates.ROW);
                            }
                        }) }), _jsxs("div", { ref: moreRef, className: "relative", children: [_jsx(ActionButton, { label: "More", icon: _jsx(Ellipsis, { className: "h-3.5 w-3.5" }), active: moreOpen, onClick: () => setMoreOpen((v) => !v) }), moreOpen ? (_jsxs("div", { className: "absolute left-0 top-8 z-[90] w-56 rounded-lg border border-sky-dark/25 bg-white p-1 shadow-lg", children: [_jsx(ActionButton, { label: "Merge cells", icon: _jsx(Merge, { className: "h-3.5 w-3.5" }), disabled: !canMerge, onClick: () => run(() => {
                                            const cells = $getSelectedTableCells();
                                            if (cells.length > 1)
                                                $mergeCells(cells);
                                        }) }), _jsx(ActionButton, { label: "Unmerge cell", icon: _jsx(Split, { className: "h-3.5 w-3.5" }), disabled: !canUnmerge, onClick: () => run(() => $unmergeCell()) }), _jsx("div", { className: "my-1 h-px bg-sky-dark/15", "aria-hidden": true }), _jsx(ActionButton, { label: isHeaderRow ? "Clear header row" : "Header row", icon: _jsx("span", { className: "text-[10px] font-bold", children: "HR" }), active: isHeaderRow, onClick: () => withTable((table, cell) => {
                                            const rowIndex = $getTableRowIndexFromTableCellNode(cell);
                                            $setTableRowIsHeader(table, rowIndex, !isHeaderRow);
                                        }) }), _jsx(ActionButton, { label: isHeaderCol ? "Clear header col" : "Header column", icon: _jsx("span", { className: "text-[10px] font-bold", children: "HC" }), active: isHeaderCol, onClick: () => withTable((table, cell) => {
                                            const colIndex = $getTableColumnIndexFromTableCellNode(cell);
                                            $setTableColumnIsHeader(table, colIndex, !isHeaderCol);
                                        }) }), _jsx(ActionButton, { label: rowStriping ? "Disable striping" : "Row striping", icon: _jsx(Rows3, { className: "h-3.5 w-3.5" }), active: rowStriping, onClick: () => withTable((table) => {
                                            table.setRowStriping(!table.getRowStriping());
                                        }) }), _jsx("div", { className: "my-1 h-px bg-sky-dark/15", "aria-hidden": true }), _jsx(ActionButton, { label: "Distribute columns", icon: _jsx(Columns3, { className: "h-3.5 w-3.5" }), onClick: distributeColumns }), _jsx(ActionButton, { label: "Autofit / reset widths", icon: _jsx(Grid2x2, { className: "h-3.5 w-3.5" }), onClick: autofitColumns }), _jsxs("div", { className: "mt-0.5 flex items-center gap-1 rounded-md px-1 py-0.5 hover:bg-sky-pale", children: [_jsx(PaintBucket, { className: "h-3.5 w-3.5 text-ink/70" }), _jsx("span", { className: "flex-1 text-xs text-ink/80", children: "Cell color" }), _jsx(ColorPickerButton, { mode: "background", currentColor: cellBg, title: "Cell background", onColorChange: (color) => {
                                                    run(() => {
                                                        const cells = $getSelectedTableCells();
                                                        for (const c of cells) {
                                                            c.setBackgroundColor(color || null);
                                                        }
                                                    });
                                                } })] })] })) : null] })] }), edgePos ? (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", "data-table-edge-action": "true", title: "Add row below", "aria-label": "Add row below", onMouseDown: (e) => e.preventDefault(), onClick: () => run(() => $insertTableRowAtSelection(true)), className: "pointer-events-auto fixed z-[80] flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-sky-dark/30 bg-white text-sky-dark shadow-md transition hover:bg-sky-pale", style: {
                            top: edgePos.tableTop + edgePos.tableHeight + 6,
                            left: edgePos.tableLeft + edgePos.tableWidth / 2,
                        }, children: _jsx(Plus, { className: "h-3.5 w-3.5" }) }), _jsx("button", { type: "button", "data-table-edge-action": "true", title: "Add column to the right", "aria-label": "Add column to the right", onMouseDown: (e) => e.preventDefault(), onClick: () => run(() => $insertTableColumnAtSelection(true)), className: "pointer-events-auto fixed z-[80] flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-sky-dark/30 bg-white text-sky-dark shadow-md transition hover:bg-sky-pale", style: {
                            top: edgePos.tableTop + edgePos.tableHeight / 2,
                            left: edgePos.tableLeft + edgePos.tableWidth + 6,
                        }, children: _jsx(Plus, { className: "h-3.5 w-3.5" }) })] })) : null] }), document.body);
}
