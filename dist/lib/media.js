var _a;
const STRAPI_URL = (_a = process.env.NEXT_PUBLIC_STRAPI_URL) !== null && _a !== void 0 ? _a : "http://localhost:1337";
export function getMediaUrl(media) {
    if (!(media === null || media === void 0 ? void 0 : media.url)) {
        return null;
    }
    if (media.url.startsWith("http")) {
        return media.url;
    }
    return `${STRAPI_URL}${media.url}`;
}
export function getPreferredImage(media) {
    var _a, _b, _c, _d, _e, _f;
    const url = getMediaUrl(media);
    if (!url) {
        return null;
    }
    const large = (_a = media === null || media === void 0 ? void 0 : media.formats) === null || _a === void 0 ? void 0 : _a.large;
    return {
        src: large ? `${STRAPI_URL}${large.url}` : url,
        width: (_c = (_b = large === null || large === void 0 ? void 0 : large.width) !== null && _b !== void 0 ? _b : media === null || media === void 0 ? void 0 : media.width) !== null && _c !== void 0 ? _c : 1200,
        height: (_e = (_d = large === null || large === void 0 ? void 0 : large.height) !== null && _d !== void 0 ? _d : media === null || media === void 0 ? void 0 : media.height) !== null && _e !== void 0 ? _e : 630,
        alt: (_f = media === null || media === void 0 ? void 0 : media.alternativeText) !== null && _f !== void 0 ? _f : "",
    };
}
