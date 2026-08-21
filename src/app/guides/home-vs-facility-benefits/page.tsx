import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import ComparisonTable from "@/components/guides/comparison-table";
import InfoCardGrid from "@/components/guides/info-card-grid";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  comparisonRows,
  notes,
  reductionTiers,
} from "@/data/guides/home-vs-facility-benefits";

export const metadata: Metadata = {
  title: "재가급여 vs 시설급여 차이 - 태호요양",
  description:
    "재가급여와 시설급여의 본인부담률, 실제 비용, 적합한 상황을 비교해 안내합니다.",
};

export default async function HomeVsFacilityBenefitsPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="재가급여 vs 시설급여 차이"
      subtitle="본인부담률부터 실제 비용까지 한눈에 비교해드려요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">한눈에 비교</h2>
        <ComparisonTable
          leftLabel="재가급여"
          rightLabel="시설급여"
          rows={comparisonRows}
        />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-6 text-xl font-extrabold text-navy">
            소득 수준별 본인부담 감경
          </h2>
          <InfoCardGrid items={reductionTiers} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-4 text-xl font-extrabold text-navy">
          신청 전 꼭 확인하세요
        </h2>
        <NoteList notes={notes} />
      </section>
    </GuidePageShell>
  );
}
