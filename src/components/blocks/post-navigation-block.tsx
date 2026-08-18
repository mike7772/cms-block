import Link from "next/link";
import type { PostNavigationBlock as PostNavigationBlockType } from "@/lib/types";

export default function PostNavigationBlock({
  block,
}: {
  block: PostNavigationBlockType;
}) {
  const showLabels = block.showLabels !== false;
  const hasPrev = Boolean(block.prevUrl);
  const hasNext = Boolean(block.nextUrl);

  if (!hasPrev && !hasNext) {
    return (
      <p className="rounded-2xl border border-dashed border-sky-dark/40 bg-sky-pale/40 px-6 py-8 text-center text-sm text-ink/55">
        Set previous and next post URLs.
      </p>
    );
  }

  return (
    <nav className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
      {hasPrev ? (
        <Link
          href={block.prevUrl!}
          className="rounded-2xl border border-sky-dark/25 bg-white p-5 transition hover:border-sky-dark/45 hover:shadow-md"
        >
          {showLabels ? (
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
              {block.prevLabel || "Previous"}
            </p>
          ) : null}
          <p className="mt-1 font-semibold text-ink">
            {block.prevTitle || "Previous post"}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {hasNext ? (
        <Link
          href={block.nextUrl!}
          className="rounded-2xl border border-sky-dark/25 bg-white p-5 text-right transition hover:border-sky-dark/45 hover:shadow-md"
        >
          {showLabels ? (
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
              {block.nextLabel || "Next"}
            </p>
          ) : null}
          <p className="mt-1 font-semibold text-ink">
            {block.nextTitle || "Next post"}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
