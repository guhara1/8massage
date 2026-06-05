import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 결제 안내 | 8 마사지",
  description:
    "출장마사지 결제 방식과 결제 전 확인사항, 영수증 및 문의 관련 안내를 정리했습니다. 8 마사지는 사전에 안내되지 않은 추가 비용을 요구하지 않습니다.",
  path: "/booking/payment/",
});

const faqs = [
  {
    q: "결제는 언제 진행하나요?",
    a: "요금 기준과 케어 내용에 동의하신 뒤 안내된 방식으로 진행됩니다. 사전에 합의되지 않은 비용이 임의로 청구되는 일은 없습니다.",
  },
  {
    q: "영수증이나 결제 내역을 받을 수 있나요?",
    a: "결제 내역과 관련한 확인이 필요하시면 문의해 주세요. 가능한 범위에서 안내해 드리며, 결제 정보는 안전하게 관리됩니다.",
  },
  {
    q: "결제 전에 무엇을 확인하면 좋나요?",
    a: "요금에 포함되는 항목과 진행 시간, 케어 구성을 다시 확인하시면 좋습니다. 이해가 어려운 부분은 결제 전에 충분히 설명드립니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "예약·요금", path: "/booking/" },
        { name: "결제 안내", path: "/booking/payment/" },
      ]}
      title="출장마사지 결제 안내"
      description="결제가 어떤 방식으로 진행되는지, 결제 전 무엇을 확인하면 좋은지 정리했습니다."
      faqs={faqs}
      faqHeading="결제 안내 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            8 마사지는 사전에 안내되지 않은 추가 비용을 요구하지 않으며, 결제 정보를 안전하게
            관리합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="요금 안내" href="/price/" description="요금이 정해지는 기준" />
            <InternalLinkCard title="예약 방법" href="/booking/" description="단계별 예약 절차 안내" />
            <InternalLinkCard title="개인정보 보호" href="/privacy/" description="정보 보호 방침 확인" />
          </div>
        </>
      }
    >
      <h2>결제의 기본 원칙</h2>
      <p>
        결제에서 가장 중요한 것은 ‘동의한 내용대로 진행한다’는 원칙입니다. 8 마사지는 요금 기준과
        케어 내용을 충분히 안내하고, 고객이 이에 동의하신 뒤에 안내된 방식으로 결제를 진행합니다.
        설명 없이 비용이 늘어나거나, 사전에 합의되지 않은 금액이 청구되는 일은 없습니다. 결제와
        관련해 궁금한 점이 있다면 진행 전에 편하게 물어보실 수 있습니다.
      </p>

      <h2>결제 방식</h2>
      <p>
        결제 방식은 상황에 따라 안내되며, 예약 단계에서 가능한 방법을 확인하실 수 있습니다. 어떤
        방식이든 금액과 내역이 명확하게 공유되도록 하며, 고객이 충분히 확인한 뒤 진행됩니다. 결제
        과정에서 불필요한 개인정보를 요구하지 않으며, 받은 정보는 안내와 결제 목적에만 사용합니다.
      </p>

      <h2>결제 전 확인사항</h2>
      <ul>
        <li>요금에 포함되는 항목과 제외되는 항목</li>
        <li>선택한 케어 구성과 진행 시간</li>
        <li>지역·시간대에 따른 기준이 반영되었는지</li>
        <li>안내된 금액 외 추가 비용이 없는지</li>
      </ul>

      <h2>영수증·문의 안내</h2>
      <p>
        결제 내역에 대한 확인이나 영수증이 필요하시면 문의해 주세요. 가능한 범위에서 안내해
        드리며, 결제와 관련한 정보는 안전하게 관리합니다. 혹시 결제 과정에서 이해가 어려운 부분이
        있거나 안내와 다른 점이 있다면, 주저하지 마시고 알려 주세요. 빠르게 확인하고 바로잡겠습니다.
      </p>

      <h2>안심하고 이용하실 수 있도록</h2>
      <p>
        투명한 결제는 신뢰의 기본입니다. 8 마사지는 요금과 결제 전 과정을 숨김 없이 안내하고,
        고객이 충분히 이해한 상태에서 결정하실 수 있도록 돕습니다. 개인정보와 결제 정보 보호에
        관한 자세한 내용은 개인정보 보호 페이지에서 확인하실 수 있습니다.
      </p>
    </StandardPage>
  );
}
