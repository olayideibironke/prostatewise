import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Use light text for dark backgrounds (footer, mobile overlay). */
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * ProstateWise brand mark: a shield (protection/health) enclosing a
 * check-pulse motif (early check + vitality). Pure SVG, no image assets.
 */
export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-900";
  const accentColor = variant === "light" ? "text-sky-300" : "text-medical-600";

  return (
    <Link
      href="/"
      aria-label="ProstateWise home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M20 3.5 6 8.2v11.1c0 8.1 5.6 12.9 14 17.2 8.4-4.3 14-9.1 14-17.2V8.2L20 3.5Z"
            className={cn(
              variant === "light" ? "fill-medical-500/25" : "fill-medical-50"
            )}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{ color: "rgb(27,99,240)" }}
          />
          <path
            d="M11 21h4l2.5-6 4 12 2.5-6H29"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={variant === "light" ? "text-sky-300" : "text-medical-600"}
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-xl font-bold tracking-tight",
              wordColor
            )}
          >
            Prostate<span className={accentColor}>Wise</span>
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.18em]",
              variant === "light" ? "text-navy-300" : "text-navy-400"
            )}
          >
            Men&apos;s Health Awareness
          </span>
        </span>
      )}
    </Link>
  );
}
