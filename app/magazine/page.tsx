import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { PageHero, MagazineCard, ContactCTA } from "@/components/ui";
import { InternalLinkCard } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES, ARTICLES } from "@/lib/magazine";

export const metadata: Metadata = pageMetadata({
  title: "매거진 | 출장마사지 정보·이용 팁 | 8 마사지",
  description:
    "출장마사지 가이드, 지역별 이용 팁, 피로 관리, 스트레칭, 위생·안전, 예약 FAQ까지. 8 마사지가 정보성 콘텐츠로 방문 케어를 안내합니다.",
  path: "/magazine/",
});

export default function MagazineHome() {
  const latest = [...ARTICLES].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ name: "매거진", path: "/magazine/" }]} />}
        title="8 마사지 매거진"
        description="예약 전에 알아두면 좋은 정보부터 지역별 이용 팁, 위생·안전 가이드까지. 검색어 반복이 아니라 실제 도움이 되는 정보를 담았습니다."
      />
      <Container className="py-12">
        <SectionHeading title="카테고리" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <InternalLinkCard
              key={c.href}
              title={c.title}
              href={c.href}
              description={c.description}
            />
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading title="최신 글" description="가장 최근에 올라온 글부터 확인하세요." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <MagazineCard
                key={a.href}
                title={a.title}
                href={a.href}
                excerpt={a.excerpt}
                category={a.category}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
