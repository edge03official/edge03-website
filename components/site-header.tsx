"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { company, navLinks } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-edge-line bg-edge-black">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:min-h-20 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          {/* Replace this wordmark block with the final EDGE03 logo asset. */}
          <span className="type-meta flex h-10 w-10 shrink-0 items-center justify-center border border-edge-line bg-edge-navy text-white transition-colors group-hover:border-edge-soft sm:h-11 sm:w-11">
            E3
          </span>
          <span className="grid min-w-0 leading-none">
            <Wordmark className="text-white" />
            <span className="type-meta mt-1.5 hidden text-edge-muted sm:block">
              {company.tagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 border border-edge-line bg-edge-matte p-0.5 md:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`type-nav border px-3.5 py-2.5 transition-colors ${
                  isActive
                    ? "border-edge-line bg-edge-navy text-white"
                    : "border-transparent text-edge-soft hover:border-edge-line hover:bg-edge-black hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="type-button hidden min-h-10 items-center justify-center border border-edge-line px-4 text-white transition-colors hover:border-white hover:bg-white/5 lg:inline-flex"
        >
          Start a Project
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-edge-line text-white transition-colors hover:border-white hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
          </span>
        </button>
      </div>

      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-edge-line bg-edge-black md:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`type-nav border-b border-edge-line py-4 transition-colors last:border-b-0 ${
                    isActive ? "text-white" : "text-edge-soft hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="type-button mt-3 inline-flex min-h-11 items-center justify-center border border-edge-line px-4 text-white transition-colors hover:border-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
