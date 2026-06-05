import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import PriceTable from "@/components/PriceTable";
import {
  ButtonLink,
  RegionCard,
  ServiceCard,
  MagazineCard,
  ContactCTA,
  SafetyNoticeBox,
} from "@/components/ui";
import { pageMetadata, organizationLd, websiteLd, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 안내 | 서울·경기·인천·부산 방문 케어 8 마사지",
  description:
    "8 마사지는 서울, 경기, 인천, 부산 지역 출장마사지 정보를 안내합니다. 예약 절차, 가능 지역, 요금 기준, 위생 관리, 제공하지 않는 서비스까지 투명하게 확인하세요.",
  path: "/",
});

const regions = [
  {
    region: "서울 출장마사지",
    href: "/service-area/seoul/",
    description:
      "강남·서초·송파부터 용산·중구·종로, 마포·은평, 노원·도봉까지 권역별로 방문 가능 시간과 이동 동선을 안내합니다.",
    areas: ["강남권", "도심권", "서북권", "동북권"],
  },
  {
    region: "경기 출장마사지",
    href: "/service-area/gyeonggi/",
    description:
      "성남·분당·수원의 남부권을 비롯해 부천·안산·시흥, 하남·남양주, 고양·파주까지 지역별 이동 거리를 고려해 안내합니다.",
    areas: ["남부", "서부", "동부", "북부"],
  },
  {
    region: "인천 출장마사지",
    href: "/service-area/incheon/",
    description:
      "남동·미추홀의 중심권과 송도·연수의 송도권, 청라·검단의 서북권, 부평·계양의 북부권 가능 여부를 정리했습니다.",
    areas: ["중심권", "송도권", "서북권", "북부권"],
  },
  {
    region: "부산 출장마사지",
    href: "/service-area/busan/",
    description:
      "해운대·수영·센텀의 해운대권부터 서면·동래의 중심권, 남구·영도의 남부권, 사하·사상의 서부권까지 확인하세요.",
    areas: ["해운대권", "중심권", "남부권", "서부권"],
  },
];

const services = [
  {
    title: "출장마사지 서비스 안내",
    href: "/services/visit-massage/",
    description:
      "방문 케어의 기본 흐름과 예약 전 확인사항, 서비스 선택 기준을 한곳에서 살펴볼 수 있습니다.",
  },
  {
    title: "컨디션 케어",
    href: "/services/condition-care/",
    description:
      "일상 피로와 긴장 완화, 휴식에 초점을 둔 컨디션 관리 안내입니다. 치료를 보장하지 않습니다.",
  },
  {
    title: "근육 이완 케어",
    href: "/services/muscle-relax-care/",
    description:
      "장시간 업무나 활동 뒤의 뻐근함, 생활 속 근육 긴장을 편안하게 풀어가는 과정을 설명합니다.",
  },
  {
    title: "아로마 케어",
    href: "/services/aroma-care/",
    description:
      "향을 활용한 편안한 휴식과 릴랙스 중심의 케어로, 과장된 효능 표현 없이 안내합니다.",
  },
  {
    title: "이용 전 준비사항",
    href: "/services/before-use/",
    description:
      "예약 전 공간 준비, 시간 확인, 위생 확인 등 매끄러운 방문을 위한 준비 항목입니다.",
  },
];

const bookingSteps = [
  { n: "01", t: "지역 확인", d: "원하는 지역이 방문 가능 권역인지 먼저 확인합니다." },
  { n: "02", t: "가능 시간 상담", d: "희망 날짜와 시간대의 가능 여부를 함께 조율합니다." },
  { n: "03", t: "서비스 선택", d: "컨디션·근육 이완·아로마 등 원하는 케어를 선택합니다." },
  { n: "04", t: "예약 정보 확인", d: "방문 주소와 시간, 안내사항을 다시 한 번 확인합니다." },
  { n: "05", t: "방문 전 안내", d: "준비사항과 도착 예정 시간을 미리 전달드립니다." },
  { n: "06", t: "이용 후 피드백", d: "불편한 점이나 개선 의견을 자유롭게 남길 수 있습니다." },
];

const magazine = [
  {
    title: "출장마사지 예약 전 확인해야 할 7가지",
    href: "/magazine/visit-massage-guide/before-booking/",
    category: "출장마사지 가이드",
    excerpt: "예약 전 점검하면 좋은 핵심 항목을 한 번에 정리했습니다.",
  },
  {
    title: "출장마사지 가격이 달라지는 기준",
    href: "/magazine/visit-massage-guide/price-factors/",
    category: "출장마사지 가이드",
    excerpt: "시간·지역·이동 거리 등 요금에 영향을 주는 요소를 설명합니다.",
  },
  {
    title: "서울·경기·인천·부산 이용 전 체크리스트",
    href: "/magazine/area-tips/seoul-before-booking/",
    category: "지역별 이용 팁",
    excerpt: "지역별로 미리 확인하면 좋은 사항을 정리한 가이드입니다.",
  },
  {
    title: "출장마사지 이용 전 위생 체크리스트",
    href: "/magazine/hygiene-safety/hygiene-checklist/",
    category: "위생·안전 체크",
    excerpt: "방문 케어를 안심하고 이용하기 위한 위생 확인 항목입니다.",
  },
];

const faqs = [
  {
    q: "출장마사지 예약은 어떻게 진행되나요?",
    a: "지역 확인 → 가능 시간 상담 → 서비스 선택 → 예약 정보 확인 → 방문 전 안내 순으로 진행됩니다. 예약 문의 페이지에서 희망 지역과 시간을 남겨 주시면 가능 여부를 안내해 드립니다.",
  },
  {
    q: "어느 지역까지 가능한가요?",
    a: "현재 서울, 경기, 인천, 부산 권역을 중심으로 안내하고 있습니다. 같은 광역권 안에서도 세부 위치와 시간대에 따라 가능 여부가 달라질 수 있어, 예약 전 확인을 권장합니다.",
  },
  {
    q: "당일 예약이 가능한가요?",
    a: "시간대와 지역 상황에 따라 당일 예약이 가능한 경우가 있습니다. 다만 이동 시간과 예약 현황에 따라 어려울 수 있으므로, 가능한 한 여유 있게 문의해 주시면 조율이 수월합니다.",
  },
  {
    q: "출장마사지 가격은 어떻게 정해지나요?",
    a: "서비스 종류와 진행 시간, 방문 지역, 예약 시간대, 이동 거리 등에 따라 달라질 수 있습니다. 숨겨진 추가 비용이 발생하지 않도록 상담 단계에서 기준을 투명하게 안내합니다.",
  },
  {
    q: "제공하지 않는 서비스가 있나요?",
    a: "성적 서비스나 불법적인 요청, 의료행위, 치료 보장, 사전에 합의되지 않은 요청은 일절 제공하지 않습니다. 8 마사지는 건전한 방문 케어 정보만을 안내합니다.",
  },
];

const trust = [
  { t: "4개 광역 권역", d: "서울·경기·인천·부산" },
  { t: "투명한 요금", d: "숨은 비용 없음" },
  { t: "일관된 위생 기준", d: "방문 전후 관리" },
  { t: "건전한 케어", d: "합법·정직 운영" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationLd(), websiteLd(), faqLd(faqs)]} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-900 bg-hero-radial">
        <div className="bg-noise absolute inset-0 opacity-50" aria-hidden="true" />
        <span className="absolute inset-x-0 bottom-0 h-px bg-gold-line" aria-hidden="true" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-200">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              건전한 방문 케어 안내 · 8 마사지
            </p>
            <h1 className="animate-fade-up text-3xl font-bold leading-[1.2] tracking-tighter text-white sm:text-5xl lg:text-6xl">
              서울·경기·인천·부산
              <br />
              <span className="text-gradient-gold">출장마사지 안내</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
              원하는 지역과 시간에 맞춰 방문 케어 정보를 확인하세요. 예약 절차, 가능 지역, 요금
              기준, 위생 관리까지 과장 없이 투명하게 안내합니다.
            </p>
            <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/service-area/" variant="secondary">
                지역 가능 여부 확인하기
              </ButtonLink>
              <ButtonLink href="/booking-inquiry/" variant="light">
                예약 문의하기
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trust.map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-bold text-white sm:text-base">{item.t}</p>
                <p className="mt-1 text-xs text-navy-100/60">{item.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. 8 마사지 소개 */}
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="8 마사지 소개"
          title="과장 없는 정보, 투명한 예약 안내"
          description="8 마사지는 합법적이고 건전한 방문 케어 정보를 제공하는 안내 사이트입니다."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <p className="text-base leading-[1.85] text-ink-700">
              8 마사지는 바쁜 일상 속에서 편안한 휴식과 컨디션 관리를 고민하는 분들을 위해, 방문
              케어와 관련된 정보를 한곳에 정리한 안내 사이트입니다. 우리는 화려한 광고 문구나
              과장된 효능 대신, 실제로 예약 여부를 판단하는 데 필요한 정보—가능 지역, 진행 흐름,
              요금이 정해지는 기준, 위생 관리 방식, 그리고 제공하지 않는 서비스—를 분명하게 밝히는
              것을 가장 중요하게 생각합니다. 처음 이용하시는 분도 어떤 과정으로 진행되는지 미리
              이해하고 안심하고 문의하실 수 있도록, 모든 안내를 정중하고 투명한 언어로
              작성했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <SafetyNoticeBox title="우리가 지키는 원칙">
              <ul className="list-disc space-y-1 pl-4 marker:text-gold-500">
                <li>과장 없는 정보 제공</li>
                <li>투명한 예약·요금 안내</li>
                <li>일관된 위생 관리 기준</li>
                <li>건전한 방문 케어만 안내</li>
              </ul>
            </SafetyNoticeBox>
          </Reveal>
        </div>
      </Container>

      {/* 3. 서비스 안내 */}
      <section className="bg-cream-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="출장마사지 서비스 안내"
            title="필요에 맞는 방문 케어를 선택하세요"
            description="출장마사지는 정해진 공간으로 직접 찾아가 휴식과 컨디션 관리를 돕는 방문 케어입니다. 아래 항목에서 각 서비스를 자세히 확인할 수 있습니다."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 60}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. 지역별 안내 */}
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="지역별 출장마사지 안내"
          title="우리 동네는 방문 가능할까요?"
          description="현재 서울·경기·인천·부산 4개 권역을 중심으로 안내합니다. 각 지역 페이지에서 권역별 가능 범위를 확인하세요."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r, i) => (
            <Reveal key={r.href} delay={i * 60}>
              <RegionCard {...r} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* 5. 예약 절차 */}
      <section className="bg-cream-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="예약 절차"
            title="여섯 단계로 진행되는 예약"
            description="복잡하지 않게, 그러나 빠짐없이 확인하며 진행합니다."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bookingSteps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 50}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                  <span className="text-gradient-gold text-2xl font-bold tracking-tighter">{step.n}</span>
                  <h3 className="mt-1.5 text-base font-bold text-navy-900">{step.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-8">
            <ButtonLink href="/booking/" variant="ghost">
              예약 방법 자세히 보기
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* 6. 요금 안내 */}
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="요금 안내"
          title="코스별 기본 요금"
          description="60·90·120분 코스별 기본 요금입니다. 숨겨진 추가 비용 없이 투명하게 안내합니다."
        />
        <Reveal>
          <PriceTable />
        </Reveal>
        <p className="mt-6 text-sm text-ink-700">
          지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.{" "}
          <Link href="/price/" className="font-semibold text-gold-600 hover:text-gold-500">
            상세 요금 안내 보기 →
          </Link>
        </p>
      </Container>

      {/* 7. 위생·안전 */}
      <section className="bg-cream-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="위생·안전 기준"
            title="안심하고 이용할 수 있도록"
            description="방문 케어에서 가장 기본이 되는 위생과 안전 원칙을 지킵니다."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "손 위생", d: "방문 전후 손 위생을 철저히 관리합니다." },
              { t: "도구 관리", d: "사용하는 용품을 청결하게 관리하고 점검합니다." },
              { t: "고객 공간 존중", d: "고객의 생활 공간과 사생활을 존중합니다." },
              { t: "개인정보 보호", d: "예약 과정에서 받은 정보를 안전하게 다룹니다." },
              { t: "제공하지 않는 서비스", d: "성적·불법 요청은 일절 제공하지 않습니다." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 50}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="text-base font-bold text-navy-900">{item.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{item.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={250}>
              <Link
                href="/safety/prohibited-services/"
                className="flex h-full items-center justify-center rounded-3xl border border-dashed border-gold-300 bg-gold-100/40 p-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-100/70"
              >
                제공하지 않는 서비스 안내 보기 →
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8. 매거진 추천 */}
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="매거진 추천 글"
          title="읽어두면 도움이 되는 정보"
          description="예약 전에 알아두면 좋은 가이드와 체크리스트를 모았습니다."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {magazine.map((m, i) => (
            <Reveal key={m.href} delay={i * 60}>
              <MagazineCard {...m} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* 9. FAQ */}
      <section className="bg-cream-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="자주 묻는 질문"
            title="예약 전 궁금한 점"
            description="가장 많이 문의해 주시는 내용을 정리했습니다."
          />
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
          <div className="mt-7">
            <ButtonLink href="/faq/" variant="ghost">
              전체 FAQ 보기
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* 10. 하단 CTA */}
      <Container className="py-16 sm:py-20">
        <Reveal>
          <ContactCTA />
        </Reveal>
      </Container>
    </>
  );
}
