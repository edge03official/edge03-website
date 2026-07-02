import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wordmark } from "@/components/wordmark";
import { Section } from "@/components/section";
import { founderValues, whyEdge } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About EDGE03, a small website business founded by Nate to help small businesses look professional online.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={<>About <Wordmark size="inline" /></>}
        title="A small website partner for small businesses."
        summary="EDGE03 is built to be approachable, careful, and straightforward. The goal is to help small businesses get websites they feel proud to share."
        meta={["Founded by Nate", "Veteran background", "Clear communication", "Long-term support"]}
      />

      <Section
        eyebrow="Founder"
        title="Nate started EDGE03 to help business owners improve their online presence with care."
        intro="His Air Force veteran background informs the way EDGE03 works: be accountable, pay attention to details, communicate clearly, and do the job right."
      >
        <div className="flex flex-wrap gap-3">
          {founderValues.map((value) => (
            <span key={value} className="type-meta border border-edge-line bg-white/60 px-4 py-3 text-edge-soft">
              {value}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="What matters" title="Professional, honest, and practical.">
        <div className="grid gap-4 md:grid-cols-2">
          {whyEdge.map((item) => (
            <div key={item} className="border border-edge-line bg-white/70 p-6 shadow-edge-soft">
              <p className="type-body text-edge-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
