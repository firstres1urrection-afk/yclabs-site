import type { Metadata } from "next";
import { Card, PageHero, Section, SectionTitle } from "@/components/PageSections";
import { LinkButton } from "@/components/LinkButton";
import { createMetadata, mailto, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Partnership",
  description:
    "YCLabs 제휴 문의 채널입니다. affiliate, redirect, API 연동 등 협업 문의는 partners@yclabs.co.kr로 연락해 주세요.",
  path: "/partnership",
});

const partnershipAreas = [
  "affiliate 또는 성과 측정이 가능한 외부 예약 채널 연결",
  "redirect 구조, 캠페인 링크, 추적 파라미터 협의",
  "숙소 데이터, 가격/재고 피드, API 연동 가능성 검토",
  "서비스 화면 내 출처, 고지, 정책 문구 정리",
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="제휴와 파트너 문의는 별도 메일로 받습니다."
        description="Bangkok Stay Optimizer는 방콕 숙소 비교와 외부 예약 채널 연결을 중심으로 운영됩니다. affiliate, redirect, API 연동 등 서비스 구조에 맞는 협업 가능성을 검토할 수 있습니다."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href={mailto(site.partnersEmail, "YCLabs 제휴 문의")}>
            {site.partnersEmail}
          </LinkButton>
          <LinkButton external href={site.appUrl} variant="secondary">
            서비스 보기
          </LinkButton>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <SectionTitle
              title="협업 가능 영역"
              description="현재 서비스 구조에서 검토 가능한 제휴 범위입니다."
            />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-700">
              {partnershipAreas.map((area) => (
                <li className="flex gap-3" key={area}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-zinc-950">현재 서비스 구조</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Bangkok Stay Optimizer는 숙소 비교와 선택 전략 정리에 집중합니다.
              사용자가 예약을 진행할 경우 실제 예약, 결제, 취소, 환불은 외부 OTA
              또는 숙소 예약 채널에서 처리됩니다.
            </p>
            <p className="mt-4 leading-7 text-zinc-600">
              제휴 검토 시에는 연결 방식, 고지 문구, 데이터 사용 범위, 사용자
              이동 흐름을 명확히 확인합니다.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <Card>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950">
                제휴 메일에 포함하면 좋은 내용
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                회사 또는 서비스 소개, 제안하는 연동 방식, 대상 지역/숙소 범위,
                추적 또는 정산 방식, 필요한 기술 문서를 함께 보내 주세요.
              </p>
            </div>
            <LinkButton href={mailto(site.partnersEmail, "YCLabs 제휴 문의")}>
              제휴 문의하기
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
