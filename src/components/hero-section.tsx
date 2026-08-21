import type { CompanyInfo } from "@/types/site";

const badges = [
  "소비자만족지수 1위 4년 연속",
  "보건복지부 지정 사회공헌기업",
  "예비사회적기업",
];

export default function HeroSection({
  companyInfo,
}: {
  companyInfo: CompanyInfo;
}) {
  return (
    <section className="bg-sky">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 text-center md:py-24">
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm ring-1 ring-navy/10"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black leading-snug text-navy sm:text-4xl md:text-5xl">
            부모님은 소중하니까,
            <br />
            무엇이든 물어보세요
          </h1>
          <p className="text-base font-medium text-[#4A5568] sm:text-lg">
            또 하나의 가족처럼 함께 고민 할게요
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`tel:${companyInfo.phone}`}
            className="rounded-full bg-coral px-8 py-3 text-base font-bold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark"
          >
            무료 상담 신청하기
          </a>
          <span className="text-sm font-medium text-[#4A5568]">
            {companyInfo.phone} · {companyInfo.hours}
          </span>
        </div>

        <div
          aria-hidden
          className="flex h-48 w-full max-w-3xl items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-[#3D5A80] text-6xl shadow-xl sm:h-64"
        >
          👨‍👩‍👧 🤝 👵
        </div>
      </div>
    </section>
  );
}
