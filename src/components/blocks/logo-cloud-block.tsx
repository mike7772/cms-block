import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { LogoCloudBlock as LogoCloudBlockType } from "@/lib/types";

export default function LogoCloudBlock({
  block,
}: {
  block: LogoCloudBlockType;
}) {
  const logos = (block.logos ?? [])
    .map((logo) => getPreferredImage(logo))
    .filter((logo): logo is NonNullable<typeof logo> => Boolean(logo));

  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-10">
      {block.heading ? (
        <h2 className="section-heading mb-8 text-center text-2xl">
          {block.heading}
        </h2>
      ) : null}
      {logos.length ? (
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {logos.map((logo, i) => (
            <li
              key={`${logo.src}-${i}`}
              className="relative h-12 w-28 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 sm:w-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt || `Logo ${i + 1}`}
                fill
                className="object-contain"
                sizes="128px"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-ink/50">Add logo URLs</p>
      )}
    </section>
  );
}
