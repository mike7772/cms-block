import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
function CtaLink({ href, children, }) {
    const className = "btn-primary";
    if (href.startsWith("/")) {
        return (_jsx(Link, { href: href, className: className, children: children }));
    }
    return (_jsx("a", { href: href, className: className, children: children }));
}
export default function CtaBlock({ block }) {
    return (_jsxs("section", { className: "mx-auto max-w-3xl rounded-3xl bg-trunk px-8 py-10 text-center text-white sm:px-12", children: [_jsx("h2", { className: "text-2xl font-semibold tracking-tight sm:text-3xl", children: block.title }), block.body ? (_jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/80", children: block.body })) : null, _jsx("div", { className: "mt-6", children: _jsx(CtaLink, { href: block.buttonUrl, children: block.buttonLabel }) })] }));
}
