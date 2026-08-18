"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ProtectedContentBlock({ block, }) {
    const [unlocked, setUnlocked] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    function onSubmit(e) {
        e.preventDefault();
        if (value === block.password) {
            setUnlocked(true);
            setError(false);
        }
        else {
            setError(true);
        }
    }
    if (unlocked) {
        return (_jsxs("section", { className: "mx-auto max-w-3xl rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8", children: [block.heading ? (_jsx("h2", { className: "mb-4 text-xl font-semibold text-ink", children: block.heading })) : null, _jsx("div", { className: "prose prose-ink max-w-none", dangerouslySetInnerHTML: { __html: block.contentHtml } })] }));
    }
    return (_jsxs("section", { className: "mx-auto max-w-md rounded-2xl border border-sky-dark/25 bg-white p-6 text-center sm:p-8", children: [_jsx("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-pale text-trunk", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "h-5 w-5", "aria-hidden": true, children: [_jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), _jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] }) }), _jsx("h2", { className: "text-lg font-semibold text-ink", children: block.heading || "Protected content" }), _jsx("p", { className: "mt-2 text-sm text-ink/65", children: block.message || "Enter the password to view this content." }), _jsxs("form", { onSubmit: onSubmit, className: "mt-6 space-y-3 text-left", children: [_jsxs("label", { className: "block text-sm font-medium text-ink", children: ["Password", _jsx("input", { type: "password", value: value, onChange: (e) => {
                                    setValue(e.target.value);
                                    setError(false);
                                }, className: "mt-1 w-full rounded-xl border border-sky-dark/30 px-3 py-2.5 text-ink outline-none focus:border-trunk", autoComplete: "off" })] }), error ? (_jsx("p", { className: "text-sm text-red-600", children: "Incorrect password." })) : null, _jsx("button", { type: "submit", className: "w-full rounded-full bg-trunk px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-trunk-dark", children: block.buttonLabel || "Unlock" })] })] }));
}
