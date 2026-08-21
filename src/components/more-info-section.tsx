import Link from "next/link";

const LINK_HREFS: Record<string, string> = {
  "장기요양등급 신청방법": "/guides/long-term-care-grade",
  "재가급여 vs 시설급여 차이": "/guides/home-vs-facility-benefits",
  "방문요양 본인부담금 안내": "/guides/home-care-copayment",
  "주간보호센터 운영시간 안내": "/guides/daycare-hours",
  "요양보호사 자격증 취득방법": "/guides/caregiver-certification",
  "가족요양비 지급 기준": "/guides/family-care-allowance",
};

export default function MoreInfoSection({
  moreInfoLinks,
}: {
  moreInfoLinks: string[];
}) {
  return (
    <section id="more" className="bg-[#F7F9FC] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            분야별 정보 더 보기
          </h2>
        </div>

        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {moreInfoLinks.map((link) => {
            const href = LINK_HREFS[link];
            const content = (
              <>
                <span className="text-coral">›</span>
                {link}
              </>
            );

            return (
              <li key={link}>
                {href ? (
                  <Link
                    href={href}
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#1D2433] ring-1 ring-black/5 transition-shadow hover:shadow-md"
                  >
                    {content}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#1D2433] ring-1 ring-black/5">
                    {content}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
