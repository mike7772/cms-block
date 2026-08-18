"use client";

import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import type { FlipBoxesBlock as FlipBoxesBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function FlipBoxesBlock({
  block,
}: {
  block: FlipBoxesBlockType;
}) {
  const columns = block.columns ?? "3";
  const direction = block.flipDirection ?? "horizontal";
  const boxes = block.boxes ?? [];
  const rotateClass =
    direction === "vertical"
      ? "group-hover:[transform:rotateX(180deg)]"
      : "group-hover:[transform:rotateY(180deg)]";
  const backRotate =
    direction === "vertical"
      ? "[transform:rotateX(180deg)]"
      : "[transform:rotateY(180deg)]";

  return (
    <section className="rounded-3xl border border-sky-dark/20 bg-gradient-to-br from-sky-pale via-white to-sky-light px-6 py-12 sm:px-10">
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
        style={{ perspective: "1000px" }}
      >
        {boxes.map((box, i) => {
          const icon = getPreferredImage(box.frontIcon);
          return (
            <div key={i} className="group h-64 [perspective:1000px]">
              <div
                className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${rotateClass}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sky-dark/20 bg-white p-6 text-center shadow-sm [backface-visibility:hidden]">
                  {icon ? (
                    <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-xl">
                      <Image
                        src={icon.src}
                        alt={icon.alt || box.frontTitle}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-lg font-semibold text-ink">
                      {initialLetter(box.frontTitle)}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-ink">
                    {box.frontTitle}
                  </h3>
                  {box.frontDescription ? (
                    <p className="mt-2 text-sm text-ink/70">
                      {box.frontDescription}
                    </p>
                  ) : null}
                </div>

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-trunk/30 bg-trunk p-6 text-center text-white shadow-sm [backface-visibility:hidden] ${backRotate}`}
                >
                  {box.backTitle ? (
                    <h3 className="text-lg font-semibold">{box.backTitle}</h3>
                  ) : null}
                  {box.backDescription ? (
                    <p className="mt-2 text-sm text-white/80">
                      {box.backDescription}
                    </p>
                  ) : null}
                  {box.buttonLabel && box.buttonUrl ? (
                    <div className="mt-4">
                      {box.buttonUrl.startsWith("/") ? (
                        <Link href={box.buttonUrl} className="btn-primary">
                          {box.buttonLabel}
                        </Link>
                      ) : (
                        <a href={box.buttonUrl} className="btn-primary">
                          {box.buttonLabel}
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
