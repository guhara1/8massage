import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";
import { InternalLinkCard, SafetyNoticeBox } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "아로마 케어 안내 | 8 마사지",
  description:
    "향을 활용한 편안한 휴식과 릴랙스, 컨디션 관리 중심의 아로마 케어를 안내합니다. 8 마사지는 과장된 효능 표현 없이 정직하게 안내합니다.",
  path: "/services/aroma-care/",
});

const faqs = [
  {
    q: "아로마 케어는 향으로 무엇을 해주나요?",
    a: "은은한 향과 함께 차분한 분위기에서 편안한 휴식을 돕는 케어입니다. 특정 질환을 낫게 한다고 말하지 않으며, 향을 통한 릴랙스와 컨디션 관리에 초점을 둡니다.",
  },
  {
    q: "향에 민감한 편인데 괜찮을까요?",
    a: "향 민감도는 사람마다 다르므로 예약 시 미리 알려 주시면 향의 종류나 사용 정도를 조절해 안내합니다. 불편함이 느껴지면 진행 중에도 편하게 말씀하실 수 있습니다.",
  },
  {
    q: "아로마 케어와 다른 케어를 함께 받을 수 있나요?",
    a: "원하시는 휴식 방향에 따라 케어 구성을 함께 상의할 수 있습니다. 다만 무리한 구성보다는 그날의 상태에 맞는 편안한 선택을 권합니다.",
  },
];

export default function Page() {
  return (
    <StandardPage
      breadcrumb={[
        { name: "출장마사지 안내", path: "/services/visit-massage/" },
        { name: "아로마 케어", path: "/services/aroma-care/" },
      ]}
      title="아로마 케어 안내"
      description="은은한 향과 함께 차분한 분위기에서 편안한 휴식을 찾는 분을 위한 아로마 케어 안내입니다."
      faqs={faqs}
      faqHeading="아로마 케어 FAQ"
      aside={
        <>
          <SafetyNoticeBox>
            아로마 케어는 향을 활용한 휴식과 릴랙스를 돕는 과정이며, 질병 치료나 의료 효과를
            보장하지 않습니다.
          </SafetyNoticeBox>
          <div className="space-y-3">
            <InternalLinkCard title="컨디션 케어" href="/services/condition-care/" description="피로와 긴장 완화 중심의 케어" />
            <InternalLinkCard title="근육 이완 케어" href="/services/muscle-relax-care/" description="뻐근함과 근육 긴장 완화" />
            <InternalLinkCard title="이용 전 준비사항" href="/services/before-use/" description="방문 전 확인하면 좋은 항목" />
          </div>
        </>
      }
    >
      <h2>아로마 케어란</h2>
      <p>
        아로마 케어는 은은한 향이 더해진 차분한 분위기 속에서 편안한 휴식을 찾는 분을 위한 방문
        케어입니다. 시각·청각만큼 후각도 우리의 긴장과 이완에 영향을 줍니다. 익숙하고 편안한 향이
        공간을 채우면 마음이 한결 차분해지고, 그 안에서 보내는 휴식의 시간이 더 편안하게 느껴지곤
        합니다. 8 마사지는 이러한 분위기를 마련하는 데 초점을 두며, 향이 특정 질환을 치료하거나
        건강을 보장한다고 말하지 않습니다. 어디까지나 릴랙스와 컨디션 관리를 돕는 케어입니다.
      </p>

      <h2>이런 분께 어울립니다</h2>
      <ul>
        <li>차분한 분위기에서 마음을 가라앉히고 쉬고 싶은 분</li>
        <li>하루의 긴장을 가볍게 내려놓는 시간이 필요한 분</li>
        <li>은은한 향과 함께하는 편안한 휴식을 선호하는 분</li>
        <li>수면 전 차분한 루틴을 만들고 싶은 분</li>
      </ul>

      <h2>향은 어떻게 선택하나요</h2>
      <p>
        향에 대한 선호와 민감도는 사람마다 차이가 큽니다. 어떤 분은 상쾌한 계열을, 어떤 분은
        포근하고 부드러운 계열을 편안하게 느낍니다. 그래서 예약 시 평소 선호하는 향의 방향이나
        민감한 부분을 알려 주시면, 향의 종류와 사용 정도를 조절해 안내합니다. 진행 중에 향이
        과하게 느껴지면 언제든 편하게 말씀해 주세요. 편안함을 가장 우선으로 조정합니다.
      </p>

      <h2>편안함을 더하는 환경</h2>
      <p>
        아로마 케어는 향뿐 아니라 전체적인 환경이 어우러질 때 더 편안하게 느껴집니다. 가능하다면
        조명을 은은하게 낮추고, 휴대전화 알림을 잠시 줄여 방해받지 않는 시간을 마련해 보세요.
        편안한 복장과 따뜻한 실내 온도도 휴식에 도움이 됩니다. 이러한 작은 준비가 짧은 시간의
        휴식을 한층 깊게 만들어 줍니다.
      </p>

      <h2>안내드리는 범위</h2>
      <p>
        8 마사지는 아로마 케어를 휴식과 릴랙스의 관점에서만 안내합니다. ‘무조건 효과’나 ‘치료’
        같은 과장된 표현을 사용하지 않으며, 향의 효능을 단정하지 않습니다. 또한 성적·불법 요청이나
        사전에 합의되지 않은 요청은 제공하지 않으며, 모든 케어는 고객이 충분히 이해하고 동의한
        범위 안에서만 진행됩니다.
      </p>
    </StandardPage>
  );
}
