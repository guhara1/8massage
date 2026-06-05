import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";
import { PageHero, Prose, ContactCTA, InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 가격 안내 | 60·90·120분 요금 | 8 마사지",
  description:
    "8 마사지 출장마사지 요금 안내입니다. 60분 90,000원, 90분 150,000원, 120분 180,000원. 숨겨진 추가 비용 없이 투명하게 안내합니다.",
  path: "/price/",
});

const faqs = [
  {
    q: "안내된 금액 외에 추가 비용이 있나요?",
    a: "기본 요금은 60분 90,000원, 90분 150,000원, 120분 180,000원입니다. 사전에 안내되지 않은 추가 비용은 발생하지 않으며, 포함 항목과 조건을 상담 단계에서 명확히 안내합니다.",
  },
  {
    q: "지역에 따라 요금이 달라지나요?",
    a: "기본 요금은 동일하게 적용됩니다. 다만 방문 지역과 이동 거리, 예약 시간대에 따라 안내가 더해질 수 있으며, 이 경우에도 동의 없이 비용이 추가되지 않습니다.",
  },
  {
    q: "어떤 코스를 선택하면 좋을까요?",
    a: "가볍게 컨디션을 정리하고 싶다면 60분, 아로마를 포함한 충분한 휴식을 원한다면 90분, 전신을 여유 있게 관리하고 싶다면 120분을 권합니다. 상태를 알려 주시면 함께 추천해 드립니다.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="예약·요금"
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "예약·요금", path: "/booking/" },
              { name: "요금 안내", path: "/price/" },
            ]}
          />
        }
        title="출장마사지 가격 안내"
        description="60·90·120분 코스별 기본 요금을 투명하게 안내합니다. 숨겨진 추가 비용은 없습니다."
      />

      {/* 다크 요금 밴드 */}
      <section className="relative overflow-hidden bg-navy-900 bg-hero-radial">
        <div className="bg-noise absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative py-14 sm:py-16">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">
              코스별 요금
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-100/75">
              아래 금액은 기본 요금이며, 지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.
            </p>
          </div>
          <PriceTable variant="dark" />
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
          <article>
            <Prose>
              <h2>투명한 요금 원칙</h2>
              <p>
                8 마사지의 요금은 복잡하지 않습니다. 60분 90,000원, 90분 150,000원, 120분
                180,000원의 기본 요금을 기준으로 안내하며, 이 금액 안에 케어 진행이 포함됩니다.
                막연한 ‘최저가’를 내세우거나 안내되지 않은 비용을 더하지 않습니다. 가격을 분명히
                밝히는 것이 신뢰를 지키는 가장 좋은 방법이라고 생각합니다.
              </p>

              <blockquote>
                좋은 케어의 시작은 정직한 가격표입니다. 보이지 않는 비용은 만들지 않습니다.
              </blockquote>

              <h2>코스 구성 안내</h2>
              <p>
                60분 코스는 어깨·목 등 특정 부위의 뻐근함을 가볍게 풀거나 짧은 휴식을 원하는 분께
                적합합니다. 90분 코스는 아로마를 포함해 전신을 충분히 이완하는 가장 인기 있는
                구성입니다. 120분 코스는 시간에 쫓기지 않고 전신을 집중적으로 관리하고 싶을 때
                권합니다. 어떤 코스가 맞을지 고민된다면 현재 상태와 일정만 알려 주세요. 더 비싼
                코스를 권하기보다 실제로 도움이 되는 선택을 함께 찾습니다.
              </p>

              <h2>요금에 영향을 주는 요소</h2>
              <ul>
                <li><strong>진행 시간</strong> · 60·90·120분 중 선택한 코스</li>
                <li><strong>서비스 구성</strong> · 컨디션·근육 이완·아로마 등 케어 방향</li>
                <li><strong>방문 지역·이동 거리</strong> · 기본 요금에 안내가 더해질 수 있음</li>
                <li><strong>예약 시간대</strong> · 피크 시간 여부와 예약 현황</li>
              </ul>

              <h2>결제와 추가 비용</h2>
              <p>
                결제는 요금 기준과 케어 내용에 동의하신 뒤 안내된 방식으로 진행됩니다. 사전에
                합의되지 않은 비용이 임의로 청구되는 일은 없으며, 방문 지역이나 시간대에 따라 안내가
                더해질 경우에도 반드시 미리 알려 드리고 동의를 받습니다. 결제 방식과 확인사항은 결제
                안내 페이지에서 자세히 확인하실 수 있습니다.
              </p>

              <h2>합리적인 선택을 위해</h2>
              <p>
                더 긴 코스가 항상 더 나은 선택은 아닙니다. 그날의 컨디션과 일정, 예산에 맞는 구성을
                고르는 것이 가장 만족도가 높습니다. 8 마사지는 불필요한 옵션을 권하지 않으며, 요금과
                케어 내용을 충분히 비교한 뒤 결정하실 수 있도록 돕습니다. 요금이 정해지는 자세한
                기준이 궁금하다면 매거진의 ‘가격이 달라지는 기준’ 글도 함께 참고해 보세요.
              </p>
            </Prose>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
              관련 안내
            </p>
            <SafetyNoticeBox>
              8 마사지는 사전에 안내되지 않은 추가 비용을 요구하지 않으며, 모든 요금 기준을 상담
              단계에서 투명하게 안내합니다.
            </SafetyNoticeBox>
            <div className="space-y-3">
              <InternalLinkCard title="예약 방법" href="/booking/" description="단계별 예약 절차 안내" />
              <InternalLinkCard title="결제 안내" href="/booking/payment/" description="결제 방식과 확인사항" />
              <InternalLinkCard title="가격이 달라지는 기준" href="/magazine/visit-massage-guide/price-factors/" description="요금 요소를 자세히 정리한 글" />
            </div>
          </aside>
        </div>

        <div className="mt-20 max-w-[46rem]">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading title="요금 안내 FAQ" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-20">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
