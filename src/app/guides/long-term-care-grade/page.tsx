import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import StepList from "@/components/guides/step-list";
import InfoCardGrid from "@/components/guides/info-card-grid";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  applicationChannels,
  notes,
  processFlow,
  requiredDocuments,
  steps,
} from "@/data/guides/long-term-care-grade";

export const metadata: Metadata = {
  title: "장기요양등급 신청방법 - 태호요양",
  description:
    "장기요양등급 신청 자격부터 방문조사, 등급판정, 급여 이용까지 단계별로 상세히 안내합니다.",
};

export default async function LongTermCareGradeGuidePage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="장기요양등급 신청방법"
      subtitle="등급 판정 기준부터 신청 절차, 준비 서류까지 8단계로 정리했어요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          신청 전체 흐름
        </h2>
        <div className="flex flex-col gap-3 overflow-x-auto sm:flex-row sm:items-stretch sm:gap-2">
          {processFlow.map((item, index) => (
            <div key={item.actor + item.action} className="flex items-center gap-2">
              <div className="flex min-w-[9rem] flex-1 flex-col justify-center gap-1 rounded-2xl bg-navy px-4 py-4 text-white">
                <span className="text-xs font-semibold text-white/60">
                  {item.actor}
                </span>
                <span className="text-sm font-bold leading-snug">
                  {item.action}
                </span>
              </div>
              {index < processFlow.length - 1 && (
                <span aria-hidden className="hidden text-xl text-coral sm:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-8 text-xl font-extrabold text-navy">
            단계별 신청 방법
          </h2>
          <StepList steps={steps} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">신청 경로</h2>
        <InfoCardGrid items={applicationChannels} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-extrabold text-navy">
              필요 서류
            </h2>
            <NoteList notes={requiredDocuments} icon="✓" />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-extrabold text-navy">
              신청 전 꼭 확인하세요
            </h2>
            <NoteList notes={notes} />
          </div>
        </div>
      </section>
    </GuidePageShell>
  );
}
