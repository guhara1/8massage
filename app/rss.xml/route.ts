import { ARTICLES } from "@/lib/magazine";
import { SITE, absoluteUrl } from "@/lib/site";

// 매거진 RSS 피드. 정적 익스포트로 out/rss.xml 생성.
export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = [...ARTICLES]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((a) => {
      const link = absoluteUrl(a.href);
      const pub = new Date(`${a.datePublished}T09:00:00+09:00`).toUTCString();
      return `    <item>\n      <title>${esc(a.title)}</title>\n      <link>${link}</link>\n      <guid isPermaLink="true">${link}</guid>\n      <category>${esc(a.category)}</category>\n      <pubDate>${pub}</pubDate>\n      <description>${esc(a.excerpt)}</description>\n      <author>${esc(SITE.author.name)}</author>\n    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${esc(SITE.name)} 매거진</title>\n    <link>${absoluteUrl("/magazine/")}</link>\n    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml" />\n    <description>${esc(SITE.description)}</description>\n    <language>ko</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
