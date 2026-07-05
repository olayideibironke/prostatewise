import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icon";

type CTABandProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Reusable closing call-to-action used at the foot of most pages. */
export function CTABand({
  title = "Take the first step today",
  description = "A five-minute risk check can help you decide whether it is time to talk with your doctor about prostate screening.",
  primaryHref = "/risk-check",
  primaryLabel = "Check Your Risk",
  secondaryHref = "/psa-and-visit-prep",
  secondaryLabel = "Prepare for Your Visit",
}: CTABandProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center shadow-card sm:px-12 lg:py-20">
          <div className="absolute inset-0 hero-glow" aria-hidden="true" />
          <div
            className="absolute inset-0 grid-pattern opacity-30"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg" variant="primary">
                {primaryLabel}
                <ArrowRightIcon />
              </Button>
              <Button href={secondaryHref} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
