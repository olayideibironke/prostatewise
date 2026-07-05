import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import {
  CalendarIcon,
  UsersIcon,
  HeartIcon,
  StethoscopeIcon,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Prostate Cancer Awareness",
  description:
    "How age, family history, and ancestry affect prostate cancer risk, what PSA testing is, and why early prostate cancer is often silent — so waiting for symptoms is risky.",
};

const riskFactors = [
  {
    icon: CalendarIcon,
    title: "Age",
    body: "Risk rises with age. Prostate cancer is uncommon before 40 but becomes far more common after 50, with most diagnoses in men 65 and older. Age is the single biggest risk factor.",
  },
  {
    icon: UsersIcon,
    title: "Family history",
    body: "Having a father or brother who had prostate cancer roughly doubles the risk. Risk climbs further with multiple affected relatives or relatives diagnosed at a younger age. A family history of breast or ovarian cancer (BRCA gene changes) can also matter.",
  },
  {
    icon: HeartIcon,
    title: "Race & ancestry",
    body: "Black men and men of African ancestry are diagnosed more often, tend to be diagnosed younger, and face higher rates of aggressive disease. This makes earlier awareness and screening conversations especially important.",
  },
];

export default function ProstateCancerAwarenessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Know the patterns"
        title="Prostate Cancer Awareness"
        description="Prostate cancer does not affect every man equally. Knowing the patterns — age, family, and ancestry — helps you understand when to pay closer attention."
      />

      {/* Risk factors */}
      <Section>
        <SectionHeading
          eyebrow="Who is at higher risk"
          title="Three factors shape prostate cancer risk the most"
          description="You cannot change these factors, but knowing them helps you and your doctor decide when to start the screening conversation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {riskFactors.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title} className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
                  <Icon />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy-600">{f.body}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Silent early stages */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The silent stage"
              title="Early prostate cancer usually has no symptoms"
            />
            <p className="mt-6 prose-content">
              This is the most important thing to understand about prostate
              cancer. In its early, most treatable stage, it typically causes no
              pain and no obvious signs. A man can feel completely healthy while
              early changes are underway.
            </p>
            <p className="prose-content">
              When symptoms like trouble urinating do appear, they are more
              often caused by non-cancerous conditions such as BPH. And when
              symptoms are caused by cancer, they can signal that it has grown
              or spread — which is exactly what early awareness aims to get
              ahead of.
            </p>
          </div>
          <div className="space-y-4">
            <InfoCallout tone="caution" title="Do not wait for pain">
              <p>
                Pain, bone aches, or difficulty urinating are not reliable
                &ldquo;early warnings.&rdquo; Relying on symptoms to prompt
                action can mean missing the window when treatment works best.
              </p>
            </InfoCallout>
            <InfoCallout tone="info" title="Awareness beats waiting">
              <p>
                Because early disease is silent, the decision to screen is made
                based on risk factors and a conversation with your doctor — not
                based on how you feel.
              </p>
            </InfoCallout>
          </div>
        </div>
      </Section>

      {/* PSA testing intro */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card className="bg-navy-900 text-navy-100 lg:sticky lg:top-24">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-500/20 text-sky-300">
              <StethoscopeIcon />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              What is PSA testing?
            </h3>
            <p className="mt-3 leading-relaxed text-navy-200">
              PSA stands for prostate-specific antigen — a protein made by the
              prostate. A simple blood test measures how much is in your blood.
              Higher levels can be a signal worth looking into.
            </p>
          </Card>
          <div className="prose-content">
            <p className="mt-0">
              A PSA test is often the starting point for prostate cancer
              screening. It is quick, low-risk, and done with a regular blood
              draw. But a PSA result is a clue, not a verdict.
            </p>
            <p>
              PSA can be raised for many reasons that have nothing to do with
              cancer — including an enlarged prostate, a recent infection, or
              even recent activity. A higher number does not mean you have
              cancer, and a normal number does not fully rule it out.
            </p>
            <p>
              That is why PSA results are interpreted by a clinician alongside
              your age, risk factors, and history. Screening is a shared
              decision you make together, weighing the benefits and the
              downsides.
            </p>
            <InfoCallout tone="info" title="Learn more before your visit" className="mt-6">
              <p>
                Our{" "}
                <a href="/psa-and-visit-prep" className="link-underline">
                  PSA &amp; Doctor Visit Prep
                </a>{" "}
                page explains PSA in more detail and gives you questions to ask.
                The{" "}
                <a href="/risk-and-screening" className="link-underline">
                  Risk &amp; Screening Guide
                </a>{" "}
                covers when to start the conversation.
              </p>
            </InfoCallout>
          </div>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer>
          <span className="font-semibold text-navy-900">
            Awareness, not alarm.
          </span>{" "}
          Understanding risk factors and PSA testing helps you have a better
          conversation with your doctor. ProstateWise does not diagnose prostate
          cancer or interpret your test results — your clinician does.
        </Disclaimer>
      </Container>

      <CTABand
        title="See which risk factors apply to you"
        description="Answer a few quick questions to understand your personal risk picture and the next step that makes sense for you."
      />
    </>
  );
}
