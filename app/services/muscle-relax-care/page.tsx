import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "근육 이완 케어 안내 | 8 마사지",
  description:
    "운동 후 피로, 장시간 업무 후 뻐근함, 생활 속 근육 긴장 완화에 대한 안내입니다. 8 마사지는 치료·교정·재활 같은 의료 표현을 사용하지 않습니다.",
  path: "/services/muscle-relax-care/",
});

const faqs = [
  {
    q: "근육 이완 케어는 강하게 눌러야 효과가 있나요?",
    a: "강한 자극이 항상 좋은 것은 아닙니다. 편안하게 느껴지는 정도가 사람마다 달라, 진행 중 강도를 확인하며 조절합니다. 무리한 강도는 오히려 불편할 수 있어 권하지 않습니다.",
  },
  {
    q: "운동 직후 바로 받아도 되나요?",
    a: "격한 운동 직후에는 몸 상태를 살펴 시간을 두는 편이 편안할 수 있습니다. 현재 상태를 알려 주시면 적절한 진행 방향을 함께 안내해 드립니다.",
  },
  {
    q: "통증이 있는 부위도 케어가 되나요?",
    a: "근육 이완 케어는 휴식과 긴장 완화를 돕는 과정이며 치료가 아닙니다. 통증이 지속되거나 부상이 의심되는 경우에는 전문 의료기관의 진료를 먼저 받으시길 권합니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "출장마사지 안내", path: "/services/visit-massage/" },
        { name: "근육 이완 케어", path: "/services/muscle-relax-care/" },
      ]}
      title="근육 이완 케어 안내"
      description="장시간 업무나 활동 뒤의 뻐근함, 생활 속 근육 긴장을 편안하게 풀어가는 케어 안내입니다."
      faqs={faqs}
      faqHeading="근육 이완 케어 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            근육 이완 케어는 긴장 완화와 휴식을 돕는 과정이며, 치료·교정·재활 등 의료 행위를
            포함하지 않습니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="컨디션 케어" href="/services/condition-care/" description="피로와 긴장 완화 중심의 케어" />
            <InternalLinkCard title="아로마 케어" href="/services/aroma-care/" description="향과 함께하는 편안한 휴식" />
            <InternalLinkCard title="스트레칭·생활 케어" href="/magazine/stretching/" description="평소에 도움이 되는 생활 팁" />
          </div>
        </>
      }
    >
      <h2>근육 이완 케어란</h2>
      <p>
        근육 이완 케어는 같은 자세를 오래 유지하거나 활동량이 많았던 날 느끼는 뻐근함과 긴장을
        편안하게 풀어가는 데 초점을 둔 방문 케어입니다. 책상 앞에서 장시간 일한 뒤의 어깨와 목,
        오래 서 있거나 걸은 뒤의 다리, 운동 후의 묵직함처럼 일상에서 누구나 경험하는 근육의 피로를
        다룹니다. 8 마사지는 이 과정을 ‘치료’나 ‘교정’으로 표현하지 않습니다. 어디까지나 긴장된
        근육을 부드럽게 이완하고 휴식을 돕는 케어라는 점을 분명히 합니다.
      </p>

      <blockquote>
        강하게 누른다고 좋은 케어가 아닙니다. 편안하게 느껴지는 만큼, 그 지점에서 멈춥니다.
      </blockquote>

      <h2>이런 상황에 어울립니다</h2>
      <ul>
        <li>오래 앉아 일한 뒤 어깨·목이 뻐근하게 느껴질 때</li>
        <li>장시간 서 있거나 걸은 뒤 다리가 묵직할 때</li>
        <li>가벼운 운동 후 근육의 피로감을 정리하고 싶을 때</li>
        <li>생활 속 누적된 긴장을 편안하게 풀고 싶을 때</li>
      </ul>

      <h2>강도는 어떻게 맞추나요</h2>
      <p>
        근육 이완 케어에서 자주 오해하는 부분이 ‘강할수록 좋다’는 생각입니다. 실제로는 사람마다
        편안하게 느끼는 강도가 다르고, 과한 자극은 오히려 불편함을 남길 수 있습니다. 그래서 8
        마사지는 진행 중에 강도와 자세가 편안한지 확인하며 조절합니다. 처음에는 부드럽게 시작해
        몸이 적응하는 정도를 살피고, 원하는 만큼만 강도를 조정합니다. 불편하면 언제든 편하게
        말씀해 주세요.
      </p>

      <h2>케어 후 관리</h2>
      <p>
        케어가 끝난 뒤에는 충분한 수분을 섭취하고, 가능하면 무리한 활동을 잠시 피하며 몸이 이완된
        상태를 유지하는 것이 좋습니다. 평소에 가벼운 스트레칭과 바른 자세를 함께 챙기면 근육의
        긴장이 덜 쌓이는 데 도움이 됩니다. 이러한 관리는 의료적 처치가 아니라 일상에서 컨디션을
        돌보는 습관입니다.
      </p>

      <h2>안내드리는 범위</h2>
      <p>
        8 마사지는 근육 이완 케어를 휴식과 긴장 완화의 관점에서만 안내합니다. 부상 회복, 재활,
        통증 치료와 같은 의료적 결과를 약속하지 않으며, 통증이 지속되거나 부상이 의심될 때는 전문
        의료기관의 진료를 우선 권합니다. 또한 성적·불법 요청이나 사전에 합의되지 않은 요청은
        제공하지 않으며, 모든 케어는 고객이 동의한 범위 안에서만 진행됩니다.
      </p>
    </StandardPage>
  );
}
