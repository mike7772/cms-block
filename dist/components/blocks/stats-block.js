import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
export default function StatsBlock({ block }) {
    var _a;
    const stats = (_a = block.stats) !== null && _a !== void 0 ? _a : [];
    const bg = getPreferredImage(block.backgroundImage);
    return (_jsxs("section", { className: "relative overflow-hidden rounded-3xl border border-sky-dark/20 bg-trunk px-6 py-14 text-white sm:px-10", children: [bg ? (_jsxs(_Fragment, { children: [_jsx(Image, { src: bg.src, alt: bg.alt || block.heading || "Stats background", fill: true, className: "object-cover", sizes: "100vw" }), _jsx("div", { className: "absolute inset-0 bg-trunk/80" })] })) : null, _jsxs("div", { className: "relative", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-white/75", children: block.subheading })) : null] })), _jsx("div", { className: "mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((stat, i) => {
                            const icon = getPreferredImage(stat.icon);
                            return (_jsxs("div", { className: "rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm", children: [icon ? (_jsx("div", { className: "relative mx-auto mb-3 h-10 w-10 overflow-hidden rounded-lg", children: _jsx(Image, { src: icon.src, alt: icon.alt || stat.label, fill: true, className: "object-cover", sizes: "40px" }) })) : null, _jsxs("p", { className: "text-4xl font-semibold tracking-tight", children: [stat.value, stat.suffix ? (_jsx("span", { className: "text-2xl text-sky-light", children: stat.suffix })) : null] }), _jsx("p", { className: "mt-2 text-sm text-white/75", children: stat.label })] }, i));
                        }) })] })] }));
}
