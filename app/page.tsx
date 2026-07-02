import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { BrandText, Wordmark } from "@/components/wordmark";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Small Business Website Design and Support",
  description:
    "EDGE03 helps small businesses build, improve, and maintain professional websites that look good, work well, and are easy to keep updated.",
};

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-edge-line bg-edge-black">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,0.74fr)] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="type-page-title max-w-2xl text-edge-navy lg:text-[2.85rem] lg:leading-[1.08]">
              Professional websites that reflect the quality of your business.
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-edge-soft lg:mt-9">
              <BrandText>
                EDGE03 helps small businesses build, modernize, and maintain
                websites that make it easier for customers to find, trust, and
                do business with them.
              </BrandText>
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start the Conversation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-none">
            <div className="absolute -left-8 top-10 h-32 w-px bg-edge-line/80" />
            <div className="absolute -bottom-8 right-10 h-px w-36 bg-edge-line/80" />
            <div
              aria-hidden="true"
              className="relative border border-edge-line bg-white shadow-edge-soft"
            >
              <div className="flex min-h-12 items-center gap-3 border-b border-edge-line px-4">
                <span className="h-2 w-2 bg-edge-navyLight" />
                <span className="h-2 w-2 bg-edge-muted/70" />
                <span className="h-2 w-2 bg-edge-line" />
                <span className="ml-2 h-6 flex-1 border border-edge-line bg-edge-black" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="border border-edge-line bg-edge-black">
                  <div className="flex items-center justify-between border-b border-edge-line px-4 py-3">
                    <Wordmark size="sm" className="text-edge-navy" />
                    <div className="flex items-center gap-2">
                      <span className="h-px w-8 bg-edge-line" />
                      <span className="h-px w-8 bg-edge-line" />
                      <span className="h-px w-8 bg-edge-line" />
                    </div>
                  </div>
                  <div className="grid gap-8 px-4 py-8 sm:grid-cols-[1fr_0.82fr] sm:px-6 sm:py-10">
                    <div>
                      <span className="block h-2 w-20 bg-edge-navyLight" />
                      <span className="mt-5 block h-3 w-11/12 bg-edge-navy" />
                      <span className="mt-3 block h-3 w-4/5 bg-edge-navy/85" />
                      <span className="mt-6 block h-2 w-full bg-edge-line" />
                      <span className="mt-2 block h-2 w-10/12 bg-edge-line/70" />
                      <span className="mt-8 block h-9 w-36 border border-edge-navy bg-edge-navy" />
                    </div>
                    <div className="border border-edge-line bg-white p-3">
                      <span className="block aspect-[4/3] w-full bg-edge-matte" />
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <span className="h-12 border border-edge-line bg-edge-black" />
                        <span className="h-12 border border-edge-line bg-edge-black" />
                        <span className="h-12 border border-edge-line bg-edge-black" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-edge-line">
                    <span className="h-16 border-r border-edge-line bg-white" />
                    <span className="h-16 border-r border-edge-line bg-edge-matte" />
                    <span className="h-16 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-edge-line bg-edge-matte">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="type-eyebrow mb-4 text-edge-muted">Services</p>
            <h2 className="type-section-title text-edge-navy">
              Choose the help that fits where your website is today.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border border-edge-line bg-white/70 p-6 shadow-edge-soft">
                <p className="type-eyebrow text-edge-muted">{service.signal}</p>
                <h3 className="type-card-title mt-5 text-edge-navy">
                  {service.title}
                </h3>
                <p className="type-small mt-4 text-edge-soft">
                  {service.summary}
                </p>
                <Link
                  href="/services"
                  className="type-meta mt-8 inline-flex text-edge-soft transition-colors hover:text-edge-navy"
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
            <h2 className="type-section-title text-edge-navy">
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
