import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { LogoGrid } from "@/components/logo-grid";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { caseStudies, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Placeholder case study page for future EDGE03 client outcomes and project proof.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case Studies"
        title="Placeholder route for future client outcomes."
        summary="This page is prepared for measurable before-and-after stories, client proof, testimonials, and project details."
        meta={["Before state", "Improvement work", "Measured outcome", "Client quote"]}
      />
      <Section>
        <div className="space-y-10">
          <LogoGrid />
          <div className="grid gap-4">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </Section>
      <Section tone="muted" eyebrow="Testimonials" title="Prepared for real client proof.">
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
