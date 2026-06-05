import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "fatigue-care")!;

export const metadata: Metadata = pageMetadata({
  title: "피로 관리 | 8 마사지 매거진",
  description:
    "일상의 피로를 다스리는 생활 습관과 휴식 방법을 다루는 피로 관리 콘텐츠 모음입니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
