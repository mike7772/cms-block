import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import { initialLetter } from "@/puck/registry/helpers";
const columnClass = {
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
};
export default function TeamBlock({ block }) {
    var _a, _b, _c;
    const columns = (_a = block.columns) !== null && _a !== void 0 ? _a : "3";
    const members = (_b = block.members) !== null && _b !== void 0 ? _b : [];
    return (_jsxs("section", { className: "rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10", children: [(block.heading || block.subheading) && (_jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [block.heading ? (_jsx("h2", { className: "section-heading text-3xl sm:text-4xl", children: block.heading })) : null, block.subheading ? (_jsx("p", { className: "mt-3 text-lg text-ink/70", children: block.subheading })) : null] })), _jsx("div", { className: `mx-auto grid max-w-6xl gap-6 ${(_c = columnClass[columns]) !== null && _c !== void 0 ? _c : columnClass["3"]}`, children: members.map((member, i) => {
                    const photo = getPreferredImage(member.photo);
                    return (_jsxs("article", { className: "rounded-2xl border border-sky-dark/20 bg-white/90 p-6 text-center shadow-sm shadow-sky-dark/10", children: [photo ? (_jsx("div", { className: "relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full", children: _jsx(Image, { src: photo.src, alt: photo.alt || member.name, fill: true, className: "object-cover", sizes: "112px" }) })) : (_jsx("div", { className: "mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-trunk text-3xl font-semibold text-white", children: initialLetter(member.name) })), _jsx("h3", { className: "text-lg font-semibold text-ink", children: member.name }), member.role ? (_jsx("p", { className: "mt-1 text-sm font-medium text-court", children: member.role })) : null, member.bio ? (_jsx("p", { className: "mt-3 text-sm leading-6 text-ink/70", children: member.bio })) : null, _jsxs("div", { className: "mt-4 flex flex-wrap justify-center gap-3 text-sm", children: [member.email ? (_jsx("a", { href: `mailto:${member.email}`, className: "font-medium text-ink/70 hover:text-court", children: "Email" })) : null, member.linkedinUrl ? (_jsx("a", { href: member.linkedinUrl, className: "font-medium text-ink/70 hover:text-court", target: "_blank", rel: "noreferrer", children: "LinkedIn" })) : null, member.twitterUrl ? (_jsx("a", { href: member.twitterUrl, className: "font-medium text-ink/70 hover:text-court", target: "_blank", rel: "noreferrer", children: "Twitter" })) : null] })] }, i));
                }) })] }));
}
