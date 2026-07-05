import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTABand } from "@/components/sections/CTABand";
import { ExternalLinkIcon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Trusted public health and medical resources for prostate health and prostate cancer, including the CDC, American Cancer Society, National Cancer Institute, NIDDK, and USPSTF.",
};

type Resource = {
  name: string;
  org: string;
  description: string;
  href: string;
};

const resources: Resource[] = [
  {
    name: "Prostate Cancer Basics",
    org: "Centers for Disease Control and Prevention (CDC)",
    description:
      "Government overview of prostate cancer, risk factors, symptoms, and screening from the U.S. public health agency.",
    href: "https://www.cdc.gov/prostate-cancer/",
  },
  {
    name: "Prostate Cancer Information",
    org: "American Cancer Society (ACS)",
    description:
      "Detailed, regularly updated guidance on prostate cancer risk, screening recommendations, diagnosis, and treatment options.",
    href: "https://www.cancer.org/cancer/types/prostate-cancer.html",
  },
  {
    name: "Prostate Cancer — PDQ & Overviews",
    org: "National Cancer Institute (NCI)",
    description:
      "Evidence-based summaries on prostate cancer screening, prevention, and treatment from the U.S. National Institutes of Health.",
    href: "https://www.cancer.gov/types/prostate",
  },
  {
    name: "Prostate Problems (BPH & Prostatitis)",
    org: "NIDDK — National Institutes of Health",
    description:
      "Plain-language information on non-cancerous prostate conditions such as enlarged prostate and prostatitis.",
    href: "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems",
  },
  {
    name: "Prostate Cancer Screening Recommendation",
    org: "U.S. Preventive Services Task Force (USPSTF)",
    description:
      "The USPSTF's evidence-based recommendation on PSA-based screening and shared decision-making for men.",
    href: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening",
  },
  {
    name: "Prostate Cancer Foundation",
    org: "Prostate Cancer Foundation (PCF)",
    description:
      "A leading nonprofit focused on prostate cancer research, patient resources, and awareness for higher-risk communities.",
    href: "https://www.pcf.org/",
  },
  {
    name: "Urology Care Foundation",
    org: "American Urological Association (AUA)",
    description:
      "Patient-focused education from the official foundation of the American Urological Association on prostate health.",
    href: "https://www.urologyhealth.org/urology-a-z/p/prostate-cancer",
  },
  {
    name: "Prostate Cancer Overview",
    org: "MedlinePlus — U.S. National Library of Medicine",
    description:
      "A trusted, easy-to-read health information hub linking to government and medical sources on prostate cancer.",
    href: "https://medlineplus.gov/prostatecancer.html",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Go deeper with trusted sources"
        title="Resources"
        description="ProstateWise summarizes guidance from reputable public health and medical organizations. Use these official sources to learn more and to verify anything you read here."
      />

      <Section>
        <SectionHeading
          eyebrow="Official & public health sources"
          title="Where to learn more"
          description="Every link below leads to an established medical or public health organization. Links open in a new tab."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2"
            >
              <Card interactive className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-medical-600">
                      {r.org}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-navy-900">
                      {r.name}
                    </h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500 transition-colors group-hover:bg-medical-50 group-hover:text-medical-600">
                    <ExternalLinkIcon />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                  {r.description}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="tint" className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy-900">
            A note on sources
          </h2>
          <p className="mt-4 leading-relaxed text-navy-600">
            ProstateWise is not affiliated with these organizations. We link to
            them because they are widely trusted, evidence-based, and freely
            available to the public. Medical guidance can change over time, so
            always confirm details with a current official source and your own
            clinician.
          </p>
        </div>
      </Section>

      <Container className="pb-4">
        <Disclaimer />
      </Container>

      <CTABand />
    </>
  );
}
