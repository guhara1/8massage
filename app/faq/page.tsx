import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { PageHero, ContactCTA } from "@/components/ui";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "자주 묻는 질문(FAQ) | 8 마사지",
  description:
    "출장마사지 예약, 가능 지역, 당일 예약, 요금, 위생, 제공하지 않는 서비스까지. 8 마사지에 자주 묻는 질문을 한곳에 모았습니다.",
  path: "/faq/",
});

const groups: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "예약",
    items: [
      {
        q: "출장마사지 예약은 어떻게 진행되나요?",
        a: "지역 확인 → 가능 시간 상담 → 서비스 선택 → 예약 정보 확인 → 방문 전 안내 순으로 진행됩니다. 예약 문의 페이지에서 희망 지역과 시간을 남겨 주시면 가능 여부를 안내해 드립니다.",
      },
      {
        q: "당일 예약이 가능한가요?",
        a: "시간대와 지역 상황에 따라 가능한 경우가 있습니다. 다만 이동 시간과 예약 현황에 따라 어려울 수 있으므로, 가능한 한 빨리 문의하시면 조율이 수월합니다.",
      },
      {
        q: "예약을 변경하거나 취소할 수 있나요?",
        a: "가능합니다. 일정이 바뀌면 가능한 한 빨리 알려 주세요. 무리한 위약을 강요하지 않으며, 자세한 기준은 취소·변경 안내 페이지에서 확인하실 수 있습니다.",
      },
    ],
  },
  {
    heading: "지역",
    items: [
      {
        q: "어느 지역까지 가능한가요?",
        a: "현재 서울·경기·인천·부산 권역을 중심으로 안내합니다. 같은 광역권 안에서도 세부 위치와 시간대에 따라 가능 여부가 달라질 수 있어 예약 전 확인을 권장합니다.",
      },
      {
        q: "세부 지역 페이지는 왜 없나요?",
        a: "강남·성남·송도·해운대 등 세부 지역은 각 광역 지역 페이지의 권역별 섹션에서 안내합니다. 지역명만 바꾼 페이지를 대량으로 만들지 않는 것이 사용자에게 더 도움이 된다고 보기 때문입니다.",
      },
    ],
  },
  {
    heading: "요금·결제",
    items: [
      {
        q: "출장마사지 가격은 어떻게 정해지나요?",
        a: "서비스 종류와 진행 시간, 방문 지역, 예약 시간대, 이동 거리 등에 따라 달라질 수 있습니다. 상담 단계에서 기준을 투명하게 안내하며, 사전에 합의되지 않은 추가 비용은 없습니다.",
      },
      {
        q: "결제는 어떻게 하나요?",
        a: "요금 기준과 케어 내용에 동의하신 뒤 안내된 방식으로 진행됩니다. 결제 정보는 안전하게 관리되며, 자세한 내용은 결제 안내 페이지를 참고해 주세요.",
      },
    ],
  },
  {
    heading: "서비스·위생",
    items: [
      {
        q: "어떤 케어를 선택하면 좋을까요?",
        a: "그날의 몸 상태에 맞춰 고르시면 됩니다. 뻐근함이 크면 근육 이완 케어, 전반적 피로면 컨디션 케어, 차분한 휴식이 필요하면 아로마 케어가 어울립니다.",
      },
      {
        q: "위생은 어떻게 관리되나요?",
        a: "손 위생과 용품 청결, 공간 존중을 기본으로 지키며, 지역이나 시간대에 따라 기준을 느슨하게 적용하지 않습니다. 자세한 내용은 위생 관리 기준 페이지에서 확인하실 수 있습니다.",
      },
      {
        q: "제공하지 않는 서비스가 있나요?",
        a: "성적 서비스, 불법적인 요청, 의료행위, 치료 보장, 사전에 합의되지 않은 요청은 일절 제공하지 않습니다. 8 마사지는 건전한 방문 케어만 안내합니다.",
      },
    ],
  },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ name: "자주 묻는 질문", path: "/faq/" }]} />}
        title="자주 묻는 질문"
        description="예약부터 지역, 요금, 위생, 제공하지 않는 서비스까지 가장 많이 문의해 주시는 내용을 모았습니다."
      />
      <Container className="py-12">
        <JsonLd data={faqLd(all)} />
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.heading}>
              <SectionHeading as="h2" title={g.heading} />
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
        <div className="mt-14">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
