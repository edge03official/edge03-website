import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import {
  company,
  founderValues,
  heroSignals,
  processSteps,
  services,
  websiteReasons,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Small Business Website Design and Support",
  description:
    "EDGE03 helps small businesses build, modernize, and maintain professional websites with care, clarity, and long-term support.",
};

export default function Home() {
  return (
    <>
      <section className="border-b border-edge-line bg-edge-black">
        <div className="mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10">
          <div>
            <p className="type-eyebrow mb-6 text-edge-muted">
              {company.tagline}
            </p>
            <h1 className="type-hero max-w-4xl text-white">
              Professional websites for small businesses.
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-edge-soft">
              EDGE03 helps small businesses build, modernize, and maintain
              websites that look trustworthy, work on every device, and are easy
              to keep updated.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 lg:pl-4">
            <PlaceholderBlock
              label="Future website preview or local business project image"
              height="lg"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div key={signal.label} className="border border-edge-line bg-white/[0.02] p-4">
                  <p className="type-eyebrow text-edge-muted">
                    {signal.label}
                  </p>
                  <p className="type-meta mt-2 text-white">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why it matters"
        title="Your website should make people feel confident about working with you."
        intro="For many customers, your website is the first real impression of your business. It should be clear, current, and easy to use."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {websiteReasons.map((reason) => (
            <div key={reason} className="border border-edge-line bg-white/[0.02] p-6">
              <p className="type-body text-edge-soft">{reason}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Services"
        title="Three simple ways EDGE03 can help."
        intro="Whether you need a new site, a better version of what you already have, or someone to help maintain it, the goal is the same: a website you can trust."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index + 1} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="A simple process with clear communication."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="About"
        title="Built by Nate, founder of EDGE03."
        intro="EDGE03 is starting small on purpose: focused, accountable, and personal. Nate brings an Air Force veteran background and a practical approach built around integrity, attention to detail, and doing the job right."
      >
        <div className="flex flex-wrap gap-3">
          {founderValues.map((value) => (
            <span key={value} className="type-meta border border-edge-line bg-edge-black px-4 py-3 text-edge-soft">
              {value}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="border-t border-edge-line">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="type-eyebrow mb-4 text-edge-muted">
              Start the conversation
            </p>
            <h2 className="type-section-title text-white">
              Need a website that feels professional and easy to trust?
            </h2>
          </div>
          <ButtonLink href="/contact">Contact EDGE03</ButtonLink>
        </div>
      </Section>
    </>
  );
}
