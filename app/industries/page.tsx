import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry placeholder page for future EDGE03 business categories and examples.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="Placeholder route for future industry focus areas."
        summary="This page can later organize service businesses, professional offices, local operators, and other business categories EDGE03 supports."
        meta={["Industry overview", "Service fit", "Example outcomes", "Client proof"]}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <article key={item} className="border border-edge-line bg-white/[0.02] p-6">
              <p className="text-sm font-semibold text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-8 text-2xl font-semibold text-white">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-edge-soft">
                Placeholder industry copy, relevant services, proof points, and
                customer workflow notes.
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <PlaceholderBlock label="Industry proof image or client logo field placeholder" height="lg" />
      </Section>
    </>
  );
}
