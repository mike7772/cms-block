"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function AccordionBlock({ block, }) {
    var _a;
    const items = (_a = block.items) !== null && _a !== void 0 ? _a : [];
    const [openIds, setOpenIds] = useState(() => {
        const initial = new Set();
        items.forEach((item, i) => {
            var _a;
            if (item.defaultOpen)
                initial.add((_a = item.id) !== null && _a !== void 0 ? _a : i);
        });
        return initial;
    });
    function toggle(id) {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id))
                next.delete(id);
            else
                next.add(id);
            return next;
        });
    }
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-2", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mb-6 text-ink/70", children: block.subheading })) : null, _jsx("div", { className: "divide-y divide-sky-dark/20 overflow-hidden rounded-2xl border border-sky-dark/25 bg-white", children: items.map((item, i) => {
                    var _a;
                    const id = (_a = item.id) !== null && _a !== void 0 ? _a : i;
                    const open = openIds.has(id);
                    return (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: () => toggle(id), className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink transition hover:bg-sky-pale", "aria-expanded": open, children: [_jsx("span", { children: item.title }), _jsx("span", { className: `text-sky-dark transition ${open ? "rotate-45" : ""}`, "aria-hidden": true, children: "+" })] }), open ? (_jsx("div", { className: "border-t border-sky-dark/10 bg-sky-pale/50 px-5 py-4 text-ink/75 leading-7", children: item.content })) : null] }, id));
                }) })] }));
}
