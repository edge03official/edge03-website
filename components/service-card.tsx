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
          <span className="text-xs font-semibold text-edge-muted">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      {signal && (
        <p className="mb-3 text-xs font-semibold uppercase text-edge-muted">
          {signal}
        </p>
      )}
      <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-edge-soft">{summary}</p>
      {items && (
        <ul className="mt-8 grid gap-3 text-sm text-edge-muted">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-px w-5 bg-edge-navyLight" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
