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
      "border-white bg-white text-edge-black hover:border-edge-soft hover:bg-edge-soft",
    secondary:
      "border-edge-line bg-transparent text-white hover:border-white hover:bg-white/5",
    quiet:
      "border-transparent bg-transparent text-edge-soft hover:border-edge-line hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 min-w-40 items-center justify-center border px-6 text-center text-sm font-semibold transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
