"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface InsertImageDialogProps {
  onInsert: (url: string, alt: string) => void;
  title?: string;
}

export function InsertImageDialog({
  onInsert,
  title = "Insert image",
}: InsertImageDialogProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("https://");
  const [alt, setAlt] = useState("");
  const urlRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const urlId = useId();
  const altId = useId();

  useEffect(() => {
    if (!open) return;
    setUrl("https://");
    setAlt("");
    requestAnimationFrame(() => {
      urlRef.current?.focus();
      urlRef.current?.select();
    });
  }, [open]);

  function handleInsert() {
    const trimmed = url.trim();
    if (!trimmed) return;
    onInsert(trimmed, alt.trim());
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
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ImageIcon className="h-4 w-4" />
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
              Insert image
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Provide an image URL and optional alt text.
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-foreground"
                  htmlFor={urlId}
                >
                  Image URL
                </label>
                <input
                  ref={urlRef}
                  id={urlId}
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
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-foreground"
                  htmlFor={altId}
                >
                  Alt text
                </label>
                <input
                  id={altId}
                  type="text"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleInsert();
                    }
                    if (e.key === "Escape") {
                      setOpen(false);
                    }
                  }}
                  placeholder="Describe the image"
                  className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring"
                />
              </div>
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
                Insert image
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
