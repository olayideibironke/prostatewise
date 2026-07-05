"use client";

import { Button } from "./Button";

/** Client-side print trigger for the checklist. Hidden when printing. */
export function PrintButton() {
  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      className="print:hidden"
      onClick={() => window.print()}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
      </svg>
      Print checklist
    </Button>
  );
}
