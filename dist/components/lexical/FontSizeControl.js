"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "../../lib/utils.js";
const MIN_SIZE = 8;
const MAX_SIZE = 72;
const STEP = 1;
export function FontSizeControl({ currentSize, onSetSize, }) {
    const [inputValue, setInputValue] = useState(currentSize ? String(currentSize) : "");
    // Keep input in sync when selection changes
    const displayValue = currentSize ? String(currentSize) : "";
    function applySize(size) {
        const clamped = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size));
        onSetSize(`${clamped}px`);
        setInputValue(String(clamped));
    }
    function handleDecrement() {
        const base = currentSize !== null && currentSize !== void 0 ? currentSize : 14;
        applySize(base - STEP);
    }
    function handleIncrement() {
        const base = currentSize !== null && currentSize !== void 0 ? currentSize : 14;
        applySize(base + STEP);
    }
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }
    function handleInputCommit() {
        const parsed = parseInt(inputValue, 10);
        if (Number.isNaN(parsed)) {
            setInputValue(displayValue);
            return;
        }
        applySize(parsed);
    }
    function handleInputKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleInputCommit();
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            handleIncrement();
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            handleDecrement();
        }
    }
    return (_jsxs("div", { className: "flex items-center gap-0.5", children: [_jsx("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: handleDecrement, "aria-label": "Decrease font size", title: "Decrease font size", className: "inline-flex h-8 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: _jsx(Minus, { className: "h-3.5 w-3.5" }) }), _jsx("input", { type: "number", min: MIN_SIZE, max: MAX_SIZE, value: inputValue || displayValue, placeholder: "14", "data-allow-toolbar-focus": "true", onChange: handleInputChange, onBlur: handleInputCommit, onKeyDown: handleInputKeyDown, className: cn("h-8 w-12 rounded-md border border-input bg-background px-1.5 text-center text-xs text-foreground", "focus:outline-none focus:ring-1 focus:ring-ring") }), _jsx("span", { className: "text-xs text-muted-foreground", children: "px" }), _jsx("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: handleIncrement, "aria-label": "Increase font size", title: "Increase font size", className: "inline-flex h-8 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: _jsx(Plus, { className: "h-3.5 w-3.5" }) })] }));
}
