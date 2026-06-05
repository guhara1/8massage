import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import SectionHeading from "./SectionHeading";
import { PageHero, MagazineCard, ContactCTA, InternalLinkCard } from "./ui";
import { articlesByCategory, CATEGORIES, Category } from "@/lib/magazine";

export default function MagazineCategory({ category }: { category: Category }) {
  const articles = articlesByCategory(category.href);
  const others = CATEGORIES.filter((c) => c.href !== category.href);
  return (
    <>
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { name: "매거진", path: "/magazine/" },
              { name: category.title, path: category.href },
            ]}
          />
        }
        title={category.title}
        description={category.description}
      />
      <Container className="py-12">
        {articles.length > 0 ? (
          <>
            <SectionHeading title={`${category.title} 글`} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <MagazineCard
                  key={a.href}
                  title={a.title}
                  href={a.href}
                  excerpt={a.excerpt}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="rounded-xl border border-navy-100 bg-navy-50/40 p-6 text-sm leading-relaxed text-ink-700">
            이 카테고리의 글을 준비하고 있습니다. 곧 새로운 정보성 콘텐츠로 찾아뵙겠습니다.
            그동안 아래 다른 카테고리의 글도 함께 살펴보세요.
          </p>
        )}

        <div className="mt-14">
          <SectionHeading title="다른 카테고리" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <InternalLinkCard
                key={c.href}
                title={c.title}
                href={c.href}
                description={c.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <ContactCTA />
        </div>
      </Container>
    </>
  );
}
