export type NavChild = {
  label: string;
  href: string;
  /** 세부 권역 하위 링크. 각 권역은 고유 콘텐츠를 가진 개별 페이지다. */
  anchors?: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  children: NavChild[];
};

/**
 * 상단 메뉴 구조.
 * 세부 권역(서울 강남권, 경기 남부, 인천 송도권, 부산 해운대권 등)은
 * 각 광역 지역 아래의 고유 콘텐츠 개별 페이지(/service-area/{region}/{area}/)로 연결한다.
 */
export const NAV: NavItem[] = [
  {
    label: "8 마사지 소개",
    href: "/about/brand/",
    children: [
      { label: "브랜드 소개", href: "/about/brand/" },
      { label: "운영 원칙", href: "/about/policy/" },
      { label: "서비스 가능 범위", href: "/about/service-area-policy/" },
      { label: "위생·안전 기준", href: "/safety/hygiene/" },
      { label: "제공하지 않는 서비스", href: "/safety/prohibited-services/" },
    ],
  },
  {
    label: "출장마사지 안내",
    href: "/services/visit-massage/",
    children: [
      { label: "출장마사지 서비스 안내", href: "/services/visit-massage/" },
      { label: "컨디션 케어", href: "/services/condition-care/" },
      { label: "근육 이완 케어", href: "/services/muscle-relax-care/" },
      { label: "아로마 케어", href: "/services/aroma-care/" },
      { label: "이용 전 준비사항", href: "/services/before-use/" },
      { label: "자주 묻는 질문", href: "/faq/" },
    ],
  },
  {
    label: "지역 출장마사지",
    href: "/service-area/",
    children: [
      {
        label: "서울 출장마사지",
        href: "/service-area/seoul/",
        anchors: [
          { label: "서울 강남권(강남·서초·송파)", href: "/service-area/seoul/gangnam/" },
          { label: "서울 도심권(용산·중구·종로)", href: "/service-area/seoul/central/" },
          { label: "서울 서북권(마포·은평·서대문)", href: "/service-area/seoul/northwest/" },
          { label: "서울 동북권(노원·도봉·강북)", href: "/service-area/seoul/northeast/" },
        ],
      },
      {
        label: "경기 출장마사지",
        href: "/service-area/gyeonggi/",
        anchors: [
          { label: "경기 남부(성남·분당·수원)", href: "/service-area/gyeonggi/south/" },
          { label: "경기 서부(부천·안산·시흥)", href: "/service-area/gyeonggi/west/" },
          { label: "경기 동부(하남·남양주·구리)", href: "/service-area/gyeonggi/east/" },
          { label: "경기 북부(고양·의정부·파주)", href: "/service-area/gyeonggi/north/" },
        ],
      },
      {
        label: "인천 출장마사지",
        href: "/service-area/incheon/",
        anchors: [
          { label: "인천 중심권(남동·미추홀·구월)", href: "/service-area/incheon/central/" },
          { label: "인천 송도권(송도·연수·논현)", href: "/service-area/incheon/songdo/" },
          { label: "인천 서북권(청라·서구·검단)", href: "/service-area/incheon/northwest/" },
          { label: "인천 북부권(부평·계양)", href: "/service-area/incheon/north/" },
        ],
      },
      {
        label: "부산 출장마사지",
        href: "/service-area/busan/",
        anchors: [
          { label: "부산 해운대권(해운대·수영·센텀)", href: "/service-area/busan/haeundae/" },
          { label: "부산 중심권(서면·부산진·동래)", href: "/service-area/busan/central/" },
          { label: "부산 남부권(남구·중구·영도)", href: "/service-area/busan/south/" },
          { label: "부산 서부권(사하·강서·사상)", href: "/service-area/busan/west/" },
        ],
      },
    ],
  },
  {
    label: "예약·요금",
    href: "/booking/",
    children: [
      { label: "예약 방법", href: "/booking/" },
      { label: "요금 안내", href: "/price/" },
      { label: "당일 예약 안내", href: "/booking/same-day/" },
      { label: "방문 가능 시간", href: "/booking/time/" },
      { label: "취소·변경 안내", href: "/booking/cancel-policy/" },
      { label: "결제 안내", href: "/booking/payment/" },
    ],
  },
  {
    label: "안전·정책",
    href: "/safety/hygiene/",
    children: [
      { label: "위생 관리 기준", href: "/safety/hygiene/" },
      { label: "고객 보호 정책", href: "/safety/customer-protection/" },
      { label: "개인정보 보호", href: "/privacy/" },
      { label: "금지 서비스 안내", href: "/safety/prohibited-services/" },
      { label: "이용약관", href: "/terms/" },
      { label: "사업자 정보", href: "/business-info/" },
    ],
  },
  {
    label: "매거진",
    href: "/magazine/",
    children: [
      { label: "매거진 홈", href: "/magazine/" },
      { label: "출장마사지 가이드", href: "/magazine/visit-massage-guide/" },
      { label: "지역별 이용 팁", href: "/magazine/area-tips/" },
      { label: "피로 관리", href: "/magazine/fatigue-care/" },
      { label: "스트레칭·생활 케어", href: "/magazine/stretching/" },
      { label: "위생·안전 체크", href: "/magazine/hygiene-safety/" },
      { label: "예약 FAQ", href: "/magazine/booking-faq/" },
    ],
  },
  {
    label: "고객센터",
    href: "/contact/",
    children: [
      { label: "공지사항", href: "/notice/" },
      { label: "1:1 문의", href: "/contact/" },
      { label: "예약 문의", href: "/booking-inquiry/" },
      { label: "제휴 문의", href: "/partnership/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
];

export const FOOTER_GROUPS = [
  {
    title: "8 마사지 소개",
    links: [
      { label: "브랜드 소개", href: "/about/brand/" },
      { label: "운영 원칙", href: "/about/policy/" },
      { label: "서비스 가능 범위", href: "/about/service-area-policy/" },
      { label: "편집 정책 · 저자 소개", href: "/about/editorial/" },
    ],
  },
  {
    title: "지역 출장마사지",
    links: [
      { label: "서울 출장마사지", href: "/service-area/seoul/" },
      { label: "경기 출장마사지", href: "/service-area/gyeonggi/" },
      { label: "인천 출장마사지", href: "/service-area/incheon/" },
      { label: "부산 출장마사지", href: "/service-area/busan/" },
    ],
  },
  {
    title: "예약·요금",
    links: [
      { label: "예약 방법", href: "/booking/" },
      { label: "요금 안내", href: "/price/" },
      { label: "당일 예약 안내", href: "/booking/same-day/" },
      { label: "방문 가능 시간", href: "/booking/time/" },
    ],
  },
  {
    title: "안전·정책",
    links: [
      { label: "위생 관리 기준", href: "/safety/hygiene/" },
      { label: "고객 보호 정책", href: "/safety/customer-protection/" },
      { label: "제공하지 않는 서비스", href: "/safety/prohibited-services/" },
    ],
  },
  {
    title: "매거진",
    links: [
      { label: "매거진 홈", href: "/magazine/" },
      { label: "출장마사지 가이드", href: "/magazine/visit-massage-guide/" },
      { label: "지역별 이용 팁", href: "/magazine/area-tips/" },
    ],
  },
  {
    title: "고객센터",
    links: [
      { label: "공지사항", href: "/notice/" },
      { label: "1:1 문의", href: "/contact/" },
      { label: "예약 문의", href: "/booking-inquiry/" },
      { label: "제휴 문의", href: "/partnership/" },
    ],
  },
];
