import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { BrandText, Wordmark } from "@/components/wordmark";
import { Section } from "@/components/section";
import { company, contactPrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EDGE03 to talk about a small business website build, refresh, or maintenance project.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell EDGE03 what your website needs."
        summary="Start with a short note. You do not need a perfect plan before reaching out. A simple conversation is enough to begin."
        meta={["New website", "Website refresh", "Maintenance help"]}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border border-edge-line bg-white/70 p-6 shadow-edge-soft">
            <p className="type-eyebrow text-edge-muted">
              <Wordmark legal size="xs" />
            </p>
            <h2 className="type-card-title mt-5 text-edge-navy">
              Start with a simple message.
            </h2>
            <p className="type-body mt-4 text-edge-soft">
              <BrandText>
                Share what you have, what feels outdated, or what you want the
                website to help with. EDGE03 will help sort out the next step.
              </BrandText>
            </p>
            <a
              className="type-small mt-8 inline-flex text-edge-soft transition-colors hover:text-edge-navy"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>

            <div className="mt-10 border-t border-edge-line pt-6">
              <p className="type-eyebrow text-edge-muted">Helpful to include</p>
              <ul className="mt-5 grid gap-3 text-edge-soft">
                {contactPrompts.map((prompt) => (
                  <li key={prompt} className="type-small flex items-center gap-3">
                    <span className="h-px w-5 bg-edge-navyLight" />
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <form className="grid gap-4 border border-edge-line bg-edge-matte p-6 shadow-edge-soft">
            <label className="type-small grid gap-2 text-edge-soft">
              Name
              <input
                className="min-h-12 border border-edge-line bg-white px-4 text-edge-navy outline-none transition-colors placeholder:text-edge-muted focus:border-edge-navy"
                name="name"
                placeholder="Your name"
              />
            </label>
            <label className="type-small grid gap-2 text-edge-soft">
              Email
              <input
                className="min-h-12 border border-edge-line bg-white px-4 text-edge-navy outline-none transition-colors placeholder:text-edge-muted focus:border-edge-navy"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="type-small grid gap-2 text-edge-soft">
              Project Notes
              <textarea
                className="min-h-40 resize-y border border-edge-line bg-white px-4 py-3 text-edge-navy outline-none transition-colors placeholder:text-edge-muted focus:border-edge-navy"
                name="message"
                placeholder="Tell me what you need help with."
              />
            </label>
            <div className="pt-2">
              <ButtonLink href={`mailto:${company.email}`}>Email <Wordmark size="xs" /></ButtonLink>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
