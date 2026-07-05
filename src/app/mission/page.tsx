import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import {
  UsersIcon,
  HeartIcon,
  StethoscopeIcon,
  BookIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "ProstateWise is a men's health awareness initiative working to close prostate awareness gaps through community education, outreach, and better doctor conversations.",
};

const values = [
  {
    title: "Clarity over jargon",
    body: "We translate medical guidance into plain language any man can act on.",
  },
  {
    title: "Encouragement over fear",
    body: "We meet men with respect and calm, never scare tactics or shame.",
  },
  {
    title: "Responsibility over hype",
    body: "We never diagnose or overpromise. We point men toward qualified care.",
  },
];

const programs = [
  {
    icon: CalendarIcon,
    title: "Community awareness events",
    body: "Local talks and health-fair booths that make prostate awareness approachable and normal.",
  },
  {
    icon: UsersIcon,
    title: "Church & barbershop outreach",
    body: "Bringing trusted health conversations into the everyday places where men already gather.",
  },
  {
    icon: StethoscopeIcon,
    title: "Men's screening education",
    body: "Clear sessions on what screening is, who it is for, and how to talk to a doctor about it.",
  },
  {
    icon: BookIcon,
    title: "Downloadable guides",
    body: "Printable checklists and simple explainers families can share at home and at work.",
  },
  {
    icon: ShieldCheckIcon,
    title: "PSA reminder tools",
    body: "Gentle prompts to help men remember to revisit the screening conversation over time.",
  },
  {
    icon: HeartIcon,
    title: "Clinic & community partnerships",
    body: "Working alongside clinics and organizations to connect men with real, local care.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our mission"
        title="Closing the prostate awareness gap"
        description="ProstateWise is a men's health awareness initiative built on a simple belief: when men understand their risk early, they act early — and early action saves lives."
      />

      {/* Mission statement */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Our mission
            </p>
            <p className="mt-5 font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              &ldquo;ProstateWise exists to reduce late prostate disease and
              prostate cancer awareness gaps by helping men understand their
              risk, ask better medical questions, and take early action.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="tint" className="pt-0 sm:pt-0 lg:pt-0">
        <SectionHeading
          eyebrow="What guides us"
          title="Our values"
          description="Everything we build is shaped by three commitments to the men and families we serve."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="text-lg font-semibold text-navy-900">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-navy-600">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Future programs */}
      <Section>
        <SectionHeading
          eyebrow="Where we are headed"
          title="Programs we are building"
          description="ProstateWise is growing into a full awareness platform. These are the initiatives on our roadmap to reach more men where they are."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} interactive className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {p.body}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-800">
                  Coming soon
                </span>
              </Card>
            );
          })}
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer>
          <span className="font-semibold text-navy-900">
            An awareness initiative.
          </span>{" "}
          ProstateWise is an educational platform, not a medical provider. We do
          not diagnose, treat, or provide screening. Our role is to inform and
          encourage — and to connect men with licensed professionals who can.
        </Disclaimer>
      </Container>

      <CTABand
        title="Be part of the movement"
        description="The simplest way to support the mission is to use it and share it. Check your risk, then pass it on to a man who needs the nudge."
      />
    </>
  );
}
