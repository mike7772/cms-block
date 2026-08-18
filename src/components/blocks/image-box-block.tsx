import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import type { ImageBoxBlock as ImageBoxBlockType } from "@/lib/types";

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export default function ImageBoxBlock({
  block,
}: {
  block: ImageBoxBlockType;
}) {
  const image = getPreferredImage(block.image);
  const align = alignClass[block.align ?? "left"] ?? alignClass.left;

  const link = block.linkUrl ? (
    block.linkUrl.startsWith("/") ? (
      <Link href={block.linkUrl} className="btn-primary mt-4 inline-flex">
        {block.linkLabel || "Learn more"}
      </Link>
    ) : (
      <a href={block.linkUrl} className="btn-primary mt-4 inline-flex">
        {block.linkLabel || "Learn more"}
      </a>
    )
  ) : null;

  return (
    <figure
      className={`mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-dark/25 bg-white ${align}`}
    >
      {image ? (
        <div className="relative aspect-[16/10] w-full bg-sky-pale">
          <Image
            src={image.src}
            alt={image.alt || block.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </div>
      ) : null}
      <figcaption className="px-6 py-5">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {block.title}
        </h3>
        {block.description ? (
          <p className="mt-2 text-ink/70 leading-7">{block.description}</p>
        ) : null}
        {link}
      </figcaption>
    </figure>
  );
}
