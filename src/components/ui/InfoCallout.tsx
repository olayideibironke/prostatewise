import { cn } from "@/lib/cn";
import { AlertIcon, CheckIcon, ShieldCheckIcon } from "./Icon";

type Tone = "info" | "positive" | "caution";

const toneStyles: Record<
  Tone,
  { wrap: string; icon: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  info: {
    wrap: "border-medical-200 bg-medical-50",
    icon: "text-medical-700",
    Icon: ShieldCheckIcon,
  },
  positive: {
    wrap: "border-sky-200 bg-sky-50",
    icon: "text-sky-700",
    Icon: CheckIcon,
  },
  caution: {
    wrap: "border-gold-200 bg-gold-50",
    icon: "text-gold-700",
    Icon: AlertIcon,
  },
};

type InfoCalloutProps = {
  tone?: Tone;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

/** Highlighted note box for tips, cautions, and key facts within content. */
export function InfoCallout({
  tone = "info",
  title,
  children,
  className,
}: InfoCalloutProps) {
  const { wrap, icon, Icon } = toneStyles[tone];
  return (
    <div className={cn("rounded-2xl border p-5 sm:p-6", wrap, className)}>
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 flex-shrink-0", icon)} />
        <div className="text-navy-700">
          {title && (
            <p className="mb-1 font-semibold text-navy-900">{title}</p>
          )}
          <div className="leading-relaxed [&>p+p]:mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
