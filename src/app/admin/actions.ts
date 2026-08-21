"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkPassword, isAdminAuthed } from "@/lib/admin-auth";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_TOKEN } from "@/lib/admin-session";
import { getTableConfig } from "@/lib/admin-tables";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");

  if (!checkPassword(password)) {
    redirect(`/admin?error=${encodeURIComponent("비밀번호가 올바르지 않습니다.")}`);
  }

  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, ADMIN_SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin");
}

function buildRecord(
  fields: { name: string; type: string; required?: boolean }[],
  formData: FormData
): Record<string, string | number> {
  const record: Record<string, string | number> = {};
  for (const field of fields) {
    const raw = String(formData.get(field.name) ?? "").trim();
    if (field.required && raw === "") {
      throw new Error(`${field.name}은(는) 필수 항목입니다.`);
    }
    if (field.type === "number") {
      const num = Number(raw);
      if (Number.isNaN(num)) {
        throw new Error(`${field.name}은(는) 숫자여야 합니다.`);
      }
      record[field.name] = num;
    } else {
      record[field.name] = raw;
    }
  }
  return record;
}

export async function createRowAction(
  slug: string,
  formData: FormData
): Promise<void> {
  if (!(await isAdminAuthed())) redirect("/admin");

  const config = getTableConfig(slug);
  if (!config || config.singleton) redirect("/admin");

  try {
    const record = buildRecord(config.fields, formData);
    const { error } = await supabaseAdmin.from(config.table).insert(record);
    if (error) throw new Error(error.message);
  } catch (err) {
    const message = err instanceof Error ? err.message : "저장에 실패했습니다.";
    redirect(`/admin/${slug}/new?error=${encodeURIComponent(message)}`);
  }

  redirect(`/admin/${slug}`);
}

export async function updateRowAction(
  slug: string,
  id: string,
  formData: FormData
): Promise<void> {
  if (!(await isAdminAuthed())) redirect("/admin");

  const config = getTableConfig(slug);
  if (!config) redirect("/admin");

  const idValue: string | boolean = config.singleton ? true : id;
  const backTo = config.singleton ? `/admin/${slug}/edit` : `/admin/${slug}/${id}/edit`;

  try {
    const record = buildRecord(config.fields, formData);
    const { error } = await supabaseAdmin
      .from(config.table)
      .update(record)
      .eq(config.idColumn, idValue);
    if (error) throw new Error(error.message);
  } catch (err) {
    const message = err instanceof Error ? err.message : "저장에 실패했습니다.";
    redirect(`${backTo}?error=${encodeURIComponent(message)}`);
  }

  redirect(config.singleton ? backTo : `/admin/${slug}`);
}

export async function deleteRowAction(
  slug: string,
  id: string
): Promise<void> {
  if (!(await isAdminAuthed())) redirect("/admin");

  const config = getTableConfig(slug);
  if (!config || config.singleton) redirect("/admin");

  await supabaseAdmin.from(config.table).delete().eq(config.idColumn, id);

  redirect(`/admin/${slug}`);
}
