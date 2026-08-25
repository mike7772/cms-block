/** Puck "custom" field for imageUrl props: a plain text input for pasting a
 * direct link, plus an "Upload" button that sends the file to the editor
 * app's own /api/admin/upload route — which forwards it to Strapi's media
 * library server-side (never exposing the Strapi API token to the browser)
 * and returns Strapi's public URL, so uploaded images resolve identically
 * in the Puck editor and on PUBLIC_PORTAL. A relative path, matching the
 * placeholder hint below, resolves via resolveMediaUrl instead. */
export declare function ImageUrlField({ value, onChange, readOnly, }: {
    value: string;
    onChange: (value: string) => void;
    readOnly?: boolean;
}): import("react").JSX.Element;
//# sourceMappingURL=image-url-field.d.ts.map