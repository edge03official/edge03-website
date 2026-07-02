import type { ReactNode } from "react";
import { renderBrandText } from "@/components/wordmark";

type PageIntroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  summary: ReactNode;
  meta?: string[];
};

export function PageIntro({ eyebrow, title, summary, meta }: PageIntroProps) {
  return (
    <section className="border-b border-edge-line bg-edge-black">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.46fr] lg:px-10 lg:py-24">
        <div>
          <p className="type-eyebrow mb-5 text-edge-muted">{renderBrandText(eyebrow)}</p>
          <h1 className="type-page-title max-w-4xl text-edge-navy">{renderBrandText(title)}</h1>
          <p className="type-lead mt-6 max-w-3xl text-edge-soft">
            {renderBrandText(summary)}
          </p>
        </div>
        {meta && (
          <aside className="border border-edge-line bg-white/60 p-5 shadow-edge-soft lg:self-end">
            <p className="type-eyebrow text-edge-muted">Editable section map</p>
            <ul className="mt-5 grid gap-3 text-edge-soft">
              {meta.map((item) => (
                <li key={item} className="type-small border-t border-edge-line pt-3">
                  {renderBrandText(item)}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}
