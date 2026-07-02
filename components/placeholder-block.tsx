type PlaceholderBlockProps = {
  label: string;
  height?: "sm" | "md" | "lg" | "xl";
  variant?: "image" | "logo" | "proof";
};

const heights = {
  sm: "min-h-28",
  md: "min-h-48",
  lg: "min-h-72",
  xl: "min-h-[26rem]",
};

const variantLabel = {
  image: "Image placeholder",
  logo: "Logo placeholder",
  proof: "Proof placeholder",
};

export function PlaceholderBlock({
  label,
  height = "md",
  variant = "image",
}: PlaceholderBlockProps) {
  return (
    <div
      data-placeholder-kind={variant}
      className={`relative flex ${heights[height]} overflow-hidden border border-dashed border-edge-line bg-white/50 p-5 text-center`}
    >
      {/* Replace this placeholder with the real image, logo, or proof asset when available. */}
      <div aria-hidden="true" className="absolute inset-5 border border-edge-line/70" />
      <div aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px bg-edge-line/70" />
      <div aria-hidden="true" className="absolute bottom-0 top-0 left-1/2 w-px bg-edge-line/70" />
      <div className="relative z-10 m-auto grid max-w-xs gap-3">
        <span className="type-eyebrow text-edge-muted">
          {variantLabel[variant]}
        </span>
        <span className="type-small text-edge-soft">{label}</span>
      </div>
    </div>
  );
}
