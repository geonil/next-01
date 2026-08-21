export type InfoCard = {
  icon: string;
  label: string;
  note: string;
};

export default function InfoCardGrid({ items }: { items: InfoCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm"
        >
          <span aria-hidden className="text-3xl">
            {item.icon}
          </span>
          <span className="text-sm font-bold text-[#1D2433]">
            {item.label}
          </span>
          <span className="text-xs text-[#8A94A6]">{item.note}</span>
        </div>
      ))}
    </div>
  );
}
