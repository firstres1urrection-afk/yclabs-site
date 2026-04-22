import type { Metadata } from "next";
import { Card, PageHero, Section, SectionTitle } from "@/components/PageSections";
import { LinkButton } from "@/components/LinkButton";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "YCLabs가 만드는 실용적인 비교 도구와 운영형 웹 서비스, 그리고 과장 없는 운영 철학을 소개합니다.",
  path: "/about",
});

const operatingNotes = [
  "사용자가 결정을 내리기 전에 비교 기준을 정리할 수 있도록 돕습니다.",
  "공개 정보, 외부 예약 채널, 사용자의 조건을 구분해 안내합니다.",
  "직접 처리하지 않는 예약, 결제, 환불 영역은 외부 채널의 책임 범위로 명확히 둡니다.",
  "문의와 제휴는 공식 메일 채널을 우선으로 관리합니다.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About YCLabs"
        title="YCLabs는 실용적인 비교 도구와 운영형 웹 서비스를 만드는 브랜드입니다."
        description="작은 웹 서비스라도 운영 주체와 연락 채널이 분명해야 한다는 기준으로, 사용자에게 필요한 비교 화면과 공식 안내를 차분하게 정리합니다."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/services">운영 서비스 보기</LinkButton>
          <LinkButton href="/contact" variant="secondary">
            문의하기
          </LinkButton>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-zinc-950">무엇을 만드나요</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              YCLabs는 사용자가 여러 조건을 비교해야 하는 상황에서 판단을 돕는
              웹 서비스를 만듭니다. 현재 대표 서비스는 Bangkok Stay Optimizer이며,
              방콕 숙소 선택을 위한 비교와 외부 예약 채널 연결에 집중합니다.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-zinc-950">어떻게 운영하나요</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              서비스가 직접 처리하는 범위와 외부 채널에서 처리되는 범위를
              구분합니다. 회사 규모, 성과, 제휴 현황은 확인되지 않은 내용을
              꾸며내지 않고 필요한 정보만 공식 사이트에 남깁니다.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <SectionTitle
          eyebrow="운영 철학"
          title="과장보다 실제 운영에 필요한 기준을 우선합니다"
          description="사용자가 신뢰할 수 있는 공식 허브가 되기 위해 다음 기준을 지킵니다."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {operatingNotes.map((note) => (
            <Card key={note}>
              <p className="text-sm leading-6 text-zinc-700">{note}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
