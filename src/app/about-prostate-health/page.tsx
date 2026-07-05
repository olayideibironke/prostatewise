import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Prostate Health",
  description:
    "What the prostate is, how it can be affected by BPH, prostatitis, and prostate cancer, and why overlapping symptoms make medical evaluation important.",
};

const conditions = [
  {
    name: "Enlarged prostate (BPH)",
    short: "Benign prostatic hyperplasia",
    body: "As many men age, the prostate naturally grows larger. This is called benign prostatic hyperplasia, or BPH. “Benign” means it is not cancer. A larger prostate can press on the tube that carries urine, leading to a weaker stream, needing to go more often, or trouble emptying the bladder.",
    note: "BPH is very common with age and is not cancer — but it can share symptoms with other conditions, so it is worth checking.",
  },
  {
    name: "Prostatitis",
    short: "Inflammation of the prostate",
    body: "Prostatitis is swelling or inflammation of the prostate, sometimes caused by an infection. It can affect men of any age. Symptoms may include pain in the pelvis or lower back, burning when urinating, or flu-like feelings when an infection is involved.",
    note: "Prostatitis can come on quickly and cause real discomfort. It is treatable, and a clinician can identify the cause.",
  },
  {
    name: "Prostate cancer",
    short: "Abnormal cell growth in the prostate",
    body: "Prostate cancer happens when cells in the prostate grow in an abnormal, uncontrolled way. In its early stages it often causes no symptoms at all. Many prostate cancers grow slowly, but some are more aggressive, which is why awareness and timely screening conversations matter.",
    note: "Early prostate cancer is frequently silent. That is precisely why waiting for symptoms is not a safe strategy.",
  },
];

export default function AboutProstateHealthPage() {
  return (
    <>
      <PageHeader
        eyebrow="The basics, in plain English"
        title="About Prostate Health"
        description="Before you can understand your risk, it helps to understand the prostate itself — what it does, how it can change, and why different conditions can feel similar."
      />

      {/* What is the prostate */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="prose-content">
            <SectionHeading
              align="left"
              eyebrow="Start here"
              title="What is the prostate?"
            />
            <p className="mt-6">
              The prostate is a small gland — about the size of a walnut in
              younger men — that sits just below the bladder and in front of the
              rectum. It wraps around the urethra, the tube that carries urine
              and semen out of the body.
            </p>
            <p>
              Its main job is to help make some of the fluid in semen, which
              nourishes and carries sperm. Because the prostate sits so close to
              the bladder and urethra, changes in the prostate often show up as
              changes in urination.
            </p>
            <p>
              The prostate tends to grow slowly over a man&apos;s life. That
              growth is normal, but it is also why prostate conditions become
              more common with age.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-navy-50 to-sky-50">
            <h3 className="text-lg font-semibold text-navy-900">
              Quick facts
            </h3>
            <dl className="mt-4 space-y-4">
              {[
                ["Size", "About a walnut; often grows with age"],
                ["Location", "Below the bladder, in front of the rectum"],
                ["Wraps around", "The urethra (the urine and semen tube)"],
                ["Main role", "Helps produce fluid for semen"],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-medical-600">
                    {term}
                  </dt>
                  <dd className="mt-0.5 text-navy-700">{def}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Section>

      {/* Three conditions */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Common prostate conditions"
          title="Three different things — often confused"
          description="Not every prostate problem is cancer. Understanding the difference helps you ask better questions and worry less about the wrong things."
        />
        <div className="mt-12 space-y-6">
          {conditions.map((c, i) => (
            <Card key={c.name} className="lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4 lg:w-64">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-medical-600 font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm text-navy-500">{c.short}</p>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed text-navy-700">{c.body}</p>
                  <InfoCallout tone="caution" className="mt-4">
                    <p>{c.note}</p>
                  </InfoCallout>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Disease vs cancer */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="An important distinction"
              title="Prostate disease is not the same as prostate cancer"
            />
            <p className="mt-6 prose-content">
              &ldquo;Prostate disease&rdquo; is a broad term that covers any
              condition affecting the prostate — including the common,
              non-cancerous ones like BPH and prostatitis. Prostate cancer is
              just one possibility, and it is not the most common cause of
              prostate symptoms.
            </p>
            <p className="prose-content">
              The challenge is that these conditions can feel alike. A weak
              urine stream, waking at night to urinate, or discomfort could come
              from BPH, prostatitis, or — less often — something more serious.
              You cannot tell them apart on your own.
            </p>
          </div>
          <div className="space-y-4">
            <InfoCallout tone="info" title="Why symptoms overlap">
              <p>
                The prostate&apos;s position around the urethra means many
                different conditions produce similar urinary symptoms. Symptoms
                alone rarely point to a single cause.
              </p>
            </InfoCallout>
            <InfoCallout tone="positive" title="Why evaluation matters">
              <p>
                Only a clinician can sort out the cause using your history, an
                exam, and tests when appropriate. Getting checked is how you
                trade uncertainty for answers — often reassuring ones.
              </p>
            </InfoCallout>
            <InfoCallout tone="caution" title="The takeaway">
              <p>
                Do not assume symptoms are &ldquo;just aging,&rdquo; and do not
                assume the worst. Bring changes to a doctor so the right cause
                can be identified.
              </p>
            </InfoCallout>
          </div>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer />
      </Container>

      <CTABand
        title="Ready to understand your own risk?"
        description="Now that you know the basics, take a few minutes to see which risk factors apply to you and what your next step could be."
      />
    </>
  );
}
