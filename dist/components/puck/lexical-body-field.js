"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import LexicalEditor from "../../components/LexicalEditor.js";
export function LexicalBodyField({ value, onChange, }) {
    return (_jsx("div", { className: "w-full min-w-0", children: _jsx(LexicalEditor, { value: value !== null && value !== void 0 ? value : "", onChange: onChange }) }));
}
