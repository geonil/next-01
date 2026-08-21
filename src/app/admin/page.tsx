import Link from "next/link";
import { loginAction } from "@/app/admin/actions";
import { isAdminAuthed } from "@/lib/admin-auth";
import { adminTables } from "@/lib/admin-tables";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = await isAdminAuthed();
  const { error } = await searchParams;

  if (!authed) {
    return (
      <div className="mx-auto flex max-w-sm flex-col gap-4 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-navy">어드민 로그인</h1>
        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}
        <form action={loginAction} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm font-medium text-[#1D2433]">
            비밀번호
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="rounded-lg border border-black/10 px-3 py-2 text-sm font-normal"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
          >
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-navy">테이블 관리</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {adminTables.map((t) => (
          <Link
            key={t.slug}
            href={`/admin/${t.slug}${t.singleton ? "/edit" : ""}`}
            className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-base font-bold text-[#1D2433]">{t.label}</h2>
            <p className="mt-1 text-xs text-[#8A94A6]">
              {t.singleton ? "단일 정보 수정" : "조회 · 등록 · 수정 · 삭제"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
