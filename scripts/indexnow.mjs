#!/usr/bin/env node
/**
 * IndexNow 즉시 색인 통보 (Bing · Naver · Yandex · Seznam 동시).
 *
 * 사용법:
 *   node scripts/indexnow.mjs                 # sitemap.xml 의 전체 URL 통보
 *   node scripts/indexnow.mjs <url> [url...]  # 지정한 URL만 통보 (새 글 올렸을 때)
 *
 * 전제: 배포 도메인에 키 파일이 살아 있어야 함
 *   https://8massage.xyz/14e2b57edc8abf4a6417c9aa6d514803.txt
 */

const HOST = "8massage.xyz";
const KEY = "14e2b57edc8abf4a6417c9aa6d514803";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;

async function getUrlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { headers: { "User-Agent": "indexnow-script" } });
  if (!res.ok) throw new Error(`sitemap fetch 실패: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(urlList) {
  if (urlList.length === 0) {
    console.log("통보할 URL이 없습니다.");
    return;
  }
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow 응답: ${res.status} ${res.statusText} (URL ${urlList.length}건)`);
  // 200/202 = 성공. 그 외는 본문 확인.
  if (![200, 202].includes(res.status)) {
    console.log(await res.text());
    process.exitCode = 1;
  }
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? args : await getUrlsFromSitemap();
// IndexNow는 한 번에 최대 10,000건
await submit(urls.slice(0, 10000));
