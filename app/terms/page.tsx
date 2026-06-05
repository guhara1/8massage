import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "이용약관 | 8 마사지",
  description:
    "8 마사지 이용약관입니다. 서비스 이용 조건, 이용자와 사이트의 책임, 금지 행위, 면책 사항 등 기본적인 이용 기준을 안내합니다.",
  path: "/terms/",
});

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "안전·정책", path: "/safety/hygiene/" },
        { name: "이용약관", path: "/terms/" },
      ]}
      title="이용약관"
      description="본 약관은 8 마사지가 제공하는 정보와 안내 서비스의 이용 조건을 규정합니다."
      cta={false}
      aside={
        <div className="space-y-3">
          <InternalLinkCard title="개인정보처리방침" href="/privacy/" description="정보 보호 원칙" />
          <InternalLinkCard title="제공하지 않는 서비스" href="/safety/prohibited-services/" description="명확히 밝히는 원칙" />
          <InternalLinkCard title="사업자 정보" href="/business-info/" description="운영 주체 안내" />
        </div>
      }
    >
      <p>
        본 이용약관(이하 ‘약관’)은 8 마사지(이하 ‘사이트’)가 제공하는 출장마사지 정보 및 예약
        안내 서비스의 이용과 관련한 기본 조건을 규정합니다. 이용자는 사이트를 이용함으로써 본
        약관에 동의한 것으로 봅니다. 본 문서는 일반적인 안내를 위한 예시이며, 실제 운영 시에는
        운영 주체의 상황에 맞게 보완하여 사용해야 합니다.
      </p>

      <h2>제1조 (목적)</h2>
      <p>
        본 약관은 사이트가 제공하는 정보와 안내 서비스의 이용 조건 및 절차, 이용자와 사이트의
        권리·의무·책임 사항을 규정하는 것을 목적으로 합니다.
      </p>

      <h2>제2조 (서비스의 성격)</h2>
      <p>
        사이트는 건전한 방문 케어와 관련한 정보를 안내하고 예약 문의를 돕는 정보성 서비스를
        제공합니다. 사이트가 제공하는 안내는 의료 행위가 아니며, 질병의 진단·치료를 목적으로 하지
        않습니다.
      </p>

      <h2>제3조 (이용자의 의무)</h2>
      <ul>
        <li>이용자는 정확한 정보를 바탕으로 예약을 문의해야 합니다.</li>
        <li>이용자는 사이트의 운영 원칙과 안내사항을 존중해야 합니다.</li>
        <li>이용자는 타인의 권리를 침해하거나 법령에 어긋나는 요청을 해서는 안 됩니다.</li>
      </ul>

      <h2>제4조 (금지 행위)</h2>
      <p>
        이용자는 성적·불법적인 서비스를 요구하거나, 사전에 합의되지 않은 요청을 강요하거나,
        관리자의 안전과 존엄을 해치는 행위를 해서는 안 됩니다. 이러한 행위가 확인될 경우 안내 및
        진행이 중단될 수 있습니다.
      </p>

      <h2>제5조 (사이트의 책임)</h2>
      <p>
        사이트는 정확하고 투명한 정보를 제공하기 위해 노력합니다. 다만 지역·시간 등 상황에 따라
        실제 가능 여부는 달라질 수 있으며, 이는 예약 문의 단계에서 확인됩니다.
      </p>

      <h2>제6조 (면책)</h2>
      <p>
        천재지변, 통신 장애 등 사이트가 통제할 수 없는 사유로 인한 안내 지연이나 중단에 대해서는
        책임이 제한될 수 있습니다. 이용자가 제공한 부정확한 정보로 인해 발생한 문제에 대해서도
        사이트는 책임을 지지 않습니다.
      </p>

      <h2>제7조 (약관의 변경)</h2>
      <p>
        본 약관은 관련 법령이나 운영 방침에 따라 변경될 수 있으며, 변경 시 사이트를 통해
        안내합니다.
      </p>
    </StandardPage>
  );
}
