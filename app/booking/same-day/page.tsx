import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 당일 예약 안내 | 8 마사지",
  description:
    "출장마사지 당일 예약 가능 여부와 시간대, 지역별 가능성, 문의 시 필요한 정보, 예약 확정 전 확인사항을 8 마사지가 안내합니다.",
  path: "/booking/same-day/",
});

const faqs = [
  {
    q: "당일 예약은 항상 가능한가요?",
    a: "시간대와 지역 상황에 따라 가능한 경우가 있지만 항상 보장되지는 않습니다. 예약 현황과 이동 시간에 따라 어려울 수 있으므로, 가능한 한 빨리 문의하시면 조율이 수월합니다.",
  },
  {
    q: "당일 예약은 추가 비용이 있나요?",
    a: "당일이라는 이유만으로 임의의 추가 비용이 붙지는 않습니다. 다만 시간대나 이동 거리에 따른 기준은 일반 예약과 동일하게 상담 단계에서 안내됩니다.",
  },
  {
    q: "당일에 문의하면 얼마나 빨리 방문이 가능한가요?",
    a: "위치와 시간대에 따라 다릅니다. 이동과 준비에 필요한 시간이 있어, 문의 시 가능한 시간을 함께 안내해 드립니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "예약·요금", path: "/booking/" },
        { name: "당일 예약 안내", path: "/booking/same-day/" },
      ]}
      title="출장마사지 당일 예약 안내"
      description="급하게 휴식이 필요한 날, 당일 예약이 어떻게 진행되는지와 무엇을 확인하면 좋은지 정리했습니다."
      faqs={faqs}
      faqHeading="당일 예약 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            당일 예약도 일반 예약과 동일한 기준과 위생 원칙으로 진행되며, 무리한 요청은 받지
            않습니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="방문 가능 시간" href="/booking/time/" description="운영 시간과 시간대 안내" />
            <InternalLinkCard title="예약 방법" href="/booking/" description="단계별 예약 절차 안내" />
            <InternalLinkCard title="당일 예약 자세히" href="/magazine/booking-faq/same-day-booking/" description="당일 예약을 더 자세히 다룬 글" />
          </div>
        </>
      }
    >
      <h2>당일 예약, 가능할까요</h2>
      <p>
        예상치 못한 피로가 몰려오거나 갑자기 일정에 여유가 생긴 날, 당일 예약을 고민하는 분이
        많습니다. 결론부터 말하면, 당일 예약은 시간대와 지역 상황에 따라 가능한 경우가 있습니다.
        다만 ‘언제나 가능하다’고 단정할 수는 없습니다. 그날의 예약 현황과 이동 시간이 맞물려야
        하기 때문입니다. 8 마사지는 가능 여부를 과장 없이 안내하며, 어려운 경우에는 가까운 다른
        시간대를 함께 제안해 드립니다.
      </p>

      <h2>시간대에 따른 가능성</h2>
      <p>
        당일 예약은 시간대의 영향을 크게 받습니다. 예약이 몰리는 저녁 피크 시간에는 즉시 방문이
        어려울 수 있고, 비교적 여유 있는 시간대에는 조율이 수월한 편입니다. 따라서 당일에 휴식을
        계획하고 있다면, 가능한 한 이른 시각에 문의해 두는 것이 좋습니다. 일찍 알려 주실수록 원하는
        시간에 가까운 안내를 받기 쉽습니다.
      </p>

      <h2>지역별 가능성</h2>
      <p>
        지역에 따라서도 당일 가능성은 달라집니다. 이동 거리가 짧고 동선이 단순한 위치는 비교적
        조율이 빠르지만, 거리가 멀거나 진입 동선이 복잡한 지역은 시간이 더 필요할 수 있습니다.
        서울·경기·인천·부산 각 권역의 특성은 지역 페이지에서 확인하실 수 있으니, 당일 문의 전에
        본인의 위치가 어느 권역에 해당하는지 살펴보시면 도움이 됩니다.
      </p>

      <h2>문의 시 필요한 정보</h2>
      <ul>
        <li>현재 위치와 대략적인 권역</li>
        <li>가능한 시간대(빠를수록 조율이 쉬움)</li>
        <li>선호하는 케어 방향</li>
        <li>출입 방식 등 도착에 필요한 정보</li>
      </ul>

      <h2>예약 확정 전 확인사항</h2>
      <p>
        당일 예약이라고 해서 절차가 생략되지는 않습니다. 가능 시간과 방문 주소, 안내사항을 확인하고
        양측이 동의한 뒤 예약이 확정됩니다. 또한 당일이라는 이유로 임의의 추가 비용이 붙지 않으며,
        요금 기준은 일반 예약과 동일하게 상담 단계에서 안내됩니다. 8 마사지는 급한 상황에서도
        위생과 안전, 동의의 원칙을 그대로 지킵니다.
      </p>
    </StandardPage>
  );
}
