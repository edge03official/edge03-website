import { renderBrandText } from "@/components/wordmark";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="border border-edge-line bg-white/[0.02] p-6 transition-colors hover:border-edge-soft">
      <blockquote className="type-body text-edge-soft">"{renderBrandText(quote)}"</blockquote>
      <figcaption className="mt-8 border-t border-edge-line pt-5">
        <p className="type-meta text-white">{renderBrandText(name)}</p>
        <p className="type-small mt-1 text-edge-muted">{renderBrandText(role)}</p>
      </figcaption>
    </figure>
  );
}
