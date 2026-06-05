import { ReactNode } from "react";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import FAQAccordion, { FAQ } from "./FAQAccordion";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";
import { PageHero, Prose, ContactCTA, InternalLinkCard } from "./ui";
import { faqLd, articleLd } from "@/lib/seo";

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
        <p className="mb-6 text-sm text-ink-700/70">
          <span className="font-semibold text-gold-600">{category}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <time dateTime={datePublished}>{datePublished}</time>
        </p>

        <article className="max-w-3xl">
          <Prose>{children}</Prose>
        </article>

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
