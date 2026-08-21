/** Puck "custom" field for imageUrl props: a plain text input for pasting a
 * direct link, plus an "Upload" button that sends the file to OCCMS-Backend's
 * MinIO endpoint (POST /minio/upload) and fills the field with the resulting
 * public URL — so editors can either paste a link or upload straight from
 * their machine, and the result is a plain URL string like before. */
export declare function ImageUrlField({ value, onChange, readOnly, }: {
    value: string;
    onChange: (value: string) => void;
    readOnly?: boolean;
}): import("react").JSX.Element;
//# sourceMappingURL=image-url-field.d.ts.map