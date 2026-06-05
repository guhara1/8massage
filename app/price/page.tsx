import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 가격 안내 | 8 마사지",
  description:
    "출장마사지 요금은 서비스 시간, 지역, 예약 시간, 이동 거리 등에 따라 달라질 수 있습니다. 8 마사지는 숨겨진 추가 비용 없이 상담 후 투명하게 안내합니다.",
  path: "/price/",
});

const faqs = [
  {
    q: "정해진 가격표가 있나요?",
    a: "요금은 서비스 종류와 시간, 지역, 예약 시간대, 이동 거리 등 여러 요소에 따라 달라지므로 상담 후 기준을 안내해 드립니다. 상담 단계에서 예상 범위를 분명히 확인하실 수 있습니다.",
  },
  {
    q: "안내받은 금액 외에 추가 비용이 있나요?",
    a: "사전에 안내되지 않은 추가 비용은 발생하지 않습니다. 요금에 포함되는 항목과 조건을 상담 단계에서 명확히 안내하며, 동의하신 내용에 따라 진행됩니다.",
  },
  {
    q: "지역에 따라 요금이 많이 달라지나요?",
    a: "이동 거리와 시간대가 요금에 영향을 줄 수 있어 지역에 따라 차이가 날 수 있습니다. 정확한 기준은 희망 위치와 시간을 알려 주시면 안내해 드립니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[{ name: "예약·요금", path: "/booking/" }, { name: "요금 안내", path: "/price/" }]}
      title="출장마사지 가격 안내"
      description="요금이 어떤 기준으로 정해지는지, 무엇이 포함되는지 숨김 없이 안내합니다."
      faqs={faqs}
      faqHeading="요금 안내 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            8 마사지는 사전에 안내되지 않은 추가 비용을 요구하지 않으며, 모든 요금 기준을 상담
            단계에서 투명하게 안내합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="예약 방법" href="/booking/" description="단계별 예약 절차 안내" />
            <InternalLinkCard title="결제 안내" href="/booking/payment/" description="결제 방식과 확인사항" />
            <InternalLinkCard title="가격이 달라지는 기준" href="/magazine/visit-massage-guide/price-factors/" description="요금 요소를 자세히 정리한 글" />
          </div>
        </>
      }
    >
      <h2>요금은 상황에 따라 달라집니다</h2>
      <p>
        출장마사지 요금을 하나의 숫자로 단정하기 어려운 이유는, 같은 케어라도 진행되는 조건이
        저마다 다르기 때문입니다. 어떤 케어를 얼마나 진행하는지, 어느 지역으로 방문하는지, 예약
        시간대가 언제인지, 이동 거리가 얼마나 되는지에 따라 요금은 달라질 수 있습니다. 8 마사지는
        이러한 요소를 숨기지 않고 상담 단계에서 분명하게 안내합니다. 막연한 ‘최저가’를 내세우기보다,
        실제 조건에 맞는 기준을 솔직하게 전하는 것이 신뢰를 지키는 길이라고 생각합니다.
      </p>

      <h2>요금에 영향을 주는 요소</h2>
      <ul>
        <li><strong>서비스 종류</strong> · 컨디션·근육 이완·아로마 등 선택한 케어</li>
        <li><strong>진행 시간</strong> · 휴식의 깊이와 일정에 맞춘 시간 구성</li>
        <li><strong>방문 지역</strong> · 권역과 위치에 따른 이동 여건</li>
        <li><strong>예약 시간대</strong> · 피크 시간 여부와 예약 현황</li>
        <li><strong>이동 거리</strong> · 출발지에서 방문지까지의 거리</li>
      </ul>

      <h2>상담 후 안내드리는 이유</h2>
      <p>
        고정된 가격표만으로는 위 요소들을 충분히 반영하기 어렵습니다. 그래서 8 마사지는 ‘상담 후
        안내’ 방식을 택합니다. 희망하는 케어와 지역, 시간을 알려 주시면 그에 맞는 요금 기준과 예상
        범위를 안내해 드립니다. 이 과정에서 궁금한 점은 무엇이든 편하게 물어보실 수 있으며, 동의
        없이 케어가 진행되는 일은 없습니다.
      </p>

      <h2>숨겨진 비용이 없도록</h2>
      <p>
        요금 안내에서 가장 중요한 원칙은 ‘예상하지 못한 비용이 생기지 않게 한다’는 것입니다. 8
        마사지는 사전에 안내되지 않은 추가 비용을 요구하지 않습니다. 요금에 포함되는 항목과
        조건을 미리 분명히 하고, 동의하신 내용에 따라서만 진행합니다. 만약 안내 과정에서 이해가
        어려운 부분이 있다면 충분히 설명드리니 부담 없이 확인해 주세요.
      </p>

      <h2>합리적인 선택을 위해</h2>
      <p>
        더 비싼 구성이 항상 더 좋은 선택은 아닙니다. 8 마사지는 고객의 상태와 일정에 맞는 합리적인
        구성을 함께 찾는 것을 우선합니다. 불필요한 옵션을 권하지 않으며, 요금과 케어 내용을 충분히
        비교한 뒤 결정하실 수 있도록 돕습니다. 요금이 정해지는 자세한 기준이 궁금하다면 매거진의
        ‘가격이 달라지는 기준’ 글도 함께 참고해 보세요.
      </p>
    </StandardPage>
  );
}
