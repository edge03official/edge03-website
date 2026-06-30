import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { serviceDetails } from "@/lib/content";

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
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Service detail placeholder"
        title="Ready for deeper service copy when the offer is finalized."
        intro="This section can later hold package language, plan tiers, deliverables, or links into maintenance plans."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="border border-edge-line bg-edge-black p-6">
            <h2 className="text-2xl font-semibold text-white">
              Editable service narrative
            </h2>
            <p className="mt-5 text-base leading-7 text-edge-soft">
              Placeholder copy for explaining how EDGE03 evaluates an existing
              business website, identifies customer friction, improves important
              digital touchpoints, and connects tools that are already in place.
            </p>
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
