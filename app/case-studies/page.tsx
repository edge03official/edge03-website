import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { caseStudies } from "@/lib/content";

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
      />
      <Section>
        <div className="grid gap-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>
    </>
  );
}
