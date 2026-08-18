export function pageHref(slug, locale) {
    const base = slug === "home" ? "" : `/${slug}`;
    return `/${locale}${base}`;
}
export function postsHref(locale) {
    return `/${locale}/posts`;
}
export function postHref(slug, locale) {
    return `/${locale}/posts/${slug}`;
}
export function sortNavPages(pages) {
    return [...pages].sort((a, b) => {
        var _a, _b;
        const order = ((_a = a.sortOrder) !== null && _a !== void 0 ? _a : 0) - ((_b = b.sortOrder) !== null && _b !== void 0 ? _b : 0);
        if (order !== 0) {
            return order;
        }
        return a.title.localeCompare(b.title);
    });
}
