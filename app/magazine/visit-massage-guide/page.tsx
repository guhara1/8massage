import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "visit-massage-guide")!;

export const metadata: Metadata = pageMetadata({
  title: "출장마사지 가이드 | 8 마사지 매거진",
  description:
    "출장마사지 예약 전 확인사항, 이용 전 준비, 가격이 정해지는 기준 등 방문 케어의 기본을 정리한 가이드 모음입니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
