export type Category = {
  slug: string;
  title: string;
  href: string;
  description: string;
};

export type ArticleMeta = {
  slug: string; // full path
  title: string;
  href: string;
  category: string; // category title
  categoryHref: string;
  excerpt: string;
  datePublished: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "visit-massage-guide",
    title: "출장마사지 가이드",
    href: "/magazine/visit-massage-guide/",
    description: "예약 전에 알아두면 좋은 출장마사지의 기본과 흐름을 정리합니다.",
  },
  {
    slug: "area-tips",
    title: "지역별 이용 팁",
    href: "/magazine/area-tips/",
    description: "서울·경기·인천·부산 지역별로 확인하면 좋은 이용 팁입니다.",
  },
  {
    slug: "fatigue-care",
    title: "피로 관리",
    href: "/magazine/fatigue-care/",
    description: "일상의 피로를 다스리는 생활 습관과 휴식 방법을 다룹니다.",
  },
  {
    slug: "stretching",
    title: "스트레칭·생활 케어",
    href: "/magazine/stretching/",
    description: "집과 사무실에서 실천하는 가벼운 스트레칭과 자세 관리입니다.",
  },
  {
    slug: "hygiene-safety",
    title: "위생·안전 체크",
    href: "/magazine/hygiene-safety/",
    description: "안심하고 방문 케어를 이용하기 위한 위생·안전 확인 항목입니다.",
  },
  {
    slug: "booking-faq",
    title: "예약 FAQ",
    href: "/magazine/booking-faq/",
    description: "예약과 관련해 자주 묻는 질문을 깊이 있게 풀어 안내합니다.",
  },
];

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "/magazine/visit-massage-guide/before-booking/",
    title: "출장마사지 예약 전 확인해야 할 7가지",
    href: "/magazine/visit-massage-guide/before-booking/",
    category: "출장마사지 가이드",
    categoryHref: "/magazine/visit-massage-guide/",
    excerpt: "예약 전 점검하면 좋은 핵심 항목 일곱 가지를 정리했습니다.",
    datePublished: "2026-01-12",
  },
  {
    slug: "/magazine/visit-massage-guide/before-use/",
    title: "출장마사지 이용 전 준비사항 총정리",
    href: "/magazine/visit-massage-guide/before-use/",
    category: "출장마사지 가이드",
    categoryHref: "/magazine/visit-massage-guide/",
    excerpt: "공간 준비부터 시간·위생 확인까지 이용 전 준비를 한 번에 정리합니다.",
    datePublished: "2026-01-20",
  },
  {
    slug: "/magazine/visit-massage-guide/price-factors/",
    title: "출장마사지 가격이 달라지는 기준",
    href: "/magazine/visit-massage-guide/price-factors/",
    category: "출장마사지 가이드",
    categoryHref: "/magazine/visit-massage-guide/",
    excerpt: "시간·지역·이동 거리 등 요금에 영향을 주는 요소를 설명합니다.",
    datePublished: "2026-01-28",
  },
  {
    slug: "/magazine/area-tips/seoul-before-booking/",
    title: "서울 출장마사지 예약 전 확인할 점",
    href: "/magazine/area-tips/seoul-before-booking/",
    category: "지역별 이용 팁",
    categoryHref: "/magazine/area-tips/",
    excerpt: "서울 권역별 특성을 고려해 예약 전 확인하면 좋은 점을 정리했습니다.",
    datePublished: "2026-02-03",
  },
  {
    slug: "/magazine/area-tips/gyeonggi-checklist/",
    title: "경기 출장마사지 이용 시 확인사항",
    href: "/magazine/area-tips/gyeonggi-checklist/",
    category: "지역별 이용 팁",
    categoryHref: "/magazine/area-tips/",
    excerpt: "넓은 경기 지역, 이동 시간을 고려한 이용 체크리스트입니다.",
    datePublished: "2026-02-10",
  },
  {
    slug: "/magazine/area-tips/incheon-before-booking/",
    title: "인천 출장마사지 예약 전 알아둘 점",
    href: "/magazine/area-tips/incheon-before-booking/",
    category: "지역별 이용 팁",
    categoryHref: "/magazine/area-tips/",
    excerpt: "신도시와 원도심이 섞인 인천, 예약 전 알아두면 좋은 점입니다.",
    datePublished: "2026-02-17",
  },
  {
    slug: "/magazine/area-tips/busan-checklist/",
    title: "부산 출장마사지 이용 전 체크리스트",
    href: "/magazine/area-tips/busan-checklist/",
    category: "지역별 이용 팁",
    categoryHref: "/magazine/area-tips/",
    excerpt: "바다와 산이 가르는 부산, 지형을 고려한 이용 체크리스트입니다.",
    datePublished: "2026-02-24",
  },
  {
    slug: "/magazine/hygiene-safety/hygiene-checklist/",
    title: "출장마사지 이용 전 위생 체크리스트",
    href: "/magazine/hygiene-safety/hygiene-checklist/",
    category: "위생·안전 체크",
    categoryHref: "/magazine/hygiene-safety/",
    excerpt: "방문 케어를 안심하고 이용하기 위한 위생 확인 항목입니다.",
    datePublished: "2026-03-03",
  },
  {
    slug: "/magazine/hygiene-safety/safe-service-guide/",
    title: "건전한 출장마사지 서비스를 구분하는 기준",
    href: "/magazine/hygiene-safety/safe-service-guide/",
    category: "위생·안전 체크",
    categoryHref: "/magazine/hygiene-safety/",
    excerpt: "건전한 방문 케어를 가려내는 데 도움이 되는 기준을 안내합니다.",
    datePublished: "2026-03-10",
  },
  {
    slug: "/magazine/booking-faq/same-day-booking/",
    title: "출장마사지 당일 예약은 어떻게 진행되나요?",
    href: "/magazine/booking-faq/same-day-booking/",
    category: "예약 FAQ",
    categoryHref: "/magazine/booking-faq/",
    excerpt: "당일 예약의 가능성과 진행 방식, 확인사항을 자세히 풀었습니다.",
    datePublished: "2026-03-17",
  },
];

export function articlesByCategory(categoryHref: string): ArticleMeta[] {
  return ARTICLES.filter((a) => a.categoryHref === categoryHref).sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
}
