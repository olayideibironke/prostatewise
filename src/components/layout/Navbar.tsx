"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MenuIcon, CloseIcon } from "@/components/ui/Icon";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add a subtle shadow/blur once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Logo />

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-medical-50 text-medical-700"
                    : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/risk-check" size="sm" variant="primary">
              Check Your Risk
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy-700 hover:bg-navy-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top lg:hidden",
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "border-b border-navy-100 bg-white shadow-xl transition-all duration-300",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <Container>
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Mobile primary"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-medical-50 text-medical-700"
                      : "text-navy-700 hover:bg-navy-50"
                  )}
                >
                  {item.label}
                  {item.description && (
                    <span className="mt-0.5 block text-sm font-normal text-navy-500">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
              <div className="mt-3 px-1 pb-2">
                <Button href="/risk-check" size="lg" className="w-full">
                  Check Your Risk
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
