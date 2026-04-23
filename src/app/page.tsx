import type { Metadata } from "next";
import { Card, Section, SectionTitle } from "@/components/PageSections";
import { LinkButton } from "@/components/LinkButton";
import { createMetadata, mailto, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "YCLabs | 운영사/브랜드 공식 사이트",
  description:
    "Bangkok Stay Optimizer를 운영하는 YCLabs의 공식 사이트입니다. 일반 문의와 제휴 문의를 공식 메일 채널로 받습니다.",
});

const principles = [
  "실제 운영 중인 서비스와 공식 연락 채널을 명확히 분리합니다.",
  "예약과 결제는 외부 OTA 또는 숙소 채널에서 진행된다는 점을 분명히 안내합니다.",
  "과장된 성과보다 사용자가 비교와 판단에 활용할 수 있는 정보를 우선합니다.",
];

function ServiceMap() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
      <div className="grid gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-md border border-teal-200 bg-white p-4">
          <p className="font-semibold text-zinc-950">YCLabs</p>
          <p className="mt-2 leading-6 text-zinc-600">운영사 / 브랜드 허브</p>
        </div>
        <div className="rounded-md border border-zinc-200 bg-white p-4">
          <p className="font-semibold text-zinc-950">Bangkok Stay Optimizer</p>
          <p className="mt-2 leading-6 text-zinc-600">방콕 숙소 전략 비교 서비스</p>
        </div>
        <div className="rounded-md border border-amber-200 bg-white p-4">
          <p className="font-semibold text-zinc-950">External OTA</p>
          <p className="mt-2 leading-6 text-zinc-600">예약 / 결제 처리 채널</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-teal-800">YCLabs 공식 사이트</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-5xl">
              실용적인 비교 도구와 운영형 웹 서비스를 만드는 브랜드입니다.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              YCLabs는 Bangkok Stay Optimizer를 운영하며, 사용자가 숙소 선택
              기준을 차분하게 비교할 수 있는 웹 서비스를 만듭니다. 공식 문의와
              제휴 논의는 아래 메일 채널에서 받습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton external href={site.appUrl}>
                서비스 보기
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                문의하기
              </LinkButton>
              <LinkButton href="/partnership" variant="quiet">
                제휴 문의하기
              </LinkButton>
            </div>
          </div>
          <ServiceMap />
        </div>
      </section>

      <Section className="border-t border-zinc-200">
        <SectionTitle
          eyebrow="대표 서비스"
          title="Bangkok Stay Optimizer"
          description="방콕 숙소 전략 비교를 돕는 공개 서비스입니다. 직접 예약/결제를 처리하는 플랫폼이 아니라, 비교 후 외부 OTA 또는 예약 채널로 이동하는 구조입니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-zinc-950">서비스 연결</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              숙소 후보를 비교하고 조건을 정리한 뒤 앱 서비스로 자연스럽게
              이동할 수 있습니다.
            </p>
            <div className="mt-5">
              <LinkButton external href={site.appUrl} variant="secondary">
                app.yclabs.co.kr
              </LinkButton>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-zinc-950">공식 문의</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              일반 문의, 서비스 운영 관련 문의, 정책 관련 문의는 공식 운영
              메일로 받습니다.
            </p>
            <div className="mt-5">
              <LinkButton href={mailto(site.supportEmail, "YCLabs 일반 문의")} variant="secondary">
                {site.supportEmail}
              </LinkButton>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-zinc-950">제휴 문의</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              affiliate, redirect, API 연동 등 서비스 구조에 맞는 협업 논의를
              받을 수 있습니다.
            </p>
            <div className="mt-5">
              <LinkButton href={mailto(site.partnersEmail, "YCLabs 제휴 문의")} variant="secondary">
                {site.partnersEmail}
              </LinkButton>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <SectionTitle
            eyebrow="운영 기준"
            title="작고 명확하게 운영합니다"
            description="운영사 사이트는 앱 기능을 대신하지 않고, 브랜드 신뢰와 공식 채널을 정리하는 허브 역할에 집중합니다."
          />
          <div className="grid gap-4">
            {principles.map((principle) => (
              <Card key={principle}>
                <p className="text-sm leading-6 text-zinc-700">{principle}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
