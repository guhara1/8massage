export const SITE = {
  name: "8 마사지",
  shortName: "8마사지",
  // 실제 배포 도메인(확정).
  url: "https://8massage.xyz",
  description:
    "8 마사지는 서울, 경기, 인천, 부산 지역 출장마사지 정보를 안내합니다. 예약 절차, 가능 지역, 요금 기준, 위생 관리, 제공하지 않는 서비스까지 투명하게 확인하세요.",
  locale: "ko_KR",
  // IndexNow 키 (public/<key>.txt 와 동일해야 함). 빙·네이버 즉시 색인 통보용.
  indexNowKey: "14e2b57edc8abf4a6417c9aa6d514803",
  // 매거진 글 저자(발행 주체). 가짜 인물 대신 정직하게 편집팀으로 표기한다.
  author: {
    name: "8 마사지 편집팀",
    bio: "8 마사지 편집팀은 출장마사지 예약·이용에 도움이 되는 정보를 과장 없이 정리합니다. 모든 글은 건전한 방문 케어 기준에 맞춰 검토되며, 의료 효과나 치료를 보장하지 않습니다.",
  },
  // 표시용 연락 채널.
  contact: {
    inquiryPath: "/booking-inquiry/",
    hours: "매일 11:00 ~ 익일 02:00 (지역별 상이)",
    phone: "0508-202-4743",
    phoneTel: "tel:0508-202-4743",
  },
} as const;

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE.url}${path}`;
}
