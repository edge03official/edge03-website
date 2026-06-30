type WordmarkProps = {
  legal?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "inline";
  className?: string;
};

const sizeClasses = {
  xs: "text-[0.78rem]",
  sm: "text-[0.9rem]",
  md: "text-[1.06rem]",
  lg: "text-[1.22rem]",
  inline: "text-[1em]",
};

export function Wordmark({
  legal = false,
  size = "md",
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={`type-wordmark inline-flex items-baseline whitespace-nowrap leading-none align-baseline ${sizeClasses[size]} ${className}`}
      aria-label={legal ? "EDGE03 LLC" : "EDGE03"}
    >
      <span aria-hidden="true" className="leading-none">
        EDGE
      </span>
      <span
        aria-hidden="true"
        className="ml-[0.045em] translate-y-[0.06em] text-[0.34em] leading-none"
      >
        03
      </span>
      {legal && (
        <span aria-hidden="true" className="ml-[0.32em] leading-none">
          LLC
        </span>
      )}
    </span>
  );
}
