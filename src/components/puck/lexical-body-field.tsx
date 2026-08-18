"use client";

import LexicalEditor from "@/components/LexicalEditor";

export function LexicalBodyField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="w-full min-w-0">
      <LexicalEditor value={value ?? ""} onChange={onChange} />
    </div>
  );
}
