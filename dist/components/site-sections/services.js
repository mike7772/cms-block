import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /services page. ServicesFeeCalculator is intentionally NOT here — it embeds
 * a live, app-specific widget, so it's registered locally in the consuming
 * portal app instead (see that app's lib/cms/puck-config.tsx).
 */
import { FileText, Users, Calculator, Search, Calendar, Shield, Globe, Building, Scale, BookOpen, CheckCircle, } from "lucide-react";
export function ServicesHeroSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [_jsx("h1", { className: "mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl", children: p.title }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700 md:text-xl", children: p.description })] }) }) }));
}
function bulletsToList(text) {
    if (typeof text !== "string")
        return [];
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}
export function ServicesGridSection(props) {
    const p = props;
    const services = [
        { icon: FileText, title: p.service1Title, description: p.service1Description, features: bulletsToList(p.service1Features) },
        { icon: Search, title: p.service2Title, description: p.service2Description, features: bulletsToList(p.service2Features) },
        { icon: Calculator, title: p.service3Title, description: p.service3Description, features: bulletsToList(p.service3Features) },
        { icon: Calendar, title: p.service4Title, description: p.service4Description, features: bulletsToList(p.service4Features) },
        { icon: Users, title: p.service5Title, description: p.service5Description, features: bulletsToList(p.service5Features) },
        { icon: Shield, title: p.service6Title, description: p.service6Description, features: bulletsToList(p.service6Features) },
    ];
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-6xl", children: _jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (_jsxs("div", { className: "group rounded-xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl", children: [_jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200", children: _jsx(IconComponent, { className: "h-8 w-8 text-blue-600" }) }), _jsx("h3", { className: "mb-4 text-xl font-bold text-blue-900 transition-colors group-hover:text-blue-700", children: service.title }), _jsx("p", { className: "mb-6 leading-relaxed text-gray-600", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx(CheckCircle, { className: "h-4 w-4 flex-shrink-0 text-green-500" }), feature] }, featureIndex))) })] }, index));
                    }) }) }) }) }));
}
export function ServicesAdditionalSection(props) {
    const p = props;
    const items = [
        { icon: BookOpen, title: p.item1Title, description: p.item1Description },
        { icon: Building, title: p.item2Title, description: p.item2Description },
        { icon: Scale, title: p.item3Title, description: p.item3Description },
        { icon: Globe, title: p.item4Title, description: p.item4Description },
    ];
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("h2", { className: "mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl", children: p.heading }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700", children: p.description })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: items.map((item, i) => {
                            const Icon = item.icon;
                            return (_jsxs("div", { className: "rounded-xl bg-blue-50 p-6 text-center", children: [_jsx(Icon, { className: "mx-auto mb-3 h-8 w-8 text-blue-600" }), _jsx("h3", { className: "mb-2 font-bold text-blue-900", children: item.title }), _jsx("p", { className: "text-sm text-gray-600", children: item.description })] }, i));
                        }) })] }) }) }));
}
