import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const allow = "/";
  const disallow = ["/api/", "/*?*"];
  return {
    rules: [
      // 전체 봇 기본 허용
      { userAgent: "*", allow, disallow },
      // 구글
      { userAgent: "Googlebot", allow, disallow },
      { userAgent: "Googlebot-Image", allow },
      // 네이버
      { userAgent: "Yeti", allow, disallow },
      // 빙 (IndexNow 파트너)
      { userAgent: "bingbot", allow, disallow },
      // 다음
      { userAgent: "Daumoa", allow, disallow },
    ],
    sitemap: [absoluteUrl("/sitemap.xml"), absoluteUrl("/sitemap1.xml")],
    host: SITE.url,
  };
}
