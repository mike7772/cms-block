import type { LottieBlock as LottieBlockType } from "@/lib/types";

const widthClass: Record<string, string> = {
  small: "max-w-xs",
  medium: "max-w-md",
  large: "max-w-2xl",
  full: "max-w-full",
};

const alignClass: Record<string, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export default function LottieBlock({ block }: { block: LottieBlockType }) {
  const url = block.animationUrl || block.animationFile?.url || "";
  const width = widthClass[block.width ?? "medium"] ?? widthClass.medium;
  const align = alignClass[block.align ?? "center"] ?? alignClass.center;

  return (
    <section className="mx-auto max-w-4xl">
      {block.heading ? (
        <h2 className="section-heading mb-6 text-center">{block.heading}</h2>
      ) : null}
      <div className={`${width} ${align}`}>
        {url ? (
          <div className="overflow-hidden rounded-3xl border border-sky-dark/25 bg-sky-pale p-4">
            <iframe
              src={url}
              title={block.heading || "Lottie animation"}
              className="aspect-square w-full rounded-2xl bg-white"
              sandbox="allow-scripts allow-same-origin"
            />
            <p className="mt-3 text-center text-sm text-ink/50">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-sky-dark/40 underline-offset-2 hover:text-ink"
              >
                Open animation
              </a>
              {block.loop ? " · loop" : ""}
              {block.autoplay ? " · autoplay" : ""}
              {block.speed ? ` · ${block.speed}` : ""}
            </p>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-sky-dark/30 bg-sky-pale/50 px-6 py-12 text-center text-ink/60">
            Add a Lottie animation URL
          </div>
        )}
      </div>
    </section>
  );
}
