import type { CompanyInfo } from "@/types/site";

const footerLinks = ["회사소개서", "인재채용", "개인정보처리방침"];

export default function SiteFooter({
  companyInfo,
}: {
  companyInfo: CompanyInfo;
}) {
  return (
    <footer className="mt-auto border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-xs leading-relaxed text-[#8A94A6]">
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <span key={link} className="font-semibold text-[#4A5568]">
              {link}
            </span>
          ))}
        </div>

        <p>
          {companyInfo.name} | 사업자등록번호 {companyInfo.bizNumber} | 대표{" "}
          {companyInfo.ceo}
          <br />
          {companyInfo.address}
          <br />
          문의: {companyInfo.email} · IR&투자: {companyInfo.irEmail} · 고객센터{" "}
          {companyInfo.phone}
        </p>

        <p>© 2026 {companyInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
