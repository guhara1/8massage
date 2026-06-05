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
  title: "부산 출장마사지 안내 | 해운대·서면·동래 등 부산 방문 케어 8 마사지",
  description:
    "부산 출장마사지 가능 지역을 안내합니다. 해운대·수영·센텀, 서면·부산진·동래, 남구·중구·영도, 사하·강서·사상 등 권역별 예약 정보를 확인하세요.",
  path: "/service-area/busan/",
});

const faqs = [
  {
    q: "부산은 어느 권역까지 안내되나요?",
    a: "해운대권(해운대·수영·센텀), 중심권(서면·부산진·동래), 남부권(남구·중구·영도), 서부권(사하·강서·사상) 네 권역을 안내합니다. 해안과 산지가 섞인 지형이라 권역별 이동 여건이 다르므로 예약 전 확인을 권장합니다.",
  },
  {
    q: "해운대권은 숙박 시설에서도 예약이 가능한가요?",
    a: "해운대·센텀 일대는 숙박·업무·주거 수요가 섞여 있어 호텔이나 레지던스에서의 문의가 많습니다. 출입 방식과 객실 위치를 함께 알려 주시면 도착이 매끄럽고 일정도 정확히 맞출 수 있습니다.",
  },
  {
    q: "서면 같은 중심권은 시간대 영향이 큰가요?",
    a: "서면·부산진·동래는 부산의 대표 번화가로 접근성이 좋은 대신 시간대에 따라 혼잡도가 달라집니다. 피크 시간에는 예약이 몰릴 수 있어 도착 예정 시간을 함께 확인하면 안정적입니다.",
  },
  {
    q: "서부권·남부권은 이동 거리가 먼 편인가요?",
    a: "영도·강서·사하 등은 지형 특성상 진입 동선이 단순하지 않은 구간이 있어 이동 시간 확인이 중요합니다. 가능한 시간대를 여유 있게 알려 주시면 일정을 맞추기 수월합니다.",
  },
];

const anchors = [
  { id: "haeundae", label: "해운대권" },
  { id: "central", label: "중심권" },
  { id: "south", label: "남부권" },
  { id: "west", label: "서부권" },
];

export default function BusanPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "지역 출장마사지", path: "/service-area/" },
              { name: "부산 출장마사지", path: "/service-area/busan/" },
            ]}
          />
        }
        title="부산 출장마사지 가능 지역 안내"
        description="해운대·센텀의 해운대권부터 서면·동래의 중심권, 남구·영도의 남부권, 사하·사상의 서부권까지 권역별로 안내합니다."
      />

      <Container className="py-12">
        <nav aria-label="권역별 상세 안내" className="mb-10">
          <p className="mb-3 text-sm font-semibold text-navy-900">권역별 상세 페이지</p>
          <div className="flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`/service-area/busan/${a.id}/`}
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
              <SectionHeading as="h2" title="부산 권역은 이렇게 나뉩니다" />
              <p>
                부산은 바다와 산이 도시 곳곳을 가르고 있어, 직선거리로는 가까워 보여도 실제 이동
                동선은 제법 돌아가는 경우가 많습니다. 해안을 따라 형성된 생활권과 내륙의 번화가,
                그리고 섬과 항만 지역이 각기 다른 리듬으로 움직이기 때문에, 8 마사지는 부산을
                해운대권·중심권·남부권·서부권으로 나누어 안내합니다. 부산 지역 예약에서는 지형에
                따른 이동 시간을 미리 가늠하는 것이 중요합니다. 아래 권역별 설명을 참고해 본인의
                위치가 어디에 해당하는지 확인해 보시기 바랍니다.
              </p>
            </section>

            <section>
              <SectionHeading id="haeundae" as="h2" title="해운대권 — 해운대·수영·센텀" />
              <p>
                해운대·수영·센텀을 아우르는 해운대권은 숙박과 업무, 주거 수요가 한데 섞인 부산의
                대표 권역입니다. 해변 인근의 호텔과 레지던스, 센텀의 업무 시설, 그리고 인접한 주거
                단지까지 다양한 형태의 공간에서 휴식 수요가 이어집니다. 숙박 시설을 이용 중이라면
                출입 방식과 객실 위치를, 주거지라면 단지와 동을 함께 알려 주시면 도착 동선을 매끄럽게
                안내할 수 있습니다. 관광 성수기에는 예약이 몰릴 수 있어 여유 있는 문의를 권합니다.
              </p>
            </section>

            <section>
              <SectionHeading id="central" as="h2" title="중심권 — 서면·부산진·동래" />
              <p>
                서면·부산진·동래로 이어지는 중심권은 부산 교통과 상권이 모이는 핵심 지역입니다.
                접근성이 좋아 다양한 시간대에 문의가 들어오지만, 그만큼 번화가 주변은 시간대에 따라
                혼잡도가 크게 달라집니다. 예약 시에는 도착 예정 시간을 함께 확인해 두는 것이
                안정적이며, 피크 시간대에는 조금 일찍 문의해 두시면 원하는 시간에 가까운 안내를
                받기 쉽습니다. 위치는 가까운 역이나 큰길을 기준으로 알려 주시면 좋습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="south" as="h2" title="남부권 — 남구·중구·영도" />
              <p>
                남구·중구·영도를 포함하는 남부권은 항만과 원도심, 섬 지역이 어우러진 곳으로 지형의
                개성이 뚜렷합니다. 특히 영도처럼 다리를 건너야 하는 지역은 진입 동선이 단순하지 않아,
                예약 시 이동 동선 확인이 무엇보다 중요합니다. 도착 예정 시간을 함께 점검하고, 가까운
                다리나 랜드마크를 기준으로 위치를 알려 주시면 일정이 어긋나지 않도록 조율할 수
                있습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="west" as="h2" title="서부권 — 사하·강서·사상" />
              <p>
                사하·강서·사상으로 대표되는 서부권은 주거지와 산업·물류 지역이 넓게 분포해 도시
                간 거리가 비교적 긴 편입니다. 이 권역에서는 지역 간 거리와 예약 가능 시간 확인이
                특히 중요합니다. 같은 권역이라도 위치에 따라 이동 시간이 크게 달라질 수 있으므로,
                가능한 시간대를 여유 있게 제시하고 위치를 구체적으로 알려 주시면 가능 여부를 빠르게
                확인해 드릴 수 있습니다. 사전 예약을 권장하는 권역입니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="예약 전 확인사항" />
              <ul className="list-disc space-y-1.5 pl-5">
                <li>해안·섬 지역은 진입 동선과 이동 시간을 함께 확인합니다.</li>
                <li>숙박 시설은 출입 방식과 객실 위치를 미리 공유합니다.</li>
                <li>번화가는 피크 시간대 혼잡을 고려해 여유 있게 문의합니다.</li>
                <li>서부권 등 장거리 구간은 사전 예약이 더 안정적입니다.</li>
              </ul>
            </section>

            <section>
              <SectionHeading as="h2" title="서비스 선택 기준" />
              <p>
                여행이나 출장으로 부산에 머무는 동안의 피로를 정리하고 싶다면, 일정과 상태에 맞는
                케어를 고르는 것이 좋습니다. 많이 걷거나 활동한 날에는 근육 이완 케어가, 전반적인
                긴장을 풀고 싶을 때는 컨디션 케어가, 편안한 분위기 속 휴식을 원할 때는 아로마
                케어가 어울립니다. 8 마사지는 치료나 의료 효과를 보장하지 않으며, 휴식과 컨디션
                관리를 돕는 건전한 방문 케어만 안내합니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="부산 위생·안전 안내" />
              <p>
                관광지와 주거지를 가리지 않고 위생 기준은 동일하게 유지합니다. 손 위생과 용품
                청결을 기본으로 지키고, 고객의 공간과 사생활을 존중합니다. 예약 정보는 안내
                목적에만 활용하며 안전하게 관리합니다. 자세한 내용은 위생 관리 기준과 고객 보호
                정책 페이지에서 확인하실 수 있습니다.
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
                description="부산 지역 예약 절차를 단계별로 확인하세요."
              />
              <InternalLinkCard
                title="방문 가능 시간"
                href="/booking/time/"
                description="지형을 고려한 예약 시간 안내입니다."
              />
              <InternalLinkCard
                title="요금 안내"
                href="/price/"
                description="이동 거리에 따른 요금 기준을 확인하세요."
              />
              <InternalLinkCard
                title="부산 이용 전 체크리스트"
                href="/magazine/area-tips/busan-checklist/"
                description="부산 예약 전 읽어두면 좋은 체크리스트입니다."
              />
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <PriceSection />
        </div>

        <div className="mt-14">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading as="h2" title="부산 지역 자주 묻는 질문" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-14" id="booking">
          <ContactCTA
            title="부산 지역 예약 가능 여부를 확인해 보세요"
            description="희망하시는 부산 내 위치와 시간을 알려 주시면 권역별 이동 여건을 고려해 안내해 드립니다."
          />
        </div>
      </Container>
    </>
  );
}
