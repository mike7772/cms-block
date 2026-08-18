import type { GoogleMapsBlock as GoogleMapsBlockType } from "@/lib/types";

const heightClass: Record<string, string> = {
  small: "h-48",
  medium: "h-72",
  large: "h-96",
};

export default function GoogleMapsBlock({
  block,
}: {
  block: GoogleMapsBlockType;
}) {
  const height = heightClass[block.height ?? "medium"] ?? heightClass.medium;

  return (
    <section className="mx-auto max-w-5xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      {block.embedUrl ? (
        <div
          className={`overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale ${height}`}
        >
          <iframe
            src={block.embedUrl}
            title={block.heading || block.address || "Map"}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 text-ink/60 ${height}`}
        >
          Add a Google Maps embed URL
        </div>
      )}
      {(block.address || block.latitude || block.longitude) && (
        <p className="mt-3 text-center text-sm text-ink/60">
          {block.address ||
            [block.latitude, block.longitude].filter(Boolean).join(", ")}
          {block.zoom != null ? ` · zoom ${block.zoom}` : ""}
        </p>
      )}
    </section>
  );
}
