import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import { PageHero, ContactCTA, SafetyNoticeBox, InternalLinkCard } from "@/components/ui";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "인천 출장마사지 안내 | 송도·연수·청라 등 인천 방문 케어 8 마사지",
  description:
    "인천 출장마사지 가능 지역을 안내합니다. 남동·미추홀·구월, 송도·연수·논현, 청라·서구·검단, 부평·계양 등 권역별 예약 정보를 확인하세요.",
  path: "/service-area/incheon/",
});

const faqs = [
  {
    q: "인천은 어느 권역까지 안내되나요?",
    a: "중심권(남동·미추홀·구월), 송도권(송도·연수·논현), 서북권(청라·서구·검단), 북부권(부평·계양) 네 권역을 안내합니다. 신도시와 기존 도심이 섞여 있어 위치에 따라 이동 여건이 달라지므로 예약 전 확인을 권장합니다.",
  },
  {
    q: "송도권은 예약이 어떻게 진행되나요?",
    a: "송도·연수·논현 일대는 주거·업무·숙박 수요가 함께 있어 시간대별 문의가 고른 편입니다. 다만 단지 내 동선이 길 수 있어 정확한 위치와 출입 방식을 알려 주시면 도착이 매끄럽습니다.",
  },
  {
    q: "청라·검단 같은 서북권도 가능한가요?",
    a: "서북권도 안내 대상입니다. 다만 신도시 특성상 이동 시간이 변수이므로, 도착 예정 시간을 함께 확인하고 여유 있게 예약하시면 조율이 수월합니다.",
  },
  {
    q: "부평·계양은 어떤 점을 확인하면 좋나요?",
    a: "부평·계양 등 북부권은 생활 밀착형 수요가 많아 예약 시간대 조율이 중요합니다. 희망 시간을 두세 개로 열어두면 가능한 시간에 가까운 안내를 받기 쉽습니다.",
  },
];

const anchors = [
  { id: "central", label: "중심권" },
  { id: "songdo", label: "송도권" },
  { id: "northwest", label: "서북권" },
  { id: "north", label: "북부권" },
];

export default function IncheonPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "지역 출장마사지", path: "/service-area/" },
              { name: "인천 출장마사지", path: "/service-area/incheon/" },
            ]}
          />
        }
        title="인천 출장마사지 가능 지역 안내"
        description="남동·미추홀의 중심권부터 송도·연수의 송도권, 청라·검단의 서북권, 부평·계양의 북부권까지 권역별로 안내합니다."
      />

      <Container className="py-12">
        <nav aria-label="권역 바로가기" className="mb-10 flex flex-wrap gap-2">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-800 shadow-card transition-colors hover:border-gold-300 hover:text-gold-700"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="space-y-10 text-base leading-relaxed text-ink-700">
            <section>
              <SectionHeading as="h2" title="인천 출장마사지 운영 안내" />
              <p>
                인천은 오래된 도심과 새롭게 조성된 신도시가 한 도시 안에 공존하는 점이 특징입니다.
                남동·미추홀처럼 생활 인프라가 촘촘한 중심부가 있는가 하면, 송도와 청라처럼 계획적으로
                조성되어 단지 내 동선이 넓은 지역도 있습니다. 8 마사지는 이런 차이를 고려해 인천을
                중심권·송도권·서북권·북부권으로 나누어 안내합니다. 신도시는 주소만으로는 위치를
                가늠하기 어려운 경우가 있어, 구체적인 위치 정보가 예약을 더 정확하게 만듭니다.
                아래 권역별 안내를 참고해 주세요.
              </p>
            </section>

            <section>
              <SectionHeading id="central" as="h2" title="인천 중심권(남동·미추홀·구월) 출장마사지 안내" />
              <p>
                남동·미추홀·구월 일대는 인천의 행정과 상권이 모이는 생활 중심부입니다. 구월동을
                비롯한 번화가와 주거지가 가까이 있어, 퇴근 이후나 저녁 시간대에 휴식을 찾는 수요가
                꾸준합니다. 생활권이 밀집해 이동이 비교적 단순한 편이지만, 번화가 주변은 시간대에
                따라 도로와 주차 사정이 달라질 수 있습니다. 위치를 큰길 기준으로 알려 주시면 도착
                동선을 매끄럽게 안내해 드릴 수 있습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="songdo" as="h2" title="인천 송도권(송도·연수·논현) 출장마사지 안내" />
              <p>
                송도·연수·논현으로 이어지는 송도권은 주거와 업무, 숙박 수요가 함께 자리한 지역입니다.
                국제업무지구와 대규모 주거 단지가 인접해 다양한 시간대에 문의가 들어옵니다. 다만
                단지 규모가 크고 동·호수에 따라 내부 이동 거리가 길 수 있어, 정확한 위치와 출입
                방식을 미리 공유하면 도착이 한결 수월합니다. 숙박 시설을 이용 중이라면 객실 위치를
                함께 알려 주시는 것이 좋습니다.
              </p>
            </section>

            <section>
              <SectionHeading id="northwest" as="h2" title="인천 서북권(청라·서구·검단) 출장마사지 안내" />
              <p>
                청라·서구·검단을 포함하는 서북권은 새롭게 조성된 주거지가 빠르게 늘어난 지역으로,
                예약 시 이동 시간 확인이 특히 중요합니다. 신도시 특성상 인접해 보여도 실제 진입
                동선이 길어질 수 있어, 도착 예정 시간을 함께 점검하면 일정이 어긋나지 않습니다.
                가능한 시간대를 여유 있게 알려 주시고, 위치를 가까운 랜드마크 기준으로 공유해
                주시면 안내가 정확해집니다.
              </p>
            </section>

            <section>
              <SectionHeading id="north" as="h2" title="인천 북부권(부평·계양) 출장마사지 안내" />
              <p>
                부평·계양으로 대표되는 북부권은 오래된 주거지와 상권이 어우러진 생활 밀착형
                지역입니다. 유동 인구가 많고 생활 수요가 꾸준한 만큼, 원하는 시간대에 예약이 몰릴
                수 있어 시간 조율이 중요합니다. 희망 시간을 한 가지로 고정하기보다 두세 개 정도로
                열어두시면 가능한 시간에 가까운 안내를 받기 쉽습니다. 미리 문의해 두실수록 일정을
                맞추기가 수월합니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="인천 출장마사지 예약 전 확인사항" />
              <ul className="list-disc space-y-1.5 pl-5">
                <li>신도시 지역은 동·호수와 출입 방식을 구체적으로 공유합니다.</li>
                <li>이동 시간을 고려해 도착 예정 시간을 함께 확인합니다.</li>
                <li>희망 시간대를 여유 있게 제시하면 조율이 수월합니다.</li>
                <li>편안히 머물 수 있는 공간과 이용 시간을 확보해 둡니다.</li>
              </ul>
            </section>

            <section>
              <SectionHeading as="h2" title="인천 출장마사지 서비스 선택 기준" />
              <p>
                인천은 권역마다 생활 패턴이 달라, 본인의 하루 일과에 맞춰 케어를 고르면 만족도가
                높습니다. 활동량이 많았던 날에는 근육 이완 케어가, 누적된 피로와 긴장을 풀고 싶다면
                컨디션 케어가, 편안한 분위기 속 휴식을 원한다면 아로마 케어가 어울립니다. 8 마사지는
                의료 효과나 치료를 보장하지 않으며, 휴식과 컨디션 관리를 돕는 건전한 방문 케어만
                안내합니다.
              </p>
            </section>

            <section>
              <SectionHeading as="h2" title="인천 위생·안전 안내" />
              <p>
                어느 권역을 방문하든 위생 기준은 동일하게 적용됩니다. 손 위생과 용품 청결을
                기본으로 지키며, 고객의 생활 공간과 사생활을 존중합니다. 예약 과정에서 받은 정보는
                안내 목적에만 사용하고 안전하게 관리합니다. 자세한 기준은 위생 관리 기준 페이지에서
                확인하실 수 있습니다.
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
                description="인천 지역 예약 절차를 단계별로 확인하세요."
              />
              <InternalLinkCard
                title="당일 예약 안내"
                href="/booking/same-day/"
                description="당일 예약 가능 여부와 확인사항을 안내합니다."
              />
              <InternalLinkCard
                title="요금 안내"
                href="/price/"
                description="요금이 정해지는 기준을 투명하게 안내합니다."
              />
              <InternalLinkCard
                title="인천 예약 전 알아둘 점"
                href="/magazine/area-tips/incheon-before-booking/"
                description="인천 예약 전 읽어두면 좋은 가이드입니다."
              />
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading as="h2" title="인천 출장마사지 FAQ" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-14" id="booking">
          <ContactCTA
            title="인천 지역 예약 가능 여부를 확인해 보세요"
            description="희망하시는 인천 내 위치와 시간을 알려 주시면 권역별 가능 여부를 안내해 드립니다."
          />
        </div>
      </Container>
    </>
  );
}
