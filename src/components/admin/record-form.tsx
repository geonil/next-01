import type { FieldConfig } from "@/lib/admin-tables";

export default function RecordForm({
  fields,
  action,
  initialValues,
  submitLabel,
}: {
  fields: FieldConfig[];
  action: (formData: FormData) => void | Promise<void>;
  initialValues?: Record<string, unknown>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-4">
      {fields.map((field) => (
        <label
          key={field.name}
          className="flex flex-col gap-1 text-sm font-medium text-[#1D2433]"
        >
          {field.label}
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              defaultValue={initialValues?.[field.name] as string | undefined}
              required={field.required}
              rows={4}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm font-normal"
            />
          ) : (
            <input
              type={field.type === "number" ? "number" : "text"}
              name={field.name}
              defaultValue={
                initialValues?.[field.name] as string | number | undefined
              }
              required={field.required}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm font-normal"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="w-fit rounded-full bg-navy px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
      >
        {submitLabel}
      </button>
    </form>
  );
}
