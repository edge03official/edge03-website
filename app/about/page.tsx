import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { whyEdge } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About EDGE03, a business improvement company focused on websites, integrations, online presence, and long-term support.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About EDGE03"
        title="A business improvement company for the modern web."
        summary="EDGE03 helps established businesses strengthen the way customers find them, understand them, contact them, and move through their online experience."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <PlaceholderBlock label="Founder, team, or office image placeholder" height="lg" />
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Built around practical improvement.
            </h2>
            <p className="mt-6 text-base leading-8 text-edge-soft">
              Future mission and founder copy can live here. The layout is
              prepared for a concise company story, business philosophy, and the
              reason EDGE03 focuses on modernization instead of unnecessary
              replacement.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Principles"
        title="What EDGE03 should be known for."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {whyEdge.map((item) => (
            <div key={item} className="border border-edge-line bg-edge-black p-6">
              <p className="text-base leading-7 text-edge-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
