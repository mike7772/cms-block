"use client";

import { useState } from "react";
import type { CodeHighlightBlock as CodeHighlightBlockType } from "@/lib/types";
import { asPlainText } from "@/puck/registry/helpers";

export default function CodeHighlightBlock({
  block,
}: {
  block: CodeHighlightBlockType;
}) {
  const [copied, setCopied] = useState(false);
  const dark = block.theme !== "light";
  const code = asPlainText(block.code);
  const lines = code.split("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <figure className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-sky-dark/25">
      <div
        className={`flex items-center justify-between gap-3 px-4 py-2 text-xs ${
          dark ? "bg-trunk text-white/70" : "bg-sky-pale text-ink/60"
        }`}
      >
        <span className="font-medium uppercase tracking-wide">
          {block.language || "plaintext"}
        </span>
        {block.showCopyButton !== false ? (
          <button
            type="button"
            onClick={copy}
            className={`rounded-lg px-2.5 py-1 transition ${
              dark
                ? "hover:bg-white/10 hover:text-white"
                : "hover:bg-white hover:text-ink"
            }`}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        ) : null}
      </div>
      <pre
        className={`overflow-x-auto p-4 text-sm leading-6 ${
          dark ? "bg-ink text-sky-pale" : "bg-white text-ink"
        }`}
      >
        <code>
          {block.showLineNumbers !== false
            ? lines.map((line, i) => (
                <span key={i} className="block">
                  <span
                    className={`mr-4 inline-block w-8 select-none text-right ${
                      dark ? "text-white/30" : "text-ink/30"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {line || " "}
                </span>
              ))
            : block.code}
        </code>
      </pre>
      {block.caption ? (
        <figcaption
          className={`px-4 py-2 text-sm ${
            dark ? "bg-trunk/90 text-white/60" : "bg-sky-pale text-ink/60"
          }`}
        >
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
