import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * 모바일 하단 고정 액션 바. (lg 이상에서는 숨김)
 * 전화 예약을 1순위로, 온라인 문의를 함께 노출한다.
 */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="glass border-t border-navy-100/70 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
        <div className="mx-auto flex max-w-content gap-2">
          <a
            href={SITE.contact.phoneTel}
            aria-label={`전화 예약 ${SITE.contact.phone}`}
            className="flex flex-[1.4] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 px-3 py-3 text-sm font-bold text-navy-900 shadow-glow active:scale-[0.98]"
          >
            <span aria-hidden="true">📞</span>
            전화 예약
          </a>
          <Link
            href="/booking-inquiry/"
            className="flex flex-1 items-center justify-center rounded-xl border border-navy-200/70 bg-white/85 px-3 py-3 text-sm font-semibold text-navy-800 active:scale-[0.98]"
          >
            온라인 문의
          </Link>
        </div>
      </div>
    </div>
  );
}
