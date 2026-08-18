"use client";

import type { ShareButtonsBlock as ShareButtonsBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const platformLabels: Record<string, string> = {
  facebook: "Facebook",
  twitter: "X",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  email: "Email",
  copy: "Copy link",
};

export default function ShareButtonsBlock({
  block,
}: {
  block: ShareButtonsBlockType;
}) {
  const platform = block.platforms ?? "facebook";
  const label = platformLabels[platform] ?? platform;
  const style = block.style ?? "icon-text";
  const shape = block.shape ?? "rounded";
  const align =
    block.align === "center"
      ? "justify-center"
      : block.align === "right"
        ? "justify-end"
        : "justify-start";

  const shapeClass =
    shape === "circle"
      ? "rounded-full"
      : shape === "square"
        ? "rounded-none"
        : "rounded-xl";

  return (
    <section className="mx-auto max-w-3xl">
      {block.heading ? (
        <h2 className="section-heading mb-4 text-center text-xl">
          {block.heading}
        </h2>
      ) : null}
      <div className={`flex flex-wrap gap-2 ${align}`}>
        <button
          type="button"
          className={`inline-flex items-center gap-2 border border-sky-dark/30 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sky-pale ${shapeClass}`}
          onClick={() => {
            if (platform === "copy" && typeof navigator !== "undefined") {
              void navigator.clipboard?.writeText(window.location.href);
            }
          }}
        >
          {style !== "text" ? (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-pale text-xs font-bold text-trunk">
              {initialLetter(label)}
            </span>
          ) : null}
          {style !== "icon" ? <span>{label}</span> : null}
        </button>
      </div>
    </section>
  );
}
