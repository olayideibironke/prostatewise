import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import {
  ShieldCheckIcon,
  StethoscopeIcon,
  UsersIcon,
  ClipboardIcon,
  HeartIcon,
  ChartIcon,
  ArrowRightIcon,
} from "@/components/ui/Icon";

const pathways = [
  {
    icon: ShieldCheckIcon,
    title: "Understand Prostate Health",
    body: "Learn what the prostate does and the difference between an enlarged prostate, prostatitis, and prostate cancer.",
    href: "/about-prostate-health",
    cta: "Explore the basics",
  },
  {
    icon: ChartIcon,
    title: "Know Your Risk",
    body: "Age, family history, and ancestry all shape your risk. See what raises it and when to pay closer attention.",
    href: "/prostate-cancer-awareness",
    cta: "Understand risk factors",
  },
  {
    icon: StethoscopeIcon,
    title: "Talk About Screening",
    body: "Find out when most men should start the screening conversation, and how PSA testing fits into that decision.",
    href: "/risk-and-screening",
    cta: "See the screening guide",
  },
  {
    icon: ClipboardIcon,
    title: "Prepare for Your Visit",
    body: "Walk into your appointment ready with the right questions and a clear picture of your health history.",
    href: "/psa-and-visit-prep",
    cta: "Get visit-ready",
  },
];

const stats = [
  {
    value: "1 in 8",
    label: "men will be diagnosed with prostate cancer during their lifetime.",
  },
  {
    value: "2nd",
    label: "most common cancer in men worldwide, after skin cancer.",
  },
  {
    value: "~99%",
    label: "5-year relative survival when detected early and still localized.",
  },
  {
    value: "Age 50",
    label: "when average-risk men are generally advised to discuss screening.",
  },
];

const communityGroups = [
  { label: "Families", detail: "Encourage the men you love, without shame or fear." },
  { label: "Churches", detail: "Bring trusted health conversations into the community." },
  { label: "Barbershops", detail: "Reach men where they already gather and talk." },
  { label: "Workplaces", detail: "Support employee wellness with clear, calm information." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust stats */}
      <Section tone="tint" className="py-14 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-medical-600">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-navy-500">
          Estimates reflect public health data from the American Cancer Society,
          National Cancer Institute, and CDC. See{" "}
          <Link href="/resources" className="link-underline">
            Resources
          </Link>{" "}
          for sources.
        </p>
      </Section>

      {/* Why awareness matters */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why awareness matters"
              title="Early prostate cancer rarely announces itself"
              description="In its early stages, prostate cancer often causes no symptoms at all. That is exactly why waiting for pain or trouble is risky — and why understanding your risk early can change everything."
            />
            <div className="mt-8 space-y-5">
              <WhyPoint
                title="It is common"
                body="About 1 in 8 men will be diagnosed in their lifetime. Nearly every man knows someone affected."
              />
              <WhyPoint
                title="It is often treatable when caught early"
                body="When found while still contained in the prostate, outcomes are very good. Time matters."
              />
              <WhyPoint
                title="Screening is a conversation, not a guess"
                body="A simple discussion with your doctor — often including a PSA blood test — helps you decide what is right for you."
              />
            </div>
            <div className="mt-8">
              <Button href="/prostate-cancer-awareness" variant="primary">
                Learn about prostate cancer
                <ArrowRightIcon />
              </Button>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-navy-50 to-sky-50">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-medical-100 text-medical-700">
                <HeartIcon />
              </span>
              <h3 className="text-xl font-semibold text-navy-900">
                A calm, empowering approach
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-navy-700">
              ProstateWise is not here to scare you. It is here to help you feel
              informed and in control. Knowing your risk early means you can act
              early — on your own terms, with your own doctor.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Plain-English explanations, no medical jargon",
                "Respectful, encouraging tone for every man",
                "Clear next steps you can act on this week",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-medical-600 text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Pathways */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Where to start"
          title="Find your path to prostate awareness"
          description="Wherever you are in your journey, there is a clear next step. Pick the one that fits you today."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.href} interactive className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-700 transition-colors hover:text-medical-800"
                >
                  {item.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Community awareness */}
      <Section>
        <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-navy-50 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <UsersIcon />
              </span>
              <h2 className="mt-5 text-3xl font-bold text-navy-900">
                Awareness spreads through community
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                Men are more likely to take action when the people and places
                they trust encourage it. ProstateWise is built to be shared — in
                families, churches, barbershops, and workplaces where real
                conversations happen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/for-families" variant="primary">
                  For Families
                </Button>
                <Button href="/mission" variant="secondary">
                  Our Mission
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {communityGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-navy-900">{group.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                    {group.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer />
      </Container>

      <CTABand />
    </>
  );
}

function WhyPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-600">
        <ShieldCheckIcon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
        <p className="mt-1 leading-relaxed text-navy-600">{body}</p>
      </div>
    </div>
  );
}
