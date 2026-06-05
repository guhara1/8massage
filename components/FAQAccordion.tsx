"use client";

import { useState } from "react";

export type FAQ = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
            >
              <span className="text-base font-medium text-ink-800">{item.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`shrink-0 text-gold-600 transition-transform ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded ? (
              <div className="px-5 pb-5 text-base leading-relaxed text-ink-700">{item.a}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
