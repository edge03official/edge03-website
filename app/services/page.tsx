import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { serviceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EDGE03 builds, modernizes, and maintains professional websites for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Build, modernize, or maintain your website."
        summary="EDGE03 keeps the offer simple: help small businesses look professional online and keep their websites useful over time."
        meta={["Build", "Modernize", "Maintain"]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={service.title} index={index + 1} {...service} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="type-section-title max-w-2xl text-edge-navy">
            Want help improving your website?
          </h2>
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
    </>
  );
}
