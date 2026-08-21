import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";
import { adminTables } from "@/lib/admin-tables";

export default function AdminHeader() {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/admin" className="text-lg font-black text-navy">
            태호요양 어드민
          </Link>
          <nav className="flex flex-wrap gap-3">
            {adminTables.map((t) => (
              <Link
                key={t.slug}
                href={`/admin/${t.slug}${t.singleton ? "/edit" : ""}`}
                className="text-sm font-medium text-[#4A5568] hover:text-navy"
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-[#8A94A6] hover:text-navy">
            사이트로 이동
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-black/10 px-4 py-1.5 text-sm font-semibold text-[#4A5568] hover:bg-black/5"
            >
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
