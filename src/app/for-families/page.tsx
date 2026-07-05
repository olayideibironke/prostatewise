import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import { HeartIcon, UsersIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "For Families",
  description:
    "How wives, partners, children, siblings, and friends can encourage the men they love to take prostate health seriously — without shame, and why family history matters.",
};

const encourageDos = [
  "Lead with care: “I love you and I want you around for a long time.”",
  "Keep it light and normal — make it a routine health topic, not a crisis.",
  "Offer to help book the appointment or go along for support.",
  "Share your own check-ups so it feels mutual, not one-sided.",
  "Give it time; plant the seed and revisit gently if needed.",
];

const encourageDonts = [
  "Do not use fear, guilt, or nagging — it usually backfires.",
  "Do not tease or make him feel embarrassed about the exam.",
  "Do not diagnose or assume the worst out loud.",
  "Do not make it a one-time argument; make it an open door.",
];

const starters = [
  {
    audience: "For a partner or spouse",
    line: "“I read that men should start talking to their doctor about prostate screening around 50 — sooner if it runs in the family. Can we look into it together?”",
  },
  {
    audience: "For an adult child to a parent",
    line: "“Dad, I want you healthy for the grandkids. Would you ask your doctor about a prostate check at your next visit?”",
  },
  {
    audience: "For a sibling or friend",
    line: "“I just did a quick prostate risk check online — took five minutes. Thought of you. Want me to send you the link?”",
  },
];

export default function ForFamiliesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Check on the men you love"
        title="For Families"
        description="The people closest to a man often make the difference in whether he takes action. Here is how to encourage him with warmth, respect, and zero shame."
      />

      {/* Why family matters */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="You have more influence than you think"
              title="Why your encouragement matters"
            />
            <p className="mt-6 prose-content">
              Many men delay health checks — not because they do not care, but
              because they are busy, uneasy, or simply have not been prompted.
              A caring nudge from someone they trust is often the thing that
              finally gets them to pick up the phone.
            </p>
            <p className="prose-content">
              You do not need medical expertise. You just need to open the door,
              keep it open, and make it easy for him to walk through.
            </p>
          </div>
          <Card className="bg-gradient-to-br from-navy-50 to-sky-50">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-100 text-medical-700">
              <UsersIcon />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-navy-900">
              Family history is shared history
            </h3>
            <p className="mt-3 leading-relaxed text-navy-700">
              Prostate cancer risk can run in families. If a father, brother, or
              son has been diagnosed, the other men in the family may be at
              higher risk — and may need to start screening conversations
              earlier. Sharing family health history is one of the most useful
              things a family can do together.
            </p>
            <InfoCallout tone="info" className="mt-5">
              <p>
                A history of breast or ovarian cancer in the family (linked to
                BRCA gene changes) can also raise prostate cancer risk. It is
                worth mentioning to the doctor.
              </p>
            </InfoCallout>
          </Card>
        </div>
      </Section>

      {/* Do / Don't */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Encourage without shame"
          title="How to bring it up the right way"
          description="Tone matters as much as the message. The goal is to make him feel supported, not cornered."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <HeartIcon />
              </span>
              <h3 className="text-xl font-semibold text-navy-900">
                Do this
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {encourageDos.map((d) => (
                <li key={d} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <HeartIcon />
              </span>
              <h3 className="text-xl font-semibold text-navy-900">
                Gently avoid
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {encourageDonts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Conversation starters */}
      <Section>
        <SectionHeading
          eyebrow="Not sure what to say?"
          title="Conversation starters that work"
          description="Borrow these, adapt them to your voice, and start the conversation today."
        />
        <div className="mt-12 space-y-5">
          {starters.map((s) => (
            <Card key={s.audience} className="lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-medical-600">
                {s.audience}
              </p>
              <p className="mt-3 text-xl leading-relaxed text-navy-800">
                {s.line}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <InfoCallout tone="positive" title="Check on the men you love">
            <p>
              A five-minute conversation could add years to a life. Whether it
              is your husband, father, brother, or friend — reaching out is an
              act of love. You do not have to have all the answers. You just
              have to care enough to ask.
            </p>
          </InfoCallout>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer />
      </Container>

      <CTABand
        title="Send him the risk check"
        description="Share the interactive risk check with the man you care about. It is quick, private, and a gentle first step toward a doctor conversation."
        primaryLabel="Open the Risk Check"
      />
    </>
  );
}
