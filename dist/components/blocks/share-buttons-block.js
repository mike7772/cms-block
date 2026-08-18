"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { initialLetter } from "@/puck/registry/helpers";
const platformLabels = {
    facebook: "Facebook",
    twitter: "X",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    email: "Email",
    copy: "Copy link",
};
export default function ShareButtonsBlock({ block, }) {
    var _a, _b, _c, _d;
    const platform = (_a = block.platforms) !== null && _a !== void 0 ? _a : "facebook";
    const label = (_b = platformLabels[platform]) !== null && _b !== void 0 ? _b : platform;
    const style = (_c = block.style) !== null && _c !== void 0 ? _c : "icon-text";
    const shape = (_d = block.shape) !== null && _d !== void 0 ? _d : "rounded";
    const align = block.align === "center"
        ? "justify-center"
        : block.align === "right"
            ? "justify-end"
            : "justify-start";
    const shapeClass = shape === "circle"
        ? "rounded-full"
        : shape === "square"
            ? "rounded-none"
            : "rounded-xl";
    return (_jsxs("section", { className: "mx-auto max-w-3xl", children: [block.heading ? (_jsx("h2", { className: "section-heading mb-4 text-center text-xl", children: block.heading })) : null, _jsx("div", { className: `flex flex-wrap gap-2 ${align}`, children: _jsxs("button", { type: "button", className: `inline-flex items-center gap-2 border border-sky-dark/30 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-pale ${shapeClass}`, onClick: () => {
                        var _a;
                        if (platform === "copy" && typeof navigator !== "undefined") {
                            void ((_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(window.location.href));
                        }
                    }, children: [style !== "text" ? (_jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-sky-pale text-xs font-bold text-trunk", children: initialLetter(label) })) : null, style !== "icon" ? _jsx("span", { children: label }) : null] }) })] }));
}
