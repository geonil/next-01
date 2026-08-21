import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import InfoCardGrid from "@/components/guides/info-card-grid";
import ComparisonTable from "@/components/guides/comparison-table";
import StepList from "@/components/guides/step-list";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  comparisonRows,
  dailySchedule,
  notes,
  sampleHours,
} from "@/data/guides/daycare-hours";

export const metadata: Metadata = {
  title: "주간보호센터 운영시간 안내 - 태호요양",
  description:
    "주간보호센터의 대표적인 운영시간과 하루 일과, 주야간보호센터와의 차이를 안내합니다.",
};

export default async function DaycareHoursPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="주간보호센터 운영시간 안내"
      subtitle="대표적인 운영시간과 하루 일과를 미리 확인해보세요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          대표적인 운영시간
        </h2>
        <InfoCardGrid items={sampleHours} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-6 text-xl font-extrabold text-navy">
            주간보호 vs 주야간보호
          </h2>
          <ComparisonTable
            leftLabel="주간보호센터"
            rightLabel="주야간보호센터"
            rows={comparisonRows}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          하루 일과 예시
        </h2>
        <StepList steps={dailySchedule} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-4 text-xl font-extrabold text-navy">
            이용 전 꼭 확인하세요
          </h2>
          <NoteList notes={notes} />
        </div>
      </section>
    </GuidePageShell>
  );
}
