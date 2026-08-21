export default function MoreInfoSection({
  moreInfoLinks,
}: {
  moreInfoLinks: string[];
}) {
  return (
    <section id="more" className="bg-[#F7F9FC] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            분야별 정보 더 보기
          </h2>
        </div>

        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {moreInfoLinks.map((link) => (
            <li key={link}>
              <span className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#1D2433] ring-1 ring-black/5">
                <span className="text-coral">›</span>
                {link}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
