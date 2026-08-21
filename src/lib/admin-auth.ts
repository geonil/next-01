import "server-only";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_TOKEN } from "@/lib/admin-session";

export function checkPassword(password: string): boolean {
  return password === (process.env.ADMIN_PASSWORD ?? "1234");
}

export async function isAdminAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_TOKEN;
}
