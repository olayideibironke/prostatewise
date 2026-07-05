import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  /** Background tone preset. */
  tone?: "white" | "tint" | "navy";
};

const tones = {
  white: "bg-white",
  tint: "bg-navy-50/60",
  navy: "bg-navy-900 text-navy-100",
};

/** Vertical rhythm wrapper for page sections. */
export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Consistent eyebrow + title + description heading block. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-sky-300" : "text-medical-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl",
          tone === "dark" ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-navy-200" : "text-navy-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
