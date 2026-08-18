import type { DataTableBlock as DataTableBlockType } from "@/lib/types";

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((cell) =>
    cell == null ? "" : typeof cell === "string" ? cell : String(cell),
  );
}

function asRows(value: unknown): string[][] {
  if (!Array.isArray(value)) return [];
  return value.map((row) =>
    Array.isArray(row)
      ? row.map((cell) =>
          cell == null ? "" : typeof cell === "string" ? cell : String(cell),
        )
      : [String(row)],
  );
}

export default function DataTableBlock({
  block,
}: {
  block: DataTableBlockType;
}) {
  const headers = asStringArray(block.headers);
  const rows = asRows(block.rows);

  return (
    <section className="mx-auto max-w-4xl">
      {block.heading ? (
        <h2 className="section-heading mb-2">{block.heading}</h2>
      ) : null}
      {block.subheading ? (
        <p className="mb-6 text-ink/70">{block.subheading}</p>
      ) : null}

      <div className="overflow-x-auto rounded-2xl border border-sky-dark/25 bg-white">
        <table
          className={`w-full text-left text-sm ${
            block.bordered ? "border-collapse" : ""
          }`}
        >
          {headers.length ? (
            <thead className="bg-sky-pale text-ink">
              <tr>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`px-4 py-3 font-semibold ${
                      block.bordered ? "border border-sky-dark/20" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={
                  block.striped && ri % 2 === 1 ? "bg-sky-pale/50" : undefined
                }
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 text-ink/80 ${
                      block.bordered ? "border border-sky-dark/15" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
