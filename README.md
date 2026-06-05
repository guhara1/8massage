# 8 마사지 — 출장마사지 안내 사이트

서울·경기·인천·부산 지역의 **건전한 방문 케어(출장마사지) 정보**를 안내하는 SEO 최적화
웹사이트입니다. Next.js App Router + TypeScript + Tailwind CSS 기반의 모바일 퍼스트
반응형으로 제작되었습니다.

## 기술 스택

- **Next.js 14 (App Router)** · 정적 생성(SSG) 기반, 전 페이지 prerender
- **TypeScript**
- **Tailwind CSS** · 차분한 딥 네이비 + 골드 포인트, 접근성 대비 고려
- 외부 런타임 스크립트 없음 → Core Web Vitals 친화적

## 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 (http://localhost:3000)
npm run dev

# 3. 프로덕션 빌드 & 실행
npm run build
npm run start
```

## 배포 전 설정

- `lib/site.ts` 의 `SITE.url` 을 실제 배포 도메인으로 교체하세요.
  (canonical, sitemap, robots, JSON-LD 의 절대 URL에 사용됩니다.)
- `app/business-info/page.tsx` 의 사업자 정보를 실제 운영 정보로 채우세요.

## 사이트 구조 (색인 대상 48개 URL)

```
/                                  메인 (Organization·WebSite·FAQ 구조화 데이터)
/about/{brand,policy,service-area-policy}
/services/{visit-massage,condition-care,muscle-relax-care,aroma-care,before-use}
/service-area/                     지역 인덱스
/service-area/{seoul,gyeonggi,incheon,busan}   광역 4개만 (FAQPage·Breadcrumb)
/booking/  /price/  /booking/{same-day,time,cancel-policy,payment}
/safety/{hygiene,customer-protection,prohibited-services}
/magazine/ + 6개 카테고리 + 10개 글 (Article 구조화 데이터)
/notice /faq /contact /booking-inquiry /partnership /privacy /terms /business-info
sitemap.xml  robots.txt  (Next metadata route로 자동 생성)
```

## 도어웨이 스팸 방지 (핵심 설계 원칙)

- 지역 페이지는 **서울·경기·인천·부산 4개만** 생성합니다.
- 강남·성남·수원·송도·해운대 등 **세부 지역은 개별 URL을 만들지 않고**,
  각 광역 지역 페이지 내부의 **H2 권역 섹션 + 내부 앵커**(`#gangnam`, `#south` 등)로만
  처리합니다.
- 드롭다운 메뉴의 세부 지역 항목도 모두 내부 앵커로 연결됩니다.
- 모든 페이지 본문은 지역명만 바꾼 복제 문단 없이 **고유하게** 작성되었습니다.

세부 지역 페이지를 추후 확장하려면 `lib/navigation.ts` / `lib/routes.ts` 구조를
그대로 따르되, 각 페이지가 고유한 가치를 담을 수 있을 때에만 추가하세요.

## SEO 기술 요소

- 페이지별 고유 `title` / `meta description` / `canonical` (`lib/seo.ts`)
- 페이지당 H1 1개 + 논리적 H2/H3 구조
- Breadcrumb UI + `BreadcrumbList` JSON-LD
- 메인: `Organization` + `WebSite`, 지역·FAQ: `FAQPage`, 매거진 글: `Article`
- 오프라인 주소가 없으므로 `LocalBusiness` 는 사용하지 않음
- `robots.txt` / `sitemap.xml` 자동 생성, 의미 있는 앵커 텍스트 사용

## 콘텐츠 정책

성적·불법 서비스, 의료행위·치료 보장, 선정적 표현을 일절 사용하지 않으며,
“건전한 방문 케어 / 컨디션 관리 / 근육 이완 케어 / 위생 관리 / 제공하지 않는 서비스”를
중심으로 작성되었습니다.
