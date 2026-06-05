import type { Metadata } from "next";
import MagazineArticle from "@/components/MagazineArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/magazine/visit-massage-guide/before-use/";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 이용 전 준비사항 총정리 | 8 마사지 매거진",
  description:
    "출장마사지 이용 전 공간 준비, 시간 확보, 위생 확인, 복장과 환경까지 한 번에 정리했습니다. 편안한 방문 케어를 위한 준비 가이드입니다.",
  path,
});

export default function Page() {
  return (
    <MagazineArticle
      category="출장마사지 가이드"
      categoryHref="/magazine/visit-massage-guide/"
      title="출장마사지 이용 전 준비사항 총정리"
      description="편안한 방문 케어를 위해 미리 준비하면 좋은 항목을 공간·시간·위생·환경으로 나누어 정리했습니다."
      path={path}
      datePublished="2026-01-20"
      faqs={[
        {
          q: "특별한 장비를 준비해야 하나요?",
          a: "아닙니다. 편안히 누울 수 있는 공간과 적당한 실내 온도면 충분합니다. 별도의 장비는 필요하지 않습니다.",
        },
        {
          q: "케어 전에 샤워를 해야 하나요?",
          a: "필수는 아니지만, 가벼운 샤워와 편안한 복장 준비는 서로 더 쾌적하게 시간을 보내는 데 도움이 됩니다.",
        },
        {
          q: "시간은 얼마나 비워 두면 좋나요?",
          a: "이동·준비·케어·마무리를 고려해 예약 시간 앞뒤로 여유를 두는 것이 좋습니다. 촉박한 일정은 휴식의 효과를 떨어뜨립니다.",
        },
      ]}
      related={[
        { title: "이용 전 준비사항", href: "/services/before-use/", description: "준비 항목 상세 안내" },
        { title: "위생 관리 기준", href: "/safety/hygiene/", description: "위생 관리 방식" },
        { title: "예약 문의", href: "/booking-inquiry/", description: "가능 여부 바로 확인하기" },
      ]}
    >
      <p>
        방문 케어의 만족도는 케어 자체뿐 아니라 ‘준비’에서 크게 갈립니다. 익숙한 공간에서 받는
        케어인 만큼, 작은 준비만으로도 훨씬 편안한 시간을 만들 수 있습니다. 이 글에서는 이용 전에
        챙기면 좋은 준비사항을 공간, 시간, 위생, 환경으로 나누어 정리했습니다. 부담스러운 준비는
        하나도 없으니 가볍게 읽고 따라와 보세요.
      </p>

      <h2>핵심 설명</h2>
      <p>
        준비의 목적은 단 하나, ‘케어에 온전히 집중할 수 있는 환경을 만드는 것’입니다. 거창한
        세팅이 아니라, 방해 요소를 줄이고 편안함을 더하는 작은 손질이면 충분합니다.
      </p>

      <h2>이용 전 준비 체크리스트</h2>
      <ul>
        <li><strong>공간</strong> · 편안히 누울 수 있는 평평한 자리와 약간의 여유 공간을 확보합니다.</li>
        <li><strong>시간</strong> · 예약 시간 앞뒤로 여유를 두어 촉박하지 않게 합니다.</li>
        <li><strong>위생</strong> · 가벼운 샤워와 환기로 쾌적한 상태를 준비합니다.</li>
        <li><strong>복장</strong> · 편안한 옷차림으로 긴장을 줄입니다.</li>
        <li><strong>환경</strong> · 조명을 은은하게 하고 알림을 잠시 줄여 방해를 최소화합니다.</li>
      </ul>

      <h2>주의사항</h2>
      <p>
        준비 과정에서 무리하게 공간을 바꾸거나 비싼 용품을 마련할 필요는 없습니다. 또한 방문 전
        연락이 닿을 수 있도록 준비해 두면 도착 안내가 매끄럽습니다. 향에 민감하다면 예약 시 미리
        알려 주세요. 8 마사지는 향의 종류와 사용 정도를 조절해 안내합니다. 준비 과정에서 불필요한
        개인정보를 요구받는 일은 없으며, 받은 정보는 안내 목적에만 사용됩니다.
      </p>

      <h2>8 마사지는 이렇게 안내합니다</h2>
      <p>
        8 마사지는 예약 확정 후 도착 예정 시간과 준비사항을 미리 안내드립니다. 처음 이용하시는
        분도 무엇을 준비하면 좋은지 자연스럽게 따라오실 수 있도록, 차근차근 설명해 드립니다. 더
        구체적인 준비 항목은 이용 전 준비사항 페이지에서, 위생과 관련한 내용은 위생 관리 기준
        페이지에서 확인하실 수 있습니다.
      </p>
    </MagazineArticle>
  );
}
