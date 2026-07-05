import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { RiskCheck } from "@/components/risk-check/RiskCheck";

export const metadata: Metadata = {
  title: "Interactive Risk Check",
  description:
    "A private, five-minute prostate awareness questionnaire. Understand your risk factors and get a responsible next step — this tool is educational and does not diagnose.",
};

export default function RiskCheckPage() {
  return (
    <>
      <PageHeader
        eyebrow="Interactive risk check"
        title="Understand Your Risk"
        description="Answer a few private questions to see which prostate cancer risk factors apply to you — and what a sensible next step could be. This is awareness, not diagnosis."
      />
      <Section tone="tint">
        <RiskCheck />
      </Section>
    </>
  );
}
