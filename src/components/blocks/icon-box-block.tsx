import Image from "next/image";
import Link from "next/link";
import { getPreferredImage } from "@/lib/media";
import type { IconBoxBlock as IconBoxBlockType } from "@/lib/types";

const alignClass = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
} as const;

export default function IconBoxBlock({
  block,
}: {
  block: IconBoxBlockType;
}) {
  const icon = getPreferredImage(block.icon);
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;

  const content = (
    <div className={`flex flex-col gap-3 ${align}`}>
      {icon ? (
        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-sky-pale">
          <Image
            src={icon.src}
            alt={icon.alt || block.title}
            fill
            className="object-contain p-2"
            sizes="48px"
          />
        </div>
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-pale text-lg font-semibold text-court">
          ◆
        </div>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-ink">
        {block.title}
      </h3>
      {block.description ? (
        <p className="text-ink/70 leading-7">{block.description}</p>
      ) : null}
    </div>
  );

  if (block.linkUrl) {
    const className =
      "block rounded-2xl border border-sky-dark/20 bg-white px-6 py-6 transition hover:border-court/40 hover:bg-sky-pale/50";
    if (block.linkUrl.startsWith("/")) {
      return (
        <Link href={block.linkUrl} className={className}>
          {content}
        </Link>
      );
    }
    return (
      <a href={block.linkUrl} className={className}>
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-sky-dark/20 bg-white px-6 py-6">
      {content}
    </div>
  );
}
