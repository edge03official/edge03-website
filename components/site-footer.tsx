import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { company, footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge-line bg-edge-black">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.8fr_0.65fr] lg:px-10">
        <div>
          <div className="mb-5 flex items-center gap-4">
            {/* Replace this wordmark block with the final EDGE03 logo asset. */}
            <span className="type-meta flex h-11 w-11 items-center justify-center border border-edge-line bg-edge-navy text-white">
              E3
            </span>
            <Wordmark legal className="text-edge-navy" />
          </div>
          <p className="type-meta max-w-md text-edge-soft">{company.tagline}</p>
          <p className="type-small mt-6 max-w-md text-edge-muted">
            Websites built, improved, and maintained with care for small
            businesses that want to look professional online.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-small text-edge-soft transition-colors hover:text-edge-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border border-edge-line bg-white/60 p-5 shadow-edge-soft">
          <p className="type-eyebrow text-edge-muted">Contact</p>
          <a
            className="type-small mt-4 inline-flex text-edge-soft transition-colors hover:text-edge-navy"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-edge-line">
        <div className="type-small mx-auto flex w-full max-w-7xl px-5 py-6 text-edge-muted sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {" "}
            <Wordmark
              legal
              size="sm"
              className="align-baseline text-edge-muted"
            />
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
