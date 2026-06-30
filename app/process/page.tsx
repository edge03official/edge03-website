import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { Wordmark } from "@/components/wordmark";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple website process for small businesses: talk, plan, build, and support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="A simple process for improving your website."
        summary="EDGE03 keeps the work clear and practical so you know what is happening and why."
        meta={["Talk", "Plan", "Build", "Support"]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="type-section-title max-w-2xl text-white">
            Ready to talk through your website?
          </h2>
          <ButtonLink href="/contact">
            Contact <Wordmark size="xs" />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
