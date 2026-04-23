import type { Metadata } from "next";
import { Card, PageHero, Section, SectionTitle } from "@/components/PageSections";
import { LinkButton } from "@/components/LinkButton";
import { createMetadata, mailto, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "YCLabs 일반 문의 채널입니다. 서비스 운영, 정책, 오류 제보 등은 ops@yclabs.co.kr로 연락해 주세요.",
  path: "/contact",
});

const examples = [
  "서비스 이용 중 발견한 오류나 표시 정보 문의",
  "개인정보처리방침 또는 이용약관 관련 문의",
  "운영사 확인, 공식 채널 확인, 기타 일반 문의",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="일반 문의는 공식 운영 메일로 받습니다."
        description="YCLabs와 Bangkok Stay Optimizer 관련 일반 문의는 ops@yclabs.co.kr로 보내 주세요. 제휴 제안도 같은 메일로 접수하며, Partnership 페이지의 제목으로 보내면 더 빠르게 분류할 수 있습니다."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href={mailto(site.supportEmail, "YCLabs 일반 문의")}>
            {site.supportEmail}
          </LinkButton>
          <LinkButton href="/partnership" variant="secondary">
            제휴 문의하기
          </LinkButton>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <SectionTitle
              title="문의 목적 예시"
              description="다음과 같은 내용을 공식 운영 메일로 보낼 수 있습니다."
            />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-700">
              {examples.map((example) => (
                <li className="flex gap-3" key={example}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-700" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-zinc-950">문의 내용 정리</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              현재 사이트 내 직접 전송 기능은 제공하지 않습니다. 아래 항목을
              참고해 메일 본문에 작성해 주세요.
            </p>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                이름 / 소속
                <span className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-500">
                  답변에 필요한 이름 또는 소속
                </span>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                답장 받을 이메일
                <span className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-500">
                  회신 가능한 이메일 주소
                </span>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                문의 내용
                <span className="min-h-28 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-500">
                  서비스명, 화면, 상황, 확인이 필요한 내용을 함께 적어 주세요.
                </span>
              </label>
            </div>
            <div className="mt-6">
              <LinkButton href={mailto(site.supportEmail, "YCLabs 일반 문의")}>
                메일 앱으로 문의하기
              </LinkButton>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <Card>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950">
                버그 제보 / 기능 요청
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                개발자 채널이 더 적합한 제보는 GitHub Issues를 보조 채널로 사용할
                수 있습니다. 일반 문의와 제휴 문의의 기본 채널은 공식 메일입니다.
              </p>
            </div>
            <LinkButton external href={site.issuesUrl} variant="secondary">
              GitHub Issues
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
