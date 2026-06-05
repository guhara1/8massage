import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "홈", path: "/" }, ...items];
  return (
    <nav aria-label="breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbLd(full)} />
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-ink-700/80">
        {full.map((item, i) => {
          const last = i === full.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-ink-800" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-gold-600">
                  {item.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true" className="text-navy-100">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
