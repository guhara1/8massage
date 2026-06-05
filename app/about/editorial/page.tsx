import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "편집 정책 · 저자 소개 | 8 마사지",
  description:
    "8 마사지 매거진의 저자(편집팀)와 편집 정책을 안내합니다. 누가, 어떻게, 왜 콘텐츠를 만드는지와 검토 기준, 책임 범위를 투명하게 밝힙니다.",
  path: "/about/editorial/",
});

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "8 마사지 소개", path: "/about/brand/" },
        { name: "편집 정책 · 저자 소개", path: "/about/editorial/" },
      ]}
      title="편집 정책 · 저자 소개"
      description="8 마사지 매거진의 글을 누가, 어떻게, 왜 만드는지와 검토 기준을 투명하게 밝힙니다."
      cta={false}
      aside={
        <>
          <SafetyNoticeBox title="책임 있는 정보">
            모든 글은 건전한 방문 케어 기준에 맞춰 검토되며, 의료 효과나 치료를 보장하지 않습니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="브랜드 소개" href="/about/brand/" description="8 마사지가 지향하는 가치" />
            <InternalLinkCard title="운영 원칙" href="/about/policy/" description="우리가 지키는 기준" />
            <InternalLinkCard title="사업자 정보" href="/business-info/" description="발행 주체와 연락 채널" />
          </div>
        </>
      }
    >
      <h2>글을 만드는 사람 (Who)</h2>
      <p>
        8 마사지 매거진의 모든 글은 <strong>{SITE.author.name}</strong>이 작성하고 검토합니다.
        편집팀은 출장마사지 예약과 이용 과정에서 실제로 자주 나오는 질문, 지역별 방문 여건, 위생과
        안전 기준을 바탕으로 콘텐츠를 정리합니다. 특정 개인의 의견이 아니라, 운영 과정에서 쌓인
        안내 경험을 팀 차원에서 검토해 발행하기 때문에 저자를 ‘편집팀’으로 명시합니다. 가공된
        인물이나 실재하지 않는 전문가를 내세우지 않습니다.
      </p>

      <h2>어떻게 만드나 (How)</h2>
      <p>
        글은 ‘예약을 준비하는 분에게 실제로 도움이 되는가’를 기준으로 작성합니다. 지역 페이지와
        서비스 안내, 고객 문의에서 반복되는 내용을 모아 초안을 만들고, 과장·오해의 소지가 있는
        표현이 없는지 편집팀이 함께 검토합니다. 작성 과정에서 보조 도구를 사용하더라도, 발행 전에는
        반드시 사람이 사실관계와 표현, 건전성 기준을 확인합니다. 정보가 바뀌면 해당 글을 갱신하고
        발행일을 함께 표기합니다.
      </p>

      <h2>왜 만드나 (Why)</h2>
      <p>
        우리가 글을 쓰는 이유는 단 하나, 처음 이용하는 분도 과장된 광고에 휘둘리지 않고 스스로
        판단할 수 있도록 돕기 위해서입니다. 검색 순위만을 위한 대량 콘텐츠나 지역명만 바꾼 복제
        글은 만들지 않습니다. 각 글은 실제 예약·이용에 필요한 정보를 담고, 다른 곳에서 그대로
        옮긴 요약이 아니라 우리의 안내 경험에서 정리한 내용으로 구성합니다.
      </p>

      <h2>검토 기준</h2>
      <ul>
        <li>의료 효과·치료·완치 등 단정적 표현을 사용하지 않습니다.</li>
        <li>성적·불법 서비스나 이를 암시하는 표현을 싣지 않습니다.</li>
        <li>요금·위생·안전 정보는 운영 기준과 일치하도록 확인합니다.</li>
        <li>건강에 관한 우려는 전문 의료기관의 진료를 우선 권합니다.</li>
      </ul>

      <h2>책임과 정정</h2>
      <p>
        발행된 글의 내용에 대한 책임은 발행 주체인 {SITE.name}에 있습니다. 사실과 다른 내용이나
        개선이 필요한 부분을 발견하셨다면 고객센터를 통해 알려 주세요. 확인 후 신속히 정정하고,
        필요한 경우 글을 갱신합니다. 발행 주체와 연락 채널은 사업자 정보 페이지에서 확인하실 수
        있습니다.
      </p>

      <h2>한계 안내</h2>
      <p>
        8 마사지 매거진의 글은 휴식과 컨디션 관리를 돕는 일반적인 정보 제공을 목적으로 하며, 의학적
        조언이나 진단을 대신하지 않습니다. 통증이 지속되거나 건강에 우려가 있다면 반드시 전문
        의료기관의 진료를 받으시길 권합니다.
      </p>
    </StandardPage>
  );
}
