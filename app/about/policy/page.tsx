import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "운영 원칙 | 8 마사지",
  description:
    "8 마사지의 운영 원칙을 안내합니다. 정직한 정보 제공, 투명한 예약·요금, 일관된 위생 관리, 상호 존중, 건전한 방문 케어를 지킵니다.",
  path: "/about/policy/",
});

const faqs = [
  {
    q: "운영 원칙은 왜 따로 안내하나요?",
    a: "원칙을 명확히 밝혀 두면 고객이 무엇을 기대할 수 있는지 분명해집니다. 또한 우리 스스로도 일관되게 그 기준을 지키게 됩니다.",
  },
  {
    q: "원칙에 어긋나는 요청이 들어오면 어떻게 하나요?",
    a: "정중히 거절합니다. 특히 건전한 케어의 범위를 벗어나는 요청은 어떤 경우에도 받아들이지 않습니다.",
  },
  {
    q: "원칙은 바뀌기도 하나요?",
    a: "더 나은 방향으로 개선될 수 있지만, 정직함과 건전함이라는 핵심 원칙은 바뀌지 않습니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "8 마사지 소개", path: "/about/brand/" },
        { name: "운영 원칙", path: "/about/policy/" },
      ]}
      title="운영 원칙"
      description="8 마사지가 모든 안내와 케어에서 지키는 다섯 가지 운영 원칙을 정리했습니다."
      faqs={faqs}
      faqHeading="운영 원칙 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            아래 원칙은 8 마사지의 모든 안내와 케어에 일관되게 적용됩니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="브랜드 소개" href="/about/brand/" description="우리가 지향하는 가치" />
            <InternalLinkCard title="위생 관리 기준" href="/safety/hygiene/" description="위생 관리 방식" />
            <InternalLinkCard title="제공하지 않는 서비스" href="/safety/prohibited-services/" description="명확히 밝히는 원칙" />
          </div>
        </>
      }
    >
      <h2>원칙을 분명히 합니다</h2>
      <p>
        좋은 안내는 분명한 원칙에서 나옵니다. 8 마사지는 그때그때 상황에 따라 기준이 흔들리지
        않도록, 운영의 바탕이 되는 원칙을 정리해 공개합니다. 아래 다섯 가지 원칙은 안내 문구를
        작성할 때부터 예약을 진행하고 케어를 마무리하는 순간까지, 모든 과정에 일관되게 적용됩니다.
      </p>

      <h2>첫째 · 정직한 정보 제공</h2>
      <p>
        과장하지 않습니다. ‘1위 보장’이나 ‘무조건 효과’ 같은 표현 대신, 사실에 근거한 정보를
        전합니다. 가능한 것은 가능하다고, 어려운 것은 어렵다고 솔직하게 안내합니다. 정직함이
        때로는 화려함보다 덜 매력적으로 보일 수 있지만, 결국 신뢰를 만드는 유일한 길이라고
        믿습니다.
      </p>

      <h2>둘째 · 투명한 예약·요금</h2>
      <p>
        예약 절차와 요금 기준을 숨기지 않습니다. 요금이 어떤 요소에 따라 달라지는지 미리 안내하고,
        사전에 합의되지 않은 추가 비용을 요구하지 않습니다. 고객이 충분히 이해하고 동의한 뒤에만
        진행하며, 궁금한 점은 언제든 물어보실 수 있도록 합니다.
      </p>

      <h2>셋째 · 일관된 위생 관리</h2>
      <p>
        위생은 지역이나 시간대에 따라 달라지지 않습니다. 손 위생과 용품 청결, 공간 존중이라는
        기본을 어떤 상황에서도 동일하게 지킵니다. 위생은 감추는 영역이 아니라 투명하게 안내하는
        영역이라는 점을 분명히 합니다.
      </p>

      <h2>넷째 · 상호 존중</h2>
      <p>
        케어는 고객과 관리자 사이의 존중을 바탕으로 진행됩니다. 고객의 공간과 사생활, 의사를
        존중하며, 동시에 관리자의 안전과 존엄도 동일하게 보호되어야 한다고 봅니다. 한쪽의 편안함이
        다른 쪽의 불편함 위에 세워져서는 안 됩니다.
      </p>

      <h2>다섯째 · 건전한 방문 케어</h2>
      <p>
        8 마사지는 휴식과 컨디션 관리를 돕는 건전한 케어만 안내합니다. 성적·불법 요청, 의료행위나
        치료 보장, 무리한 요구, 사전에 합의되지 않은 요청은 어떤 경우에도 제공하지 않습니다. 이
        원칙은 타협의 대상이 아니며, 우리 운영의 가장 단단한 토대입니다. 자세한 내용은 제공하지
        않는 서비스 안내 페이지에서 확인하실 수 있습니다.
      </p>
    </StandardPage>
  );
}
