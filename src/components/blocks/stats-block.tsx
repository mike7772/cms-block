import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { StatsBlock as StatsBlockType } from "@/lib/types";

export default function StatsBlock({ block }: { block: StatsBlockType }) {
  const stats = block.stats ?? [];
  const bg = getPreferredImage(block.backgroundImage);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-sky-dark/20 bg-trunk px-6 py-14 text-white sm:px-10">
      {bg ? (
        <>
          <Image
            src={bg.src}
            alt={bg.alt || block.heading || "Stats background"}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-trunk/80" />
        </>
      ) : null}

      <div className="relative">
        {(block.heading || block.subheading) && (
          <div className="mx-auto mb-10 max-w-2xl text-center">
            {block.heading ? (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {block.heading}
              </h2>
            ) : null}
            {block.subheading ? (
              <p className="mt-3 text-lg text-white/75">{block.subheading}</p>
            ) : null}
          </div>
        )}

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const icon = getPreferredImage(stat.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                {icon ? (
                  <div className="relative mx-auto mb-3 h-10 w-10 overflow-hidden rounded-lg">
                    <Image
                      src={icon.src}
                      alt={icon.alt || stat.label}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : null}
                <p className="text-4xl font-semibold tracking-tight">
                  {stat.value}
                  {stat.suffix ? (
                    <span className="text-2xl text-sky-light">
                      {stat.suffix}
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 text-sm text-white/75">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
