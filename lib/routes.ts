/**
 * 색인 대상 페이지 목록(canonical 경로).
 * sitemap.xml 생성에 사용한다.
 * - 세부 지역 개별 URL은 존재하지 않으며 만들지 않는다.
 * - 검색/태그/중복/빈 페이지는 포함하지 않는다.
 */
export type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export const ROUTES: RouteEntry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // 소개
  { path: "/about/brand/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/policy/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/service-area-policy/", priority: 0.6, changeFrequency: "monthly" },

  // 서비스
  { path: "/services/visit-massage/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/condition-care/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/muscle-relax-care/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/aroma-care/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/before-use/", priority: 0.7, changeFrequency: "monthly" },

  // 지역 (4개만)
  { path: "/service-area/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-area/seoul/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-area/gyeonggi/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-area/incheon/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-area/busan/", priority: 0.9, changeFrequency: "monthly" },

  // 예약·요금
  { path: "/booking/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/price/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/booking/same-day/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/booking/time/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/booking/cancel-policy/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/booking/payment/", priority: 0.6, changeFrequency: "monthly" },

  // 안전·정책
  { path: "/safety/hygiene/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/safety/customer-protection/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/safety/prohibited-services/", priority: 0.8, changeFrequency: "monthly" },

  // 매거진
  { path: "/magazine/", priority: 0.7, changeFrequency: "weekly" },
  { path: "/magazine/visit-massage-guide/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/magazine/area-tips/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/magazine/fatigue-care/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/magazine/stretching/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/magazine/hygiene-safety/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/magazine/booking-faq/", priority: 0.6, changeFrequency: "weekly" },

  // 매거진 글 10개
  { path: "/magazine/visit-massage-guide/before-booking/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/visit-massage-guide/before-use/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/visit-massage-guide/price-factors/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/area-tips/seoul-before-booking/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/area-tips/gyeonggi-checklist/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/area-tips/incheon-before-booking/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/area-tips/busan-checklist/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/hygiene-safety/hygiene-checklist/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/hygiene-safety/safe-service-guide/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/magazine/booking-faq/same-day-booking/", priority: 0.6, changeFrequency: "monthly" },

  // 고객센터/정책
  { path: "/notice/", priority: 0.5, changeFrequency: "weekly" },
  { path: "/faq/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/booking-inquiry/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partnership/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy/", priority: 0.4, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.4, changeFrequency: "yearly" },
  { path: "/business-info/", priority: 0.4, changeFrequency: "yearly" },
];
