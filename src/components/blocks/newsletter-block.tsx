"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { NewsletterBlock as NewsletterBlockType } from "@/lib/types";

export default function NewsletterBlock({
  block,
}: {
  block: NewsletterBlockType;
}) {
  const bg = getPreferredImage(block.backgroundImage);
  const layout = block.layout ?? "boxed";
  const inline = layout === "inline";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const form = (
    <form
      onSubmit={handleSubmit}
      className={
        inline
          ? "mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          : "mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      }
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder={block.placeholderText || "you@example.com"}
        className="min-w-0 flex-1 rounded-full border border-sky-dark/30 bg-white px-5 py-3 text-sm text-ink outline-none ring-court/30 focus:ring-2"
      />
      <button type="submit" className="btn-primary shrink-0">
        {block.buttonLabel}
      </button>
    </form>
  );

  if (layout === "fullwidth") {
    return (
      <section className="relative overflow-hidden rounded-3xl bg-trunk px-6 py-14 text-white sm:px-12">
        {bg ? (
          <>
            <Image
              src={bg.src}
              alt={bg.alt || block.heading}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-trunk/75" />
          </>
        ) : null}
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {block.heading}
          </h2>
          {block.subheading ? (
            <p className="mt-3 text-lg text-white/80">{block.subheading}</p>
          ) : null}
          {form}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10 ${
        layout === "boxed" ? "mx-auto max-w-3xl" : ""
      }`}
    >
      {bg ? (
        <>
          <Image
            src={bg.src}
            alt={bg.alt || block.heading}
            fill
            className="object-cover opacity-20"
            sizes="800px"
          />
        </>
      ) : null}
      <div className={`relative ${inline ? "sm:flex sm:items-end sm:justify-between sm:gap-8" : "text-center"}`}>
        <div className={inline ? "max-w-md text-left" : ""}>
          <h2 className="section-heading text-3xl sm:text-4xl">
            {block.heading}
          </h2>
          {block.subheading ? (
            <p className="mt-3 text-lg text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
        {form}
      </div>
    </section>
  );
}
