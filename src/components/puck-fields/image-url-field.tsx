"use client";

import { useRef, useState } from "react";
import { ImageUp, Loader2 } from "lucide-react";
import { resolveMediaUrl } from "@/puck/media";

type UploadResponse = {
  url?: string;
  error?: string;
};

/** Puck "custom" field for imageUrl props: a plain text input for pasting a
 * direct link, plus an "Upload" button that sends the file to the editor
 * app's own /api/admin/upload route — which forwards it to Strapi's media
 * library server-side (never exposing the Strapi API token to the browser)
 * and returns Strapi's public URL, so uploaded images resolve identically
 * in the Puck editor and on PUBLIC_PORTAL. A relative path, matching the
 * placeholder hint below, resolves via resolveMediaUrl instead. */
export function ImageUrlField({
  value,
  onChange,
  readOnly,
}: {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = (await res.json().catch(() => ({}))) as UploadResponse;
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Upload failed");
      }
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-1.5">
      <div className="flex gap-1.5">
        <input
          type="text"
          value={value ?? ""}
          disabled={readOnly}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/example.png or https://…"
          className="h-8 flex-1 rounded-md border border-input bg-background px-2 text-sm outline-none focus:border-ring"
        />
        <button
          type="button"
          disabled={readOnly || uploading}
          onClick={() => inputRef.current?.click()}
          title="Upload image"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:bg-accent disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageUp className="h-4 w-4" />}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file) void handleFile(file);
          }}
        />
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolveMediaUrl(value)}
          alt=""
          className="h-16 w-auto max-w-full rounded border border-input object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}
    </div>
  );
}
