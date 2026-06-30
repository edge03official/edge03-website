type ServiceCardProps = {
  title: string;
  summary: string;
  items?: string[];
};

export function ServiceCard({ title, summary, items }: ServiceCardProps) {
  return (
    <article className="border border-edge-line bg-white/[0.02] p-6 transition-colors hover:border-edge-soft">
      <div className="mb-8 h-1 w-10 bg-edge-navyLight" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
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
