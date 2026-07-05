import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import { PrintButton } from "@/components/ui/PrintButton";
import { CheckIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "PSA & Doctor Visit Prep",
  description:
    "PSA explained in plain English, why PSA can be high for reasons other than cancer, questions to ask your doctor, and a printable checklist to bring to your appointment.",
};

const psaReasons = [
  "An enlarged prostate (BPH), which is common with age",
  "A urinary tract or prostate infection (prostatitis)",
  "Recent ejaculation or vigorous exercise like cycling",
  "A recent prostate exam or certain medical procedures",
  "Simply getting older, as PSA tends to rise gradually",
];

const questions = [
  "Based on my age and history, should I consider PSA screening now?",
  "What are the benefits and downsides of screening for someone like me?",
  "What would my PSA result mean, and what happens if it is elevated?",
  "How does my family history change your recommendation?",
  "If we screen, how often should I repeat the test?",
  "Are there symptoms I should watch for and report right away?",
];

const bringItems = [
  "A list of your current medications and supplements",
  "Your family history of prostate, breast, or ovarian cancer",
  "Any urinary or pelvic symptoms and when they started",
  "Past PSA results or prostate exams, if you have them",
  "Your questions, written down so nothing gets forgotten",
];

export default function PsaAndVisitPrepPage() {
  return (
    <>
      <PageHeader
        eyebrow="Walk in prepared"
        title="PSA & Doctor Visit Prep"
        description="Understanding PSA and coming prepared turns a rushed appointment into a real conversation. Here is what PSA means and how to make the most of your visit."
      />

      {/* What is PSA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="prose-content">
            <SectionHeading
              align="left"
              eyebrow="Plain English"
              title="What is PSA?"
            />
            <p className="mt-6">
              PSA stands for <strong>prostate-specific antigen</strong>. It is a
              protein made by the prostate gland, and a small amount normally
              circulates in the blood. A PSA test is a simple blood draw that
              measures how much is present.
            </p>
            <p>
              Doctors use PSA as one signal among many. There is no single
              &ldquo;magic number&rdquo; that means cancer. Instead, your doctor
              looks at your level, whether it has changed over time, your age,
              and your risk factors together.
            </p>
            <p>
              Think of PSA as a smoke detector, not a diagnosis. It can prompt a
              closer look, but it cannot tell you on its own whether cancer is
              present.
            </p>
          </div>

          <InfoCallout tone="caution" title="A high PSA does not mean cancer">
            <p>PSA can be elevated for many reasons that are not cancer:</p>
            <ul className="mt-3 space-y-2">
              {psaReasons.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              This is why results are always interpreted by a clinician — and
              why a single number is never the whole story.
            </p>
          </InfoCallout>
        </div>
      </Section>

      {/* Questions to ask */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Make the visit count"
          title="Questions worth asking your doctor"
          description="Bringing questions signals that you want to be a partner in the decision. Here are strong ones to start with."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {questions.map((q, i) => (
            <Card key={q} className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-medical-600 font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-navy-700">{q}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Printable checklist */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-navy-200 bg-white p-8 shadow-card print:border-0 print:shadow-none sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-navy-100 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-medical-600">
                  Appointment checklist
                </p>
                <h2 className="mt-1 text-2xl font-bold text-navy-900">
                  Bring this to your visit
                </h2>
              </div>
              <PrintButton />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-navy-900">
                What to bring
              </h3>
              <ul className="mt-4 space-y-3">
                {bringItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-navy-300" aria-hidden="true" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-navy-900">
                Questions to ask
              </h3>
              <ul className="mt-4 space-y-3">
                {questions.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-navy-300" aria-hidden="true" />
                    <span className="text-navy-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-navy-50 p-4 text-sm text-navy-600 print:bg-transparent">
              <p className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-medical-600" />
                Tip: fill in your notes at home while things are fresh, then
                hand this to your doctor at the start of the visit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer />
      </Container>

      <CTABand
        title="Not sure it is time for that visit yet?"
        description="Run the risk check first. It can help you decide whether to book an appointment and what to raise when you do."
        primaryLabel="Check Your Risk"
        secondaryLabel="See the Screening Guide"
        secondaryHref="/risk-and-screening"
      />
    </>
  );
}
