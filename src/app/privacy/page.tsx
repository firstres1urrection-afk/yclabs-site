import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/PageSections";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description:
    "YCLabs 공식 사이트와 Bangkok Stay Optimizer 운영에 관한 개인정보처리방침입니다.",
  path: "/privacy",
});

const sections = [
  {
    title: "1. 처리하는 개인정보",
    body: [
      "YCLabs 공식 사이트는 별도의 회원가입 기능을 제공하지 않습니다.",
      "사용자가 이메일로 문의하는 경우 이름, 이메일 주소, 소속, 문의 내용 등 사용자가 직접 보낸 정보가 처리될 수 있습니다.",
      "서비스 운영과 보안을 위해 Vercel 등 호스팅 제공자가 접속 로그, IP 주소, 브라우저 정보 등 기술 정보를 처리할 수 있습니다.",
    ],
  },
  {
    title: "2. 이용 목적",
    body: [
      "문의 응대, 제휴 제안 검토, 서비스 오류 확인, 정책 안내, 보안 점검을 위해 개인정보를 사용할 수 있습니다.",
      "예약, 결제, 취소, 환불 관련 정보는 외부 OTA 또는 예약 채널에서 처리되며 YCLabs가 직접 결제 정보를 수집하지 않습니다.",
    ],
  },
  {
    title: "3. 보관 기간",
    body: [
      "문의 이메일과 관련 기록은 응대 및 분쟁 대응에 필요한 기간 동안 보관할 수 있습니다.",
      "법령상 보관 의무가 있는 경우 해당 기간에 따릅니다.",
    ],
  },
  {
    title: "4. 제3자 제공 및 위탁",
    body: [
      "YCLabs는 법령상 근거가 있거나 사용자의 동의가 있는 경우를 제외하고 개인정보를 임의로 제3자에게 제공하지 않습니다.",
      "사이트 호스팅, 이메일 수신, 보안 로그 처리 등 서비스 운영에 필요한 범위에서 외부 서비스 제공자가 기술 정보를 처리할 수 있습니다.",
    ],
  },
  {
    title: "5. 사용자 권리",
    body: [
      "개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.",
      `관련 요청은 ${site.supportEmail}로 보내 주세요.`,
    ],
  },
  {
    title: "6. 방침 변경",
    body: [
      "서비스 구조, 문의 방식, 분석 도구, 폼 기능 등이 변경될 경우 개인정보처리방침을 업데이트합니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="개인정보처리방침"
        description="YCLabs 공식 사이트와 운영 서비스 이용 과정에서 처리될 수 있는 개인정보와 사용자 권리를 안내합니다."
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
