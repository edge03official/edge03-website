import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { company, contactPrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EDGE03 to start a website modernization, integration, online presence, or support project.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with the current business system."
        summary="This page is ready for a real contact form, scheduling link, intake questions, address, phone number, and support details."
        meta={["Contact form", "Scheduling link", "Intake questions", "Support details"]}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border border-edge-line bg-white/[0.02] p-6">
            <p className="text-xs font-semibold uppercase text-edge-muted">
              EDGE03 LLC
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-white">
              Project contact placeholder
            </h2>
            <p className="mt-4 text-base leading-7 text-edge-soft">
              Use this area later for business hours, location, phone number,
              scheduling links, or a short intake note.
            </p>
            <a
              className="mt-8 inline-flex text-edge-soft transition-colors hover:text-white"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>

            <div className="mt-10 border-t border-edge-line pt-6">
              <p className="text-xs font-semibold uppercase text-edge-muted">
                Useful intake prompts
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-edge-soft">
                {contactPrompts.map((prompt) => (
                  <li key={prompt} className="flex items-center gap-3">
                    <span className="h-px w-5 bg-edge-navyLight" />
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <form className="grid gap-4 border border-edge-line bg-edge-matte p-6">
            <label className="grid gap-2 text-sm text-edge-soft">
              Name
              <input
                className="min-h-12 border border-edge-line bg-edge-black px-4 text-white outline-none transition-colors placeholder:text-edge-muted focus:border-white"
                name="name"
                placeholder="Name placeholder"
              />
            </label>
            <label className="grid gap-2 text-sm text-edge-soft">
              Email
              <input
                className="min-h-12 border border-edge-line bg-edge-black px-4 text-white outline-none transition-colors placeholder:text-edge-muted focus:border-white"
                name="email"
                type="email"
                placeholder="Email placeholder"
              />
            </label>
            <label className="grid gap-2 text-sm text-edge-soft">
              Project Notes
              <textarea
                className="min-h-40 resize-y border border-edge-line bg-edge-black px-4 py-3 text-white outline-none transition-colors placeholder:text-edge-muted focus:border-white"
                name="message"
                placeholder="Brief project notes placeholder"
              />
            </label>
            <div className="pt-2">
              <ButtonLink href={`mailto:${company.email}`}>Start a Project</ButtonLink>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
