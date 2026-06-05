import Link from "next/link";
import SectionHeading from "./SectionHeading";
import PriceTable from "./PriceTable";

/**
 * 지역/서비스 페이지 등에 공통으로 넣는 요금 안내 섹션.
 */
export default function PriceSection({
  variant = "light",
  heading = "코스별 기본 요금",
  description = "60·90·120분 코스별 기본 요금입니다. 숨겨진 추가 비용 없이 투명하게 안내합니다.",
}: {
  variant?: "light" | "dark";
  heading?: string;
  description?: string;
}) {
  return (
    <section aria-label="요금 안내">
      <SectionHeading eyebrow="요금 안내" title={heading} description={description} />
      <PriceTable variant={variant} />
      <p className="mt-6 text-sm text-ink-700">
        지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.{" "}
        <Link href="/price/" className="font-semibold text-gold-600 hover:text-gold-500">
          상세 요금 안내 보기 →
        </Link>
      </p>
    </section>
  );
}
