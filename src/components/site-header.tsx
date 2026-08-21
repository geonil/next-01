import Link from "next/link";

const navItems = [
  { label: "홈", href: "/" },
  { label: "요양가이드", href: "#guides" },
  { label: "상담", href: "#consult" },
  { label: "후기", href: "#reviews" },
  { label: "더보기", href: "#more" },
];

export default function SiteHeader({ phone }: { phone: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tight text-navy">
            태호요양
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#4A5568] transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
        >
          <span aria-hidden>📞</span>
          {phone}
        </a>
      </div>
    </header>
  );
}
