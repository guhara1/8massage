import Link from "next/link";

/**
 * 모바일 하단 고정 액션 바. (lg 이상에서는 숨김)
 * 20·30대 모바일 사용자가 어느 페이지에서든 바로 문의/지역확인 가능하도록.
 */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="glass border-t border-navy-100/70 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
        <div className="mx-auto flex max-w-content gap-2">
          <Link
            href="/service-area/"
            className="flex flex-1 items-center justify-center rounded-xl border border-navy-200/70 bg-white/80 px-4 py-3 text-sm font-semibold text-navy-800 active:scale-[0.98]"
          >
            지역 확인
          </Link>
          <Link
            href="/booking-inquiry/"
            className="flex flex-[1.3] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 px-4 py-3 text-sm font-bold text-navy-900 shadow-glow active:scale-[0.98]"
          >
            예약 문의
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
