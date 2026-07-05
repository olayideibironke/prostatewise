import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

/**
 * Lightweight inline SVG icon set (stroke-based, currentColor).
 * Kept local so the project ships zero icon dependencies.
 */

function Svg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      {children}
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 5.5v5.2c0 4.3 2.9 7.1 7 9 4.1-1.9 7-4.7 7-9V5.5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </Svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 20s-7-4.5-9.2-9C1.3 8 3 4.5 6.5 4.5c2 0 3.5 1.2 4.3 2.5.8-1.3 2.3-2.5 4.3-2.5C18.6 4.5 20.3 8 19.2 11c-2.2 4.5-7.2 9-7.2 9Z" />
    </Svg>
  );
}

export function StethoscopeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 3v5a4 4 0 0 0 8 0V3" />
      <path d="M6 3H4m10 0h2" />
      <path d="M10 16v1a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="13" r="2" />
    </Svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13A4 4 0 0 1 16 11" />
    </Svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a3 3 0 0 1 6 0" />
      <path d="M9 11h6M9 15h4" />
    </Svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-3m4 3V9m4 7v-5" />
    </Svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M18 3v16" />
    </Svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Svg className={cn("h-5 w-5", className)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={cn("h-5 w-5", className)}>
      <path d="m5 12 5 5L20 7" />
    </Svg>
  );
}

export function AlertIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 9v4m0 4h.01" />
      <path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </Svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6.6 3.5 9 4l1 3.5-1.6 1.4a12 12 0 0 0 5.7 5.7L15.5 14l3.5 1 .5 2.4a2 2 0 0 1-2 2.4A15 15 0 0 1 4.2 5.5a2 2 0 0 1 2.4-2Z" />
    </Svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <Svg className={cn("h-4 w-4", className)}>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </Svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <Svg className={cn("h-5 w-5", className)}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}
