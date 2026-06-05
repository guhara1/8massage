import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import PriceSection from "@/components/PriceSection";
import { PageHero, ContactCTA, SafetyNoticeBox, InternalLinkCard } from "@/components/ui";
import { faqLd } from "@/lib/seo";
import { Region, Area } from "@/lib/serviceAreas";

export default function AreaPage({ region, area }: { region: Region; area: Area }) {
  const selfPath = `/service-area/${region.slug}/${area.slug}/`;
  const regionPath = `/service-area/${region.slug}/`;

  return (
    <>
      <PageHero
        eyebrow={`${region.name} 출장마사지`}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "지역 출장마사지", path: "/service-area/" },
              { name: `${region.name} 출장마사지`, path: regionPath },
              { name: area.name, path: selfPath },
            ]}
          />
        }
        title={area.h1}
        description={area.lead}
      />

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="editorial-count max-w-[42rem] space-y-12 text-[16px] leading-[1.9] text-ink-700 sm:text-[17px]">
            {area.sections.map((s) => (
              <section key={s.h2}>
                <SectionHeading as="h2" title={s.h2} />
                <p>{s.p}</p>
              </section>
            ))}

            <section>
              <SectionHeading as="h2" title={`${area.name} 예약 전 확인사항`} />
              <ul className="list-disc space-y-1.5 pl-5">
                {area.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <SafetyNoticeBox>
              8 마사지는 건전한 방문 케어만 안내하며, 성적·불법 요청이나 사전에 합의되지 않은
              요청은 제공하지 않습니다.
            </SafetyNoticeBox>
            <div className="space-y-3">
              <InternalLinkCard
                title={`${region.name} 출장마사지 전체 안내`}
                href={regionPath}
                description={`${region.name} 권역 전체를 한눈에 확인하세요.`}
              />
              <InternalLinkCard
                title="예약 방법 안내"
                href="/booking/"
                description="예약 절차를 단계별로 확인하세요."
              />
              <InternalLinkCard
                title="요금 안내"
                href="/price/"
                description="요금이 정해지는 기준을 투명하게 안내합니다."
              />
              <InternalLinkCard
                title={`${region.name} 이용 전 체크리스트`}
                href={region.magazineHref}
                description={`${region.name} 예약 전 읽어두면 좋은 가이드입니다.`}
              />
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <PriceSection />
        </div>

        <div className="mt-14">
          <JsonLd data={faqLd(area.faqs)} />
          <SectionHeading as="h2" title={`${area.name} 자주 묻는 질문`} />
          <FAQAccordion items={area.faqs} />
        </div>

        <div className="mt-14">
          <ContactCTA
            title={`${region.name} ${area.name} 예약 가능 여부를 확인해 보세요`}
            description={`${area.districts} 등 ${area.name} 내 희망 위치와 시간을 알려 주시면 가능 여부를 안내해 드립니다.`}
          />
        </div>
      </Container>
    </>
  );
}
