import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  as = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  as?: "h2" | "h3";
  align?: "left" | "center";
}) {
  const Tag = as;
  return (
    <Reveal
      className={`mb-7 max-w-3xl scroll-mt-28 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div id={id} className="scroll-mt-28">
        {eyebrow ? (
          <p
            className={`mb-2.5 flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-600 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-6 bg-gradient-to-r from-gold-400 to-gold-600" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <Tag
          className={`font-bold tracking-tighter text-navy-900 ${
            as === "h2" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </Tag>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-ink-700">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
