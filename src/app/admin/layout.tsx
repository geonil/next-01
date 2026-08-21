import AdminHeader from "@/components/admin/admin-header";
import { isAdminAuthed } from "@/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAdminAuthed();

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {authed && <AdminHeader />}
      <div className="mx-auto max-w-5xl px-5 py-10">{children}</div>
    </div>
  );
}
