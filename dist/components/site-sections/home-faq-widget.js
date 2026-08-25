"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
/**
 * Click-to-expand accordion, matching the interaction pattern of the
 * generic FaqBlock (blocks/faq-block.tsx) — this section previously only
 * rendered the question with no answer data or click behavior at all.
 * Extracted into its own "use client" file (rather than marking all of
 * home.tsx client) so every other section in that file stays a plain
 * server-renderable component, matching the HomeUpdatesWidget precedent.
 */
export function HomeFaqWidgetSection(props) {
    const p = props;
    const questions = [
        { question: p.faq1, answer: p.faq1Answer },
        { question: p.faq2, answer: p.faq2Answer },
        { question: p.faq3, answer: p.faq3Answer },
        { question: p.faq4, answer: p.faq4Answer },
        { question: p.faq5, answer: p.faq5Answer },
    ].filter((item) => item.question);
    const [openIndex, setOpenIndex] = useState(null);
    return (_jsx("section", { className: "bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [_jsxs("div", { className: "mb-8 text-center sm:mb-12 md:mb-16", children: [_jsx("h2", { className: "mb-4 font-serif text-2xl font-bold text-blue-900 sm:mb-6 sm:text-3xl md:text-4xl", children: p.title }), _jsx("p", { className: "mx-auto max-w-2xl px-4 text-sm text-gray-700 sm:text-base md:text-lg", children: p.description })] }), _jsxs("div", { className: "mx-auto max-w-3xl", children: [_jsx("div", { className: "space-y-4", children: questions.map((item, i) => {
                                const open = openIndex === i;
                                return (_jsxs("div", { className: "overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md", children: [_jsxs("button", { type: "button", className: "flex w-full items-center justify-between p-6 text-left", "aria-expanded": open, onClick: () => setOpenIndex(open ? null : i), children: [_jsx("span", { className: "text-lg font-medium text-gray-900", children: item.question }), _jsx(ChevronDown, { className: `h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""}` })] }), open && item.answer ? (_jsx("div", { className: "border-t border-gray-100 px-6 pb-6 pt-4 text-gray-600", children: item.answer })) : null] }, i));
                            }) }), _jsx("div", { className: "mt-10 text-center", children: _jsxs(Link, { href: "#", className: "group inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700", children: [_jsx("span", { children: p.viewAllLabel }), _jsx(ArrowRight, { className: "h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" })] }) })] })] }) }));
}
