import Link from "next/link";
import Container from "./Container";
import { FOOTER_GROUPS } from "@/lib/navigation";
import { SITE } from "@/lib/site";
import { PRICE_SUMMARY } from "@/lib/pricing";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-navy-950 text-navy-100">
      <div className="bg-noise absolute inset-0 opacity-40" aria-hidden="true" />
      <span className="absolute inset-x-0 top-0 h-px bg-gold-line" aria-hidden="true" />

      {/* 전 페이지 공통 요금 안내 스트립 */}
      <Container className="relative">
        <Link
          href="/price/"
          className="flex flex-col items-center justify-center gap-1.5 border-b border-white/10 py-5 text-center transition-colors hover:text-white sm:flex-row sm:gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            요금 안내
          </span>
          <span className="text-sm font-medium text-navy-100/90">{PRICE_SUMMARY}</span>
          <span className="text-sm text-gold-300" aria-hidden="true">→</span>
        </Link>
      </Container>

      <Container className="relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="8 마사지 홈">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-base font-bold text-gold-300 ring-1 ring-white/10">
                8
              </span>
              <span className="text-[17px] font-bold tracking-tighter text-white">
                8 <span className="text-gradient-gold">마사지</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100/70">
              서울·경기·인천·부산 지역의 건전한 방문 케어 정보를 과장 없이 투명하게 안내합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h2 className="mb-3 text-sm font-semibold text-white">{group.title}</h2>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-navy-100/65 transition-colors hover:text-gold-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/privacy/" className="text-navy-100/70 hover:text-gold-300">개인정보처리방침</Link>
            <Link href="/terms/" className="text-navy-100/70 hover:text-gold-300">이용약관</Link>
            <Link href="/business-info/" className="text-navy-100/70 hover:text-gold-300">사업자 정보</Link>
            <Link href="/safety/prohibited-services/" className="text-navy-100/70 hover:text-gold-300">제공하지 않는 서비스</Link>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-navy-100/55">
            {SITE.name}는 건전한 방문 케어 정보를 안내하며, 불법 서비스 및 사전 합의되지 않은
            요청은 제공하지 않습니다. 본 사이트의 모든 안내는 합법적이고 건전한 컨디션 관리 및
            근육 이완 케어 정보를 목적으로 합니다.
          </p>
          <p className="mt-4 text-xs text-navy-100/45">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
