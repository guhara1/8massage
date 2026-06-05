import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { PageHero, ContactCTA } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "공지사항 | 8 마사지 고객센터",
  description:
    "8 마사지의 운영 안내와 공지사항입니다. 서비스 운영 원칙, 위생·안전 기준, 예약 관련 변경 사항 등을 안내합니다.",
  path: "/notice/",
});

const notices = [
  {
    date: "2026-03-20",
    title: "건전한 방문 케어 운영 원칙 안내",
    body: "8 마사지는 성적·불법 서비스 및 사전에 합의되지 않은 요청을 제공하지 않습니다. 건전한 방문 케어 정보만을 안내한다는 원칙을 다시 한 번 안내드립니다.",
  },
  {
    date: "2026-02-28",
    title: "위생·안전 기준 점검 안내",
    body: "손 위생과 용품 청결, 고객 공간 존중을 포함한 위생 기준을 정기적으로 점검하고 있습니다. 관련 내용은 위생 관리 기준 페이지에서 확인하실 수 있습니다.",
  },
  {
    date: "2026-02-10",
    title: "예약 문의 안내 채널 운영 안내",
    body: "예약 가능 여부는 예약 문의 페이지를 통해 확인하실 수 있습니다. 불필요한 개인정보는 요청하지 않으며, 받은 정보는 안내 목적에만 사용합니다.",
  },
  {
    date: "2026-01-15",
    title: "매거진 정보성 콘텐츠 발행 안내",
    body: "출장마사지 이용에 도움이 되는 정보성 콘텐츠를 매거진을 통해 제공하고 있습니다. 지역별 이용 팁과 위생·안전 가이드를 참고해 주세요.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ name: "공지사항", path: "/notice/" }]} />}
        title="공지사항"
        description="8 마사지의 운영 안내와 변경 사항을 알려 드립니다."
      />
      <Container className="py-12">
        <SectionHeading title="안내 목록" />
        <ul className="divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
          {notices.map((n) => (
            <li key={n.title} className="p-5">
              <p className="text-xs text-ink-700/70">
                <time dateTime={n.date}>{n.date}</time>
              </p>
              <h2 className="mt-1 text-base font-semibold text-navy-800">{n.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{n.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
