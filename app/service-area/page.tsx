import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import { PageHero, RegionCard, ContactCTA, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "지역 출장마사지 안내 | 서울·경기·인천·부산 8 마사지",
  description:
    "서울·경기·인천·부산 출장마사지 가능 지역을 한곳에서 확인하세요. 각 광역 지역 페이지에서 권역별 가능 범위와 예약 전 확인사항을 안내합니다.",
  path: "/service-area/",
});

const regions = [
  {
    region: "서울 출장마사지",
    href: "/service-area/seoul/",
    description:
      "강남권·도심권·서북권·동북권으로 나누어 권역별 이동 동선과 예약 가능 시간을 안내합니다.",
    areas: ["강남·서초·송파", "용산·중구·종로", "마포·은평", "노원·도봉"],
  },
  {
    region: "경기 출장마사지",
    href: "/service-area/gyeonggi/",
    description:
      "성남·분당·수원의 남부권부터 부천·안산, 하남·남양주, 고양·파주까지 이동 거리를 고려해 안내합니다.",
    areas: ["성남·분당·수원", "부천·안산·시흥", "하남·남양주", "고양·파주"],
  },
  {
    region: "인천 출장마사지",
    href: "/service-area/incheon/",
    description:
      "남동·미추홀의 중심권과 송도·연수의 송도권, 청라·검단의 서북권, 부평·계양의 북부권을 안내합니다.",
    areas: ["남동·미추홀", "송도·연수", "청라·검단", "부평·계양"],
  },
  {
    region: "부산 출장마사지",
    href: "/service-area/busan/",
    description:
      "해운대·센텀의 해운대권, 서면·동래의 중심권, 남구·영도의 남부권, 사하·사상의 서부권을 안내합니다.",
    areas: ["해운대·수영", "서면·동래", "남구·영도", "사하·사상"],
  },
];

export default function ServiceAreaIndex() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb items={[{ name: "지역 출장마사지", path: "/service-area/" }]} />
        }
        title="지역별 출장마사지 안내"
        description="현재 서울·경기·인천·부산 4개 광역 권역을 중심으로 안내하고 있습니다. 세부 지역은 각 지역 페이지의 권역별 섹션에서 함께 다룹니다."
      />
      <Container className="py-12">
        <SectionHeading
          title="우리 동네는 방문 가능할까요?"
          description="원하는 지역 카드를 선택해 권역별 가능 범위와 예약 전 확인사항을 살펴보세요."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <RegionCard key={r.href} {...r} />
          ))}
        </div>

        <div className="mt-10">
          <SafetyNoticeBox title="세부 지역 안내 방식">
            강남·성남·송도·해운대 등 세부 지역은 별도 페이지가 아니라 각 광역 지역 페이지 안의
            권역별 섹션에서 안내합니다. 실제 예약 가능 여부는 위치와 시간대에 따라 달라질 수 있어,
            정확한 확인은 예약 문의를 통해 도와드립니다.
          </SafetyNoticeBox>
        </div>

        <div className="mt-14">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
