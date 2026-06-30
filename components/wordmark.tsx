type WordmarkProps = {
  legal?: boolean;
  size?: "xs" | "sm" | "md";
  className?: string;
};

const sizeClasses = {
  xs: "text-[0.74rem]",
  sm: "text-[0.86rem]",
  md: "text-[1.06rem]",
};

export function Wordmark({
  legal = false,
  size = "md",
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={`type-wordmark inline-flex items-start whitespace-nowrap leading-none ${sizeClasses[size]} ${className}`}
      aria-label={legal ? "EDGE03 LLC" : "EDGE03"}
    >
      <span aria-hidden="true">EDGE</span>
      <span
        aria-hidden="true"
        className="ml-[0.05em] translate-y-[0.18em] text-[0.34em] leading-none"
      >
        03
      </span>
      {legal && (
        <span aria-hidden="true" className="ml-[0.32em]">
          LLC
        </span>
      )}
    </span>
  );
}
