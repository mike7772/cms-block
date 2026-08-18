"use client";

import { useState } from "react";
import { Table } from "lucide-react";

interface InsertTableDialogProps {
  onInsert: (rows: number, columns: number) => void;
}

export function InsertTableDialog({ onInsert }: InsertTableDialogProps) {
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

  return (
    <>
      <button
        type="button"
        aria-label="Insert table"
        title="Insert table"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpen(true)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Table className="h-4 w-4" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="insert-table-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-lg border border-border bg-background p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="insert-table-title"
              className="text-base font-semibold text-foreground"
            >
              Insert table
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose the number of rows and columns for the new table.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <label className="text-sm font-medium text-foreground" htmlFor="table-rows">
                Rows
              </label>
              <input
                id="table-rows"
                type="number"
                min={1}
                max={50}
                value={rows}
                onChange={(e) => setRows(e.target.value)}
                className="rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring"
              />
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="table-columns"
              >
                Columns
              </label>
              <input
                id="table-columns"
                type="number"
                min={1}
                max={20}
                value={columns}
                onChange={(e) => setColumns(e.target.value)}
                className="rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleInsert}
                className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Insert table
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
