import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import { CheckIcon, AlertIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Risk & Screening Guide",
  description:
    "General guidance on when to discuss prostate cancer screening with your doctor by risk level, plus the benefits and downsides of PSA screening — educational only.",
};

const ageGuidance = [
  {
    age: "Around 50",
    group: "Average risk",
    who: "Men with no family history and no other higher-risk factors.",
    tone: "info" as const,
  },
  {
    age: "Around 45",
    group: "Higher risk",
    who: "Black men and men of African ancestry, or men with a father or brother diagnosed with prostate cancer.",
    tone: "caution" as const,
  },
  {
    age: "Around 40",
    group: "Very high risk",
    who: "Men with more than one close relative diagnosed at a younger age, or known high-risk inherited gene changes.",
    tone: "caution" as const,
  },
];

const benefits = [
  "May find prostate cancer early, before symptoms appear",
  "Can catch aggressive cancers when treatment is most effective",
  "Offers reassurance and a baseline to track over time",
  "Supports an informed, personal decision with your doctor",
];

const downsides = [
  "PSA can be elevated for non-cancer reasons, leading to worry",
  "May lead to further tests or a biopsy that turn out negative",
  "Can detect slow-growing cancers that might never cause harm",
  "Treatment of some cancers carries side effects worth weighing",
];

export default function RiskAndScreeningPage() {
  return (
    <>
      <PageHeader
        eyebrow="When to start the conversation"
        title="Risk & Screening Guide"
        description="Screening is a personal decision you make with your doctor. This guide explains the general ages to start that conversation and how to weigh the benefits and downsides."
      />

      {/* When to talk by risk */}
      <Section>
        <SectionHeading
          eyebrow="General timing by risk level"
          title="When most men should discuss screening"
          description="These are general starting points drawn from public health guidance. Your own timing depends on your health and history — your doctor can personalize it."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ageGuidance.map((g) => (
            <Card key={g.group} className="flex flex-col text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-medical-600">
                {g.group}
              </p>
              <p className="mt-3 font-display text-4xl font-bold text-navy-900">
                {g.age}
              </p>
              <p className="mt-1 text-sm text-navy-500">years old</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">
                {g.who}
              </p>
            </Card>
          ))}
        </div>

        <InfoCallout tone="info" title="How to read this" className="mt-8">
          <p>
            These ages mark when to <em>start the discussion</em> about
            screening — not a command to test on a specific birthday. The right
            choice, and how often to repeat testing, is decided with your
            clinician based on your PSA history, health, and preferences.
            Guidance also varies between organizations such as the USPSTF and
            the American Cancer Society.
          </p>
        </InfoCallout>
      </Section>

      {/* Benefits and downsides */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="A balanced view"
          title="PSA screening has real benefits — and real trade-offs"
          description="Good decisions come from understanding both sides. Screening is not automatically right or wrong; it is a choice that fits your situation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <CheckIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-navy-900">
                Potential benefits
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <AlertIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-navy-900">
                Potential downsides
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {downsides.map((d) => (
                <li key={d} className="flex items-start gap-3 text-navy-700">
                  <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Shared decision */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="The bottom line"
            title="Screening is a shared decision"
            description="There is no single right answer for every man. The goal of ProstateWise is to help you walk into your appointment informed, so you and your doctor can decide together."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
            {[
              "Know your risk factors before you go",
              "Ask about the benefits and downsides for you",
              "Decide together how and when to screen",
            ].map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-600 font-display font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer>
          <span className="font-semibold text-navy-900">
            Educational guidance only.
          </span>{" "}
          These age ranges are general and simplified. ProstateWise does not
          recommend, provide, or replace medical screening, and it does not
          diagnose. Talk with a licensed clinician about the screening plan
          that is right for you.
        </Disclaimer>
      </Container>

      <CTABand
        title="Not sure which risk level fits you?"
        description="The interactive risk check walks you through your factors and suggests when a screening conversation may make sense."
      />
    </>
  );
}
