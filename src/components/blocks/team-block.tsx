import Image from "next/image";
import { getPreferredImage } from "@/lib/media";
import type { TeamBlock as TeamBlockType } from "@/lib/types";
import { initialLetter } from "@/puck/registry/helpers";

const columnClass: Record<string, string> = {
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function TeamBlock({ block }: { block: TeamBlockType }) {
  const columns = block.columns ?? "3";
  const members = block.members ?? [];

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
      >
        {members.map((member, i) => {
          const photo = getPreferredImage(member.photo);
          return (
            <article
              key={i}
              className="rounded-2xl border border-sky-dark/20 bg-white/90 p-6 text-center shadow-sm shadow-sky-dark/10"
            >
              {photo ? (
                <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt || member.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              ) : (
                <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-trunk text-3xl font-semibold text-white">
                  {initialLetter(member.name)}
                </div>
              )}
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              {member.role ? (
                <p className="mt-1 text-sm font-medium text-court">
                  {member.role}
                </p>
              ) : null}
              {member.bio ? (
                <p className="mt-3 text-sm leading-6 text-ink/70">{member.bio}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="font-medium text-ink/70 hover:text-court"
                  >
                    Email
                  </a>
                ) : null}
                {member.linkedinUrl ? (
                  <a
                    href={member.linkedinUrl}
                    className="font-medium text-ink/70 hover:text-court"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {member.twitterUrl ? (
                  <a
                    href={member.twitterUrl}
                    className="font-medium text-ink/70 hover:text-court"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
