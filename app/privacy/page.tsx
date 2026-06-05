import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "개인정보처리방침 | 8 마사지",
  description:
    "8 마사지의 개인정보처리방침입니다. 수집 항목, 이용 목적, 보유 기간, 제3자 제공, 이용자의 권리 등 개인정보 보호 원칙을 안내합니다.",
  path: "/privacy/",
});

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "안전·정책", path: "/safety/hygiene/" },
        { name: "개인정보처리방침", path: "/privacy/" },
      ]}
      title="개인정보처리방침"
      description="8 마사지는 이용자의 개인정보를 소중히 다루며, 관련 법령에 따라 안전하게 관리합니다."
      cta={false}
      aside={
        <div className="space-y-3">
          <InternalLinkCard title="이용약관" href="/terms/" description="서비스 이용 조건" />
          <InternalLinkCard title="고객 보호 정책" href="/safety/customer-protection/" description="안전한 이용 환경" />
          <InternalLinkCard title="사업자 정보" href="/business-info/" description="운영 주체 안내" />
        </div>
      }
    >
      <p>
        8 마사지(이하 ‘사이트’)는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하여
        개인정보를 안전하게 관리합니다. 본 방침은 사이트가 어떤 정보를 어떤 목적으로 수집·이용하고
        보호하는지를 안내합니다. 본 문서는 일반적인 안내를 위한 예시이며, 실제 운영 시에는 운영
        주체의 상황에 맞게 보완하여 사용해야 합니다.
      </p>

      <h2>1. 수집하는 개인정보 항목</h2>
      <p>
        사이트는 예약 문의 및 안내에 필요한 최소한의 정보만을 수집합니다. 예약 가능 여부 확인과
        안내를 위해 희망 지역, 희망 시간대, 연락 방법 등 이용자가 문의 과정에서 직접 제공하는
        정보를 수집할 수 있습니다. 민감정보나 불필요한 식별정보는 요구하지 않습니다.
      </p>

      <h2>2. 개인정보의 이용 목적</h2>
      <ul>
        <li>예약 가능 여부 확인 및 안내</li>
        <li>문의에 대한 응답 및 고객 지원</li>
        <li>서비스 품질 개선 및 불편 사항 처리</li>
      </ul>

      <h2>3. 보유 및 이용 기간</h2>
      <p>
        수집한 개인정보는 이용 목적이 달성되면 지체 없이 파기하는 것을 원칙으로 합니다. 관련
        법령에 따라 일정 기간 보존이 필요한 경우에는 해당 기간 동안 안전하게 보관한 뒤 파기합니다.
      </p>

      <h2>4. 제3자 제공</h2>
      <p>
        사이트는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 법령에 근거가 있거나
        수사기관의 적법한 요청이 있는 경우 등 예외적인 상황에서는 관련 절차에 따라 제공될 수
        있습니다.
      </p>

      <h2>5. 개인정보의 보호 조치</h2>
      <p>
        사이트는 개인정보가 분실·도난·유출·변조되지 않도록 합리적인 보호 조치를 취합니다. 접근
        권한을 필요한 범위로 제한하고, 정보를 안내 목적 외로 활용하지 않습니다.
      </p>

      <h2>6. 이용자의 권리</h2>
      <p>
        이용자는 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요청할 수 있습니다. 요청은
        고객센터 1:1 문의를 통해 접수할 수 있으며, 사이트는 관련 법령에 따라 신속히 처리합니다.
      </p>

      <h2>7. 방침의 변경</h2>
      <p>
        본 개인정보처리방침은 법령이나 운영 방침의 변경에 따라 수정될 수 있으며, 변경 시 사이트를
        통해 안내합니다.
      </p>
    </StandardPage>
  );
}
