/**
 * Central site configuration: brand strings, navigation, and metadata.
 * Keeping this in one place keeps the Navbar, Footer, and SEO in sync.
 */

export const siteConfig = {
  name: "ProstateWise",
  tagline: "Know Early. Check Early. Live Longer.",
  description:
    "ProstateWise is a men's prostate health and prostate cancer awareness platform. Understand your risk, learn the warning signs, and prepare for a confident conversation with your doctor about PSA screening.",
  url: "https://prostatewise.org",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

/** Primary navigation shown in the header and mobile menu. */
export const mainNav: NavLink[] = [
  {
    label: "About Prostate Health",
    href: "/about-prostate-health",
    description: "The prostate, BPH, prostatitis, and prostate cancer explained.",
  },
  {
    label: "Cancer Awareness",
    href: "/prostate-cancer-awareness",
    description: "Age, family history, ancestry, and why early action matters.",
  },
  {
    label: "Risk & Screening",
    href: "/risk-and-screening",
    description: "When to start the screening conversation with your doctor.",
  },
  {
    label: "PSA & Visit Prep",
    href: "/psa-and-visit-prep",
    description: "Understand PSA and get ready for your appointment.",
  },
  {
    label: "For Families",
    href: "/for-families",
    description: "Support and encourage the men you love.",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Trusted public health and medical sources.",
  },
];

/** Secondary links surfaced in the footer. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "About Prostate Health", href: "/about-prostate-health" },
      { label: "Prostate Cancer Awareness", href: "/prostate-cancer-awareness" },
      { label: "Risk & Screening Guide", href: "/risk-and-screening" },
      { label: "PSA & Doctor Visit Prep", href: "/psa-and-visit-prep" },
    ],
  },
  {
    title: "Take Action",
    links: [
      { label: "Check Your Risk", href: "/risk-check" },
      { label: "For Families", href: "/for-families" },
      { label: "Resources", href: "/resources" },
      { label: "Our Mission", href: "/mission" },
    ],
  },
];
