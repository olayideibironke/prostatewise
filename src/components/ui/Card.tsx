import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Adds a subtle lift on hover — use for interactive/linked cards. */
  interactive?: boolean;
};

/** Elevated content surface used across the site. */
export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-7",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-medical-200 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
