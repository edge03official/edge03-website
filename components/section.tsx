type SectionProps = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "default" | "muted" | "navy";
};

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  intro,
  tone = "default",
}: SectionProps) {
  const toneClass =
    tone === "muted"
      ? "bg-edge-matte"
      : tone === "navy"
        ? "bg-edge-navy"
        : "bg-edge-black";

  return (
    <section className={`border-b border-edge-line ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        {(eyebrow || title || intro) && (
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div className="max-w-3xl">
              {eyebrow && (
                <p className="mb-4 text-xs font-semibold uppercase text-edge-muted">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
            </div>
            {intro && (
              <p className="max-w-2xl text-base leading-7 text-edge-soft sm:text-lg lg:ml-auto">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
