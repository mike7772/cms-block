"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ContentToggleBlock({ block, }) {
    var _a;
    const [pane, setPane] = useState((_a = block.defaultPane) !== null && _a !== void 0 ? _a : "a");
    const content = pane === "a" ? block.contentA : block.contentB;
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-6 text-center", children: block.heading })) : null, _jsx("div", { className: "mb-4 flex justify-center gap-2 rounded-full border border-sky-dark/25 bg-sky-pale/50 p-1", children: ["a", "b"].map((key) => {
                    const label = key === "a" ? block.labelA : block.labelB;
                    return (_jsx("button", { type: "button", onClick: () => setPane(key), className: `flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${pane === key
                            ? "bg-trunk text-white shadow"
                            : "text-ink/70 hover:text-ink"}`, children: label }, key));
                }) }), _jsx("div", { className: "rounded-2xl border border-sky-dark/25 bg-white p-6 text-sm leading-6 text-ink/75 whitespace-pre-wrap", children: content })] }));
}
