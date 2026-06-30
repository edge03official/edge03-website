import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { LogoGrid } from "@/components/logo-grid";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { StatCard } from "@/components/stat-card";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  caseStudies,
  company,
  heroSignals,
  processSteps,
  proofStats,
  services,
  systemPrinciples,
  testimonials,
  whyEdge,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Website Modernization and Integration",
  description:
    "EDGE03 helps businesses modernize websites, connect existing tools, improve online presence, and support long-term growth.",
};

export default function Home() {
  return (
    <>
      <section className="border-b border-edge-line bg-edge-black">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
          <div>
            <p className="type-eyebrow mb-6 text-edge-muted">
              {company.tagline}
            </p>
            <h1 className="type-hero max-w-4xl text-white">
              EDGE03
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-edge-soft">
              EDGE03 helps businesses modernize their websites, connect existing
              tools, and improve the way customers interact with them online.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 lg:pl-8">
            <PlaceholderBlock
              label="Premium business systems visual placeholder"
              height="xl"
            />
            <div className="grid grid-cols-2 gap-3">
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
        eyebrow="Brand statement"
        title="Modern business infrastructure, built around what already works."
        intro="EDGE03 is not a software company. It improves business systems by strengthening the public website, connecting existing tools, and keeping the operation supported after launch."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {proofStats.map((stat) => (
            <StatCard key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Services"
        title="A practical improvement layer for established businesses."
        intro="Each service area is designed to be edited later with real descriptions, examples, pricing notes, or plan details."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index + 1} {...service} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <p className="type-eyebrow mb-4 text-edge-muted">
              Systems philosophy
            </p>
            <h2 className="type-section-title text-white">
              We improve systems. We do not replace them by default.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {systemPrinciples.map((principle) => (
              <article key={principle.title} className="border border-edge-line bg-edge-black/40 p-5">
                <h3 className="type-card-title text-white">
                  {principle.title}
                </h3>
                <p className="type-small mt-4 text-edge-soft">
                  {principle.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="A clear path from assessment to ongoing support."
        intro="The process is structured enough to be dependable and flexible enough to fit the business in front of it."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why EDGE03"
        title="Sharp execution with long-term business judgment."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {whyEdge.map((item, index) => (
            <div key={item} className="border border-edge-line bg-edge-black p-6">
              <p className="type-meta mb-5 text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="type-body text-edge-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Client proof"
        title="Reserved space for real outcomes."
        intro="This section is ready for case studies, client logos, testimonials, and measurable before-and-after results."
      >
        <div className="space-y-10">
          <LogoGrid />
          <div className="grid gap-4 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name + testimonial.role}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" className="border-t border-edge-line">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="type-eyebrow mb-4 text-edge-muted">
              Start the conversation
            </p>
            <h2 className="type-section-title text-white">
              Build a cleaner, more connected business presence.
            </h2>
          </div>
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
    </>
  );
}
