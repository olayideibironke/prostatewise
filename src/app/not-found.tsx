import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-6xl font-bold text-sky-400">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-lg text-lg text-navy-200">
          The page you were looking for may have moved. Let&apos;s get you back
          to information that can help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Return home
          </Button>
          <Button href="/risk-check" size="lg" variant="secondary">
            Check your risk
          </Button>
        </div>

        <div className="mt-12 w-full max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-400">
            Explore instead
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-navy-700 bg-navy-900/50 px-4 py-2 text-sm text-navy-200 transition-colors hover:border-medical-500 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
