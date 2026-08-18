import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { ProgressTrackerBlock as ProgressTrackerBlockType } from "@/lib/types";

export default function ProgressTrackerBlock({
  block,
}: {
  block: ProgressTrackerBlockType;
}) {
  const steps = block.steps ?? [];
  const vertical = block.layout === "vertical";
  const current = block.currentStep ?? 1;

  return (
    <section className="mx-auto max-w-4xl">
      {block.heading ? (
        <h2 className="section-heading mb-8 text-center">{block.heading}</h2>
      ) : null}
      {steps.length ? (
        <ol
          className={
            vertical
              ? "flex flex-col gap-0"
              : "flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2"
          }
        >
          {steps.map((step, i) => {
            const icon = getPreferredImage(step.icon);
            const complete =
              step.isComplete ?? (current > 0 && i + 1 < current);
            const isCurrent = i + 1 === current;

            return (
              <li
                key={`${step.title}-${i}`}
                className={`relative flex ${
                  vertical
                    ? "gap-4 pb-8 last:pb-0"
                    : "flex-1 flex-col items-center text-center"
                }`}
              >
                {vertical && i < steps.length - 1 ? (
                  <span
                    className={`absolute left-4 top-10 h-[calc(100%-2rem)] w-px ${
                      complete ? "bg-trunk" : "bg-sky-dark/25"
                    }`}
                  />
                ) : null}
                <div
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 text-sm font-semibold ${
                    complete || isCurrent
                      ? "border-trunk bg-trunk text-white"
                      : "border-sky-dark/30 bg-white text-ink/50"
                  }`}
                >
                  {icon ? (
                    <Image
                      src={icon.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  ) : complete ? (
                    "✓"
                  ) : (
                    i + 1
                  )}
                </div>
                <div className={vertical ? "pt-0.5" : "mt-3"}>
                  <p className="font-semibold text-ink">{step.title}</p>
                  {step.description ? (
                    <p className="mt-1 text-sm text-ink/60">
                      {step.description}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
          Add tracker steps
        </div>
      )}
    </section>
  );
}
