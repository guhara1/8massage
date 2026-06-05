"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string };

/**
 * 블로그 글 상단 목차.
 * 지정한 컨테이너(targetId) 안의 h2를 자동 수집해 목차를 만들고,
 * 각 h2에 id를 부여해 클릭 시 해당 위치로 부드럽게 이동한다.
 */
export default function ArticleToc({ targetId = "article-body" }: { targetId?: string }) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const headings = Array.from(root.querySelectorAll("h2"));
    const list: TocItem[] = headings.map((h, i) => {
      let id = h.id;
      if (!id) {
        id = `section-${i + 1}`;
        h.id = id;
      }
      return { id, text: (h.textContent || "").trim() };
    });
    setItems(list);
  }, [targetId]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="목차"
      className="mb-10 rounded-2xl border border-navy-100 bg-cream-100/60 p-5 sm:p-6"
    >
      <p className="mb-3 flex items-center gap-2 text-sm font-bold text-navy-900">
        <span className="h-px w-5 bg-gradient-to-r from-gold-400 to-gold-600" aria-hidden="true" />
        목차
      </p>
      <ol className="space-y-1.5">
        {items.map((it, i) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="group flex gap-2 text-[15px] leading-relaxed text-ink-700 transition-colors hover:text-navy-900"
            >
              <span className="font-semibold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="underline-offset-4 group-hover:underline group-hover:decoration-gold-400">
                {it.text}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
