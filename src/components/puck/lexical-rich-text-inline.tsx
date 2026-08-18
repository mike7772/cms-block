"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  createUsePuck,
  registerOverlayPortal,
  useGetPuck,
} from "@puckeditor/core";
import LexicalEditor from "@/components/LexicalEditor";
import { cn } from "@/lib/utils";

const usePuck = createUsePuck();

const proseClass =
  "prose prose-slate mx-auto max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-court prose-strong:text-ink prose-td:px-1.5 prose-td:py-1 prose-th:px-1.5 prose-th:py-1 prose-table:text-sm";

/**
 * Canvas inline Lexical editor for Puck.
 * Active when the LexicalRichText block is selected; otherwise shows HTML preview.
 */
export default function LexicalRichTextInlineEditor({
  id,
  body,
}: {
  id: string;
  body: string;
}) {
  const selectedId = usePuck((s) => s.selectedItem?.props?.id as string | undefined);
  const getPuck = useGetPuck();
  const isSelected = selectedId === id;
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSelected) return;
    return registerOverlayPortal(portalRef.current, { disableDrag: true });
  }, [isSelected]);

  const onChange = useCallback(
    (html: string) => {
      const puck = getPuck();
      const item = puck.getItemById(id);
      const selector = puck.getSelectorForId(id);
      if (!item || !selector) return;

      puck.dispatch({
        type: "replace",
        destinationIndex: selector.index,
        destinationZone: selector.zone,
        data: {
          ...item,
          props: {
            ...item.props,
            body: html,
          },
        },
      });
    },
    [getPuck, id],
  );

  if (isSelected) {
    return (
      <div
        ref={portalRef}
        className="mx-auto max-w-3xl"
        data-lexical-inline-editor
      >
        <LexicalEditor
          value={body ?? ""}
          onChange={onChange}
          minHeight="10rem"
          placeholder="Start writing rich text…"
          className="shadow-sm"
          autoFocus
        />
        <p className="mt-1.5 text-center text-[11px] text-ink/45">
          Editing on canvas — changes sync to the sidebar field
        </p>
      </div>
    );
  }

  if (!body?.trim()) {
    return (
      <section
        className={cn(
          proseClass,
          "rounded-xl border border-dashed border-sky-dark/35 bg-sky-pale/40 px-6 py-10 text-center",
        )}
      >
        <p className="m-0 text-sm font-medium text-ink/55">
          Lexical Rich Text — select this block to edit inline
        </p>
      </section>
    );
  }

  return (
    <section
      className={proseClass}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
