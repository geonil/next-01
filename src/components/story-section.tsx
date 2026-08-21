import type { StaffStory } from "@/types/site";

export default function StorySection({
  staffStories,
}: {
  staffStories: StaffStory[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          태호요양 사람들 이야기
        </h2>
        <p className="mt-2 text-sm text-[#4A5568] sm:text-base">
          어르신 곁을 지키는 태호요양 사람들을 소개합니다
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {staffStories.map((story) => (
          <article
            key={story.name}
            className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <span className="w-fit rounded-full bg-navy/10 px-2.5 py-1 text-xs font-bold text-navy">
              {story.role}
            </span>
            <h3 className="text-lg font-bold leading-snug text-[#1D2433]">
              {story.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {story.excerpt}
            </p>
            <span className="mt-auto text-xs font-semibold text-[#4A5568]">
              — {story.name}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
