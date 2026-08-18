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
import { registryByPuckType } from "./registry/index.js";
/**
 * Convert Puck editor data into Strapi dynamic-zone blocks.
 * Media relations are omitted (null) when only a URL is known — Strapi
 * needs media IDs. Scalar and nested component fields sync fully.
 */
export function puckDataToStrapiBlocks(data) {
    var _a, _b;
    const content = (_a = data.content) !== null && _a !== void 0 ? _a : [];
    const blocks = [];
    for (const item of content) {
        const entry = registryByPuckType.get(item.type);
        if (!entry)
            continue;
        const _c = ((_b = item.props) !== null && _b !== void 0 ? _b : {}), { id: _id } = _c, props = __rest(_c, ["id"]);
        const block = entry.toBlock(props);
        // Strip stub media (id: 0) so Strapi does not receive invalid media refs.
        const sanitized = sanitizeBlockForStrapi(block);
        blocks.push(sanitized);
    }
    return blocks;
}
function isStubMedia(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        value.id === 0 &&
        "url" in value);
}
function sanitizeValue(value) {
    if (Array.isArray(value)) {
        if (value.length > 0 && isStubMedia(value[0])) {
            return undefined;
        }
        return value.map((item) => {
            if (typeof item === "object" && item !== null) {
                return sanitizeNestedItem(item);
            }
            return item;
        });
    }
    if (isStubMedia(value)) {
        return null;
    }
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        return sanitizeNestedItem(value);
    }
    return value;
}
function sanitizeNestedItem(item) {
    const next = {};
    for (const [key, val] of Object.entries(item)) {
        if (key === "id")
            continue;
        const sanitized = sanitizeValue(val);
        if (sanitized !== undefined) {
            next[key] = sanitized;
        }
    }
    return next;
}
function sanitizeBlockForStrapi(block) {
    const result = {
        __component: block.__component,
    };
    for (const [key, value] of Object.entries(block)) {
        if (key === "__component" || key === "id")
            continue;
        const sanitized = sanitizeValue(value);
        if (sanitized !== undefined) {
            result[key] = sanitized;
        }
    }
    return result;
}
