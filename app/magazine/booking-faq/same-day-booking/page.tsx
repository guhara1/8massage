import type { Metadata } from "next";
import MagazineArticle from "@/components/MagazineArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/magazine/booking-faq/same-day-booking/";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 당일 예약은 어떻게 진행되나요? | 8 마사지 매거진",
  description:
    "출장마사지 당일 예약의 가능성과 진행 방식, 시간대·지역별 변수, 문의 시 필요한 정보, 확정 전 확인사항을 자세히 풀어 안내합니다.",
  path,
});

export default function Page() {
  return (
    <MagazineArticle
      category="예약 FAQ"
      categoryHref="/magazine/booking-faq/"
      title="출장마사지 당일 예약은 어떻게 진행되나요?"
      description="당일 예약이 가능한지, 어떤 흐름으로 진행되는지, 무엇을 준비하면 좋은지 자세히 설명합니다."
      path={path}
      datePublished="2026-03-17"
      faqs={[
        {
          q: "당일 예약은 항상 되나요?",
          a: "시간대와 지역 상황에 따라 가능한 경우가 있지만 항상 보장되지는 않습니다. 가능한 한 빨리 문의하시면 조율이 수월합니다.",
        },
        {
          q: "당일은 비용이 더 드나요?",
          a: "당일이라는 이유만으로 임의의 추가 비용이 붙지 않습니다. 요금 기준은 일반 예약과 동일하게 상담 단계에서 안내됩니다.",
        },
        {
          q: "문의 후 얼마나 빨리 방문되나요?",
          a: "위치와 시간대에 따라 다릅니다. 이동과 준비에 필요한 시간이 있어, 문의 시 가능한 시간을 함께 안내해 드립니다.",
        },
      ]}
      related={[
        { title: "당일 예약 안내", href: "/booking/same-day/", description: "당일 예약 상세 안내" },
        { title: "방문 가능 시간", href: "/booking/time/", description: "시간대별 안내" },
        { title: "예약 문의", href: "/booking-inquiry/", description: "지금 가능 여부 확인" },
      ]}
    >
      <p>
        갑자기 일정에 여유가 생기거나 예상치 못한 피로가 몰려오는 날, ‘지금 바로 예약할 수 있을까?’
        하는 생각이 들곤 합니다. 당일 예약은 분명 가능한 선택지이지만, 몇 가지 변수가 함께
        작용합니다. 이 글에서는 당일 예약이 어떤 흐름으로 진행되는지, 무엇을 준비하면 좋은지를
        자세히 풀어 정리했습니다.
      </p>

      <h2>핵심 설명</h2>
      <p>
        당일 예약의 가능 여부는 결국 ‘그날의 예약 현황’과 ‘이동 시간’이 맞물려 결정됩니다. 두
        조건이 맞으면 비교적 빠르게 방문이 가능하고, 그렇지 않으면 가까운 다른 시간대를 안내받게
        됩니다.
      </p>

      <h2>당일 예약 진행 흐름</h2>
      <ul>
        <li><strong>1. 위치 확인</strong> · 현재 위치가 어느 권역인지 확인합니다.</li>
        <li><strong>2. 가능 시간 확인</strong> · 예약 현황과 이동 시간을 바탕으로 가능한 시간을 안내받습니다.</li>
        <li><strong>3. 케어 선택</strong> · 그날의 상태에 맞는 케어를 고릅니다.</li>
        <li><strong>4. 안내 동의</strong> · 요금 기준과 방문 안내에 동의하면 예약이 확정됩니다.</li>
      </ul>

      <h2>주의사항</h2>
      <p>
        당일 예약은 시간대의 영향을 크게 받습니다. 저녁 피크 시간에는 즉시 방문이 어려울 수 있으니,
        가능한 한 이른 시각에 문의해 두는 것이 좋습니다. 또한 장거리 지역이나 진입 동선이 복잡한
        위치는 시간이 더 필요할 수 있습니다. 당일이라고 해서 절차나 위생, 동의 원칙이 생략되지
        않는다는 점도 기억해 주세요.
      </p>

      <h2>8 마사지는 이렇게 안내합니다</h2>
      <p>
        8 마사지는 당일 예약도 일반 예약과 동일한 기준과 위생 원칙으로 진행합니다. 급한 상황에서도
        무리한 요청은 받지 않으며, 가능 여부를 과장 없이 안내합니다. 어려운 경우에는 가까운 다른
        시간대를 함께 제안해 드립니다. 자세한 내용은 당일 예약 안내 페이지를, 시간대 관련 내용은
        방문 가능 시간 페이지를 참고해 주세요.
      </p>
    </MagazineArticle>
  );
}
