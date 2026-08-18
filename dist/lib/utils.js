import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
/** Prefix a path with Next.js basePath when present. */
export function withBasePath(path) {
    var _a;
    if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
        return path;
    }
    const basePath = (_a = process.env.NEXT_PUBLIC_BASE_PATH) !== null && _a !== void 0 ? _a : "";
    if (!basePath || path.startsWith(basePath)) {
        return path;
    }
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
