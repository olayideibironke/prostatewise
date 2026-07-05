import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-medical-600 text-white shadow-sm hover:bg-medical-700 hover:shadow-md focus-visible:ring-medical-500 active:bg-medical-800",
  secondary:
    "bg-white text-navy-800 ring-1 ring-inset ring-navy-200 hover:bg-navy-50 hover:ring-navy-300 focus-visible:ring-medical-500",
  ghost:
    "bg-transparent text-navy-700 hover:bg-navy-100 focus-visible:ring-medical-500",
  gold: "bg-gold-400 text-navy-950 shadow-sm hover:bg-gold-300 hover:shadow-md focus-visible:ring-gold-500 active:bg-gold-500",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Polymorphic button. Renders a Next.js Link when `href` is supplied,
 * otherwise a native <button>. Keeps styling consistent across the site.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
