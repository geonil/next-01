import type { Guide } from "@/types/site";

export default function GuideSection({ guides }: { guides: Guide[] }) {
  return (
    <section id="guides" className="bg-[#F7F9FC] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            요양 필수 가이드
          </h2>
          <p className="mt-2 text-sm text-[#4A5568] sm:text-base">
            처음이라 막막하신가요? 케어링이 정리했어요
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="w-fit rounded-md bg-navy/10 px-2 py-1 text-xs font-bold text-navy">
                {guide.badge}
              </span>
              <h3 className="text-base font-bold leading-snug text-[#1D2433]">
                {guide.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">
                {guide.description}
              </p>
              <span className="mt-auto text-sm font-bold text-coral">
                가이드 보기 →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
