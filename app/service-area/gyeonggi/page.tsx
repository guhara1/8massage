import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import PriceSection from "@/components/PriceSection";
import { PageHero, ContactCTA, SafetyNoticeBox, InternalLinkCard } from "@/components/ui";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "경기 출장마사지 안내 | 성남·분당·수원 등 경기 방문 케어 8 마사지",
  description:
    "경기 출장마사지 가능 지역을 안내합니다. 성남·분당·수원, 부천·안산·시흥, 하남·남양주·구리, 고양·의정부·파주 등 권역별 예약 정보를 확인하세요.",
  path: "/service-area/gyeonggi/",
});

const faqs = [
  {
    q: "경기도는 어느 권역까지 안내되나요?",
    a: "경기는 면적이 넓어 남부·서부·동부·북부 네 권역으로 나누어 안내합니다. 같은 권역 안에서도 도시 간 거리가 멀 수 있어, 정확한 가능 여부는 도시명과 희망 시간을 함께 알려 주시면 확인해 드립니다.",
  },
  {
    q: "경기 남부와 서울 강남은 이동이 가까운 편인가요?",
    a: "성남·분당은 서울 남부와 생활권이 이어지는 구간이 있어 시간대에 따라 비교적 조율이 수월한 편입니다. 다만 출퇴근 시간대에는 도로 상황이 크게 달라지므로 도착 예정 시간을 함께 확인하는 것이 좋습니다.",
  },
  {
    q: "경기 외곽 지역은 당일 예약이 어려운가요?",
    a: "도시 간 이동 거리가 긴 지역은 당일보다 사전 예약이 안정적입니다. 미리 시간을 정해두면 이동 일정을 맞추기 쉬워, 원하는 시간대에 가까운 안내를 받을 수 있습니다.",
  },
  {
    q: "예약할 때 어떤 정보를 알려주면 좋나요?",
    a: "도시명과 대략적인 위치, 희망 시간대를 알려 주시면 가능 여부를 더 빠르게 확인할 수 있습니다. 경기는 같은 시·군 안에서도 거리가 멀 수 있어 위치 정보가 구체적일수록 조율이 정확해집니다.",
  },
];

const anchors = [
  { id: "south", label: "남부" },
  { id: "west", label: "서부" },
  { id: "east", label: "동부" },
  { id: "north", label: "북부" },
];

export default function GyeonggiPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "지역 출장마사지", path: "/service-area/" },
              { name: "경기 출장마사지", path: "/service-area/gyeonggi/" },
            ]}
          />
        }
        title="경기 출장마사지 가능 지역 안내"
        description="성남·분당·수원의 남부권부터 부천·안산의 서부권, 하남·남양주의 동부권, 고양·파주의 북부권까지 권역별로 안내합니다."
      />

      <Container className="py-12">
        <nav aria-label="권역별 상세 안내" className="mb-10">
          <p className="mb-3 text-sm font-semibold text-navy-900">권역별 상세 페이지</p>
          <div className="flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`/service-area/gyeonggi/${a.id}/`}
                className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-800 shadow-card transition-colors hover:border-gold-300 hover:text-gold-700"
              >
                {a.label} →
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="editorial-count max-w-[42rem] space-y-12 text-[16px] leading-[1.9] text-ink-700 sm:text-[17px]">
            <section>
              <SectionHeading as="h2" title="경기 권역은 이렇게 나뉩니다" />
              <p>
                경기도는 서울을 둘러싸고 넓게 펼쳐진 만큼, 하나의 기준으로 묶어 설명하기 어려운
                지역입니다. 도시마다 생활 리듬이 다르고, 같은 시·군 안에서도 이동 거리가 상당히
                차이 나기 때문에 8 마사지는 경기를 남부·서부·동부·북부 네 권역으로 나누어
                안내합니다. 경기 지역 예약에서 가장 중요한 변수는 ‘이동 시간’입니다. 따라서 막연한
                지역명보다 구체적인 도시와 위치, 그리고 희망 시간대를 함께 알려 주실수록 정확한
                안내가 가능합니다. 아래에서 각 권역의 특징을 확인해 보시기 바랍니다.
              </p>
            </section>

            <section>
              <SectionHeading id="south" as="h2" title="남부 — 성남·분당·수원" />
              <p>
                성남·분당·수원을 중심으로 한 경기 남부는 오피스와 주거, 상권이 고르게 섞여 있어
                생활 수요가 두터운 권역입니다. 분당과 판교 일대는 업무 일정 뒤의 휴식 수요가,
                수원은 넓은 주거권을 배경으로 한 일상 케어 수요가 꾸준합니다. 서울 남부와 생활권이
                이어지는 구간이 있어 시간대에 따라 조율이 비교적 수월하지만, 출퇴근 시간에는 도로
                상황이 크게 달라지므로 도착 예정 시간을 함께 확인하는 것이 좋습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="west" as="h2" title="서부 — 부천·안산·시흥" />
              <p>
                부천·안산·시흥으로 이어지는 경기 서부는 도시들이 가깝게 붙어 있으면서도 각각의
                생활권이 뚜렷한 지역입니다. 이 권역에서 예약을 준비하실 때는 이동 거리와 예약 시간
                확인이 특히 중요합니다. 도시 경계가 맞닿아 있어 가깝게 느껴지더라도 실제 이동
                동선은 시간대에 따라 달라질 수 있기 때문입니다. 희망 시간을 두세 개로 열어두고,
                위치를 구체적으로 알려 주시면 가능 여부를 빠르게 확인해 드릴 수 있습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="east" as="h2" title="동부 — 하남·남양주·구리" />
              <p>
                하남·남양주·구리를 포함하는 경기 동부는 서울 동쪽과 맞닿아 있으면서 신도시와
                기존 주거지가 함께 자리한 권역입니다. 지역에 따라 진입 동선이 단순하지 않은 곳이
                있어, 예약 시 지역 간 이동 동선을 함께 확인하는 것이 도움이 됩니다. 가까운 큰길이나
                랜드마크를 기준으로 위치를 알려 주시면 도착 시간을 예측하기 쉽고, 일정이 서로
                어긋나지 않도록 조율할 수 있습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="north" as="h2" title="북부 — 고양·의정부·파주" />
              <p>
                고양·의정부·파주로 대표되는 경기 북부는 주거권이 넓게 분포하고 도시 사이 간격이
                있는 편이라, 예약 가능 시간대 확인이 가장 중요한 권역입니다. 원하는 시간과 이동
                시간이 맞물려야 하므로, 한 가지 시간만 고집하기보다 가능한 시간대를 여유 있게
                제시해 주시면 조율이 한결 수월합니다. 사전에 미리 문의해 두실수록 원하는 시간에
                가까운 안내를 받을 수 있습니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="예약 전 확인사항" />
              <ul className="list-disc space-y-1.5 pl-5">
                <li>도시명과 대략적인 위치를 구체적으로 알려 주세요.</li>
                <li>이동 시간을 고려해 희망 시간대를 여유 있게 제시합니다.</li>
                <li>외곽·장거리 구간은 사전 예약이 더 안정적입니다.</li>
                <li>도착 예정 시간을 함께 확인해 일정이 어긋나지 않게 합니다.</li>
              </ul>
            </section>

            <section>
              <SectionHeading as="h2" title="서비스 선택 기준" />
              <p>
                경기 지역은 이동 시간이 길어질 수 있어, 방문 후 충분히 휴식할 수 있는 시간을
                확보해 두는 것이 만족도를 높입니다. 활동량이 많았던 날에는 근육 이완 케어를,
                전반적인 피로를 풀고 싶을 때는 컨디션 케어를, 편안한 분위기를 원할 때는 아로마
                케어를 고려해 보세요. 8 마사지는 치료나 의료 효과를 약속하지 않으며, 휴식과 컨디션
                관리를 돕는 건전한 방문 케어만 안내합니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="경기 위생·안전 안내" />
              <p>
                넓은 지역을 이동하더라도 위생 기준은 동일하게 유지합니다. 손 위생과 용품 청결을
                기본으로 지키고, 고객의 생활 공간과 사생활을 존중합니다. 예약 정보는 안내 목적에만
                활용하며 안전하게 관리합니다. 더 자세한 내용은 위생 관리 기준과 고객 보호 정책
                페이지에서 확인하실 수 있습니다.
              </p>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <SafetyNoticeBox>
              8 마사지는 건전한 방문 케어만 안내하며, 성적·불법 요청이나 사전에 합의되지 않은
              요청은 제공하지 않습니다.
            </SafetyNoticeBox>
            <div className="space-y-3">
              <InternalLinkCard
                title="예약 방법 안내"
                href="/booking/"
                description="경기 지역 예약 절차를 단계별로 확인하세요."
              />
              <InternalLinkCard
                title="방문 가능 시간"
                href="/booking/time/"
                description="이동 시간을 고려한 예약 시간 안내입니다."
              />
              <InternalLinkCard
                title="요금 안내"
                href="/price/"
                description="지역·이동 거리에 따른 요금 기준을 확인하세요."
              />
              <InternalLinkCard
                title="경기 이용 시 확인사항"
                href="/magazine/area-tips/gyeonggi-checklist/"
                description="경기 예약 전 읽어두면 좋은 체크리스트입니다."
              />
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <PriceSection />
        </div>

        <div className="mt-14">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading as="h2" title="경기 지역 자주 묻는 질문" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-14" id="booking">
          <ContactCTA
            title="경기 지역 예약 가능 여부를 확인해 보세요"
            description="도시명과 희망 시간을 알려 주시면 권역별 이동 여건을 고려해 안내해 드립니다."
          />
        </div>
      </Container>
    </>
  );
}
