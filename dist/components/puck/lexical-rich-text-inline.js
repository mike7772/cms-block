"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from "react";
import { createUsePuck, registerOverlayPortal, useGetPuck, } from "@puckeditor/core";
import LexicalEditor from "@/components/LexicalEditor";
import { cn } from "@/lib/utils";
const usePuck = createUsePuck();
const proseClass = "prose prose-slate mx-auto max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-court prose-strong:text-ink prose-td:px-1.5 prose-td:py-1 prose-th:px-1.5 prose-th:py-1 prose-table:text-sm";
/**
 * Canvas inline Lexical editor for Puck.
 * Active when the LexicalRichText block is selected; otherwise shows HTML preview.
 */
export default function LexicalRichTextInlineEditor({ id, body, }) {
    const selectedId = usePuck((s) => { var _a, _b; return (_b = (_a = s.selectedItem) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.id; });
    const getPuck = useGetPuck();
    const isSelected = selectedId === id;
    const portalRef = useRef(null);
    useEffect(() => {
        if (!isSelected)
            return;
        return registerOverlayPortal(portalRef.current, { disableDrag: true });
    }, [isSelected]);
    const onChange = useCallback((html) => {
        const puck = getPuck();
        const item = puck.getItemById(id);
        const selector = puck.getSelectorForId(id);
        if (!item || !selector)
            return;
        puck.dispatch({
            type: "replace",
            destinationIndex: selector.index,
            destinationZone: selector.zone,
            data: Object.assign(Object.assign({}, item), { props: Object.assign(Object.assign({}, item.props), { body: html }) }),
        });
    }, [getPuck, id]);
    if (isSelected) {
        return (_jsxs("div", { ref: portalRef, className: "mx-auto max-w-3xl", "data-lexical-inline-editor": true, children: [_jsx(LexicalEditor, { value: body !== null && body !== void 0 ? body : "", onChange: onChange, minHeight: "10rem", placeholder: "Start writing rich text\u2026", className: "shadow-sm", autoFocus: true }), _jsx("p", { className: "mt-1.5 text-center text-[11px] text-ink/45", children: "Editing on canvas \u2014 changes sync to the sidebar field" })] }));
    }
    if (!(body === null || body === void 0 ? void 0 : body.trim())) {
        return (_jsx("section", { className: cn(proseClass, "rounded-xl border border-dashed border-sky-dark/35 bg-sky-pale/40 px-6 py-10 text-center"), children: _jsx("p", { className: "m-0 text-sm font-medium text-ink/55", children: "Lexical Rich Text \u2014 select this block to edit inline" }) }));
    }
    return (_jsx("section", { className: proseClass, dangerouslySetInnerHTML: { __html: body } }));
}
