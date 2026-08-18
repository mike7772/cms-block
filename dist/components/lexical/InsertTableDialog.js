"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Table } from "lucide-react";
export function InsertTableDialog({ onInsert }) {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState("3");
    const [columns, setColumns] = useState("3");
    function handleInsert() {
        const r = Math.max(1, parseInt(rows, 10) || 1);
        const c = Math.max(1, parseInt(columns, 10) || 1);
        onInsert(r, c);
        setOpen(false);
        setRows("3");
        setColumns("3");
    }
    return (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", "aria-label": "Insert table", title: "Insert table", onMouseDown: (e) => e.preventDefault(), onClick: () => setOpen(true), className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: _jsx(Table, { className: "h-4 w-4" }) }), open ? (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4", role: "dialog", "aria-modal": "true", "aria-labelledby": "insert-table-title", onClick: () => setOpen(false), children: _jsxs("div", { className: "w-full max-w-sm rounded-lg border border-border bg-background p-4 shadow-lg", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { id: "insert-table-title", className: "text-base font-semibold text-foreground", children: "Insert table" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Choose the number of rows and columns for the new table." }), _jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [_jsx("label", { className: "text-sm font-medium text-foreground", htmlFor: "table-rows", children: "Rows" }), _jsx("input", { id: "table-rows", type: "number", min: 1, max: 50, value: rows, onChange: (e) => setRows(e.target.value), className: "rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring" }), _jsx("label", { className: "text-sm font-medium text-foreground", htmlFor: "table-columns", children: "Columns" }), _jsx("input", { id: "table-columns", type: "number", min: 1, max: 20, value: columns, onChange: (e) => setColumns(e.target.value), className: "rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring" })] }), _jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [_jsx("button", { type: "button", onClick: () => setOpen(false), className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent", children: "Cancel" }), _jsx("button", { type: "button", onClick: handleInsert, className: "rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90", children: "Insert table" })] })] }) })) : null] }));
}
