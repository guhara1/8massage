import type { Metadata } from "next";
import MagazineArticle from "@/components/MagazineArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/magazine/hygiene-safety/safe-service-guide/";

export const metadata: Metadata = pageMetadata({
  title: "건전한 출장마사지 서비스를 구분하는 기준 | 8 마사지 매거진",
  description:
    "건전한 방문 케어를 가려내는 데 도움이 되는 기준을 안내합니다. 투명한 안내, 명확한 제공 범위, 동의 원칙 등 신뢰할 수 있는 서비스의 특징을 정리했습니다.",
  path,
});

export default function Page() {
  return (
    <MagazineArticle
      category="위생·안전 체크"
      categoryHref="/magazine/hygiene-safety/"
      title="건전한 출장마사지 서비스를 구분하는 기준"
      description="신뢰할 수 있는 건전한 방문 케어를 가려내는 데 도움이 되는 기준을 정리했습니다."
      path={path}
      datePublished="2026-03-10"
      faqs={[
        {
          q: "건전한 서비스는 어떻게 알아보나요?",
          a: "제공 범위와 요금, 위생 기준을 투명하게 안내하고, 제공하지 않는 서비스까지 분명히 밝히는 곳이 신뢰할 수 있습니다.",
        },
        {
          q: "‘무조건 효과’라는 안내는 믿어도 되나요?",
          a: "치료나 완치, 무조건 효과를 약속하는 표현은 주의가 필요합니다. 건전한 방문 케어는 의료 행위가 아니며 효과를 단정하지 않습니다.",
        },
        {
          q: "이상한 요구를 받으면 어떻게 하나요?",
          a: "사전에 합의되지 않은 요구나 불법적인 제안에는 응하지 않으셔도 됩니다. 의심되는 상황은 바로 알리고, 공식 안내 채널을 이용하세요.",
        },
      ]}
      related={[
        { title: "제공하지 않는 서비스", href: "/safety/prohibited-services/", description: "명확히 밝히는 원칙" },
        { title: "운영 원칙", href: "/about/policy/", description: "8 마사지가 지키는 기준" },
        { title: "고객 보호 정책", href: "/safety/customer-protection/", description: "안전한 이용 환경" },
      ]}
    >
      <p>
        방문 케어를 찾다 보면 비슷해 보이는 안내가 많아, 어디가 신뢰할 수 있는 곳인지 가늠하기
        어려울 때가 있습니다. 하지만 건전한 서비스에는 공통된 특징이 있습니다. 이 글에서는 건전한
        방문 케어를 가려내는 데 도움이 되는 기준을 정리했습니다. 몇 가지 신호만 알아두어도 안심하고
        선택하는 데 큰 도움이 됩니다.
      </p>

      <h2>핵심 설명</h2>
      <p>
        건전한 서비스를 구분하는 핵심은 ‘투명함’과 ‘명확한 경계’입니다. 무엇을 제공하는지뿐 아니라
        무엇을 제공하지 않는지, 그리고 그 과정이 동의에 기반하는지를 보면 됩니다.
      </p>

      <h2>신뢰할 수 있는 서비스의 특징</h2>
      <ul>
        <li><strong>투명한 안내</strong> · 가능 지역, 요금 기준, 위생 방식을 숨기지 않습니다.</li>
        <li><strong>명확한 제공 범위</strong> · 제공하지 않는 서비스를 분명히 밝힙니다.</li>
        <li><strong>동의 원칙</strong> · 사전에 합의된 범위 안에서만 진행합니다.</li>
        <li><strong>과장 없는 표현</strong> · 치료·완치·무조건 효과 같은 표현을 쓰지 않습니다.</li>
        <li><strong>안전 보호</strong> · 개인정보와 예약 정보를 안전하게 다룹니다.</li>
      </ul>

      <h2>주의해야 할 신호</h2>
      <p>
        반대로, 효능을 지나치게 단정하거나 위생·요금에 대한 질문을 회피하는 곳은 주의가
        필요합니다. 사전에 합의되지 않은 요구를 하거나, 출처가 불분명한 채널로만 연락을 유도하는
        경우도 경계해야 합니다. 건전한 방문 케어는 의료 행위가 아니며, 통증 치료가 필요하다면 전문
        의료기관의 진료가 우선입니다.
      </p>

      <h2>8 마사지는 이렇게 안내합니다</h2>
      <p>
        8 마사지는 위 기준을 스스로에게 적용합니다. 가능 지역과 요금, 위생 기준을 투명하게
        안내하고, 제공하지 않는 서비스를 분명히 밝히며, 모든 진행을 동의한 범위 안에서만
        이어갑니다. 우리가 지키는 기준은 운영 원칙 페이지에서, 제공하지 않는 범위는 제공하지 않는
        서비스 안내 페이지에서 확인하실 수 있습니다.
      </p>
    </MagazineArticle>
  );
}
