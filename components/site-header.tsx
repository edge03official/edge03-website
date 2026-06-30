"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-edge-line bg-edge-black/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setIsOpen(false)}
        >
          {/* Replace this wordmark block with the final EDGE03 logo asset. */}
          <span className="flex h-10 w-10 items-center justify-center border border-edge-line bg-edge-navy text-sm font-semibold">
            E3
          </span>
          <span className="text-lg font-semibold">{company.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-white" : "text-edge-soft hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-edge-line text-white transition-colors hover:border-white md:hidden"
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
          <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-edge-line py-4 text-base text-edge-soft transition-colors last:border-b-0 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
