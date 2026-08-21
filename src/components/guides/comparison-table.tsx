export type ComparisonRow = {
  label: string;
  left: string;
  right: string;
};

export default function ComparisonTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-[#F7F9FC] text-xs font-semibold text-[#8A94A6]">
          <tr>
            <th className="px-4 py-3">구분</th>
            <th className="px-4 py-3 text-navy">{leftLabel}</th>
            <th className="px-4 py-3 text-coral">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-black/5">
              <td className="px-4 py-3 font-semibold text-[#1D2433]">
                {row.label}
              </td>
              <td className="px-4 py-3 text-[#4A5568]">{row.left}</td>
              <td className="px-4 py-3 text-[#4A5568]">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
