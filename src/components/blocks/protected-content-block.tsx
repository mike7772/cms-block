"use client";

import { useState, type FormEvent } from "react";
import type { ProtectedContentBlock as ProtectedContentBlockType } from "@/lib/types";

export default function ProtectedContentBlock({
  block,
}: {
  block: ProtectedContentBlockType;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === block.password) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) {
    return (
      <section className="mx-auto max-w-3xl rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8">
        {block.heading ? (
          <h2 className="mb-4 text-xl font-semibold text-ink">{block.heading}</h2>
        ) : null}
        <div
          className="prose prose-ink max-w-none"
          dangerouslySetInnerHTML={{ __html: block.contentHtml }}
        />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-md rounded-2xl border border-sky-dark/25 bg-white p-6 text-center sm:p-8">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-pale text-trunk">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-ink">
        {block.heading || "Protected content"}
      </h2>
      <p className="mt-2 text-sm text-ink/65">
        {block.message || "Enter the password to view this content."}
      </p>
      <form onSubmit={onSubmit} className="mt-6 space-y-3 text-left">
        <label className="block text-sm font-medium text-ink">
          Password
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            className="mt-1 w-full rounded-xl border border-sky-dark/30 px-3 py-2.5 text-ink outline-none focus:border-trunk"
            autoComplete="off"
          />
        </label>
        {error ? (
          <p className="text-sm text-red-600">Incorrect password.</p>
        ) : null}
        <button
          type="submit"
          className="w-full rounded-full bg-trunk px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-trunk-dark"
        >
          {block.buttonLabel || "Unlock"}
        </button>
      </form>
    </section>
  );
}
