import { notFound } from "next/navigation";
import { createRowAction } from "@/app/admin/actions";
import RecordForm from "@/components/admin/record-form";
import { getTableConfig } from "@/lib/admin-tables";

export default async function AdminNewRowPage({
  params,
  searchParams,
}: {
  params: Promise<{ table: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { table: slug } = await params;
  const { error } = await searchParams;
  const config = getTableConfig(slug);
  if (!config || config.singleton) notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-navy">{config.label} 등록</h1>
      {error && (
        <p className="max-w-xl rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}
      <RecordForm
        fields={config.fields}
        action={createRowAction.bind(null, slug)}
        submitLabel="등록"
      />
    </div>
  );
}
