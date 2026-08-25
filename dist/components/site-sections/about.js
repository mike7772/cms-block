import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /about page.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { resolveMediaUrl } from "../../puck/media.js";
export function AboutHeroSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [_jsx("h1", { className: "mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl", children: p.title }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700 md:text-xl", children: p.description })] }) }) }));
}
export function AboutQuickLinksSection(props) {
    const p = props;
    const links = [
        { title: p.link1Title, description: p.link1Description, url: p.link1Url, label: p.link1Label },
        { title: p.link2Title, description: p.link2Description, url: p.link2Url, label: p.link2Label },
    ];
    return (_jsx("section", { className: "bg-white py-12", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto grid max-w-4xl gap-8 md:grid-cols-2", children: links.map((link, i) => (_jsx(Link, { href: link.url, className: "group rounded-xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200", children: _jsx(ChevronRight, { className: "h-6 w-6 text-blue-600" }) }), _jsxs("div", { className: "text-left", children: [_jsx("h3", { className: "mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700", children: link.title }), _jsx("p", { className: "mb-4 text-gray-600", children: link.description }), _jsxs("div", { className: "flex items-center font-medium text-blue-600 group-hover:text-blue-800", children: [_jsx("span", { children: link.label }), _jsx(ArrowRight, { className: "ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" })] })] })] }) }, i))) }) }) }));
}
export function AboutBodySection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gray-50 py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-6xl", children: _jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [_jsxs("div", { className: "order-2 md:order-1", children: [_jsx("h2", { className: "mb-6 font-serif text-3xl font-bold text-blue-900 md:text-4xl", children: p.heading }), _jsxs("div", { className: "space-y-4 text-gray-700", children: [_jsx("p", { children: p.paragraph1 }), _jsx("p", { children: p.paragraph2 }), _jsx("p", { children: p.paragraph3 })] })] }), _jsx("div", { className: "order-1 md:order-2", children: _jsxs("div", { className: "relative h-[300px] overflow-hidden rounded-xl shadow-2xl md:h-[400px]", children: [_jsx(Image, { src: resolveMediaUrl(p.imageUrl), alt: "Supreme Court Building", fill: true, className: "object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" })] }) })] }) }) }) }));
}
