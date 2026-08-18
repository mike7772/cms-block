import Link from "next/link";
import type { PricingBlock as PricingBlockType } from "@/lib/types";
import { asPlainText } from "@/puck/registry/helpers";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

function planFeatures(features: unknown): string[] {
  if (Array.isArray(features)) return features.map(String);
  const text = asPlainText(features);
  if (text) {
    return text
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

export default function PricingBlock({
  block,
}: {
  block: PricingBlockType;
}) {
  const columns = block.columns ?? "3";
  const plans = block.plans ?? [];

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-white via-sky-pale to-sky-light px-6 py-12 sm:px-10">
      {(block.heading || block.subheading) && (
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {block.heading ? (
            <h2 className="section-heading text-3xl sm:text-4xl">
              {block.heading}
            </h2>
          ) : null}
          {block.subheading ? (
            <p className="mt-3 text-lg text-ink/70">{block.subheading}</p>
          ) : null}
        </div>
      )}

      <div
        className={`mx-auto grid max-w-6xl gap-6 ${columnClass[columns] ?? columnClass["3"]}`}
      >
        {plans.map((plan, i) => {
          const features = planFeatures(plan.features);
          const featured = Boolean(plan.isFeatured);
          return (
            <article
              key={i}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                featured
                  ? "border-court bg-trunk text-white shadow-trunk/20"
                  : "border-sky-dark/20 bg-white/90 shadow-sky-dark/10"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${featured ? "text-white" : "text-ink"}`}
              >
                {plan.planName}
              </h3>
              <p className="mt-3">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                {plan.period ? (
                  <span
                    className={`text-sm ${featured ? "text-white/70" : "text-ink/60"}`}
                  >
                    {plan.period}
                  </span>
                ) : null}
              </p>
              {plan.description ? (
                <p
                  className={`mt-3 text-sm ${featured ? "text-white/75" : "text-ink/70"}`}
                >
                  {plan.description}
                </p>
              ) : null}
              {features.length > 0 ? (
                <ul
                  className={`mt-5 space-y-2 text-sm ${featured ? "text-white/85" : "text-ink/70"}`}
                >
                  {features.map((f, fi) => (
                    <li key={fi} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {plan.buttonLabel && plan.buttonUrl ? (
                <div className="mt-auto pt-6">
                  {plan.buttonUrl.startsWith("/") ? (
                    <Link
                      href={plan.buttonUrl}
                      className={
                        featured
                          ? "btn-primary w-full bg-court"
                          : "inline-flex w-full items-center justify-center rounded-full border border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk hover:text-white"
                      }
                    >
                      {plan.buttonLabel}
                    </Link>
                  ) : (
                    <a
                      href={plan.buttonUrl}
                      className={
                        featured
                          ? "btn-primary w-full bg-court"
                          : "inline-flex w-full items-center justify-center rounded-full border border-trunk px-6 py-3 text-sm font-semibold text-trunk transition hover:bg-trunk hover:text-white"
                      }
                    >
                      {plan.buttonLabel}
                    </a>
                  )}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
