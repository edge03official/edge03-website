import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { serviceDetails, systemPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website modernization, tool integration, online presence optimization, and long-term support from EDGE03.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Modernization, integration, presence, and support."
        summary="EDGE03 improves the systems around a business website so the customer experience becomes clearer and the operation becomes easier to manage."
        meta={["Website sections", "Tool connections", "Presence improvements", "Support plans"]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={service.title} index={index + 1} {...service} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Service framework"
        title="Designed to improve the operating system around the business."
        intro="Future copy can expand this area with package language, examples, deliverables, and links into maintenance plans."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {systemPrinciples.map((principle) => (
              <article key={principle.title} className="border border-edge-line bg-edge-black p-5">
                <h2 className="text-xl font-semibold text-white">
                  {principle.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-edge-soft">
                  {principle.summary}
                </p>
              </article>
            ))}
          </div>
          <PlaceholderBlock label="Service diagram or real work sample placeholder" />
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white">
            Need a clearer business website and connected tools?
          </h2>
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
    </>
  );
}
