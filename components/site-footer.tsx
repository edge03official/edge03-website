import Link from "next/link";
import { company, footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge-line bg-edge-black">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_1fr_0.8fr] lg:px-10">
        <div>
          <div className="mb-5 flex items-center gap-3">
            {/* Replace this wordmark block with the final EDGE03 logo asset. */}
            <span className="flex h-10 w-10 items-center justify-center border border-edge-line bg-edge-navy text-sm font-semibold">
              E3
            </span>
            <span className="text-lg font-semibold text-white">
              {company.legalName}
            </span>
          </div>
          <p className="max-w-md text-sm leading-6 text-edge-soft">
            {company.tagline}
          </p>
          <p className="mt-6 max-w-md text-sm leading-6 text-edge-muted">
            Modern websites, practical integrations, online presence improvements,
            and long-term support for established businesses.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-edge-soft transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border border-edge-line bg-white/[0.02] p-5">
          <p className="text-xs font-semibold uppercase text-edge-muted">
            Contact placeholder
          </p>
          <a
            className="mt-4 inline-flex text-sm text-edge-soft transition-colors hover:text-white"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-edge-line">
        <div className="mx-auto flex w-full max-w-7xl px-5 py-6 text-sm text-edge-muted sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
