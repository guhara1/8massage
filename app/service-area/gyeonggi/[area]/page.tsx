import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPage from "@/components/AreaPage";
import { pageMetadata } from "@/lib/seo";
import { getRegion, getArea, areaParams } from "@/lib/serviceAreas";

const REGION = "gyeonggi";
export const dynamicParams = false;

export function generateStaticParams() {
  return areaParams(REGION);
}

export function generateMetadata({ params }: { params: { area: string } }): Metadata {
  const area = getArea(REGION, params.area);
  if (!area) return {};
  return pageMetadata({
    title: area.title,
    description: area.description,
    path: `/service-area/${REGION}/${area.slug}/`,
  });
}

export default function Page({ params }: { params: { area: string } }) {
  const region = getRegion(REGION);
  const area = getArea(REGION, params.area);
  if (!region || !area) notFound();
  return <AreaPage region={region} area={area} />;
}
