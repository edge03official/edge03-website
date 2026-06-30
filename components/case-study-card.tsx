import { PlaceholderBlock } from "@/components/placeholder-block";

type CaseStudyCardProps = {
  title: string;
  type: string;
  summary: string;
};

export function CaseStudyCard({ title, type, summary }: CaseStudyCardProps) {
  return (
    <article className="grid gap-6 border border-edge-line bg-white/[0.02] p-5 sm:grid-cols-[0.85fr_1fr] sm:items-center">
      <PlaceholderBlock label="Case study image placeholder" height="sm" />
      <div>
        <p className="text-sm text-edge-muted">{type}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-edge-soft">{summary}</p>
      </div>
    </article>
  );
}
