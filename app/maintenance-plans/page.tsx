import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { maintenancePlans } from "@/lib/content";

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
        meta={["Plan tiers", "Support cadence", "Response expectations", "Reporting"]}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {maintenancePlans.map((plan, index) => (
            <article key={plan.title} className="border border-edge-line bg-white/[0.02] p-6">
              <p className="type-meta text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="type-card-title mt-8 text-white">
                {plan.title}
              </h2>
              <p className="type-small mt-4 text-edge-soft">
                {plan.summary}
              </p>
              <div className="type-small mt-8 border-t border-edge-line pt-5 text-edge-muted">
                Future pricing, cadence, and deliverables.
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
