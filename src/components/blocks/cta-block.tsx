import Link from "next/link";
import type { ReactNode } from "react";
import type { CtaBlock as CtaBlockType } from "@/lib/types";

function CtaLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "btn-primary";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default function CtaBlock({ block }: { block: CtaBlockType }) {
  return (
    <section className="mx-auto max-w-3xl rounded-3xl bg-trunk px-8 py-10 text-center text-white sm:px-12">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {block.title}
      </h2>
      {block.body ? (
        <p className="mx-auto mt-3 max-w-xl text-white/80">{block.body}</p>
      ) : null}
      <div className="mt-6">
        <CtaLink href={block.buttonUrl}>{block.buttonLabel}</CtaLink>
      </div>
    </section>
  );
}
