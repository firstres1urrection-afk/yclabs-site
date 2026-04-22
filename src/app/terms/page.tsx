import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/PageSections";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms",
  description:
    "YCLabs 공식 사이트와 Bangkok Stay Optimizer 이용에 관한 기본 약관입니다.",
  path: "/terms",
});

const sections = [
  {
    title: "1. 목적",
    body: [
      "본 약관은 YCLabs 공식 사이트와 YCLabs가 운영하는 웹 서비스 이용에 관한 기본 사항을 정합니다.",
    ],
  },
  {
    title: "2. 서비스 성격",
    body: [
      "YCLabs는 실용적인 비교 도구와 운영형 웹 서비스를 제공합니다.",
      "Bangkok Stay Optimizer는 방콕 숙소 전략 비교를 돕는 공개 서비스이며 직접 예약/결제를 처리하는 플랫폼이 아닙니다.",
    ],
  },
  {
    title: "3. 외부 예약 채널",
    body: [
      "서비스에서 외부 OTA, 호텔, 예약 채널로 이동할 수 있습니다.",
      "실제 가격, 재고, 예약 가능 여부, 결제, 취소, 환불, 고객 지원은 해당 외부 채널의 정책에 따릅니다.",
      "YCLabs는 외부 채널의 실시간 정보나 거래 결과를 보증하지 않습니다.",
    ],
  },
  {
    title: "4. 사용자 책임",
    body: [
      "사용자는 최종 예약 또는 결제 전에 외부 채널에서 제공하는 조건과 정책을 직접 확인해야 합니다.",
      "서비스를 악용하거나 비정상적인 접근으로 운영을 방해해서는 안 됩니다.",
    ],
  },
  {
    title: "5. 콘텐츠와 정보",
    body: [
      "YCLabs는 서비스 내 정보의 정확성과 최신성을 유지하기 위해 노력하지만 모든 정보가 항상 완전하거나 최신임을 보장하지 않습니다.",
      "필요한 경우 사전 고지 없이 콘텐츠, 링크, 서비스 구성을 변경할 수 있습니다.",
    ],
  },
  {
    title: "6. 문의",
    body: [
      `일반 문의는 ${site.supportEmail}, 제휴 문의는 ${site.partnersEmail}로 연락해 주세요.`,
    ],
  },
  {
    title: "7. 약관 변경",
    body: [
      "서비스 구조나 운영 정책이 변경될 경우 본 약관을 업데이트할 수 있습니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="이용약관"
        description="YCLabs 공식 사이트와 Bangkok Stay Optimizer 이용에 관한 기본 조건을 안내합니다."
      />

      <Section>
        <Card>
          <p className="text-sm font-medium text-zinc-600">시행일: 2026년 4월 22일</p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-zinc-950">{section.title}</h2>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Card>
      </Section>
    </>
  );
}
