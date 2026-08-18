import type { SocialIconsBlock as SocialIconsBlockType } from "@/lib/types";

const alignClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function SocialIconsBlock({
  block,
}: {
  block: SocialIconsBlockType;
}) {
  const icons = block.icons ?? [];
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;

  return (
    <section className="mx-auto max-w-3xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center text-xl">
          {block.heading}
        </h2>
      ) : null}
      {icons.length ? (
        <ul className={`flex flex-wrap gap-3 ${align}`}>
          {icons.map((icon, i) => (
            <li key={`${icon.platform}-${i}`}>
              <a
                href={icon.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label || icon.platform}
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-sky-dark/30 bg-white px-3 text-sm font-medium capitalize text-ink transition hover:bg-sky-pale"
              >
                {icon.label || icon.platform}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-ink/50">Add social icons</p>
      )}
    </section>
  );
}
