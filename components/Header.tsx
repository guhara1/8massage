"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/navigation";
import { SITE } from "@/lib/site";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // 라우트 변경 시 포커스를 해제해 hover/focus 드롭다운이 열린 채 남는 문제 방지
  useEffect(() => {
    (document.activeElement as HTMLElement | null)?.blur?.();
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-navy-100/70 shadow-[0_4px_24px_-16px_rgba(10,17,32,0.4)]"
          : "border-b border-transparent bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="8 마사지 홈으로 이동"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-base font-bold text-gold-300 shadow-inset ring-1 ring-white/10">
            8
          </span>
          <span className="text-[17px] font-bold tracking-tighter text-navy-900">
            8 <span className="text-gradient-gold">마사지</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:block" aria-label="주요 메뉴">
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = isActive(pathname, item);
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => e.currentTarget.blur()}
                    className={`relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-navy-900" : "text-ink-600 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 ease-premium ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-2xl border border-navy-100 bg-white/95 p-2 shadow-lift backdrop-blur">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={(e) => e.currentTarget.blur()}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                          >
                            {child.label}
                          </Link>
                          {child.anchors ? (
                            <ul className="mb-1 ml-3 border-l border-navy-100 pl-2">
                              {child.anchors.map((a) => (
                                <li key={a.href}>
                                  <Link
                                    href={a.href}
                                    onClick={(e) => e.currentTarget.blur()}
                                    className="block rounded-lg px-2 py-1 text-xs text-ink-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.contact.phoneTel}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-gold-600"
          >
            <span aria-hidden="true">📞</span>
            {SITE.contact.phone}
          </a>
          <Link
            href="/booking-inquiry/"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            예약 문의
            <span aria-hidden="true" className="text-gold-300">→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy-100 bg-cream-50 lg:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="divide-y divide-navy-100/70 px-2 py-2">
            {NAV.map((item) => {
              const expanded = openGroup === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-[15px] font-semibold text-ink-800"
                    aria-expanded={expanded}
                    onClick={() => setOpenGroup(expanded ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`text-gold-600 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded ? (
                    <ul className="mb-2 ml-1 space-y-0.5 rounded-2xl bg-white p-2 shadow-card">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                          {child.anchors ? (
                            <ul className="ml-3 border-l border-navy-100 pl-2">
                              {child.anchors.map((a) => (
                                <li key={a.href}>
                                  <Link
                                    href={a.href}
                                    className="block px-3 py-2 text-xs text-ink-600"
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
