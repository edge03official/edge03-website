type ProcessStepProps = {
  index: number;
  title: string;
  summary: string;
};

export function ProcessStep({ index, title, summary }: ProcessStepProps) {
  return (
    <article className="border-t border-edge-line pt-6">
      <p className="text-sm font-semibold text-edge-muted">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-edge-soft">{summary}</p>
    </article>
  );
}
