"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export type HomeFaqWidgetProps = {
  title: string;
  description: string;
  viewAllLabel: string;
  faq1: string;
  faq1Answer: string;
  faq2: string;
  faq2Answer: string;
  faq3: string;
  faq3Answer: string;
  faq4: string;
  faq4Answer: string;
  faq5: string;
  faq5Answer: string;
};

/**
 * Click-to-expand accordion, matching the interaction pattern of the
 * generic FaqBlock (blocks/faq-block.tsx) — this section previously only
 * rendered the question with no answer data or click behavior at all.
 * Extracted into its own "use client" file (rather than marking all of
 * home.tsx client) so every other section in that file stays a plain
 * server-renderable component, matching the HomeUpdatesWidget precedent.
 */
export function HomeFaqWidgetSection(props: HomeFaqWidgetProps) {
  const p = props;
  const questions = [
    { question: p.faq1, answer: p.faq1Answer },
    { question: p.faq2, answer: p.faq2Answer },
    { question: p.faq3, answer: p.faq3Answer },
    { question: p.faq4, answer: p.faq4Answer },
    { question: p.faq5, answer: p.faq5Answer },
  ].filter((item) => item.question);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 font-serif text-2xl font-bold text-blue-900 sm:mb-6 sm:text-3xl md:text-4xl">{p.title}</h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-gray-700 sm:text-base md:text-lg">{p.description}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {questions.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-6 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && item.answer ? (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-gray-600">{item.answer}</div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
            >
              <span>{p.viewAllLabel}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
