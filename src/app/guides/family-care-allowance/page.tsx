import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import ComparisonTable from "@/components/guides/comparison-table";
import StepList from "@/components/guides/step-list";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  comparisonRows,
  familyCaregiverSteps,
  notes,
} from "@/data/guides/family-care-allowance";

export const metadata: Metadata = {
  title: "가족요양비 지급 기준 - 태호요양",
  description:
    "가족요양비(특별현금급여)와 가족요양보호사 급여의 차이, 신청 절차와 지급 기준을 안내합니다.",
};

export default async function FamilyCareAllowancePage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="가족요양비 지급 기준"
      subtitle="헷갈리기 쉬운 가족요양비와 가족요양보호사 급여, 정확히 구분해드려요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          가족요양비 vs 가족요양보호사 급여
        </h2>
        <ComparisonTable
          leftLabel="가족요양비 (특별현금급여)"
          rightLabel="가족요양보호사 급여"
          rows={comparisonRows}
        />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-6 text-xl font-extrabold text-navy">
            가족요양보호사 급여 신청 절차
          </h2>
          <StepList steps={familyCaregiverSteps} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-4 text-xl font-extrabold text-navy">
          꼭 확인하세요
        </h2>
        <NoteList notes={notes} />
      </section>
    </GuidePageShell>
  );
}
