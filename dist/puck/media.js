var _a;
const STRAPI_URL = (_a = process.env.NEXT_PUBLIC_STRAPI_URL) !== null && _a !== void 0 ? _a : "http://localhost:1337";
export function resolveMediaUrl(url) {
    if (!url)
        return "";
    if (url.startsWith("http"))
        return url;
    return `${STRAPI_URL}${url}`;
}
export function stripMediaUrl(media) {
    if (!(media === null || media === void 0 ? void 0 : media.url))
        return "";
    const url = media.url;
    if (url.startsWith("http"))
        return url;
    return `${STRAPI_URL}${url}`;
}
export function stubMedia(url, altText) {
    if (!url)
        return null;
    return {
        id: 0,
        url: resolveMediaUrl(url),
        alternativeText: altText !== null && altText !== void 0 ? altText : null,
        width: null,
        height: null,
        formats: null,
    };
}
export function stubMediaList(urls) {
    if (!(urls === null || urls === void 0 ? void 0 : urls.length))
        return [];
    const result = [];
    urls.forEach((item, i) => {
        var _a;
        const url = typeof item === "string" ? item : (_a = item.url) !== null && _a !== void 0 ? _a : "";
        if (!url)
            return;
        result.push({
            id: i,
            url: resolveMediaUrl(url),
            alternativeText: null,
            width: null,
            height: null,
            formats: null,
        });
    });
    return result;
}
