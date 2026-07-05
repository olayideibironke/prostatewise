import { cn } from "@/lib/cn";
import { AlertIcon } from "./Icon";

type DisclaimerProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Reusable medical-safety notice. Reinforces that ProstateWise is
 * educational only and never provides a diagnosis.
 */
export function Disclaimer({ className, children }: DisclaimerProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-gold-200 bg-gold-50 p-4 text-sm leading-relaxed text-navy-700",
        className
      )}
      role="note"
    >
      <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" />
      <p>
        {children ?? (
          <>
            <span className="font-semibold text-navy-900">
              This is education, not diagnosis.
            </span>{" "}
            ProstateWise does not detect, confirm, or rule out prostate cancer.
            Use this information to prepare for a conversation with a licensed
            clinician about your personal risk and screening options.
          </>
        )}
      </p>
    </div>
  );
}
