import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = {
    primary:
      "border-edge-navy bg-edge-navy text-white hover:border-[#2F4B64] hover:bg-[#2F4B64]",
    secondary:
      "border-edge-line bg-white/50 text-edge-navy hover:border-edge-navy hover:bg-white",
    quiet:
      "border-transparent bg-transparent text-edge-soft hover:border-edge-line hover:bg-white/50 hover:text-edge-navy",
  }[variant];

  return (
    <Link
      href={href}
      className={`type-button inline-flex min-h-11 min-w-36 items-center justify-center border px-5 text-center transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
