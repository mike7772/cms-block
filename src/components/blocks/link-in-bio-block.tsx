import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { LinkInBioBlock as LinkInBioBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const bgClass: Record<string, string> = {
  light: "bg-sky-pale text-ink",
  dark: "bg-ink text-white",
  gradient: "bg-gradient-to-br from-trunk via-trunk-dark to-ink text-white",
  custom: "bg-sky-light text-ink",
};

const buttonClass: Record<string, string> = {
  rounded: "rounded-xl",
  pill: "rounded-full",
  square: "rounded-none",
  outline: "rounded-xl border-2 bg-transparent",
};

export default function LinkInBioBlock({
  block,
}: {
  block: LinkInBioBlockType;
}) {
  const profile = getPreferredImage(block.profileImage);
  const bg = block.backgroundColor ?? "light";
  const style = block.buttonStyle ?? "rounded";
  const dark = bg === "dark" || bg === "gradient";
  const links = block.links ?? [];

  return (
    <section
      className={`mx-auto max-w-md rounded-3xl px-6 py-12 ${bgClass[bg] ?? bgClass.light}`}
    >
      <div className="flex flex-col items-center text-center">
        {profile ? (
          <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/40">
            <Image
              src={profile.src}
              alt={profile.alt || block.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        ) : (
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-court text-3xl font-semibold text-white">
            {initialLetter(block.name)}
          </div>
        )}
        <h2 className="text-2xl font-semibold tracking-tight">{block.name}</h2>
        {block.bio ? (
          <p
            className={`mt-2 text-sm leading-6 ${dark ? "text-white/75" : "text-ink/70"}`}
          >
            {block.bio}
          </p>
        ) : null}
      </div>

      <ul className="mt-8 space-y-3">
        {links.map((link, i) => {
          const icon = getPreferredImage(link.icon);
          const featured = Boolean(link.isFeatured);
          return (
            <li key={i}>
              <a
                href={link.url}
                className={`flex items-center justify-center gap-3 px-5 py-3 text-sm font-semibold transition ${
                  buttonClass[style] ?? buttonClass.rounded
                } ${
                  featured
                    ? "bg-court text-white hover:bg-court-dark"
                    : dark
                      ? style === "outline"
                        ? "border-white/40 text-white hover:bg-white/10"
                        : "bg-white/15 text-white hover:bg-white/25"
                      : style === "outline"
                        ? "border-trunk text-trunk hover:bg-trunk hover:text-white"
                        : "bg-white text-ink shadow-sm hover:bg-sky"
                }`}
              >
                {icon ? (
                  <span className="relative h-5 w-5 overflow-hidden rounded">
                    <Image
                      src={icon.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="20px"
                    />
                  </span>
                ) : null}
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
