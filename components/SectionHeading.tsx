import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  as?: "h2" | "h3";
}) {
  const Tag = as;
  return (
    <div className="mb-6 max-w-3xl scroll-mt-28" id={id}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`font-semibold tracking-tight text-ink-900 ${
          as === "h2" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-ink-700">{description}</p>
      ) : null}
    </div>
  );
}
