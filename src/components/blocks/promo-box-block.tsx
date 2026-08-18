import Link from "next/link";
import type { PromoBoxBlock as PromoBoxBlockType } from "@/lib/types";

export default function PromoBoxBlock({ block }: { block: PromoBoxBlockType }) {
  const layout = block.layout ?? "image-left";

  if (layout === "overlay") {
    return (
      <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-sky-dark/25">
        {block.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-trunk" />
        )}
        <div className="relative bg-ink/55 px-6 py-14 text-white sm:px-10 sm:py-20">
          {block.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-light">
              {block.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {block.heading}
          </h2>
          {block.text ? (
            <p className="mt-3 max-w-lg text-white/80">{block.text}</p>
          ) : null}
          {block.buttonLabel ? (
            <Link
              href={block.buttonUrl || "/"}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-trunk"
            >
              {block.buttonLabel}
            </Link>
          ) : null}
        </div>
      </section>
    );
  }

  const imageFirst = layout === "image-left";

  return (
    <section
      className={`mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-sky-dark/25 bg-white md:grid-cols-2 ${
        imageFirst ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      <div className="relative min-h-[220px] bg-sky-pale">
        {block.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        {block.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-foliage">
            {block.eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {block.heading}
        </h2>
        {block.text ? (
          <p className="mt-3 text-ink/70">{block.text}</p>
        ) : null}
        {block.buttonLabel ? (
          <Link
            href={block.buttonUrl || "/"}
            className="mt-6 inline-flex w-fit rounded-full bg-trunk px-5 py-2.5 text-sm font-semibold text-white hover:bg-trunk-dark"
          >
            {block.buttonLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
