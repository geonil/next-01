import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import StepList from "@/components/guides/step-list";
import InfoCardGrid from "@/components/guides/info-card-grid";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  notes,
  reductionByBackground,
  steps,
} from "@/data/guides/caregiver-certification";

export const metadata: Metadata = {
  title: "요양보호사 자격증 취득방법 - 태호요양",
  description:
    "요양보호사 자격증 취득을 위한 교육 과정과 시험 절차를 단계별로 안내합니다.",
};

export default async function CaregiverCertificationPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="요양보호사 자격증 취득방법"
      subtitle="320시간 교육 과정부터 CBT 시험까지 7단계로 정리했어요"
      ctaTitle="요양보호사로 새 출발을 준비 중이신가요?"
      ctaSubtitle="태호요양과 함께라면 자격증 취득 후 곧바로 좋은 일자리를 찾을 수 있어요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          자격증 취득 절차
        </h2>
        <StepList steps={steps} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-6 text-xl font-extrabold text-navy">
            교육시간 감면 대상
          </h2>
          <InfoCardGrid items={reductionByBackground} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-4 text-xl font-extrabold text-navy">
          참고하세요
        </h2>
        <NoteList notes={notes} />
      </section>
    </GuidePageShell>
  );
}
