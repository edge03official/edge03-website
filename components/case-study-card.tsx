import { PlaceholderBlock } from "@/components/placeholder-block";
import { renderBrandText } from "@/components/wordmark";

type CaseStudyCardProps = {
  title: string;
  type: string;
  summary: string;
};

export function CaseStudyCard({ title, type, summary }: CaseStudyCardProps) {
  return (
    <article className="grid gap-6 border border-edge-line bg-white/70 p-5 shadow-edge-soft transition-colors hover:border-edge-navyLight sm:grid-cols-[0.85fr_1fr] sm:items-center">
      <PlaceholderBlock
        label="Case study image or result visual placeholder"
        height="sm"
        variant="proof"
      />
      <div>
        <p className="type-eyebrow text-edge-muted">{renderBrandText(type)}</p>
        <h3 className="type-card-title mt-3 text-edge-navy">{renderBrandText(title)}</h3>
        <p className="type-small mt-4 text-edge-soft">{renderBrandText(summary)}</p>
      </div>
    </article>
  );
}
