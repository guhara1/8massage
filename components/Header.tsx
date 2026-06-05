"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/navigation";

function isActive(pathname: string, item: { href: string; children: { href: string }[] }) {
  const base = item.href.split("#")[0];
  if (pathname === base) return true;
  return item.children.some((c) => {
    const childBase = c.href.split("#")[0];
    return childBase !== "/" && pathname.startsWith(childBase);
  });
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-navy-800"
          aria-label="8 마사지 홈으로 이동"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-gold-400">
            8
          </span>
          <span>
            8 <span className="text-gold-600">마사지</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:block" aria-label="주요 메뉴">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(pathname, item);
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-gold-600"
                        : "text-ink-700 hover:text-navy-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-lg border border-navy-100 bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-navy-50 hover:text-navy-800"
                          >
                            {child.label}
                          </Link>
                          {child.anchors ? (
                            <ul className="mb-1 ml-3 border-l border-navy-100 pl-2">
                              {child.anchors.map((a) => (
                                <li key={a.href}>
                                  <Link
                                    href={a.href}
                                    className="block rounded-md px-2 py-1 text-xs text-ink-700/80 hover:bg-navy-50 hover:text-navy-800"
                                  >
                                    {a.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile accordion menu */}
      {mobileOpen ? (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="divide-y divide-navy-100">
            {NAV.map((item) => {
              const expanded = openGroup === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-ink-800"
                    aria-expanded={expanded}
                    onClick={() => setOpenGroup(expanded ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded ? (
                    <ul className="bg-navy-50/40 pb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-6 py-2 text-sm text-ink-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                          {child.anchors ? (
                            <ul className="ml-4 border-l border-navy-100 pl-2">
                              {child.anchors.map((a) => (
                                <li key={a.href}>
                                  <Link
                                    href={a.href}
                                    className="block px-4 py-1.5 text-xs text-ink-700/80"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {a.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
