import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "The EDGE03 process for assessing, modernizing, integrating, and supporting business web systems.",
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="Measured improvement from first assessment to ongoing support."
        summary="The process is built to understand the business first, improve the public experience, connect practical systems, and keep the work useful after launch."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Working model"
        title="Simple phases, clear decisions, clean handoff."
        intro="Future copy can expand this area with discovery questions, project timelines, review points, and support expectations."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Discovery", "Implementation", "Support"].map((item) => (
            <div key={item} className="border border-edge-line bg-edge-black p-6">
              <h2 className="text-xl font-semibold text-white">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-edge-soft">
                Placeholder copy for the {item.toLowerCase()} phase and how
                decisions are made with the client.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white">
            See how the process fits your current business systems.
          </h2>
          <ButtonLink href="/contact">Contact EDGE03</ButtonLink>
        </div>
      </Section>
    </>
  );
}
