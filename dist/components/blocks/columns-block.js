import { jsx as _jsx } from "react/jsx-runtime";
import { renderSlot } from "./nested-blocks";
const gapClass = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-10",
};
const stackColClass = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};
const flatColClass = {
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-2 lg:grid-cols-4",
};
export default function ColumnsBlock({ block }) {
    var _a, _b, _c, _d, _e;
    const count = (_a = block.columnCount) !== null && _a !== void 0 ? _a : "2";
    const gap = (_c = gapClass[(_b = block.gap) !== null && _b !== void 0 ? _b : "medium"]) !== null && _c !== void 0 ? _c : gapClass.medium;
    const stack = block.stackOnMobile !== false;
    const columns = [
        block.column1,
        block.column2,
        block.column3,
        block.column4,
    ].slice(0, Number(count));
    const cols = stack
        ? ((_d = stackColClass[count]) !== null && _d !== void 0 ? _d : stackColClass["2"])
        : ((_e = flatColClass[count]) !== null && _e !== void 0 ? _e : flatColClass["2"]);
    return (_jsx("div", { className: `mx-auto grid max-w-7xl px-6 ${gap} ${cols}`, children: columns.map((column, i) => (_jsx("div", { className: "min-w-0", children: renderSlot(column) }, i))) }));
}
