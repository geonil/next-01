import type { CompanyInfo, ConsultTopic } from "@/types/site";

export default function ConsultSection({
  consultTopics,
  companyInfo,
}: {
  consultTopics: ConsultTopic[];
  companyInfo: CompanyInfo;
}) {
  return (
    <section id="consult" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            전문가 무료 상담
          </h2>
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            궁금하신 점이 있나요? 케어링 전문가가 답해드려요
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {consultTopics.map((topic) => (
            <article
              key={topic.title}
              className="flex flex-col gap-2 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
            >
              <h3 className="text-base font-bold">{topic.title}</h3>
              <p className="text-xs text-white/60">{topic.description}</p>
              <p className="mt-3 text-2xl font-black text-coral">
                {topic.count.toLocaleString("ko-KR")}
                <span className="ml-1 text-xs font-medium text-white/60">
                  건 상담완료
                </span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <a
            href={`tel:${companyInfo.phone}`}
            className="rounded-full bg-coral px-8 py-3 text-base font-bold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark"
          >
            지금 무료 상담하기
          </a>
          <span className="text-sm text-white/60">
            {companyInfo.phone} · {companyInfo.hours}
          </span>
        </div>
      </div>
    </section>
  );
}
