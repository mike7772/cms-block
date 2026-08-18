import type { AuthorBoxBlock as AuthorBoxBlockType } from "@/lib/types";
import { asPlainText, initialLetter } from "@/puck/registry/helpers";

export default function AuthorBoxBlock({
  block,
}: {
  block: AuthorBoxBlockType;
}) {
  const align = block.align ?? "left";
  const name = asPlainText(block.name);
  const links = [
    { label: "Website", href: block.websiteUrl },
    { label: "Twitter", href: block.twitterUrl },
    { label: "LinkedIn", href: block.linkedinUrl },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <section
      className={`mx-auto flex max-w-3xl gap-5 rounded-2xl border border-sky-dark/25 bg-white p-6 sm:p-8 ${
        align === "center"
          ? "flex-col items-center text-center"
          : "flex-col sm:flex-row sm:items-start"
      }`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-sky-pale">
        {block.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.avatarUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-2xl font-semibold text-trunk">
            {initialLetter(block.name)}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold text-ink">{block.name}</h3>
        {block.role ? (
          <p className="mt-0.5 text-sm font-medium text-foliage">{block.role}</p>
        ) : null}
        {block.bio ? (
          <p className="mt-3 text-sm leading-6 text-ink/70">{block.bio}</p>
        ) : null}
        {links.length > 0 ? (
          <ul
            className={`mt-4 flex flex-wrap gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-trunk hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
