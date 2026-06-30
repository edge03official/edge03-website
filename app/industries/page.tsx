import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Types",
  description:
    "Placeholder page for future EDGE03 small business website examples.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Business Types"
        title="Future page for small business examples."
        summary="This page can later show the kinds of local businesses EDGE03 can help with website builds, refreshes, and maintenance."
        meta={["Local businesses", "Website needs", "Example projects"]}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <article key={item} className="border border-edge-line bg-white/[0.02] p-6">
              <p className="type-meta text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="type-card-title mt-8 text-white">{item}</h2>
              <p className="type-small mt-4 text-edge-soft">
                Placeholder copy for future examples, common website needs, and
                practical ways EDGE03 can help.
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <PlaceholderBlock label="Future local business website example image" height="lg" />
      </Section>
    </>
  );
}
