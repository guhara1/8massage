import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "예약 문의 | 8 마사지",
  description:
    "출장마사지 예약 문의 방법을 안내합니다. 희망 지역과 시간, 선호 케어를 알려 주시면 가능 여부를 확인해 드립니다. 불필요한 개인정보는 요청하지 않습니다.",
  path: "/booking-inquiry/",
});

const faqs = [
  {
    q: "문의하면 바로 예약이 확정되나요?",
    a: "문의는 가능 여부를 확인하는 단계입니다. 지역과 시간 가능 여부를 확인하고 안내사항에 동의하시면 예약이 확정됩니다.",
  },
  {
    q: "어떤 정보를 알려주면 되나요?",
    a: "희망 지역과 대략적인 위치, 원하는 날짜와 시간대, 선호하는 케어 방향 정도면 충분합니다. 불필요한 개인정보는 요청하지 않습니다.",
  },
  {
    q: "운영 시간은 어떻게 되나요?",
    a: `안내 시간은 ${SITE.contact.hours} 기준이며, 지역과 예약 현황에 따라 달라질 수 있습니다.`,
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "고객센터", path: "/contact/" },
        { name: "예약 문의", path: "/booking-inquiry/" },
      ]}
      title="예약 문의"
      description="원하는 지역과 시간을 알려 주시면 가능 여부와 안내사항을 확인해 드립니다. 부담 없이 문의해 주세요."
      faqs={faqs}
      faqHeading="예약 문의 FAQ"
      cta={false}
      aside={
        <>
          <SafetyNoticeBox>
            상담 과정에서 불필요한 개인정보는 요청하지 않으며, 받은 정보는 안내 목적에만
            사용합니다. 8 마사지는 건전한 방문 케어만 안내합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="예약 방법" href="/booking/" description="단계별 예약 절차 안내" />
            <InternalLinkCard title="요금 안내" href="/price/" description="요금이 정해지는 기준" />
            <InternalLinkCard title="지역별 안내" href="/service-area/" description="권역별 가능 범위 확인" />
          </div>
        </>
      }
    >
      <h2>예약 문의 안내</h2>
      <p>
        예약 문의는 가능 여부를 확인하는 첫 단계입니다. 부담 없이 원하는 조건을 알려 주시면, 8
        마사지가 지역과 시간 가능 여부를 확인해 안내해 드립니다. 문의했다고 해서 바로 예약이
        확정되는 것은 아니며, 안내사항을 함께 확인하고 동의하신 뒤에 예약이 확정됩니다. 그러니
        가볍게 가능 여부부터 물어보셔도 좋습니다.
      </p>

      <h2>문의 시 알려주시면 좋은 정보</h2>
      <ul>
        <li><strong>희망 지역</strong> · 서울·경기·인천·부산 중 대략적인 위치(권역 확인용)</li>
        <li><strong>원하는 시간</strong> · 가능한 날짜와 시간대(두세 개로 열어두면 조율이 쉬움)</li>
        <li><strong>선호 케어</strong> · 컨디션·근육 이완·아로마 중 원하는 방향</li>
        <li><strong>참고사항</strong> · 향 민감도, 출입 방식 등 미리 알려두면 좋은 점</li>
      </ul>

      <h2>안심하고 문의하세요</h2>
      <p>
        문의 단계에서 불필요한 개인정보를 요구하지 않습니다. 가능 여부 확인에 필요한 최소한의
        정보만 받으며, 받은 정보는 안내 목적에만 사용하고 안전하게 관리합니다. 또한 8 마사지는
        건전한 방문 케어만 안내합니다. 성적·불법 요청이나 사전에 합의되지 않은 요청은 받지
        않으므로, 그런 우려 없이 편안하게 문의하실 수 있습니다.
      </p>

      <h2>문의 후 진행</h2>
      <p>
        문의를 주시면 희망 조건을 바탕으로 가능한 시간과 요금 기준을 안내해 드립니다. 이후 방문
        주소와 안내사항을 함께 확인하고, 양측이 동의하면 예약이 확정됩니다. 일정 변경이 필요하면
        가능한 한 빨리 알려 주세요. 자세한 절차는 예약 방법 페이지에서, 요금은 요금 안내
        페이지에서 확인하실 수 있습니다.
      </p>

      <h2>안내 시간</h2>
      <p>
        안내 시간은 {SITE.contact.hours} 기준이며, 지역과 예약 현황에 따라 달라질 수 있습니다.
        피크 시간대에는 응답이 다소 늦어질 수 있으니, 원하는 시간이 분명하다면 여유 있게 문의해
        주시면 감사하겠습니다.
      </p>
    </StandardPage>
  );
}
