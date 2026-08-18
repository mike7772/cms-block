"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
export function StyleDropdown({ label, options, onSelect, width = "w-28", searchable = false, currentValue, previewFont = false, }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef(null);
    const searchInputRef = useRef(null);
    const filteredOptions = useMemo(() => {
        if (!searchable || !query.trim())
            return options;
        const q = query.toLowerCase();
        return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, query, searchable]);
    const currentLabel = useMemo(() => {
        if (!currentValue)
            return label;
        const match = options.find((o) => o.value === currentValue);
        return match ? match.label : label;
    }, [currentValue, options, label]);
    useEffect(() => {
        if (!open)
            return;
        function handlePointerDown(event) {
            if (containerRef.current &&
                !containerRef.current.contains(event.target)) {
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
                requestAnimationFrame(() => { var _a; return (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
            }
            return next;
        });
    }
    return (_jsxs("div", { ref: containerRef, className: "relative", children: [_jsxs("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: handleToggle, className: cn("inline-flex h-8 items-center gap-1 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", width), children: [_jsx("span", { className: "truncate", children: currentLabel }), _jsx(ChevronDown, { className: "h-3 w-3 shrink-0" })] }), open && (_jsxs("div", { className: "absolute left-0 top-9 z-50 w-56 rounded-md border bg-background p-1 shadow-md", onMouseDown: (e) => {
                    // Allow search input focus; keep selection for option clicks.
                    const target = e.target;
                    if (!target.closest("input"))
                        e.preventDefault();
                }, children: [searchable && (_jsxs("div", { className: "relative mb-1", children: [_jsx(Search, { className: "pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), _jsx("input", { ref: searchInputRef, type: "text", value: query, "data-allow-toolbar-focus": "true", onChange: (e) => setQuery(e.target.value), placeholder: "Search fonts...", className: "w-full rounded-sm border border-input bg-background py-1 pl-7 pr-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring" })] })), _jsx("div", { className: "max-h-56 overflow-y-auto", children: filteredOptions.length === 0 ? (_jsx("div", { className: "px-2 py-2 text-xs text-muted-foreground", children: "No fonts found" })) : (filteredOptions.map((option) => (_jsx("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => {
                                onSelect(option.value);
                                setOpen(false);
                            }, style: previewFont && option.value
                                ? { fontFamily: option.value }
                                : undefined, className: cn("block w-full rounded-sm px-2 py-1 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground", option.value === currentValue
                                ? "bg-accent font-medium text-accent-foreground"
                                : "text-muted-foreground"), children: option.label }, option.label)))) })] }))] }));
}
