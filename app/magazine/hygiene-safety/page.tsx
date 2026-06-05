import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "hygiene-safety")!;

export const metadata: Metadata = pageMetadata({
  title: "위생·안전 체크 | 8 마사지 매거진",
  description:
    "안심하고 방문 케어를 이용하기 위한 위생·안전 확인 항목과 건전한 서비스 구분 기준을 다룹니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
