import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "1:1 문의 | 8 마사지 고객센터",
  description:
    "8 마사지 고객센터 1:1 문의 안내입니다. 예약, 이용, 위생, 불편 신고 등 궁금한 점을 남겨 주시면 신중하게 확인하고 안내해 드립니다.",
  path: "/contact/",
});

const faqs = [
  {
    q: "어떤 내용을 문의할 수 있나요?",
    a: "예약과 이용 방법, 요금, 위생, 불편 신고 등 무엇이든 문의하실 수 있습니다. 예약 가능 여부는 예약 문의 페이지를 이용하시면 더 빠르게 안내됩니다.",
  },
  {
    q: "불편 신고도 1:1 문의로 하나요?",
    a: "네. 불편한 점이 있으셨다면 1:1 문의로 알려 주세요. 신중하게 확인하고 필요한 조치와 개선을 진행합니다. 신고로 인한 불이익은 없습니다.",
  },
  {
    q: "답변은 언제 받을 수 있나요?",
    a: `안내 시간은 ${SITE.contact.hours} 기준이며, 문의량에 따라 다소 시간이 걸릴 수 있습니다. 순서대로 성실히 답변드립니다.`,
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "고객센터", path: "/contact/" },
        { name: "1:1 문의", path: "/contact/" },
      ]}
      title="1:1 문의"
      description="궁금한 점이나 불편한 점을 남겨 주세요. 8 마사지가 신중하게 확인하고 안내해 드립니다."
      faqs={faqs}
      faqHeading="1:1 문의 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            문의 과정에서 불필요한 개인정보는 요청하지 않으며, 받은 정보는 안내 목적에만
            사용합니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="예약 문의" href="/booking-inquiry/" description="예약 가능 여부 확인" />
            <InternalLinkCard title="자주 묻는 질문" href="/faq/" description="빠른 답변 먼저 확인" />
            <InternalLinkCard title="공지사항" href="/notice/" description="운영 관련 안내 확인" />
          </div>
        </>
      }
    >
      <h2>무엇이든 편하게 문의하세요</h2>
      <p>
        8 마사지 고객센터는 예약과 이용에 관한 궁금증부터 위생·안전, 불편 신고에 이르기까지
        다양한 문의를 받습니다. 처음 이용하시는 분이라면 작은 것이라도 부담 없이 물어봐 주세요.
        명확한 안내가 곧 신뢰의 시작이라고 생각하기에, 어떤 질문에도 성실히 답하려 노력합니다.
      </p>

      <h2>문의 전 확인하면 좋은 것</h2>
      <p>
        많은 분이 궁금해하시는 내용은 자주 묻는 질문 페이지에 정리되어 있습니다. 예약 절차, 가능
        지역, 요금 기준, 위생 관리, 제공하지 않는 서비스 등 핵심 내용을 빠르게 확인하실 수
        있으니, 문의 전에 한 번 살펴보시면 더 빠르게 답을 찾으실 수 있습니다. 예약 가능 여부가
        궁금하시다면 예약 문의 페이지를 이용하시는 편이 신속합니다.
      </p>

      <h2>불편 신고 안내</h2>
      <p>
        이용 과정에서 불편하거나 우려되는 일이 있으셨다면 주저하지 말고 알려 주세요. 접수된 내용은
        신중하게 확인하고, 필요한 조치와 재발 방지를 위한 개선을 진행합니다. 신고를 이유로 한
        불이익은 없으며, 오히려 더 나은 서비스를 만드는 소중한 의견으로 받아들입니다. 안전과
        관련한 자세한 내용은 고객 보호 정책 페이지에서 확인하실 수 있습니다.
      </p>

      <h2>안내 시간</h2>
      <p>
        안내 시간은 {SITE.contact.hours} 기준이며, 문의량에 따라 답변에 다소 시간이 걸릴 수
        있습니다. 접수된 문의는 순서대로 성실히 확인해 안내해 드리니 조금만 기다려 주시면
        감사하겠습니다.
      </p>
    </StandardPage>
  );
}
