import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { maintenancePlans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Maintenance Plans",
  description:
    "Placeholder maintenance plans page for future EDGE03 website support options.",
};

export default function MaintenancePlansPage() {
  return (
    <>
      <PageIntro
        eyebrow="Maintenance Plans"
        title="Future website support options."
        summary="This page can later hold simple support plans for updates, edits, health checks, and ongoing website care."
        meta={["Updates", "Small edits", "Health checks", "Support"]}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {maintenancePlans.map((plan, index) => (
            <article key={plan.title} className="border border-edge-line bg-white/70 p-6 shadow-edge-soft">
              <p className="type-meta text-edge-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="type-card-title mt-8 text-edge-navy">
                {plan.title}
              </h2>
              <p className="type-small mt-4 text-edge-soft">
                {plan.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
