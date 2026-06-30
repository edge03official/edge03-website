type ProcessStepProps = {
  index: number;
  title: string;
  summary: string;
};

export function ProcessStep({ index, title, summary }: ProcessStepProps) {
  return (
    <article className="relative min-h-64 border border-edge-line bg-white/[0.02] p-6 transition-colors hover:border-edge-soft">
      <div className="mb-10 flex items-center justify-between">
        <p className="text-sm font-semibold text-edge-muted">
          {String(index).padStart(2, "0")}
        </p>
        <span className="h-px w-12 bg-edge-navyLight" />
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-edge-soft">{summary}</p>
    </article>
  );
}
