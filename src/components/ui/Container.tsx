import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centers content and applies the standard page gutter. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container-page", className)}>{children}</div>;
}
