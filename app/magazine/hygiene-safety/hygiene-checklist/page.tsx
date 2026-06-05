import type { Metadata } from "next";
import MagazineArticle from "@/components/MagazineArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/magazine/hygiene-safety/hygiene-checklist/";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 이용 전 위생 체크리스트 | 8 마사지 매거진",
  description:
    "방문 케어를 안심하고 이용하기 위한 위생 체크리스트를 정리했습니다. 손 위생, 용품 관리, 공간 준비 등 확인하면 좋은 항목을 안내합니다.",
  path,
});

export default function Page() {
  return (
    <MagazineArticle
      category="위생·안전 체크"
      categoryHref="/magazine/hygiene-safety/"
      title="출장마사지 이용 전 위생 체크리스트"
      description="안심하고 방문 케어를 받기 위해 이용 전 확인하면 좋은 위생 항목을 정리했습니다."
      path={path}
      datePublished="2026-03-03"
      faqs={[
        {
          q: "위생은 고객이 확인할 수 있나요?",
          a: "네. 위생은 감추는 영역이 아니라 투명하게 안내하는 영역입니다. 궁금한 점은 케어 전후로 편하게 확인하실 수 있습니다.",
        },
        {
          q: "케어 전 공간은 어떻게 준비하나요?",
          a: "편안히 누울 공간과 적당한 환기, 가벼운 샤워면 충분합니다. 특별한 소독 장비를 갖출 필요는 없습니다.",
        },
        {
          q: "위생이 우려되면 어떻게 하나요?",
          a: "케어 중이라도 즉시 알려 주세요. 상황을 확인하고 바로 조치하며, 이후 개선에 반영합니다.",
        },
      ]}
      related={[
        { title: "위생 관리 기준", href: "/safety/hygiene/", description: "위생 관리 방식 상세" },
        { title: "고객 보호 정책", href: "/safety/customer-protection/", description: "안전한 이용 환경" },
        { title: "예약 문의", href: "/booking-inquiry/", description: "가능 여부 확인하기" },
      ]}
    >
      <p>
        방문 케어는 익숙한 공간에서 이루어지는 만큼, 위생에 대한 신뢰가 편안함의 출발점이 됩니다.
        위생은 관리자 측의 책임이 가장 크지만, 고객이 미리 확인하고 준비하면 서로 더 쾌적한 시간을
        보낼 수 있습니다. 이 글에서는 이용 전에 점검하면 좋은 위생 항목을 체크리스트 형태로
        정리했습니다.
      </p>

      <h2>핵심 설명</h2>
      <p>
        위생 점검의 목적은 ‘안심하고 휴식에 집중할 수 있는 상태’를 만드는 것입니다. 거창한 절차가
        아니라, 기본을 빠짐없이 확인하는 것이 핵심입니다.
      </p>

      <h2>위생 체크리스트</h2>
      <ul>
        <li><strong>손 위생</strong> · 케어 전 손 위생이 관리되는지 자연스럽게 확인할 수 있습니다.</li>
        <li><strong>용품 청결</strong> · 직접 닿는 용품이 청결하게 관리되는지 안내받을 수 있습니다.</li>
        <li><strong>향·오일</strong> · 민감도가 있다면 미리 알려 종류와 정도를 조절합니다.</li>
        <li><strong>공간 준비</strong> · 가벼운 샤워와 환기로 쾌적한 상태를 만듭니다.</li>
        <li><strong>마무리 정돈</strong> · 케어 후 공간이 처음 상태에 가깝게 정돈되는지 살핍니다.</li>
      </ul>

      <h2>주의사항</h2>
      <p>
        위생을 이유로 과도한 준비를 하실 필요는 없습니다. 또한 위생과 관련해 질문하는 것을
        부담스러워하지 마세요. 신뢰할 수 있는 안내라면 위생에 대한 질문에 분명하게 답합니다. 만약
        설명을 회피하거나 기준이 불투명하다면, 오히려 그것이 주의 신호일 수 있습니다.
      </p>

      <h2>8 마사지는 이렇게 안내합니다</h2>
      <p>
        8 마사지는 손 위생과 용품 청결, 공간 존중을 기본으로 지키며, 위생을 지역이나 시간대에 따라
        느슨하게 적용하지 않습니다. 위생과 관련해 궁금한 점은 언제든 확인하실 수 있습니다. 자세한
        기준은 위생 관리 기준 페이지에서, 안전과 관련한 내용은 고객 보호 정책 페이지에서 확인하실
        수 있습니다.
      </p>
    </MagazineArticle>
  );
}
