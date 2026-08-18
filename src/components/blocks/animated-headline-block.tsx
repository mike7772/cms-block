"use client";

import { useEffect, useMemo, useState, type ElementType } from "react";
import type { AnimatedHeadlineBlock as AnimatedHeadlineBlockType } from "@/lib/types";
import { asPlainText } from "@/puck/registry/helpers";

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const speedMs = {
  slow: 2800,
  normal: 1800,
  fast: 1000,
} as const;

export default function AnimatedHeadlineBlock({
  block,
}: {
  block: AnimatedHeadlineBlockType;
}) {
  const words = useMemo(
    () =>
      asPlainText(block.animatedWords)
        .split(",")
        .map((w) => w.trim())
        .filter(Boolean),
    [block.animatedWords],
  );
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const Tag = (block.headingLevel ?? "h2") as ElementType;
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;
  const interval = speedMs[block.animationSpeed ?? "normal"] ?? speedMs.normal;
  const isTyping = (block.animationType ?? "rotating") === "typing";

  useEffect(() => {
    if (words.length <= 1 || isTyping) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isTyping]);

  useEffect(() => {
    if (words.length === 0 || !isTyping) return;
    const word = words[index % words.length];
    let char = 0;
    setTyped("");
    const typeTimer = setInterval(() => {
      char += 1;
      setTyped(word.slice(0, char));
      if (char >= word.length) clearInterval(typeTimer);
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

  return (
    <section className={`mx-auto max-w-3xl py-6 ${align}`}>
      <Tag className="section-heading">
        {block.prefixText ? (
          <span className="text-ink">{block.prefixText} </span>
        ) : null}
        <span className="text-court">{current}</span>
        {block.suffixText ? (
          <span className="text-ink"> {block.suffixText}</span>
        ) : null}
      </Tag>
    </section>
  );
}
