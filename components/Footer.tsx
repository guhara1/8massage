import Link from "next/link";
import Container from "./Container";
import { FOOTER_GROUPS } from "@/lib/navigation";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-navy-100 bg-navy-900 text-navy-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-3 text-sm font-semibold text-white">{group.title}</h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-100/80 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/privacy/" className="text-navy-100/80 hover:text-gold-400">
              개인정보처리방침
            </Link>
            <Link href="/terms/" className="text-navy-100/80 hover:text-gold-400">
              이용약관
            </Link>
            <Link href="/business-info/" className="text-navy-100/80 hover:text-gold-400">
              사업자 정보
            </Link>
            <Link href="/safety/prohibited-services/" className="text-navy-100/80 hover:text-gold-400">
              제공하지 않는 서비스
            </Link>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-navy-100/70">
            {SITE.name}는 건전한 방문 케어 정보를 안내하며, 불법 서비스 및 사전 합의되지 않은
            요청은 제공하지 않습니다. 본 사이트의 모든 안내는 합법적이고 건전한 컨디션 관리 및
            근육 이완 케어 정보를 목적으로 합니다.
          </p>
          <p className="mt-4 text-xs text-navy-100/60">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
