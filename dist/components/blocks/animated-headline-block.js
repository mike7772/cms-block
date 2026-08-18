"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { asPlainText } from "@/puck/registry/helpers";
const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};
const speedMs = {
    slow: 2800,
    normal: 1800,
    fast: 1000,
};
export default function AnimatedHeadlineBlock({ block, }) {
    var _a, _b, _c, _d, _e, _f;
    const words = useMemo(() => asPlainText(block.animatedWords)
        .split(",")
        .map((w) => w.trim())
        .filter(Boolean), [block.animatedWords]);
    const [index, setIndex] = useState(0);
    const [typed, setTyped] = useState("");
    const Tag = ((_a = block.headingLevel) !== null && _a !== void 0 ? _a : "h2");
    const align = (_c = alignClass[(_b = block.align) !== null && _b !== void 0 ? _b : "center"]) !== null && _c !== void 0 ? _c : alignClass.center;
    const interval = (_e = speedMs[(_d = block.animationSpeed) !== null && _d !== void 0 ? _d : "normal"]) !== null && _e !== void 0 ? _e : speedMs.normal;
    const isTyping = ((_f = block.animationType) !== null && _f !== void 0 ? _f : "rotating") === "typing";
    useEffect(() => {
        if (words.length <= 1 || isTyping)
            return;
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words, interval, isTyping]);
    useEffect(() => {
        if (words.length === 0 || !isTyping)
            return;
        const word = words[index % words.length];
        let char = 0;
        setTyped("");
        const typeTimer = setInterval(() => {
            char += 1;
            setTyped(word.slice(0, char));
            if (char >= word.length)
                clearInterval(typeTimer);
        }, 60);
        const cycleTimer = setTimeout(() => {
            setIndex((i) => (i + 1) % words.length);
        }, interval);
        return () => {
            clearInterval(typeTimer);
            clearTimeout(cycleTimer);
        };
    }, [words, index, interval, isTyping]);
    const current = isTyping
        ? typed || words[index % words.length] || ""
        : words[index % words.length] || asPlainText(block.animatedWords);
    return (_jsx("section", { className: `mx-auto max-w-3xl py-6 ${align}`, children: _jsxs(Tag, { className: "section-heading", children: [block.prefixText ? (_jsxs("span", { className: "text-ink", children: [block.prefixText, " "] })) : null, _jsx("span", { className: "text-court", children: current }), block.suffixText ? (_jsxs("span", { className: "text-ink", children: [" ", block.suffixText] })) : null] }) }));
}
