"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsertLinkDialogProps {
  onInsert: (url: string) => void;
  active?: boolean;
  initialUrl?: string;
  title?: string;
}

export function InsertLinkDialog({
  onInsert,
  active = false,
  initialUrl = "https://",
  title = "Insert link (⌘K)",
}: InsertLinkDialogProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const inputId = useId();

  useEffect(() => {
    if (!open) return;
    setUrl(initialUrl || "https://");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  }, [open, initialUrl]);

  function handleInsert() {
    const trimmed = url.trim();
    if (!trimmed) return;
    onInsert(trimmed);
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label={title}
        title={title}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          active &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
        )}
      >
        <LinkIcon className="h-4 w-4" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-lg border border-border bg-background p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id={titleId}
              className="text-base font-semibold text-foreground"
            >
              Insert link
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter a URL to link the selected text.
            </p>
            <div className="mt-4">
              <label
                className="mb-1.5 block text-sm font-medium text-foreground"
                htmlFor={inputId}
              >
                URL
              </label>
              <input
                ref={inputRef}
                id={inputId}
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleInsert();
                  }
                  if (e.key === "Escape") {
                    setOpen(false);
                  }
                }}
                placeholder="https://"
                className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring"
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
                disabled={!url.trim()}
                className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-40"
              >
                Apply link
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
