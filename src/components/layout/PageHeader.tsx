import Link from "next/link";
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** Consistent hero band for interior pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-4">
          <Link
            href="/"
            className="text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
          >
            Home
          </Link>
          <span className="mx-2 text-navy-500">/</span>
          <span className="text-sm text-navy-300">{title}</span>
        </nav>

        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
