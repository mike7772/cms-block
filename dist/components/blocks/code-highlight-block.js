"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { asPlainText } from "../../puck/registry/helpers.js";
export default function CodeHighlightBlock({ block, }) {
    const [copied, setCopied] = useState(false);
    const dark = block.theme !== "light";
    const code = asPlainText(block.code);
    const lines = code.split("\n");
    async function copy() {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
        catch (_a) {
            /* ignore */
        }
    }
    return (_jsxs("figure", { className: "mx-auto max-w-4xl overflow-hidden rounded-2xl border border-sky-dark/25", children: [_jsxs("div", { className: `flex items-center justify-between gap-3 px-4 py-2 text-xs ${dark ? "bg-trunk text-white/70" : "bg-sky-pale text-ink/60"}`, children: [_jsx("span", { className: "font-medium uppercase tracking-wide", children: block.language || "plaintext" }), block.showCopyButton !== false ? (_jsx("button", { type: "button", onClick: copy, className: `rounded-lg px-2.5 py-1 transition ${dark
                            ? "hover:bg-white/10 hover:text-white"
                            : "hover:bg-white hover:text-ink"}`, children: copied ? "Copied" : "Copy" })) : null] }), _jsx("pre", { className: `overflow-x-auto p-4 text-sm leading-6 ${dark ? "bg-ink text-sky-pale" : "bg-white text-ink"}`, children: _jsx("code", { children: block.showLineNumbers !== false
                        ? lines.map((line, i) => (_jsxs("span", { className: "block", children: [_jsx("span", { className: `mr-4 inline-block w-8 select-none text-right ${dark ? "text-white/30" : "text-ink/30"}`, children: i + 1 }), line || " "] }, i)))
                        : block.code }) }), block.caption ? (_jsx("figcaption", { className: `px-4 py-2 text-sm ${dark ? "bg-trunk/90 text-white/60" : "bg-sky-pale text-ink/60"}`, children: block.caption })) : null] }));
}
