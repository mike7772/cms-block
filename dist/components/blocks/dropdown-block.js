"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
export default function DropdownBlock({ block }) {
    var _a, _b;
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    useEffect(() => {
        function onDoc(e) {
            var _a;
            if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
                setOpen(false);
        }
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);
    return (_jsx("div", { className: `relative flex ${alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "left"]}`, children: _jsxs("div", { ref: ref, className: "relative inline-block", children: [_jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), className: "inline-flex items-center gap-2 rounded-full border border-sky-dark/30 bg-white px-4 py-2.5 text-sm font-medium text-ink hover:bg-sky-pale", "aria-expanded": open, children: [block.label, _jsx("span", { "aria-hidden": true, children: open ? "▴" : "▾" })] }), open && items.length > 0 ? (_jsx("ul", { className: "absolute left-0 z-20 mt-2 min-w-[12rem] overflow-hidden rounded-xl border border-sky-dark/25 bg-white py-1 shadow-lg", children: items.map((item, i) => (_jsx("li", { children: _jsx(Link, { href: item.url, className: "block px-4 py-2.5 text-sm text-ink hover:bg-sky-pale", onClick: () => setOpen(false), children: item.label }) }, `${item.label}-${i}`))) })) : null] }) }));
}
