import { Fragment, type ReactNode } from "react";

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
  const label = legal ? "EDGE03 LLC" : "EDGE03";

  return (
    <span
      className={`type-wordmark inline-flex items-baseline whitespace-nowrap leading-none align-baseline ${sizeClasses[size]} ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="leading-none">
        EDGE
      </span>
      <span
        aria-hidden="true"
        className="ml-[0.045em] -translate-y-[0.32em] text-[0.34em] leading-none"
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

type BrandTextProps = {
  children: ReactNode;
};

function renderBrandString(value: string) {
  const parts = value.split(/(EDGE03 LLC|EDGE03)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "EDGE03 LLC") {
          return <Wordmark key={index} legal size="inline" />;
        }

        if (part === "EDGE03") {
          return <Wordmark key={index} size="inline" />;
        }

        return part;
      })}
    </>
  );
}

export function BrandText({ children }: BrandTextProps) {
  return <>{renderBrandText(children)}</>;
}

export function renderBrandText(value: ReactNode): ReactNode {
  if (typeof value === "string") {
    return renderBrandString(value);
  }

  if (Array.isArray(value)) {
    return value.map((child, index) => (
      <Fragment key={index}>{renderBrandText(child)}</Fragment>
    ));
  }

  return value;
}
