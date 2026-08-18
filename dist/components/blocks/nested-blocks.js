var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { createElement } from "react";
import { registryByPuckType } from "@/puck/registry";
/**
 * Renders nested Puck ComponentData outside the editor (public pages).
 * Inside Puck, slot fields are already transformed into render functions.
 */
export function NestedBlocks({ items, className, itemClassName, }) {
    if (!(items === null || items === void 0 ? void 0 : items.length))
        return null;
    return createElement("div", className ? { className } : null, items.map((item, index) => {
        var _a, _b;
        const entry = registryByPuckType.get(item.type);
        if (!entry)
            return null;
        const _c = ((_a = item.props) !== null && _a !== void 0 ? _a : {}), { id: _id } = _c, props = __rest(_c, ["id"]);
        const key = ((_b = item.props) === null || _b === void 0 ? void 0 : _b.id) || `${item.type}-${index}`;
        return createElement("div", { key, className: itemClassName }, entry.render(props));
    }));
}
export function renderSlot(slot, className, options) {
    if (!slot)
        return null;
    if (typeof slot === "function") {
        const Slot = slot;
        return createElement(Slot, className ? { className } : null);
    }
    if (Array.isArray(slot)) {
        return createElement(NestedBlocks, {
            items: slot,
            className,
            itemClassName: options === null || options === void 0 ? void 0 : options.itemClassName,
        });
    }
    if (className) {
        return createElement("div", { className }, slot);
    }
    return slot;
}
export { jsonToSlot, slotToJson } from "./slot-json";
