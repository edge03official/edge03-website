import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";

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
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {["Industry 01", "Industry 02", "Industry 03"].map((item) => (
            <PlaceholderBlock key={item} label={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
