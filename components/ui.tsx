import { ReactNode } from "react";
import Link from "next/link";
import Container from "./Container";

/* ---------- Buttons ---------- */

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-gradient-to-br from-navy-700 to-navy-900 text-white shadow-card hover:-translate-y-0.5 focus-visible:outline-navy-800",
    secondary:
      "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 shadow-glow hover:-translate-y-0.5 focus-visible:outline-gold-500",
    ghost:
      "border border-navy-200/70 bg-white/70 text-navy-900 hover:bg-white hover:-translate-y-0.5 focus-visible:outline-navy-800",
    light:
      "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ---------- Region / Service / Magazine cards ---------- */

export function RegionCard({
  region,
  href,
  description,
  areas,
}: {
  region: string;
  href: string;
  description: string;
  areas: string[];
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />
        <h3 className="text-lg font-bold tracking-tight text-navy-900">{region}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {areas.map((a) => (
            <li
              key={a}
              className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700"
            >
              {a}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">
          {region} 안내 보기
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </article>
    </Link>
  );
}

export function ServiceCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
        <h3 className="text-lg font-bold tracking-tight text-navy-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">
          {title} 보기
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </article>
    </Link>
  );
}

export function MagazineCard({
  title,
  href,
  excerpt,
  category,
}: {
  title: string;
  href: string;
  excerpt: string;
  category?: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
        {category ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
            {category}
          </p>
        ) : null}
        <h3 className="text-base font-bold leading-snug text-navy-900 group-hover:text-navy-700">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">
          글 읽기
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </article>
    </Link>
  );
}

export function InternalLinkCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-navy-100 bg-white p-4 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card"
    >
      <span className="flex items-center justify-between gap-2 text-sm font-semibold text-navy-900">
        {title}
        <span aria-hidden="true" className="text-gold-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
      <span className="mt-1 block text-sm leading-relaxed text-ink-700">{description}</span>
    </Link>
  );
}

/* ---------- Notices & CTA ---------- */

export function SafetyNoticeBox({
  title = "건전한 방문 케어 안내",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-gold-200 bg-gradient-to-br from-gold-100/70 to-cream-100 p-6">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-200/40 blur-2xl" aria-hidden="true" />
      <h3 className="flex items-center gap-2 text-base font-bold text-navy-900">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-navy-900 text-xs text-gold-300" aria-hidden="true">
          ✓
        </span>
        {title}
      </h3>
      <div className="relative mt-2 text-sm leading-relaxed text-ink-700">{children}</div>
    </aside>
  );
}

export function ContactCTA({
  title = "예약 가능 여부가 궁금하신가요?",
  description = "원하는 지역과 시간을 알려주시면 가능 여부와 안내사항을 확인해 드립니다. 상담 과정에서 불필요한 개인정보는 요청하지 않습니다.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-navy-900 bg-hero-radial px-6 py-12 text-center sm:px-10 sm:py-14">
      <div className="bg-noise absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative">
        <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gold-200">
          8 마사지 · 방문 케어 안내
        </p>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy-100/85">
          {description}
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/booking-inquiry/" variant="secondary">
            예약 문의하기
          </ButtonLink>
          <ButtonLink href="/service-area/" variant="light">
            지역별 가능 범위 확인하기
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page hero & prose ---------- */

export function PageHero({
  breadcrumb,
  title,
  description,
  eyebrow,
}: {
  breadcrumb: ReactNode;
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 bg-hero-radial">
      <div className="bg-noise absolute inset-0 opacity-50" aria-hidden="true" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-gold-line" aria-hidden="true" />
      <Container className="relative py-10 sm:py-14">
        <div className="mb-5 [&_a]:text-navy-100/70 [&_a:hover]:text-gold-200 [&_span]:text-navy-100/40 [&_[aria-current]]:text-white">
          {breadcrumb}
        </div>
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold tracking-wide text-gold-300">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tighter text-white sm:text-3xl lg:text-[2.6rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-100/80">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="editorial-count max-w-[42rem] space-y-5 text-[16px] leading-[1.9] text-ink-700 sm:text-[17px] [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-[1.6rem] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tighter [&_h2]:text-navy-900 sm:[&_h2]:text-[2rem] [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy-900 [&_strong]:font-semibold [&_strong]:text-navy-800 [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5 [&_ul]:marker:text-gold-500 [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-5 [&_ol]:marker:font-semibold [&_ol]:marker:text-gold-600 [&_a]:font-medium [&_a]:text-navy-800 [&_a]:underline [&_a]:decoration-gold-400 [&_a]:decoration-1 [&_a]:underline-offset-4 [&_a:hover]:decoration-gold-600">
      {children}
    </div>
  );
}
