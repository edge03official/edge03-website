import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { processSteps, workingModel } from "@/lib/content";

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
        meta={["Assess", "Modernize", "Integrate", "Support"]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          {workingModel.map((item, index) => (
            <article key={item.title} className="border border-edge-line bg-edge-black p-6">
              <p className="type-meta text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="type-card-title mt-8 text-white">
                {item.title}
              </h2>
              <p className="type-small mt-4 text-edge-soft">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="type-section-title max-w-2xl text-white">
            See how the process fits your current business systems.
          </h2>
          <ButtonLink href="/contact">Contact EDGE03</ButtonLink>
        </div>
      </Section>
    </>
  );
}
