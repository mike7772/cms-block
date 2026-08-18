"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useRef, useState } from "react";
import { Baseline, Check, PaintBucket } from "lucide-react";
import { cn } from "../../lib/utils.js";
const PRESET_COLORS = [
    { label: "Default", value: "" },
    { label: "Red", value: "#dc2626" },
    { label: "Orange", value: "#ea580c" },
    { label: "Amber", value: "#d97706" },
    { label: "Green", value: "#16a34a" },
    { label: "Teal", value: "#0d9488" },
    { label: "Blue", value: "#2563eb" },
    { label: "Indigo", value: "#4f46e5" },
    { label: "Violet", value: "#7c3aed" },
    { label: "Pink", value: "#db2777" },
    { label: "Gray", value: "#6b7280" },
    { label: "Black", value: "#111827" },
    { label: "White", value: "#ffffff" },
    { label: "Yellow", value: "#facc15" },
    { label: "Sky", value: "#7BB8E3" },
    { label: "Pale sky", value: "#D4EAF9" },
];
export function ColorPickerButton({ onColorChange, currentColor, label, title, mode = "text", }) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const customId = useId();
    const isBackground = mode === "background";
    const resolvedLabel = label !== null && label !== void 0 ? label : (isBackground ? "Background color" : "Text color");
    const resolvedTitle = title !== null && title !== void 0 ? title : resolvedLabel;
    const Icon = isBackground ? PaintBucket : Baseline;
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
    return (_jsxs("div", { ref: containerRef, className: "relative", children: [_jsxs("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => setOpen((v) => !v), "aria-label": resolvedLabel, title: resolvedTitle, className: "inline-flex h-8 w-8 flex-col items-center justify-center gap-0.5 rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: [_jsx(Icon, { className: "h-3.5 w-3.5" }), _jsx("span", { className: "h-0.5 w-4 rounded-full", style: {
                            backgroundColor: currentColor || (isBackground ? "#facc15" : "#111827"),
                        } })] }), open && (_jsxs("div", { className: "absolute left-0 top-9 z-50 w-56 rounded-md border bg-background p-2 shadow-md", onMouseDown: (e) => e.preventDefault(), children: [_jsx("div", { className: "mb-1.5 text-[11px] font-medium text-muted-foreground", children: resolvedLabel }), _jsx("div", { className: "grid grid-cols-6 gap-1", children: PRESET_COLORS.map((color) => (_jsxs("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => {
                                onColorChange(color.value);
                                setOpen(false);
                            }, "aria-label": color.label, title: color.label, className: cn("relative flex h-6 w-6 items-center justify-center rounded-md border", color.value === "" && "bg-background"), style: color.value ? { backgroundColor: color.value } : undefined, children: [color.value === "" && (_jsx("span", { className: "text-[10px] text-muted-foreground", children: "A" })), color.value === currentColor && color.value !== "" && (_jsx(Check, { className: "h-3 w-3 text-white mix-blend-difference" }))] }, `${mode}-${color.label}`))) }), _jsxs("div", { className: "mt-2 flex items-center gap-2 border-t pt-2", children: [_jsx("label", { htmlFor: customId, className: "text-xs text-muted-foreground", children: "Custom" }), _jsx("input", { id: customId, type: "color", "data-allow-toolbar-focus": "true", className: "h-6 w-full cursor-pointer rounded border", onMouseDown: (e) => e.stopPropagation(), onChange: (e) => onColorChange(e.target.value), value: currentColor || "#000000" })] })] }))] }));
}
