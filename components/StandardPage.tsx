import { ReactNode } from "react";
import Container from "./Container";
import Breadcrumb, { Crumb } from "./Breadcrumb";
import FAQAccordion, { FAQ } from "./FAQAccordion";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";
import { PageHero, Prose, ContactCTA } from "./ui";
import { faqLd } from "@/lib/seo";

/**
 * 정보성 텍스트 페이지 공통 레이아웃.
 * - Breadcrumb UI + BreadcrumbList 구조화 데이터 (Breadcrumb 내부)
 * - 본문(Prose)
 * - 선택적 FAQ 아코디언 + FAQPage 구조화 데이터
 * - 예약 문의 CTA
 */
export default function StandardPage({
  breadcrumb,
  title,
  description,
  children,
  faqs,
  faqHeading = "자주 묻는 질문",
  cta = true,
  aside,
}: {
  breadcrumb: Crumb[];
  title: string;
  description?: string;
  children: ReactNode;
  faqs?: FAQ[];
  faqHeading?: string;
  cta?: boolean;
  aside?: ReactNode;
}) {
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={breadcrumb} />}
        title={title}
        description={description}
      />

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article>
            <Prose>{children}</Prose>
          </article>
          {aside ? (
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">{aside}</aside>
          ) : null}
        </div>

        {faqs && faqs.length > 0 ? (
          <div className="mt-14">
            <JsonLd data={faqLd(faqs)} />
            <SectionHeading title={faqHeading} />
            <FAQAccordion items={faqs} />
          </div>
        ) : null}

        {cta ? (
          <div className="mt-14">
            <ContactCTA />
          </div>
        ) : null}
      </Container>
    </>
  );
}
