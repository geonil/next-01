import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import type { CompanyInfo } from "@/types/site";

export default function GuidePageShell({
  companyInfo,
  eyebrow,
  title,
  subtitle,
  children,
  ctaTitle = "더 궁금한 점이 있으신가요?",
  ctaSubtitle = "태호요양 전문가가 무료로 상담해드려요",
}: {
  companyInfo: CompanyInfo;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  ctaTitle?: string;
  ctaSubtitle?: string;
}) {
  return (
    <>
      <SiteHeader phone={companyInfo.phone} />
      <main className="flex-1 bg-white">
        <section className="bg-sky">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center">
            <Link
              href="/#more"
              className="text-sm font-semibold text-navy/70 hover:text-navy"
            >
              ← 홈으로
            </Link>
            <p className="mt-4 text-sm font-bold text-coral">{eyebrow}</p>
            <h1 className="mt-2 text-3xl font-black text-navy sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base text-[#4A5568]">{subtitle}</p>
          </div>
        </section>

        {children}

        <section className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="text-xl font-extrabold text-navy">{ctaTitle}</h2>
          <p className="mt-2 text-sm text-[#4A5568]">{ctaSubtitle}</p>
          <a
            href={`tel:${companyInfo.phone}`}
            className="mt-6 inline-block rounded-full bg-coral px-8 py-3 text-base font-bold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark"
          >
            무료 상담 신청하기 · {companyInfo.phone}
          </a>
        </section>
      </main>
      <SiteFooter companyInfo={companyInfo} />
    </>
  );
}
