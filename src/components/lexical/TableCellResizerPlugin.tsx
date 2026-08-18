"use client";

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import {
  $computeTableMapSkipCellCheck,
  $getTableNodeFromLexicalNodeOrThrow,
  $getTableRowIndexFromTableCellNode,
  $isTableCellNode,
  $isTableRowNode,
  getDOMCellFromTarget,
  getTableElement,
  type TableCellNode,
  type TableDOMCell,
  type TableMapType,
  TableNode,
} from "@lexical/table";
import { calculateZoomLevel } from "@lexical/utils";
import {
  $getNearestNodeFromDOMNode,
  isHTMLElement,
  type LexicalEditor,
  mergeRegister,
  SKIP_SCROLL_INTO_VIEW_TAG,
} from "lexical";

type ResizeDirection = "right" | "bottom";

const MIN_ROW_HEIGHT = 28;
const MIN_COLUMN_WIDTH = 48;
const DEFAULT_COLUMN_WIDTH = 88;
const EDGE_HIT_PX = 10;
const GUIDE_COLOR = "#0ea5e9";

function getCellNodeHeight(
  cell: TableCellNode,
  activeEditor: LexicalEditor,
): number | undefined {
  return activeEditor.getElementByKey(cell.getKey())?.clientHeight;
}

function getCellColumnIndex(
  tableCellNode: TableCellNode,
  tableMap: TableMapType,
): number | undefined {
  for (let row = 0; row < tableMap.length; row++) {
    for (let column = 0; column < tableMap[row].length; column++) {
      if (tableMap[row][column].cell === tableCellNode) {
        return column;
      }
    }
  }
}

function edgeNear(
  clientX: number,
  clientY: number,
  rect: DOMRect,
): ResizeDirection | null {
  const nearRight = Math.abs(clientX - rect.right) <= EDGE_HIT_PX;
  const nearBottom = Math.abs(clientY - rect.bottom) <= EDGE_HIT_PX;
  const insideX =
    clientX >= rect.left - 2 && clientX <= rect.right + EDGE_HIT_PX;
  const insideY =
    clientY >= rect.top - 2 && clientY <= rect.bottom + EDGE_HIT_PX;

  if (nearRight && insideY) return "right";
  if (nearBottom && insideX) return "bottom";
  return null;
}

type DragSession = {
  direction: ResizeDirection;
  cellElem: HTMLElement;
  startX: number;
  startY: number;
  startColWidths: number[] | null;
  columnIndex: number | null;
  startRowHeight: number | null;
  rowIndex: number | null;
  tableRect: DOMRect;
};

function TableCellResizer({ editor }: { editor: LexicalEditor }) {
  const dragRef = useRef<DragSession | null>(null);
  const cleanupDragRef = useRef<(() => void) | null>(null);

  const [hasTable, setHasTable] = useState(false);
  const [activeCell, setActiveCell] = useState<TableDOMCell | null>(null);
  const [direction, setDirection] = useState<ResizeDirection | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [guidePos, setGuidePos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [tableRect, setTableRect] = useState<DOMRect | null>(null);

  const resetHover = useCallback(() => {
    if (dragRef.current) return;
    setActiveCell(null);
    setDirection(null);
    setGuidePos(null);
    setTableRect(null);
  }, []);

  const endDrag = useCallback(() => {
    cleanupDragRef.current?.();
    cleanupDragRef.current = null;
    dragRef.current = null;
    setIsDragging(false);
    setActiveCell(null);
    setDirection(null);
    setGuidePos(null);
    setTableRect(null);
  }, []);

  useEffect(() => {
    const tableKeys = new Set<string>();
    return mergeRegister(
      editor.registerMutationListener(TableNode, (nodeMutations) => {
        for (const [nodeKey, mutation] of nodeMutations) {
          if (mutation === "destroyed") tableKeys.delete(nodeKey);
          else tableKeys.add(nodeKey);
        }
        setHasTable(tableKeys.size > 0);
      }),
      editor.registerNodeTransform(TableNode, (tableNode) => {
        if (tableNode.getColWidths()) return;
        const numColumns = tableNode.getColumnCount();
        if (numColumns <= 0) return;
        tableNode.setColWidths(
          Array.from({ length: numColumns }, () => DEFAULT_COLUMN_WIDTH),
        );
      }),
    );
  }, [editor]);

  useEffect(() => () => endDrag(), [endDrag]);

  useEffect(() => {
    if (!hasTable) return;

    const onPointerMove = (event: PointerEvent) => {
      if (dragRef.current) return;

      const target = event.target;
      if (!isHTMLElement(target)) {
        resetHover();
        return;
      }
      if (target.closest("[data-table-resizer-hit]")) return;

      const cell = getDOMCellFromTarget(target);
      if (!cell) {
        resetHover();
        return;
      }

      const cellRect = cell.elem.getBoundingClientRect();
      const nextDirection = edgeNear(event.clientX, event.clientY, cellRect);
      if (!nextDirection) {
        resetHover();
        return;
      }

      editor.read("latest", () => {
        const tableCellNode = $getNearestNodeFromDOMNode(cell.elem);
        if (!tableCellNode) return;
        const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        const tableElement = getTableElement(
          tableNode,
          editor.getElementByKey(tableNode.getKey()),
        );
        if (!tableElement) return;

        setTableRect(tableElement.getBoundingClientRect());
        setActiveCell(cell);
        setDirection(nextDirection);
        setGuidePos({ x: event.clientX, y: event.clientY });
      });
    };

    return editor.registerRootListener((rootElement, prevRootElement) => {
      if (prevRootElement) {
        prevRootElement.removeEventListener("pointermove", onPointerMove);
      }
      if (rootElement) {
        rootElement.addEventListener("pointermove", onPointerMove);
      }
    });
  }, [editor, hasTable, resetHover]);

  const applyResize = useCallback(
    (clientX: number, clientY: number) => {
      const session = dragRef.current;
      if (!session) return;

      const zoom = calculateZoomLevel(session.cellElem);
      setGuidePos({ x: clientX, y: clientY });

      if (session.direction === "right") {
        const { startColWidths, columnIndex, startX } = session;
        if (!startColWidths || columnIndex == null) return;
        const widthChange = (clientX - startX) / zoom;
        const startWidth = startColWidths[columnIndex];
        if (startWidth == null) return;
        const next = [...startColWidths];
        next[columnIndex] = Math.round(
          Math.max(startWidth + widthChange, MIN_COLUMN_WIDTH),
        );

        editor.update(
          () => {
            const tableCellNode = $getNearestNodeFromDOMNode(session.cellElem);
            if (!$isTableCellNode(tableCellNode)) return;
            $getTableNodeFromLexicalNodeOrThrow(tableCellNode).setColWidths(
              next,
            );
          },
          { tag: SKIP_SCROLL_INTO_VIEW_TAG },
        );
        return;
      }

      const { startRowHeight, rowIndex, startY } = session;
      if (startRowHeight == null || rowIndex == null) return;
      const heightChange = (clientY - startY) / zoom;
      const newHeight = Math.round(
        Math.max(startRowHeight + heightChange, MIN_ROW_HEIGHT),
      );

      editor.update(
        () => {
          const tableCellNode = $getNearestNodeFromDOMNode(session.cellElem);
          if (!$isTableCellNode(tableCellNode)) return;
          const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
          const tableRow = tableNode.getChildAtIndex(rowIndex);
          if (!$isTableRowNode(tableRow)) return;
          tableRow.setHeight(newHeight);
        },
        { tag: SKIP_SCROLL_INTO_VIEW_TAG },
      );
    },
    [editor],
  );

  const startDrag = useCallback(
    (nextDirection: ResizeDirection, clientX: number, clientY: number) => {
      if (!activeCell) return;

      const built: { session: DragSession | null } = { session: null };

      editor.read("latest", () => {
        const tableCellNode = $getNearestNodeFromDOMNode(activeCell.elem);
        if (!$isTableCellNode(tableCellNode)) return;
        const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        const tableElement = getTableElement(
          tableNode,
          editor.getElementByKey(tableNode.getKey()),
        );
        if (!tableElement) return;

        const rect = tableElement.getBoundingClientRect();
        setTableRect(rect);

        if (nextDirection === "right") {
          const [tableMap] = $computeTableMapSkipCellCheck(
            tableNode,
            null,
            null,
          );
          const columnIndex = getCellColumnIndex(tableCellNode, tableMap);
          if (columnIndex === undefined) return;
          const colWidths =
            tableNode.getColWidths() ??
            Array.from(
              { length: tableNode.getColumnCount() },
              () => DEFAULT_COLUMN_WIDTH,
            );

          built.session = {
            direction: "right",
            cellElem: activeCell.elem,
            startX: clientX,
            startY: clientY,
            startColWidths: [...colWidths],
            columnIndex,
            startRowHeight: null,
            rowIndex: null,
            tableRect: rect,
          };
        } else {
          const baseRowIndex =
            $getTableRowIndexFromTableCellNode(tableCellNode);
          const isFullRowMerge =
            tableCellNode.getColSpan() === tableNode.getColumnCount();
          const tableRowIndex = isFullRowMerge
            ? baseRowIndex
            : baseRowIndex + tableCellNode.getRowSpan() - 1;
          const tableRow = tableNode.getChildAtIndex(tableRowIndex);
          if (!$isTableRowNode(tableRow)) return;

          let height = tableRow.getHeight();
          if (height === undefined) {
            const rowCells = tableRow.getChildren().filter($isTableCellNode);
            height = Math.min(
              ...rowCells.map((c) => getCellNodeHeight(c, editor) ?? Infinity),
            );
            if (!Number.isFinite(height)) {
              height = activeCell.elem.getBoundingClientRect().height;
            }
          }

          built.session = {
            direction: "bottom",
            cellElem: activeCell.elem,
            startX: clientX,
            startY: clientY,
            startColWidths: null,
            columnIndex: null,
            startRowHeight: height,
            rowIndex: tableRowIndex,
            tableRect: rect,
          };
        }
      });

      const session = built.session;
      if (!session) return;

      dragRef.current = session;
      setIsDragging(true);
      setDirection(nextDirection);
      setGuidePos({ x: clientX, y: clientY });

      // Ensure col widths exist on the node before dragging further
      if (session.direction === "right" && session.startColWidths) {
        const widths = session.startColWidths;
        editor.update(
          () => {
            const tableCellNode = $getNearestNodeFromDOMNode(activeCell.elem);
            if (!$isTableCellNode(tableCellNode)) return;
            const tableNode =
              $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
            if (!tableNode.getColWidths()) {
              tableNode.setColWidths(widths);
            }
          },
          { tag: SKIP_SCROLL_INTO_VIEW_TAG },
        );
      }

      const onPointerMove = (event: PointerEvent) => {
        event.preventDefault();
        applyResize(event.clientX, event.clientY);
      };
      const onPointerUp = (event: PointerEvent) => {
        event.preventDefault();
        endDrag();
      };

      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerUp);
      cleanupDragRef.current = () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        document.removeEventListener("pointercancel", onPointerUp);
      };
    },
    [activeCell, applyResize, editor, endDrag],
  );

  let hitStyle: CSSProperties | null = null;
  let guideStyle: CSSProperties | null = null;

  if (activeCell && direction && tableRect) {
    const cellRect = activeCell.elem.getBoundingClientRect();
    const zoom = calculateZoomLevel(activeCell.elem);

    // Full-screen capture surface while dragging so the handle never
    // unmounts / slips out from under the pointer mid-resize.
    if (isDragging) {
      hitStyle = {
        position: "fixed",
        inset: 0,
        cursor: direction === "right" ? "col-resize" : "row-resize",
        zIndex: 96,
        pointerEvents: "auto",
        background: "transparent",
      };
    } else if (direction === "right") {
      hitStyle = {
        position: "fixed",
        top: cellRect.top,
        left: cellRect.right - EDGE_HIT_PX,
        width: EDGE_HIT_PX * 2,
        height: cellRect.height,
        cursor: "col-resize",
        zIndex: 96,
        pointerEvents: "auto",
        background: "transparent",
      };
    } else {
      hitStyle = {
        position: "fixed",
        top: cellRect.bottom - EDGE_HIT_PX,
        left: cellRect.left,
        width: cellRect.width,
        height: EDGE_HIT_PX * 2,
        cursor: "row-resize",
        zIndex: 96,
        pointerEvents: "auto",
        background: "transparent",
      };
    }

    if (direction === "right") {
      const x =
        isDragging && guidePos ? guidePos.x / zoom : cellRect.right;
      guideStyle = {
        position: "fixed",
        top: tableRect.top,
        left: x - 1.5,
        width: 3,
        height: tableRect.height,
        backgroundColor: GUIDE_COLOR,
        boxShadow: "0 0 0 1px rgba(14,165,233,0.3)",
        zIndex: 95,
        pointerEvents: "none",
      };
    } else {
      const y =
        isDragging && guidePos ? guidePos.y / zoom : cellRect.bottom;
      guideStyle = {
        position: "fixed",
        top: y - 1.5,
        left: tableRect.left,
        width: tableRect.width,
        height: 3,
        backgroundColor: GUIDE_COLOR,
        boxShadow: "0 0 0 1px rgba(14,165,233,0.3)",
        zIndex: 95,
        pointerEvents: "none",
      };
    }
  }

  if (!direction && !isDragging) return null;

  return (
    <>
      {hitStyle ? (
        <div
          data-table-resizer-hit
          style={hitStyle}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!direction) return;
            // Keep the hit target mounted; capture pointer for reliable drag
            e.currentTarget.setPointerCapture(e.pointerId);
            startDrag(direction, e.clientX, e.clientY);
          }}
        />
      ) : null}
      {guideStyle ? <div data-table-resizer-guide style={guideStyle} /> : null}
    </>
  );
}

export function TableCellResizerPlugin() {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();

  if (!isEditable) return null;
  return createPortal(<TableCellResizer editor={editor} />, document.body);
}
