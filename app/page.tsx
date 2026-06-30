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
  processSteps,
  proofStats,
  services,
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
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="mb-6 text-base font-semibold text-edge-soft">
              {company.tagline}
            </p>
            <h1 className="text-6xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              EDGE03
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-edge-soft sm:text-xl">
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
          <div className="lg:pl-8">
            <PlaceholderBlock
              label="Premium hero image or business systems visual placeholder"
              height="lg"
            />
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
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold text-edge-soft">
              Systems philosophy
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              We improve systems. We do not replace them by default.
            </h2>
          </div>
          <p className="text-base leading-8 text-edge-soft sm:text-lg">
            Many businesses already have the tools they need. EDGE03 focuses on
            improving how those tools connect, how customers move through the
            experience, and how the business keeps improving over time.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="A clear path from assessment to ongoing support."
        intro="The process is structured enough to be dependable and flexible enough to fit the business in front of it."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
          {whyEdge.map((item) => (
            <div key={item} className="border border-edge-line bg-edge-black p-6">
              <p className="text-base leading-7 text-edge-soft">{item}</p>
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
              <TestimonialCard key={testimonial.name + testimonial.role} {...testimonial} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" className="border-t border-edge-line">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold text-edge-soft">
              Start the conversation
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Build a cleaner, more connected business presence.
            </h2>
          </div>
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
    </>
  );
}
