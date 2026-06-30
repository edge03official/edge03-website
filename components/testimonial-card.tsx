type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="border border-edge-line bg-white/[0.02] p-6">
      <blockquote className="text-base leading-7 text-edge-soft">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-edge-muted">{role}</p>
      </figcaption>
    </figure>
  );
}
