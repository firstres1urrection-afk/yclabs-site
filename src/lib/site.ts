import type { Metadata } from "next";

export const site = {
  name: "YCLabs",
  url: "https://yclabs.co.kr",
  domain: "yclabs.co.kr",
  description:
    "Bangkok Stay Optimizer를 운영하는 YCLabs의 공식 운영사/브랜드 사이트입니다.",
  appUrl: "https://app.yclabs.co.kr",
  supportEmail: "support@yclabs.co.kr",
  partnersEmail: "partners@yclabs.co.kr",
  issuesUrl:
    "https://github.com/firstres1urrection-afk/bangkok-stay-optimizer/issues",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/partnership", label: "Partnership" },
];

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
}: PageMetadata): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
