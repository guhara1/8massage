export type PricePlan = {
  name: string;
  minutes: string;
  price: string;
  desc: string;
  featured?: boolean;
};

/** 기본 요금 안내. 지역·이동 거리·예약 시간대에 따라 상담 시 최종 안내됩니다. */
export const PRICING: PricePlan[] = [
  {
    name: "60분 코스",
    minutes: "60분",
    price: "90,000원",
    desc: "기본 컨디션·릴랙스 케어",
  },
  {
    name: "90분 코스",
    minutes: "90분",
    price: "150,000원",
    desc: "아로마 포함 추천 구성",
    featured: true,
  },
  {
    name: "120분 코스",
    minutes: "120분",
    price: "180,000원",
    desc: "전신 집중 프리미엄 케어",
  },
];

/** 푸터 등 한 줄 요약 */
export const PRICE_SUMMARY = "60분 90,000원 · 90분 150,000원 · 120분 180,000원";
