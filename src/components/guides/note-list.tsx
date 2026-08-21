export default function NoteList({
  notes,
  icon = "⚠️",
}: {
  notes: string[];
  icon?: string;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {notes.map((note) => (
        <li
          key={note}
          className="rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-[#4A5568] ring-1 ring-black/5"
        >
          {icon} {note}
        </li>
      ))}
    </ul>
  );
}
