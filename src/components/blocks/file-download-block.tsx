import type { FileDownloadBlock as FileDownloadBlockType } from "@/lib/types";

export default function FileDownloadBlock({
  block,
}: {
  block: FileDownloadBlockType;
}) {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-sky-dark/20 bg-white px-6 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-ink">{block.title}</h3>
            {block.fileType ? (
              <span className="rounded-full bg-sky-pale px-2 py-0.5 text-xs font-medium uppercase text-ink/70">
                {block.fileType}
              </span>
            ) : null}
          </div>
          {block.description ? (
            <p className="mt-1 text-sm text-ink/70">{block.description}</p>
          ) : null}
        </div>
        {block.fileUrl ? (
          <a
            href={block.fileUrl}
            download
            className="btn-primary shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {block.fileLabel || "Download"}
          </a>
        ) : (
          <span className="text-sm text-ink/50">No file URL</span>
        )}
      </div>
    </section>
  );
}
