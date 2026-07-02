import { renderBrandText } from "@/components/wordmark";

type ProcessStepProps = {
  index: number;
  title: string;
  summary: string;
};

export function ProcessStep({ index, title, summary }: ProcessStepProps) {
  return (
    <article className="relative min-h-64 border border-edge-line bg-white/70 p-6 shadow-edge-soft transition-colors hover:border-edge-navyLight hover:bg-white">
      <div className="mb-10 flex items-center justify-between">
        <p className="type-meta text-edge-muted">
          {String(index).padStart(2, "0")}
        </p>
        <span className="h-px w-12 bg-edge-navyLight" />
      </div>
      <h3 className="type-card-title text-edge-navy">{renderBrandText(title)}</h3>
      <p className="type-small mt-4 text-edge-soft">{renderBrandText(summary)}</p>
    </article>
  );
}
