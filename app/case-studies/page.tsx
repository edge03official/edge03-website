import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { caseStudies, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Placeholder examples page for future EDGE03 small business website projects.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Examples"
        title="Future page for real website improvements."
        summary="This page can later show simple before-and-after stories from small business website projects."
        meta={["Before", "What changed", "Result", "Client note"]}
      />
      <Section>
        <div className="grid gap-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>
      <Section tone="muted" eyebrow="Testimonials" title="Future space for client notes.">
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name + testimonial.role}
              {...testimonial}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
