import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** 기본은 index,follow. 색인에서 제외할 경우 false */
  index?: boolean;
  /** 선호 대표 이미지(og:image). 기본값은 사이트 공통 OG 이미지. */
  image?: string;
};

/** 사이트 공통 선호 썸네일(og:image / schema image). */
export const DEFAULT_OG_IMAGE = "/og.png";

/**
 * 페이지별 고유 title / description / canonical 을 일관되게 생성한다.
 */
export function pageMetadata({
  title,
  description,
  path,
  index = true,
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  return {
    title,
    description,
    alternates: {
      canonical,
      types: { "application/rss+xml": absoluteUrl("/rss.xml") },
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/** JSON-LD를 안전하게 직렬화한다. */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    image: [absoluteUrl(DEFAULT_OG_IMAGE)],
    author: {
      "@type": "Organization",
      name: SITE.author.name,
      url: absoluteUrl("/about/editorial/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: absoluteUrl("/favicon.svg"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    areaServed: ["서울", "경기", "인천", "부산"],
    telephone: SITE.contact.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: SITE.contact.phone,
      url: absoluteUrl("/booking-inquiry/"),
      areaServed: "KR",
      availableLanguage: "Korean",
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "ko-KR",
  };
}
