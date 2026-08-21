"use client";
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ImageUp, Loader2 } from "lucide-react";
const API_BASE = (_a = process.env.NEXT_PUBLIC_API_URL) !== null && _a !== void 0 ? _a : "http://localhost:1212/api/v1";
/** Puck "custom" field for imageUrl props: a plain text input for pasting a
 * direct link, plus an "Upload" button that sends the file to OCCMS-Backend's
 * MinIO endpoint (POST /minio/upload) and fills the field with the resulting
 * public URL — so editors can either paste a link or upload straight from
 * their machine, and the result is a plain URL string like before. */
export function ImageUrlField({ value, onChange, readOnly, }) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    async function handleFile(file) {
        var _a;
        setError(null);
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch(`${API_BASE}/minio/upload`, {
                method: "POST",
                credentials: "include",
                body: formData,
            });
            const data = (await res.json().catch(() => ({})));
            if (!res.ok || !((_a = data.file) === null || _a === void 0 ? void 0 : _a.filePath)) {
                throw new Error("message" in data ? String(data.message) : "Upload failed");
            }
            onChange(data.file.filePath);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed");
        }
        finally {
            setUploading(false);
        }
    }
    return (_jsxs("div", { className: "space-y-1.5", children: [_jsxs("div", { className: "flex gap-1.5", children: [_jsx("input", { type: "text", value: value !== null && value !== void 0 ? value : "", disabled: readOnly, onChange: (e) => onChange(e.target.value), placeholder: "/images/example.png or https://\u2026", className: "h-8 flex-1 rounded-md border border-input bg-background px-2 text-sm outline-none focus:border-ring" }), _jsx("button", { type: "button", disabled: readOnly || uploading, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, title: "Upload image", className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:bg-accent disabled:opacity-60", children: uploading ? _jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : _jsx(ImageUp, { className: "h-4 w-4" }) }), _jsx("input", { ref: inputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
                            var _a;
                            const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                            e.target.value = "";
                            if (file)
                                void handleFile(file);
                        } })] }), error && _jsx("p", { className: "text-xs text-destructive", children: error }), value && (
            // eslint-disable-next-line @next/next/no-img-element
            _jsx("img", { src: value, alt: "", className: "h-16 w-auto max-w-full rounded border border-input object-contain", onError: (e) => {
                    e.target.style.display = "none";
                } }))] }));
}
