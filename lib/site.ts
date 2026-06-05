export const SITE = {
  name: "8 마사지",
  shortName: "8마사지",
  // 실제 배포 도메인. 사용자 설정 도메인을 연결하면 그 주소로 교체하세요.
  url: "https://8massage.pages.dev",
  description:
    "8 마사지는 서울, 경기, 인천, 부산 지역 출장마사지 정보를 안내합니다. 예약 절차, 가능 지역, 요금 기준, 위생 관리, 제공하지 않는 서비스까지 투명하게 확인하세요.",
  locale: "ko_KR",
  // 표시용 연락 채널(예시). 실제 운영 정보로 교체하세요.
  contact: {
    inquiryPath: "/booking-inquiry/",
    hours: "매일 11:00 ~ 익일 02:00 (지역별 상이)",
  },
} as const;

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE.url}${path}`;
}
