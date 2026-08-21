import type { Review } from "@/types/site";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-coral" aria-label={`평점 ${rating}점`}>
      {"★".repeat(rating)}
      <span className="text-black/10">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          케어링 후기
        </h2>
        <p className="mt-2 text-sm text-[#4A5568] sm:text-base">
          50,000건 이상의 이용자 후기가 증명합니다
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name + review.category}
            className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-sky px-2 py-1 text-xs font-bold text-navy">
                {review.category}
              </span>
              <Stars rating={review.rating} />
            </div>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              &ldquo;{review.content}&rdquo;
            </p>
            <span className="text-sm font-semibold text-[#1D2433]">
              {review.name}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
