import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "위생 관리 기준 | 8 마사지",
  description:
    "8 마사지의 위생 관리 기준을 안내합니다. 손 위생, 도구 관리, 고객 공간 존중, 방문 전후 관리 기준을 일관되게 지킵니다.",
  path: "/safety/hygiene/",
});

const faqs = [
  {
    q: "사용하는 용품은 어떻게 관리되나요?",
    a: "케어에 사용하는 용품은 청결하게 관리하고 방문 전후로 점검합니다. 위생이 유지되지 않은 용품은 사용하지 않는 것을 원칙으로 합니다.",
  },
  {
    q: "방문 전 고객이 준비할 위생 관련 사항이 있나요?",
    a: "필수는 아니지만, 케어 전 가벼운 샤워와 편안한 복장 준비, 적당한 실내 환기를 해두시면 서로 더 쾌적하게 시간을 보낼 수 있습니다.",
  },
  {
    q: "위생에 문제가 느껴지면 어떻게 하나요?",
    a: "케어 중이라도 불편하거나 우려되는 점이 있으면 즉시 알려 주세요. 상황을 확인하고 바로 조치하며, 이후 개선에 반영합니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "안전·정책", path: "/safety/hygiene/" },
        { name: "위생 관리 기준", path: "/safety/hygiene/" },
      ]}
      title="위생 관리 기준"
      description="방문 케어에서 가장 기본이 되는 위생을 어떻게 관리하는지, 우리가 지키는 기준을 정리했습니다."
      faqs={faqs}
      faqHeading="위생 관리 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            위생은 고객과 관리자 모두를 위한 기본입니다. 8 마사지는 일관된 기준으로 위생을
            관리합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="고객 보호 정책" href="/safety/customer-protection/" description="안전한 이용 환경 안내" />
            <InternalLinkCard title="제공하지 않는 서비스" href="/safety/prohibited-services/" description="명확히 제공하지 않는 범위" />
            <InternalLinkCard title="위생 체크리스트" href="/magazine/hygiene-safety/hygiene-checklist/" description="이용 전 확인 항목 정리" />
          </div>
        </>
      }
    >
      <h2>위생을 가장 먼저 생각합니다</h2>
      <p>
        방문 케어는 고객의 생활 공간에서 이루어집니다. 그래서 8 마사지는 어떤 요소보다 위생을
        먼저 생각합니다. 위생은 단지 청결함의 문제가 아니라, 고객이 안심하고 휴식에 집중할 수 있게
        하는 신뢰의 토대입니다. 우리는 방문 전부터 케어가 끝난 뒤까지 일관된 위생 기준을 적용하며,
        이 기준을 지역이나 시간대에 따라 느슨하게 적용하지 않습니다.
      </p>

      <h2>손 위생</h2>
      <p>
        케어는 손을 통해 이루어지는 만큼 손 위생은 가장 기본이 되는 항목입니다. 방문 전후로 손을
        청결하게 관리하고, 케어 시작 전 위생 상태를 점검합니다. 고객이 직접 확인하고 싶은 부분이
        있다면 편하게 말씀해 주세요. 위생은 숨길 이유가 없는 영역이며, 투명하게 안내하는 것이
        원칙입니다.
      </p>

      <h2>도구·용품 관리</h2>
      <p>
        케어에 사용하는 용품은 청결하게 관리하고 방문 전후로 상태를 점검합니다. 위생이 유지되지
        않은 용품은 사용하지 않으며, 필요한 경우 교체합니다. 향이나 오일 등 직접 닿는 용품은 특히
        주의해서 관리하고, 향 민감도 등 고객의 요청을 미리 반영합니다.
      </p>

      <h2>고객 공간 존중</h2>
      <p>
        고객의 공간은 곧 고객의 사생활입니다. 8 마사지는 케어에 필요한 범위 안에서만 공간을
        사용하고, 케어가 끝난 뒤에는 공간을 처음 상태에 가깝게 정돈하려 노력합니다. 고객이 불편할
        수 있는 행동을 삼가고, 공간과 물건을 함부로 다루지 않습니다. 이러한 존중이 위생만큼이나
        중요한 신뢰의 일부라고 생각합니다.
      </p>

      <h2>방문 전후 관리</h2>
      <p>
        위생 관리는 케어 시간에만 국한되지 않습니다. 방문 전에는 위생 상태를 점검하고, 케어 후에는
        사용한 용품을 정리하며 다음 방문을 위한 관리를 이어갑니다. 고객께서도 케어 전 가벼운
        샤워와 환기, 편안한 복장 준비 등을 해두시면 서로 더 쾌적한 시간을 보낼 수 있습니다.
      </p>

      <h2>불편이 느껴진다면</h2>
      <p>
        혹시 위생과 관련해 우려되거나 불편한 점이 있다면 케어 중이라도 즉시 알려 주세요. 8 마사지는
        지적을 부담스러워하지 않으며, 오히려 더 나은 기준을 만드는 소중한 의견으로 받아들입니다.
        고객 보호 정책 페이지에서 불편 신고와 관련한 안내도 함께 확인하실 수 있습니다.
      </p>
    </StandardPage>
  );
}
