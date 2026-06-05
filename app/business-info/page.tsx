import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "사업자 정보 | 8 마사지",
  description:
    "8 마사지의 사업자 정보 안내 페이지입니다. 운영 주체와 안내 채널, 책임 범위를 투명하게 밝힙니다.",
  path: "/business-info/",
});

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "안전·정책", path: "/safety/hygiene/" },
        { name: "사업자 정보", path: "/business-info/" },
      ]}
      title="사업자 정보"
      description="8 마사지를 운영하는 주체와 안내 채널에 관한 정보를 투명하게 밝힙니다."
      cta={false}
      aside={
        <>
          <SafetyNoticeBox>
            아래 정보는 실제 운영 정보로 교체하여 사용하세요. 허위·과장된 정보는 기재하지 않습니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="이용약관" href="/terms/" description="서비스 이용 조건" />
            <InternalLinkCard title="개인정보처리방침" href="/privacy/" description="정보 보호 원칙" />
            <InternalLinkCard title="1:1 문의" href="/contact/" description="문의 및 신고" />
          </div>
        </>
      }
    >
      <h2>운영 주체 안내</h2>
      <p>
        8 마사지는 건전한 방문 케어 정보를 안내하는 사이트입니다. 본 페이지에는 운영 주체에 관한
        정보를 투명하게 기재합니다. 아래 항목은 실제 운영 정보로 채워 사용해야 하며, 사실과 다른
        정보를 기재하지 않습니다.
      </p>

      <h2>사업자 정보 항목</h2>
      <ul>
        <li><strong>상호</strong> · 8 마사지 (운영 시 정식 상호로 기재)</li>
        <li><strong>대표자</strong> · (운영 시 기재)</li>
        <li><strong>사업자등록번호</strong> · (운영 시 기재)</li>
        <li><strong>전화 예약</strong> · <a href={SITE.contact.phoneTel}>{SITE.contact.phone}</a></li>
        <li><strong>안내 채널</strong> · 전화 예약 및 고객센터 1:1 문의, 예약 문의 페이지</li>
        <li><strong>안내 시간</strong> · {SITE.contact.hours}</li>
      </ul>

      <h2>안내 채널</h2>
      <p>
        예약 가능 여부 확인은 예약 문의 페이지를, 일반 문의와 불편 신고는 고객센터 1:1 문의를
        이용해 주세요. 출처가 불분명한 채널을 통한 요청에는 응하지 않으셔도 되며, 의심되는 상황은
        바로 알려 주시기 바랍니다.
      </p>

      <h2>책임 범위 안내</h2>
      <p>
        8 마사지가 제공하는 안내는 건전한 방문 케어와 관련한 정보 제공을 목적으로 하며, 의료
        행위가 아닙니다. 통증이 지속되거나 건강에 우려가 있는 경우에는 전문 의료기관의 진료를 먼저
        받으시길 권합니다. 본 사이트는 성적·불법 서비스 및 사전에 합의되지 않은 요청을 제공하지
        않습니다. 별도의 오프라인 매장 주소를 운영하지 않는 경우, 위치 기반의 오인을 막기 위해
        LocalBusiness 정보를 임의로 기재하지 않습니다.
      </p>
    </StandardPage>
  );
}
