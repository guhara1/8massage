import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "area-tips")!;

export const metadata: Metadata = pageMetadata({
  title: "지역별 이용 팁 | 8 마사지 매거진",
  description:
    "서울·경기·인천·부산 지역별로 예약 전 확인하면 좋은 이용 팁을 정리한 글 모음입니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
