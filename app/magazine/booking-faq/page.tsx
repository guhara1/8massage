import type { Metadata } from "next";
import MagazineCategory from "@/components/MagazineCategory";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES } from "@/lib/magazine";

const category = CATEGORIES.find((c) => c.slug === "booking-faq")!;

export const metadata: Metadata = pageMetadata({
  title: "예약 FAQ | 8 마사지 매거진",
  description:
    "당일 예약 등 예약과 관련해 자주 묻는 질문을 깊이 있게 풀어 안내하는 콘텐츠 모음입니다.",
  path: category.href,
});

export default function Page() {
  return <MagazineCategory category={category} />;
}
