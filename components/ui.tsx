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
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-700 focus-visible:outline-navy-800",
    secondary:
      "bg-gold-500 text-navy-900 hover:bg-gold-400 focus-visible:outline-gold-500",
    ghost:
      "border border-navy-100 bg-white text-navy-800 hover:bg-navy-50 focus-visible:outline-navy-800",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`}
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
    <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-navy-800">{region}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {areas.map((a) => (
          <li
            key={a}
            className="rounded-full bg-navy-50 px-2.5 py-1 text-xs text-navy-700"
          >
            {a}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500"
      >
        {region} 안내 보기
        <span aria-hidden="true">→</span>
      </Link>
    </article>
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
    <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-navy-800">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500"
      >
        {title} 보기
        <span aria-hidden="true">→</span>
      </Link>
    </article>
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
    <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {category ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
          {category}
        </p>
      ) : null}
      <h3 className="text-base font-semibold leading-snug text-navy-800">
        <Link href={href} className="hover:text-gold-600">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{excerpt}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500"
      >
        글 읽기
        <span aria-hidden="true">→</span>
      </Link>
    </article>
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
      className="block rounded-xl border border-navy-100 bg-white p-4 transition-colors hover:border-gold-400 hover:bg-navy-50/40"
    >
      <span className="block text-sm font-semibold text-navy-800">{title}</span>
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
    <aside className="rounded-2xl border border-gold-400/50 bg-gold-100/40 p-6">
      <h3 className="flex items-center gap-2 text-base font-semibold text-navy-800">
        <span aria-hidden="true">🛡️</span>
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-ink-700">{children}</div>
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
    <section className="rounded-2xl bg-navy-800 px-6 py-10 text-center sm:px-10">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy-100/85">
        {description}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink href="/booking-inquiry/" variant="secondary">
          예약 문의하기
        </ButtonLink>
        <ButtonLink href="/service-area/" variant="ghost">
          지역별 가능 범위 확인하기
        </ButtonLink>
      </div>
    </section>
  );
}

/* ---------- Page section wrapper & prose ---------- */

export function PageHero({
  breadcrumb,
  title,
  description,
}: {
  breadcrumb: ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-navy-100 bg-navy-50/50">
      <Container className="py-8 sm:py-12">
        <div className="mb-4">{breadcrumb}</div>
        <h1 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink-700 [&_h2]:mt-10 [&_h2]:scroll-mt-28 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-900 sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink-900 [&_strong]:font-semibold [&_strong]:text-ink-800 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5">
      {children}
    </div>
  );
}
