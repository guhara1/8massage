import Link from "next/link";
import { PRICING } from "@/lib/pricing";

/**
 * 요금 카드 3종 (60/90/120분). variant로 다크/라이트 전환.
 */
export default function PriceTable({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {PRICING.map((p) => {
        const featured = p.featured;
        return (
          <div
            key={p.name}
            className={[
              "relative flex flex-col rounded-3xl border p-7 text-center transition-transform duration-300 ease-premium hover:-translate-y-1",
              dark
                ? featured
                  ? "border-gold-400/70 bg-white/[0.06] shadow-glow"
                  : "border-white/10 bg-white/[0.03]"
                : featured
                  ? "border-gold-300 bg-white shadow-glow"
                  : "border-navy-100 bg-white shadow-card",
            ].join(" ")}
          >
            {featured ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-3 py-1 text-xs font-bold text-navy-900">
                추천
              </span>
            ) : null}
            <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-navy-900"}`}>
              {p.name}
            </h3>
            <p className="mt-4 flex items-baseline justify-center gap-1">
              <span
                className={`text-4xl font-extrabold tracking-tighter ${
                  dark ? "text-white" : "text-navy-900"
                }`}
              >
                {p.price.replace("원", "")}
              </span>
              <span className={`text-base font-semibold ${dark ? "text-navy-100/70" : "text-ink-600"}`}>
                원
              </span>
            </p>
            <p className={`mt-3 text-sm font-medium ${dark ? "text-gold-200" : "text-gold-600"}`}>
              {p.minutes}
            </p>
            <p className={`mt-1 text-sm ${dark ? "text-navy-100/70" : "text-ink-700"}`}>
              {p.desc}
            </p>
            <Link
              href="/booking-inquiry/"
              className={[
                "mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                featured
                  ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900"
                  : dark
                    ? "border border-white/20 text-white hover:bg-white/10"
                    : "border border-navy-200 text-navy-900 hover:bg-navy-50",
              ].join(" ")}
            >
              예약 문의
            </Link>
          </div>
        );
      })}
    </div>
  );
}
