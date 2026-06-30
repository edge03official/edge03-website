import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Wordmark } from "@/components/wordmark";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Small Business Website Design and Support",
  description:
    "EDGE03 helps small businesses build, improve, and maintain professional websites that look good, work well, and are easy to keep updated.",
};

export default function Home() {
  return (
    <>
      <section className="border-b border-edge-line bg-edge-black">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="type-page-title text-white">
              Websites built with care for small businesses.
            </h1>
            <p className="type-lead mt-7 max-w-2xl text-edge-soft">
              EDGE03 helps small businesses build, improve, and maintain
              professional websites that look good, work well, and are easy to
              keep updated.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-edge-line bg-edge-matte">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="type-eyebrow mb-4 text-edge-muted">Services</p>
            <h2 className="type-section-title text-white">
              Choose the help that fits where your website is today.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border border-edge-line bg-edge-black p-6">
                <p className="type-eyebrow text-edge-muted">{service.signal}</p>
                <h3 className="type-card-title mt-5 text-white">
                  {service.title}
                </h3>
                <p className="type-small mt-4 text-edge-soft">
                  {service.summary}
                </p>
                <Link
                  href="/services"
                  className="type-meta mt-8 inline-flex text-edge-soft transition-colors hover:text-white"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-edge-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="type-eyebrow mb-4 text-edge-muted">
              Start the conversation
            </p>
            <h2 className="type-section-title text-white">
              Need a website that feels professional and easy to trust?
            </h2>
          </div>
          <ButtonLink href="/contact">
            Contact <Wordmark size="xs" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
