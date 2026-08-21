import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { deleteRowAction } from "@/app/admin/actions";
import { getTableConfig } from "@/lib/admin-tables";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function AdminTableListPage({
  params,
}: {
  params: Promise<{ table: string }>;
}) {
  const { table: slug } = await params;
  const config = getTableConfig(slug);
  if (!config) notFound();
  if (config.singleton) redirect(`/admin/${slug}/edit`);

  const columns = ["id", ...config.listColumns];
  const { data: rows, error } = await supabaseAdmin
    .from(config.table)
    .select(columns.join(", "))
    .order(config.orderBy ?? config.idColumn);

  if (error) throw new Error(error.message);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-navy">{config.label}</h1>
        <Link
          href={`/admin/${slug}/new`}
          className="rounded-full bg-coral px-5 py-2 text-sm font-bold text-white hover:bg-coral-dark"
        >
          + 새로 만들기
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F7F9FC] text-xs font-semibold text-[#8A94A6]">
            <tr>
              {config.listColumns.map((col) => (
                <th key={col} className="px-4 py-3">
                  {col}
                </th>
              ))}
              <th className="px-4 py-3 text-right">관리</th>
            </tr>
          </thead>
          <tbody>
            {(rows as unknown as Record<string, unknown>[] | null)?.map(
              (row) => {
                const id = String(row[config.idColumn]);
                return (
                  <tr key={id} className="border-t border-black/5">
                    {config.listColumns.map((col) => (
                      <td key={col} className="max-w-xs truncate px-4 py-3">
                        {String(row[col] ?? "")}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-3">
                        <Link
                          href={`/admin/${slug}/${id}/edit`}
                          className="font-semibold text-navy hover:underline"
                        >
                          수정
                        </Link>
                        <form action={deleteRowAction.bind(null, slug, id)}>
                          <button
                            type="submit"
                            className="font-semibold text-red-500 hover:underline"
                          >
                            삭제
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
