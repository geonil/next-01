import type { Metadata } from "next";
import GuidePageShell from "@/components/guides/guide-page-shell";
import InfoCardGrid from "@/components/guides/info-card-grid";
import DataTable from "@/components/guides/data-table";
import StepList from "@/components/guides/step-list";
import NoteList from "@/components/guides/note-list";
import { getCompanyInfo } from "@/lib/queries";
import {
  exampleSteps,
  monthlyLimitHeaders,
  monthlyLimitRows,
  notes,
  reductionTiers,
} from "@/data/guides/home-care-copayment";

export const metadata: Metadata = {
  title: "방문요양 본인부담금 안내 - 태호요양",
  description:
    "방문요양 본인부담률, 등급별 월 한도액, 실제 계산 예시까지 상세히 안내합니다.",
};

export default async function HomeCareCopaymentPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <GuidePageShell
      companyInfo={companyInfo}
      eyebrow="요양 필수 가이드"
      title="방문요양 본인부담금 안내"
      subtitle="등급별 한도액부터 실제 계산 예시까지 정리했어요"
    >
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          소득 수준별 본인부담률
        </h2>
        <InfoCardGrid items={reductionTiers} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-6 text-xl font-extrabold text-navy">
            등급별 월 이용 한도액 (2026년 기준)
          </h2>
          <DataTable headers={monthlyLimitHeaders} rows={monthlyLimitRows} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-xl font-extrabold text-navy">
          본인부담금 계산 예시
        </h2>
        <p className="mb-6 text-sm text-[#4A5568]">
          3등급 수급자가 하루 3시간(180분) 방문요양을 월 27일 이용하는 경우를
          예로 들어볼게요.
        </p>
        <StepList steps={exampleSteps} />
      </section>

      <section className="bg-[#F7F9FC] py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-4 text-xl font-extrabold text-navy">
            신청 전 꼭 확인하세요
          </h2>
          <NoteList notes={notes} />
        </div>
      </section>
    </GuidePageShell>
  );
}
