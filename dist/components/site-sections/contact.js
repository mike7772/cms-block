/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /contact page. The form keeps its real submit behavior (simulated send +
 * success message).
 */
"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
export function ContactHeroSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [_jsx("h1", { className: "mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl", children: p.title }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-700 md:text-xl", children: p.description })] }) }) }));
}
export function ContactInfoAndFormSection(props) {
    const p = props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
    };
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const infoCards = [
        { icon: MapPin, title: p.addressTitle, lines: [p.addressLine1, p.addressLine2, p.addressLine3] },
        { icon: Phone, title: p.phoneTitle, lines: [p.phone1, p.phone2] },
        { icon: Mail, title: p.emailTitle, lines: [p.email1, p.email2] },
        { icon: Clock, title: p.hoursTitle, lines: [p.hoursLine1, p.hoursLine2] },
    ];
    return (_jsx("section", { className: "bg-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "mx-auto max-w-6xl", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "mb-6 font-serif text-2xl font-bold text-blue-900 md:text-3xl", children: p.infoHeading }), _jsx("p", { className: "mb-8 text-gray-600", children: p.infoDescription })] }), _jsx("div", { className: "space-y-6", children: infoCards.map((card, i) => {
                                        const Icon = card.icon;
                                        return (_jsxs("div", { className: "flex items-start gap-4 rounded-xl bg-blue-50 p-6", children: [_jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h3", { className: "mb-2 font-bold text-blue-900", children: card.title }), _jsx("p", { className: "text-gray-700", children: card.lines.map((line, j) => (_jsxs("span", { children: [line, j < card.lines.length - 1 ? _jsx("br", {}) : null] }, j))) })] })] }, i));
                                    }) })] }), _jsx("div", { children: _jsxs("div", { className: "rounded-xl border border-gray-100 bg-white p-8 shadow-lg", children: [_jsx("h2", { className: "mb-6 font-serif text-2xl font-bold text-blue-900 md:text-3xl", children: p.formHeading }), isSubmitted && (_jsxs("div", { className: "mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4", children: [_jsx(CheckCircle, { className: "h-5 w-5 flex-shrink-0 text-green-600" }), _jsx("p", { className: "text-green-800", children: p.successMessage })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Your Name *" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500", placeholder: "Enter your name" })] }), _jsxs("div", { children: [_jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Your Email *" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500", placeholder: "Enter your email" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Your Phone" }), _jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500", placeholder: "Enter your phone number" })] }), _jsxs("div", { children: [_jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Subject *" }), _jsx("input", { type: "text", name: "subject", value: formData.subject, onChange: handleChange, required: true, className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500", placeholder: "Enter subject" })] }), _jsxs("div", { children: [_jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Your Message *" }), _jsx("textarea", { name: "message", value: formData.message, onChange: handleChange, required: true, rows: 6, className: "w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500", placeholder: "Type your message here..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "h-5 w-5" }), p.submitLabel] })) })] })] }) })] }) }) }) }));
}
export function ContactMapSection(props) {
    const p = props;
    return (_jsx("section", { className: "bg-gray-50 py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "mx-auto max-w-4xl", children: [_jsx("h2", { className: "mb-8 text-center font-serif text-2xl font-bold text-blue-900 md:text-3xl", children: p.heading }), _jsx("div", { className: "h-[400px] overflow-hidden rounded-xl bg-white shadow-lg", children: _jsx("div", { className: "flex h-full w-full items-center justify-center bg-gray-200", children: _jsxs("div", { className: "text-center", children: [_jsx(MapPin, { className: "mx-auto mb-4 h-12 w-12 text-gray-400" }), _jsx("p", { className: "text-gray-600", children: p.placeholderText })] }) }) })] }) }) }));
}
