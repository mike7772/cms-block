import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { HeroBlock as HeroBlockType } from "@/lib/types";

export default function HeroBlock({ block }: { block: HeroBlockType }) {
  const image = getPreferredImage(block.image);
  const centered = block.align !== "left";

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-sky-dark/30 bg-gradient-to-br from-sky-pale via-white to-sky-light px-8 py-14 sm:px-12 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      <div
        className={`mx-auto flex max-w-4xl flex-col gap-6 ${
          image ? "lg:flex-row lg:items-center lg:gap-12" : ""
        } ${centered && !image ? "items-center" : ""}`}
      >
        <div className={`flex-1 ${centered && !image ? "max-w-2xl" : ""}`}>
          <p className="eyebrow mb-3">OiCCMS</p>
          <h1 className="section-heading">{block.title}</h1>
          {block.subtitle ? (
            <p className="mt-4 text-lg leading-8 text-ink/70">
              {block.subtitle}
            </p>
          ) : null}
        </div>

        {image ? (
          <div className="relative aspect-[4/3] w-full max-w-xl flex-1 overflow-hidden rounded-2xl shadow-lg shadow-sky-dark/20">
            <Image
              src={image.src}
              alt={image.alt || block.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
