export type Step = {
  step: number;
  icon: string;
  title: string;
  description: string;
};

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step) => (
        <article
          key={step.step}
          className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
        >
          <div
            aria-hidden
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-[#3D5A80] text-4xl"
          >
            {step.icon}
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-coral text-xs font-bold text-white">
                {step.step}
              </span>
              <h3 className="text-base font-bold text-[#1D2433]">
                {step.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {step.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
