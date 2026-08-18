import type { SitemapBlock as SitemapBlockType } from "@/lib/types";

const samplePages = [
  { title: "Home", description: "Welcome page" },
  { title: "About", description: "Our story" },
  { title: "Services", description: "What we offer" },
  { title: "Blog", description: "News and updates" },
  { title: "Contact", description: "Get in touch" },
];

const columnClass: Record<string, string> = {
  "1": "grid-cols-1",
  "2": "sm:grid-cols-2",
  "3": "sm:grid-cols-2 lg:grid-cols-3",
  "4": "sm:grid-cols-2 lg:grid-cols-4",
};

export default function SitemapBlock({ block }: { block: SitemapBlockType }) {
  const layout = block.layout ?? "list";
  const cols = columnClass[block.columns ?? "2"] ?? columnClass["2"];

  return (
    <section className="mx-auto max-w-4xl rounded-3xl border border-sky-dark/20 bg-white px-8 py-10">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center text-2xl">
          {block.heading}
        </h2>
      ) : null}
      <p className="mb-6 text-center text-xs text-ink/40">
        Sample sitemap · max depth {block.maxDepth ?? 3}
      </p>
      <ul
        className={
          layout === "grid"
            ? `grid gap-4 ${cols}`
            : layout === "tree"
              ? "space-y-2 border-l-2 border-sky-dark/20 pl-4"
              : "space-y-3"
        }
      >
        {samplePages.map((page) => (
          <li key={page.title}>
            <span className="font-medium text-ink">{page.title}</span>
            {block.showDescriptions ? (
              <p className="text-sm text-ink/60">{page.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
