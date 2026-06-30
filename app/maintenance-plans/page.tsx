import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Maintenance Plans",
  description:
    "Placeholder maintenance plans page for future EDGE03 support options.",
};

export default function MaintenancePlansPage() {
  return (
    <>
      <PageIntro
        eyebrow="Maintenance Plans"
        title="Placeholder route for long-term support options."
        summary="This page can later hold support tiers, response expectations, update schedules, monitoring notes, and reporting details."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {["Essential", "Professional", "Ongoing Growth"].map((plan) => (
            <article key={plan} className="border border-edge-line bg-white/[0.02] p-6">
              <h2 className="text-2xl font-semibold text-white">{plan}</h2>
              <p className="mt-4 text-sm leading-6 text-edge-soft">
                Placeholder plan description, deliverables, cadence, and
                support details.
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
