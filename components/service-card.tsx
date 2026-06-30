import { renderBrandText } from "@/components/wordmark";

type ServiceCardProps = {
  title: string;
  summary: string;
  signal?: string;
  items?: string[];
  index?: number;
};

export function ServiceCard({
  title,
  summary,
  signal,
  items,
  index,
}: ServiceCardProps) {
  return (
    <article className="group flex min-h-72 flex-col border border-edge-line bg-white/[0.02] p-6 transition-colors hover:border-edge-soft hover:bg-white/[0.04]">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="h-1 w-12 bg-edge-navyLight transition-colors group-hover:bg-white" />
        {index && (
          <span className="type-meta text-edge-muted">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      {signal && (
        <p className="type-eyebrow mb-3 text-edge-muted">{renderBrandText(signal)}</p>
      )}
      <h3 className="type-card-title text-white">{renderBrandText(title)}</h3>
      <p className="type-small mt-4 text-edge-soft">{renderBrandText(summary)}</p>
      {items && (
        <ul className="mt-8 grid gap-3 text-edge-muted">
          {items.map((item) => (
            <li key={item} className="type-small flex items-center gap-3">
              <span className="h-px w-5 bg-edge-navyLight" />
              {renderBrandText(item)}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
