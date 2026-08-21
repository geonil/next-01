import type { ServiceCategory } from "@/types/site";

export default function ServiceMenu({
  services,
}: {
  services: ServiceCategory[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          케어링 — 방문요양·가족요양·주간보호
        </h2>
        <p className="mt-2 text-sm text-[#4A5568] sm:text-base">
          어르신께 꼭 맞는 돌봄 서비스를 찾아보세요
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="group flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <span
              className="w-fit rounded-full px-2.5 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: service.accent }}
            >
              {service.tag}
            </span>
            <h3 className="text-lg font-bold text-navy">{service.title}</h3>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
