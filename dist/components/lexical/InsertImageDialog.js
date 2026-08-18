"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useId, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
export function InsertImageDialog({ onInsert, title = "Insert image", }) {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("https://");
    const [alt, setAlt] = useState("");
    const urlRef = useRef(null);
    const titleId = useId();
    const urlId = useId();
    const altId = useId();
    useEffect(() => {
        if (!open)
            return;
        setUrl("https://");
        setAlt("");
        requestAnimationFrame(() => {
            var _a, _b;
            (_a = urlRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            (_b = urlRef.current) === null || _b === void 0 ? void 0 : _b.select();
        });
    }, [open]);
    function handleInsert() {
        const trimmed = url.trim();
        if (!trimmed)
            return;
        onInsert(trimmed, alt.trim());
        setOpen(false);
    }
    return (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", "aria-label": title, title: title, onMouseDown: (e) => e.preventDefault(), onClick: () => setOpen(true), className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: _jsx(ImageIcon, { className: "h-4 w-4" }) }), open ? (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4", role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, onClick: () => setOpen(false), children: _jsxs("div", { className: "w-full max-w-sm rounded-lg border border-border bg-background p-4 shadow-lg", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { id: titleId, className: "text-base font-semibold text-foreground", children: "Insert image" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Provide an image URL and optional alt text." }), _jsxs("div", { className: "mt-4 space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", htmlFor: urlId, children: "Image URL" }), _jsx("input", { ref: urlRef, id: urlId, type: "url", value: url, onChange: (e) => setUrl(e.target.value), onKeyDown: (e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleInsert();
                                                }
                                                if (e.key === "Escape") {
                                                    setOpen(false);
                                                }
                                            }, placeholder: "https://", className: "w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring" })] }), _jsxs("div", { children: [_jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", htmlFor: altId, children: "Alt text" }), _jsx("input", { id: altId, type: "text", value: alt, onChange: (e) => setAlt(e.target.value), onKeyDown: (e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleInsert();
                                                }
                                                if (e.key === "Escape") {
                                                    setOpen(false);
                                                }
                                            }, placeholder: "Describe the image", className: "w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-ring" })] })] }), _jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [_jsx("button", { type: "button", onClick: () => setOpen(false), className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent", children: "Cancel" }), _jsx("button", { type: "button", onClick: handleInsert, disabled: !url.trim(), className: "rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-40", children: "Insert image" })] })] }) })) : null] }));
}
