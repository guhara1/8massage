import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "제휴 문의 | 8 마사지",
  description:
    "8 마사지 제휴 문의 안내입니다. 건전한 방문 케어 가치를 함께 지킬 수 있는 협업과 제휴를 환영합니다. 제휴 검토 기준과 절차를 안내합니다.",
  path: "/partnership/",
});

const faqs = [
  {
    q: "어떤 제휴가 가능한가요?",
    a: "건전한 방문 케어라는 가치를 함께 지킬 수 있는 협업이라면 검토 대상입니다. 콘텐츠 협업, 운영 제휴 등 다양한 형태가 가능합니다.",
  },
  {
    q: "제휴 검토는 어떤 기준으로 이뤄지나요?",
    a: "합법성과 건전성, 고객 보호 원칙에 부합하는지를 우선 확인합니다. 이 기준에 맞지 않는 제안은 정중히 사양합니다.",
  },
  {
    q: "제휴 문의는 어디로 하나요?",
    a: "고객센터 1:1 문의를 통해 제휴 목적과 내용을 남겨 주시면 검토 후 안내해 드립니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "고객센터", path: "/contact/" },
        { name: "제휴 문의", path: "/partnership/" },
      ]}
      title="제휴 문의"
      description="건전한 방문 케어의 가치를 함께 지킬 수 있는 협업과 제휴를 환영합니다."
      faqs={faqs}
      faqHeading="제휴 문의 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            건전성과 고객 보호 원칙에 부합하지 않는 제휴는 정중히 사양합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="1:1 문의" href="/contact/" description="제휴 문의 접수" />
            <InternalLinkCard title="운영 원칙" href="/about/policy/" description="우리가 지키는 기준" />
            <InternalLinkCard title="브랜드 소개" href="/about/brand/" description="8 마사지의 가치" />
          </div>
        </>
      }
    >
      <h2>제휴를 환영합니다</h2>
      <p>
        8 마사지는 건전한 방문 케어 정보를 안내한다는 가치를 함께 나눌 수 있는 파트너와의 협업을
        환영합니다. 좋은 제휴는 서로의 강점을 더해 사용자에게 더 나은 정보와 경험을 제공합니다.
        다만 우리가 지켜온 원칙—합법성, 건전성, 고객 보호—을 함께 지킬 수 있을 때에만 제휴가
        의미를 가진다고 생각합니다.
      </p>

      <h2>가능한 제휴 형태</h2>
      <ul>
        <li><strong>콘텐츠 협업</strong> · 위생·안전, 컨디션 관리 등 정보성 콘텐츠 협업</li>
        <li><strong>운영 제휴</strong> · 건전한 방문 케어 운영과 관련한 협력</li>
        <li><strong>기타 협업</strong> · 사용자에게 도움이 되는 다양한 형태의 협업</li>
      </ul>

      <h2>제휴 검토 기준</h2>
      <p>
        제휴 제안은 무엇보다 합법성과 건전성을 기준으로 검토합니다. 성적·불법 서비스와 관련되거나,
        과장된 효능을 내세우거나, 고객 보호 원칙에 어긋나는 제안은 정중히 사양합니다. 이는 우리가
        쌓아온 신뢰를 지키기 위한 최소한의 기준입니다. 기준에 부합하는 제안이라면 열린 마음으로
        검토하겠습니다.
      </p>

      <h2>제휴 문의 방법</h2>
      <p>
        제휴를 원하시면 고객센터 1:1 문의를 통해 제휴 목적과 구체적인 내용, 연락 방법을 남겨
        주세요. 접수된 제안은 내부 검토를 거쳐 안내해 드립니다. 검토에는 다소 시간이 걸릴 수
        있으니 양해 부탁드립니다. 8 마사지가 지향하는 가치가 궁금하시다면 브랜드 소개와 운영 원칙
        페이지를 함께 살펴봐 주세요.
      </p>
    </StandardPage>
  );
}
