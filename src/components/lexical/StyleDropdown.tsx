"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface StyleDropdownProps {
  label: string;
  options: Array<{ label: string; value: string }>;
  onSelect: (value: string) => void;
  width?: string;
  searchable?: boolean;
  currentValue?: string;
  previewFont?: boolean;
}

export function StyleDropdown({
  label,
  options,
  onSelect,
  width = "w-28",
  searchable = false,
  currentValue,
  previewFont = false,
}: StyleDropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(() => {
    if (!searchable || !query.trim()) return options;
    const q = query.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query, searchable]);

  const currentLabel = useMemo(() => {
    if (!currentValue) return label;
    const match = options.find((o) => o.value === currentValue);
    return match ? match.label : label;
  }, [currentValue, options, label]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function handleToggle() {
    setOpen((v) => {
      const next = !v;
      if (next && searchable) {
        setQuery("");
        requestAnimationFrame(() => searchInputRef.current?.focus());
      }
      return next;
    });
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleToggle}
        className={cn(
          "inline-flex h-8 items-center gap-1 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          width
        )}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown className="h-3 w-3 shrink-0" />
      </button>
      {open && (
        <div
          className="absolute left-0 top-9 z-50 w-56 rounded-md border bg-background p-1 shadow-md"
          onMouseDown={(e) => {
            // Allow search input focus; keep selection for option clicks.
            const target = e.target as HTMLElement;
            if (!target.closest("input")) e.preventDefault();
          }}
        >
          {searchable && (
            <div className="relative mb-1">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                data-allow-toolbar-focus="true"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fonts..."
                className="w-full rounded-sm border border-input bg-background py-1 pl-7 pr-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          )}
          <div className="max-h-56 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-2 py-2 text-xs text-muted-foreground">
                No fonts found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onSelect(option.value);
                    setOpen(false);
                  }}
                  style={
                    previewFont && option.value
                      ? { fontFamily: option.value }
                      : undefined
                  }
                  className={cn(
                    "block w-full rounded-sm px-2 py-1 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground",
                    option.value === currentValue
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
