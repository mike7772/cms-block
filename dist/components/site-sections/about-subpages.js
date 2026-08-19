import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /about/president and /about/vision-mission pages verbatim.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote, Eye, Target, Shield, Clock, Users, Globe } from "lucide-react";
export function AboutSubpageHeroSection(props) {
    const p = props;
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "bg-gray-50 py-4", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-4xl", children: _jsxs(Link, { href: p.backUrl, className: "inline-flex items-center font-medium text-blue-600 hover:text-blue-800", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), p.backLabel] }) }) }) }), _jsx("section", { className: "bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [_jsx("h1", { className: "mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl", children: p.title }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700 md:text-xl", children: p.subtitle })] }) }) })] }));
}
export function AboutPresidentMessageSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-4xl", children: _jsxs("div", { className: "grid items-start gap-12 md:grid-cols-3", children: [_jsxs("div", { className: "md:col-span-1", children: [_jsx("div", { className: "relative h-[300px] overflow-hidden rounded-xl shadow-xl md:h-[400px]", children: _jsx(Image, { src: p.imageUrl, alt: "President of Supreme Court of Oromia", fill: true, className: "object-cover" }) }), _jsxs("div", { className: "mt-6 text-center", children: [_jsx("h3", { className: "mb-2 text-xl font-bold text-blue-900", children: p.imageCaptionTitle }), _jsx("p", { className: "text-gray-600", children: p.imageCaptionSubtitle })] })] }), _jsxs("div", { className: "space-y-6 md:col-span-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Quote, { className: "absolute -left-2 -top-2 h-8 w-8 text-blue-200" }), _jsx("div", { className: "rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6", children: _jsx("p", { className: "text-lg italic leading-relaxed text-gray-800", children: p.quoteText }) })] }), _jsxs("div", { className: "space-y-4 text-gray-700", children: [_jsx("h3", { className: "mb-4 text-2xl font-bold text-blue-900", children: p.bodyHeading }), _jsx("p", { children: p.bodyParagraph1 }), _jsx("p", { children: p.bodyParagraph2 }), _jsx("p", { children: p.bodyParagraph3 }), _jsx("p", { children: p.bodyParagraph4 })] }), _jsxs("div", { className: "mt-8 rounded-xl bg-blue-50 p-6", children: [_jsx("h4", { className: "mb-3 text-xl font-bold text-blue-900", children: p.commitmentHeading }), _jsx("ul", { className: "space-y-2 text-gray-700", children: [p.commitment1, p.commitment2, p.commitment3, p.commitment4].map((item, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "mt-1 text-blue-600", children: "\u2022" }), _jsx("span", { children: item })] }, i))) })] })] })] }) }) }) }));
}
export function AboutVisionSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100", children: _jsx(Eye, { className: "h-8 w-8 text-blue-600" }) }), _jsx("h2", { className: "mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl", children: p.heading })] }), _jsx("div", { className: "rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 md:p-12", children: _jsx("p", { className: "text-center text-lg leading-relaxed text-gray-800 md:text-xl", children: p.text }) })] }) }) }));
}
export function AboutMissionSection(props) {
    const p = props;
    const pillars = [
        { icon: Shield, title: p.pillar1Title, description: p.pillar1Description },
        { icon: Clock, title: p.pillar2Title, description: p.pillar2Description },
        { icon: Users, title: p.pillar3Title, description: p.pillar3Description },
    ];
    return (_jsx("section", { className: "bg-gray-50 py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600", children: _jsx(Target, { className: "h-8 w-8 text-white" }) }), _jsx("h2", { className: "mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl", children: p.heading })] }), _jsxs("div", { className: "rounded-xl bg-white p-8 shadow-lg md:p-12", children: [_jsx("p", { className: "mb-8 text-center text-lg leading-relaxed text-gray-800 md:text-xl", children: p.text }), _jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: pillars.map((pillar, i) => {
                                    const Icon = pillar.icon;
                                    return (_jsxs("div", { className: "rounded-xl bg-blue-50 p-6 text-center", children: [_jsx(Icon, { className: "mx-auto mb-3 h-8 w-8 text-blue-600" }), _jsx("h3", { className: "mb-2 font-bold text-blue-900", children: pillar.title }), _jsx("p", { className: "text-sm text-gray-600", children: pillar.description })] }, i));
                                }) })] })] }) }) }));
}
export function AboutCoreValuesSection(props) {
    const p = props;
    const values = [
        { icon: Shield, title: p.value1Title, description: p.value1Description },
        { icon: Users, title: p.value2Title, description: p.value2Description },
        { icon: Globe, title: p.value3Title, description: p.value3Description },
        { icon: Clock, title: p.value4Title, description: p.value4Description },
    ];
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("h2", { className: "mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl", children: p.heading }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700", children: p.description })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: values.map((value, i) => {
                            const Icon = value.icon;
                            return (_jsxs("div", { className: "rounded-xl border border-blue-100 bg-white p-6 transition-shadow hover:shadow-lg", children: [_jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "mb-2 font-bold text-blue-900", children: value.title }), _jsx("p", { className: "text-sm text-gray-600", children: value.description })] }, i));
                        }) })] }) }) }));
}
export function AboutImageBannerSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gray-50 py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-4xl", children: _jsxs("div", { className: "relative h-[300px] overflow-hidden rounded-xl shadow-2xl md:h-[400px]", children: [_jsx(Image, { src: p.imageUrl, alt: "Supreme Court of Oromia Vision and Mission", fill: true, className: "object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" }), _jsxs("div", { className: "absolute bottom-0 left-0 p-8", children: [_jsx("h3", { className: "mb-2 text-2xl font-bold text-white", children: p.captionTitle }), _jsx("p", { className: "max-w-md text-white/90", children: p.captionText })] })] }) }) }) }));
}
