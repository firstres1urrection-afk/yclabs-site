import type { Metadata } from "next";
import { Card, PageHero, Section, SectionTitle } from "@/components/PageSections";
import { LinkButton } from "@/components/LinkButton";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "YCLabs가 운영하는 Bangkok Stay Optimizer 서비스와 외부 OTA 예약/결제 구조를 안내합니다.",
  path: "/services",
});

const inScope = [
  "방콕 숙소 후보와 비교 기준 정리",
  "사용자의 숙소 선택 전략을 돕는 공개 서비스 화면",
  "외부 OTA 또는 예약 채널로 이동할 수 있는 연결 구조",
];

const outOfScope = [
  "숙소 예약, 결제, 취소, 환불의 직접 처리",
  "외부 OTA의 실시간 가격, 재고, 정책 보증",
  "호텔 또는 예약 플랫폼을 대신한 고객 지원",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Bangkok Stay Optimizer를 운영합니다."
        description="Bangkok Stay Optimizer는 방콕 숙소 전략 비교를 돕는 공개 서비스입니다. 직접 예약/결제를 처리하는 플랫폼이 아니며, 실제 예약과 결제는 외부 OTA 또는 숙소 예약 채널에서 이뤄집니다."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton external href={site.appUrl}>
            서비스 보기
          </LinkButton>
          <LinkButton href="/partnership" variant="secondary">
            제휴 문의하기
          </LinkButton>
        </div>
      </PageHero>

      <Section>
        <Card>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-teal-800">
                app.yclabs.co.kr
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-zinc-950">
                Bangkok Stay Optimizer
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                사용자가 방콕 숙소를 고를 때 위치, 이동, 예산, 예약 채널 등을
                함께 살펴볼 수 있도록 돕습니다. 서비스의 목적은 의사결정 보조이며,
                최종 예약 조건은 이동한 외부 채널에서 확인해야 합니다.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-950">서비스 링크</h3>
              <a
                className="mt-3 block break-all text-sm font-medium text-teal-800"
                href={site.appUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.appUrl}
              </a>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                운영사 사이트와 앱 서비스는 분리되어 있으며, 각 도메인의 역할도
                다르게 유지합니다.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <Section className="bg-zinc-50">
        <SectionTitle
          eyebrow="서비스 범위"
          title="YCLabs가 제공하는 범위와 외부 채널 범위를 구분합니다"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-zinc-950">YCLabs 서비스 범위</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
              {inScope.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-zinc-950">외부 채널 처리 범위</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
              {outOfScope.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
