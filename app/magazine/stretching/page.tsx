import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "stretching")!;

export const metadata: Metadata = pageMetadata({
  title: "스트레칭·생활 케어 | 8 마사지 매거진",
  description:
    "집과 사무실에서 실천하는 가벼운 스트레칭과 자세 관리 등 생활 케어 콘텐츠 모음입니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
