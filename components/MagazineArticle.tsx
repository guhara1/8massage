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
