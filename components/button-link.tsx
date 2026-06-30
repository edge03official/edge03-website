import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "border-white bg-white text-edge-black hover:bg-edge-soft hover:border-edge-soft"
      : "border-edge-line bg-transparent text-white hover:border-white hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border px-6 text-sm font-semibold transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
