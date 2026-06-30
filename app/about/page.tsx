import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PlaceholderBlock } from "@/components/placeholder-block";
import { Section } from "@/components/section";
import { StatCard } from "@/components/stat-card";
import { proofStats, whyEdge } from "@/lib/content";

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
        meta={["Company story", "Mission statement", "Founder image", "Operating principles"]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <PlaceholderBlock
            label="Founder, team, or office image placeholder"
            height="lg"
          />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-edge-muted">
              Practical improvement
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Built around useful modernization, not unnecessary replacement.
            </h2>
            <p className="mt-6 text-base leading-8 text-edge-soft">
              Future mission and founder copy can live here. The layout is
              prepared for a concise company story, business philosophy, and the
              reason EDGE03 focuses on modernizing websites, integrations, and
              customer touchpoints around what a business already uses.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy" eyebrow="Focus" title="Three areas of improvement.">
        <div className="grid gap-4 md:grid-cols-3">
          {proofStats.map((stat) => (
            <StatCard key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Principles"
        title="What EDGE03 should be known for."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {whyEdge.map((item, index) => (
            <div key={item} className="border border-edge-line bg-edge-black p-6">
              <p className="mb-5 text-sm font-semibold text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-base leading-7 text-edge-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
