type PageIntroProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function PageIntro({ eyebrow, title, summary }: PageIntroProps) {
  return (
    <section className="border-b border-edge-line bg-edge-black">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <p className="mb-5 text-sm font-semibold text-edge-soft">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-edge-soft sm:text-lg">
          {summary}
        </p>
      </div>
    </section>
  );
}
