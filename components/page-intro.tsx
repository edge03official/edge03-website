type PageIntroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  meta?: string[];
};

export function PageIntro({ eyebrow, title, summary, meta }: PageIntroProps) {
  return (
    <section className="border-b border-edge-line bg-edge-black">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.46fr] lg:px-10 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase text-edge-muted">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-edge-soft sm:text-lg">
            {summary}
          </p>
        </div>
        {meta && (
          <aside className="border border-edge-line bg-white/[0.02] p-5 lg:self-end">
            <p className="text-xs font-semibold uppercase text-edge-muted">
              Editable section map
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-edge-soft">
              {meta.map((item) => (
                <li key={item} className="border-t border-edge-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}
