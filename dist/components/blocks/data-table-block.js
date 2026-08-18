import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function asStringArray(value) {
    if (!Array.isArray(value))
        return [];
    return value.map((cell) => cell == null ? "" : typeof cell === "string" ? cell : String(cell));
}
function asRows(value) {
    if (!Array.isArray(value))
        return [];
    return value.map((row) => Array.isArray(row)
        ? row.map((cell) => cell == null ? "" : typeof cell === "string" ? cell : String(cell))
        : [String(row)]);
}
export default function DataTableBlock({ block, }) {
    const headers = asStringArray(block.headers);
    const rows = asRows(block.rows);
    return (_jsxs("section", { className: "mx-auto max-w-4xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-2", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mb-6 text-ink/70", children: block.subheading })) : null, _jsx("div", { className: "overflow-x-auto rounded-2xl border border-sky-dark/25 bg-white", children: _jsxs("table", { className: `w-full text-left text-sm ${block.bordered ? "border-collapse" : ""}`, children: [headers.length ? (_jsx("thead", { className: "bg-sky-pale text-ink", children: _jsx("tr", { children: headers.map((header, i) => (_jsx("th", { className: `px-4 py-3 font-semibold ${block.bordered ? "border border-sky-dark/20" : ""}`, children: header }, i))) }) })) : null, _jsx("tbody", { children: rows.map((row, ri) => (_jsx("tr", { className: block.striped && ri % 2 === 1 ? "bg-sky-pale/50" : undefined, children: row.map((cell, ci) => (_jsx("td", { className: `px-4 py-3 text-ink/80 ${block.bordered ? "border border-sky-dark/15" : ""}`, children: cell }, ci))) }, ri))) })] }) })] }));
}
