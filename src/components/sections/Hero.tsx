import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "@/components/ui/Icon";

const heroPoints = [
  "Understand your personal risk factors",
  "Learn the warning signs that deserve attention",
  "Prepare for a confident talk about PSA screening",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          {/* Left: message */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/60 px-4 py-1.5 text-sm font-medium text-sky-300">
              <ShieldCheckIcon className="h-4 w-4" />
              Men&apos;s health awareness, made clear
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Know Early.{" "}
              <span className="text-sky-400">Check Early.</span>{" "}
              Live Longer.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              Prostate cancer is one of the most common cancers in men — and one
              of the most treatable when caught early. ProstateWise helps you
              understand your risk and take action before symptoms ever appear.
            </p>

            <ul className="mt-8 space-y-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-navy-100">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-500/20 text-sky-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.98rem]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/risk-check" size="lg" variant="primary">
                Check Your Risk
                <ArrowRightIcon />
              </Button>
              <Button
                href="/about-prostate-health"
                size="lg"
                variant="secondary"
              >
                Learn About Prostate Health
              </Button>
            </div>

            <p className="mt-6 text-sm text-navy-400">
              Educational only — ProstateWise does not diagnose. It helps you
              prepare to talk with a doctor.
            </p>
          </div>

          {/* Right: visual stat panel */}
          <div className="animate-fade-in">
            <div className="relative rounded-3xl border border-navy-700/60 bg-navy-900/50 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-medical-500/20 text-sky-300">
                  <ShieldCheckIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                    Why it matters
                  </p>
                  <p className="text-sm text-navy-300">The case for early awareness</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <MiniStat value="1 in 8" label="Men will be diagnosed with prostate cancer in their lifetime" />
                <MiniStat value="~99%" label="5-year survival when found early and still localized" />
                <MiniStat value="60+" label="Most diagnoses occur after age 65, but risk rises earlier" />
                <MiniStat value="Often silent" label="Early prostate cancer usually causes no symptoms at all" />
              </div>

              <p className="mt-6 text-xs leading-relaxed text-navy-400">
                Figures reflect widely reported public health estimates from
                sources such as the American Cancer Society and National Cancer
                Institute. See our Resources page for details.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-navy-700/50 bg-navy-950/40 p-4">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm leading-snug text-navy-300">{label}</p>
    </div>
  );
}
