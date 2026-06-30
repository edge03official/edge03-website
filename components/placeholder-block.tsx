type PlaceholderBlockProps = {
  label: string;
  height?: "sm" | "md" | "lg";
  variant?: "image" | "logo" | "proof";
};

const heights = {
  sm: "min-h-28",
  md: "min-h-48",
  lg: "min-h-72",
};

export function PlaceholderBlock({
  label,
  height = "md",
  variant = "image",
}: PlaceholderBlockProps) {
  return (
    <div
      data-placeholder-kind={variant}
      className={`flex ${heights[height]} items-center justify-center border border-dashed border-edge-line bg-white/[0.02] p-6 text-center text-sm text-edge-muted`}
    >
      {/* Replace this placeholder with the real image, logo, or proof asset when available. */}
      <span>{label}</span>
    </div>
  );
}
