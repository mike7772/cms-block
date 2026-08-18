"use client";

import { useState } from "react";
import type { ContactFormBlock as ContactFormBlockType } from "@/lib/types";

export default function ContactFormBlock({
  block,
}: {
  block: ContactFormBlockType;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-sky-dark/25 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-10">
      {block.heading ? (
        <h2 className="section-heading text-center text-2xl">{block.heading}</h2>
      ) : null}
      {block.subheading ? (
        <p className="mt-3 text-center text-ink/70">{block.subheading}</p>
      ) : null}

      {submitted ? (
        <p className="mt-8 rounded-2xl bg-white/80 px-4 py-6 text-center text-ink">
          {block.successMessage || "Thanks — we'll be in touch soon."}
        </p>
      ) : (
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {block.showNameField !== false ? (
            <label className="block text-sm font-medium text-ink">
              Name
              <input
                name="name"
                type="text"
                className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
              />
            </label>
          ) : null}
          <label className="block text-sm font-medium text-ink">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
            />
          </label>
          {block.showPhoneField ? (
            <label className="block text-sm font-medium text-ink">
              Phone
              <input
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
              />
            </label>
          ) : null}
          {block.showOrganizationField ? (
            <label className="block text-sm font-medium text-ink">
              Organization
              <input
                name="organization"
                type="text"
                className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
              />
            </label>
          ) : null}
          {block.showSubjectField !== false ? (
            <label className="block text-sm font-medium text-ink">
              Subject
              <input
                name="subject"
                type="text"
                className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
              />
            </label>
          ) : null}
          <label className="block text-sm font-medium text-ink">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-xl border border-sky-dark/30 bg-white px-4 py-2.5 text-ink outline-none focus:border-sky-dark"
            />
          </label>
          <button type="submit" className="btn-primary mt-2 self-center">
            {block.submitButtonLabel || "Send message"}
          </button>
        </form>
      )}
    </section>
  );
}
