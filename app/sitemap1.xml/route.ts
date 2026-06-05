import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

// 구글 제출용 별칭 사이트맵. 정적 익스포트로 out/sitemap1.xml 생성.
export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changeFrequency}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  ).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
