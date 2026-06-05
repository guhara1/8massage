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
  title: "서울 출장마사지 안내 | 강남·서초·송파 등 서울 방문 케어 8 마사지",
  description:
    "서울 출장마사지 가능 지역을 안내합니다. 강남·서초·송파, 용산·중구·종로, 마포·은평·서대문, 노원·도봉·강북 등 서울 권역별 예약 정보를 확인하세요.",
  path: "/service-area/seoul/",
});

const faqs = [
  {
    q: "서울 전 지역에서 방문이 가능한가요?",
    a: "서울은 권역별로 이동 동선과 예약 현황이 달라 시간대에 따라 가능 여부가 변동될 수 있습니다. 강남권·도심권·서북권·동북권 모두 안내 대상이며, 정확한 가능 여부는 희망 위치와 시간을 알려 주시면 확인해 드립니다.",
  },
  {
    q: "강남권은 늦은 시간에도 예약이 가능한가요?",
    a: "강남·서초·송파 일대는 야간 이동 수요가 있어 시간대별 예약이 비교적 활발한 편입니다. 다만 피크 시간에는 대기가 생길 수 있으므로 여유 있게 문의하시면 조율이 수월합니다.",
  },
  {
    q: "도심권은 호텔이나 숙박 시설에서도 가능한가요?",
    a: "용산·중구·종로 등 도심권은 업무·숙박 일정과 연계되는 경우가 많습니다. 방문 장소의 형태와 출입 방식에 따라 안내가 달라질 수 있어, 예약 시 장소 정보를 함께 알려 주시면 도움이 됩니다.",
  },
  {
    q: "서북권·동북권은 예약 시 무엇을 확인하면 좋나요?",
    a: "마포·은평·서대문, 노원·도봉·강북 등은 주거 밀집 지역이 넓어 이동 시간이 변수입니다. 도착 예정 시간과 가능 시간대를 미리 확인하면 예약이 한결 매끄럽습니다.",
  },
];

const anchors = [
  { id: "gangnam", label: "강남권" },
  { id: "central", label: "도심권" },
  { id: "northwest", label: "서북권" },
  { id: "northeast", label: "동북권" },
];

export default function SeoulPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "지역 출장마사지", path: "/service-area/" },
              { name: "서울 출장마사지", path: "/service-area/seoul/" },
            ]}
          />
        }
        title="서울 출장마사지 가능 지역 안내"
        description="강남권부터 도심권, 서북권, 동북권까지 서울 권역별 방문 케어 가능 범위와 예약 전 확인사항을 정리했습니다."
      />

      <Container className="py-12">
        <nav aria-label="권역별 상세 안내" className="mb-10">
          <p className="mb-3 text-sm font-semibold text-navy-900">권역별 상세 페이지</p>
          <div className="flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`/service-area/seoul/${a.id}/`}
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
              <SectionHeading as="h2" title="서울 권역은 이렇게 나뉩니다" />
              <p>
                서울은 면적에 비해 생활권이 촘촘하게 나뉘어 있고, 업무지구와 주거지, 상업지가
                서로 다른 리듬으로 움직입니다. 8 마사지는 이런 서울의 특성을 고려해 권역을 네 곳으로
                나누어 안내합니다. 같은 ‘서울’ 안에서도 위치와 시간대에 따라 이동 동선과 가능 여부가
                달라지기 때문에, 막연히 ‘서울 전 지역’이라고 표현하기보다 권역별 상황을 솔직하게
                전하는 편이 예약을 준비하시는 분께 더 도움이 된다고 보았습니다. 아래 권역 설명을
                참고해 본인의 위치가 어디에 해당하는지 먼저 확인해 보시기 바랍니다.
              </p>
            </section>

            <section>
              <SectionHeading id="gangnam" as="h2" title="강남권 — 강남·서초·송파" />
              <p>
                강남·서초·송파를 아우르는 강남권은 오피스 밀집 지역과 호텔, 대규모 주거 단지가
                가까이 붙어 있는 것이 특징입니다. 업무를 마친 저녁 시간이나 출장·숙박 일정 사이에
                휴식을 찾는 분이 많아, 시간대별로 예약 문의가 고르게 이어지는 편입니다. 다만 그만큼
                특정 시간에 예약이 몰릴 수 있어, 원하는 시간이 분명하다면 조금 일찍 문의해 두시는
                편이 안전합니다. 빌딩이나 호텔처럼 출입 절차가 있는 장소라면 도착 후 동선이
                매끄럽도록 위치를 구체적으로 공유해 주시면 도움이 됩니다.
              </p>
            </section>

            <section>
              <SectionHeading id="central" as="h2" title="도심권 — 용산·중구·종로" />
              <p>
                용산·중구·종로를 묶은 도심권은 업무 일정과 숙박이 자연스럽게 이어지는 지역입니다.
                회의나 출장으로 잠시 머무는 동안 컨디션을 정리하려는 수요가 있어, 일정 사이의 짧은
                틈을 활용하는 예약이 많습니다. 도심은 도로 사정과 주차 여건이 시간대에 따라 크게
                달라지므로, 이동 동선을 미리 가늠하고 도착 예정 시간을 함께 확인하면 일정이
                꼬이지 않습니다. 숙박 시설을 이용 중이라면 객실 위치와 출입 방식을 알려 주시는 것이
                좋습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="northwest" as="h2" title="서북권 — 마포·은평·서대문" />
              <p>
                마포·은평·서대문으로 이어지는 서북권은 주거 지역의 비중이 높고 동네마다 분위기가
                다른 곳입니다. 생활 반경 안에서 편안한 휴식을 찾는 분이 많아, 늦은 오후부터 저녁
                시간대 문의가 꾸준합니다. 서북권은 지역에 따라 진입로와 이동 시간이 제법 차이가 날
                수 있어, 예약 전에 대략적인 이동 시간을 함께 확인해 두면 도착 시간을 예측하기가
                쉽습니다. 골목이 복잡한 위치라면 가까운 큰길이나 지형지물을 알려 주시면 안내가
                수월합니다.
              </p>
            </section>

            <section>
              <SectionHeading id="northeast" as="h2" title="동북권 — 노원·도봉·강북" />
              <p>
                노원·도봉·강북을 포함하는 동북권은 대단지 주거지가 넓게 자리해 생활 밀착형 수요가
                많은 지역입니다. 도심에서 다소 떨어진 위치가 섞여 있어, 예약에서 가장 중요한 것은
                ‘가능 시간대 확인’입니다. 원하는 시간과 실제 이동 시간이 맞물려야 하므로, 희망
                시간을 한 가지로 고정하기보다 가능한 시간대를 두세 개 정도 알려 주시면 조율이
                훨씬 수월합니다. 미리 여유를 두고 문의하실수록 원하는 시간에 가까운 안내를 받을 수
                있습니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="예약 전 확인사항" />
              <ul className="list-disc space-y-1.5 pl-5">
                <li>방문 위치가 어느 권역에 해당하는지 먼저 확인합니다.</li>
                <li>희망 시간대를 한 가지보다 두세 개로 열어두면 조율이 쉽습니다.</li>
                <li>빌딩·호텔 등 출입 절차가 있는 곳은 위치 정보를 구체적으로 공유합니다.</li>
                <li>편안히 머물 수 있는 공간과 이용 시간을 미리 확보해 둡니다.</li>
              </ul>
            </section>

            <section>
              <SectionHeading as="h2" title="서비스 선택 기준" />
              <p>
                같은 휴식이라도 그날의 상태에 따라 적합한 케어가 다릅니다. 종일 책상 앞에 있었다면
                근육 이완 케어가, 전반적인 피로와 긴장을 풀고 싶다면 컨디션 케어가, 향과 함께
                편안한 분위기를 원한다면 아로마 케어가 어울립니다. 어떤 케어가 맞을지 고민된다면
                문의 시 현재 상태를 간단히 알려 주세요. 8 마사지는 의료 효과나 치료를 보장하지
                않으며, 휴식과 컨디션 관리를 돕는 건전한 방문 케어만을 안내합니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="서울 위생·안전 안내" />
              <p>
                방문 케어는 고객의 생활 공간에서 이루어지는 만큼 위생과 신뢰가 무엇보다
                중요합니다. 손 위생과 용품 청결을 기본으로 지키며, 고객의 공간과 사생활을
                존중합니다. 예약 과정에서 받은 정보는 안내 목적에만 활용하고 안전하게 관리합니다.
                자세한 기준은 위생 관리 기준 페이지에서 확인하실 수 있습니다.
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
                description="서울 지역 예약 절차를 단계별로 확인하세요."
              />
              <InternalLinkCard
                title="요금 안내"
                href="/price/"
                description="요금이 정해지는 기준을 투명하게 안내합니다."
              />
              <InternalLinkCard
                title="위생 관리 기준"
                href="/safety/hygiene/"
                description="방문 전후 위생 관리 방식을 확인하세요."
              />
              <InternalLinkCard
                title="서울 이용 전 확인할 점"
                href="/magazine/area-tips/seoul-before-booking/"
                description="서울 예약 전에 읽어두면 좋은 가이드입니다."
              />
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <PriceSection />
        </div>

        <div className="mt-14">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading as="h2" title="서울 지역 자주 묻는 질문" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-14" id="booking">
          <ContactCTA
            title="서울 지역 예약 가능 여부를 확인해 보세요"
            description="희망하시는 서울 내 위치와 시간을 알려 주시면 권역별 가능 여부를 안내해 드립니다."
          />
        </div>
      </Container>
    </>
  );
}
