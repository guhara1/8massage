import { ReactNode } from "react";
import Link from "next/link";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import FAQAccordion, { FAQ } from "./FAQAccordion";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";
import ArticleToc from "./ArticleToc";
import { PageHero, Prose, ContactCTA, InternalLinkCard } from "./ui";
import { faqLd, articleLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export type RelatedLink = { title: string; href: string; description: string };
export type Reference = { label: string; href: string };

export default function MagazineArticle({
  category,
  categoryHref,
  title,
  description,
  path,
  datePublished,
  children,
  faqs,
  related,
  references,
}: {
  category: string;
  categoryHref: string;
  title: string;
  description: string;
  path: string;
  datePublished: string;
  children: ReactNode;
  faqs: FAQ[];
  related: RelatedLink[];
  references?: Reference[];
}) {
  return (
    <>
      <JsonLd
        data={articleLd({ title, description, path, datePublished })}
      />
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "매거진", path: "/magazine/" },
              { name: category, path: categoryHref },
              { name: title, path },
            ]}
          />
        }
        title={title}
        description={description}
      />

      <Container className="py-12">
        <div className="mb-8 flex max-w-3xl items-center gap-3 border-b border-navy-100 pb-6">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-base font-bold text-gold-300 ring-1 ring-white/10"
            aria-hidden="true"
          >
            8
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-navy-900">
              <Link href="/about/editorial/" className="hover:text-gold-600" itemProp="author">
                {SITE.author.name}
              </Link>
            </p>
            <p className="mt-0.5 text-xs text-ink-600">
              <span className="font-medium text-gold-600">{category}</span>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <time dateTime={datePublished}>{datePublished.replace(/-/g, ".")} 발행</time>
            </p>
          </div>
        </div>

        <div className="max-w-3xl">
          <ArticleToc targetId="article-body" />
          <article id="article-body">
            <Prose>{children}</Prose>
          </article>

          {/* 저자 소개 (E-E-A-T) */}
          <div className="mt-12 flex gap-4 rounded-3xl border border-navy-100 bg-cream-100/60 p-6">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-lg font-bold text-gold-300 ring-1 ring-white/10"
              aria-hidden="true"
            >
              8
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">글 · {SITE.author.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{SITE.author.bio}</p>
              <Link
                href="/about/editorial/"
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500"
              >
                편집 정책 · 저자 소개 보기
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 참고 자료 (외부 공공 출처) */}
        {references && references.length > 0 ? (
          <div className="mt-12 max-w-3xl">
            <SectionHeading as="h2" title="참고 자료" />
            <p className="mb-4 text-sm leading-relaxed text-ink-700">
              위생·건강과 관련해 더 정확한 정보는 아래 공공기관 자료를 참고하시길 권합니다. 본
              글은 일반적인 안내이며 의학적 조언을 대신하지 않습니다.
            </p>
            <ul className="space-y-2">
              {references.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-sm font-medium text-navy-800 underline decoration-gold-400 decoration-1 underline-offset-4 hover:decoration-gold-600"
                  >
                    {r.label}
                    <span aria-hidden="true" className="text-gold-500">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* 관련 내부링크 */}
        <div className="mt-12">
          <SectionHeading as="h2" title="함께 보면 좋은 안내" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <InternalLinkCard key={r.href} {...r} />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <JsonLd data={faqLd(faqs)} />
          <SectionHeading as="h2" title="자주 묻는 질문" />
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-12">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
