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
    <section className={`${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold text-edge-soft">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base leading-7 text-edge-soft sm:text-lg">
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
