import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-navy-300">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              {siteConfig.tagline} ProstateWise helps men understand prostate
              health, learn the warning signs, and take early action with their
              doctor.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 transition-colors hover:text-sky-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/mission"
                  className="text-sm text-navy-300 transition-colors hover:text-sky-300"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/risk-check"
                  className="text-sm text-navy-300 transition-colors hover:text-sky-300"
                >
                  Interactive Risk Check
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-12 rounded-2xl border border-navy-800 bg-navy-900/60 p-5">
          <p className="text-xs leading-relaxed text-navy-300">
            <span className="font-semibold text-navy-100">
              Medical disclaimer:
            </span>{" "}
            ProstateWise is an educational and awareness resource only. It does
            not diagnose, detect, confirm, or rule out prostate cancer or any
            other condition, and it is not a substitute for advice from a
            licensed medical professional. The interactive risk check does not
            provide a diagnosis. Always talk with a qualified clinician about
            your personal health, screening options, and any symptoms you are
            experiencing. If you have a medical emergency, call your local
            emergency number right away.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-xs text-navy-400">
            &copy; {year} {siteConfig.name}. Educational content inspired by
            public health sources including the CDC, American Cancer Society,
            National Cancer Institute, NIDDK, and USPSTF.
          </p>
          <p className="text-xs text-navy-400">
            Built for awareness — not for diagnosis.
          </p>
        </div>
      </Container>
    </footer>
  );
}
