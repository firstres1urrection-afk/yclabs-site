import Link from "next/link";
import { navItems, site } from "@/lib/site";

const policyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-zinc-950">
            <span className="grid size-8 place-items-center rounded-md border border-teal-200 bg-white text-xs font-bold text-teal-800">
              YC
            </span>
            <span className="font-semibold">YCLabs</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            실용적인 비교 도구와 운영형 웹 서비스를 만드는 브랜드입니다.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">공식 채널</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              일반 문의:{" "}
              <a className="font-medium text-teal-800" href={`mailto:${site.supportEmail}`}>
                {site.supportEmail}
              </a>
            </li>
            <li>
              제휴 문의:{" "}
              <a className="font-medium text-teal-800" href={`mailto:${site.partnersEmail}`}>
                {site.partnersEmail}
              </a>
            </li>
            <li>
              서비스:{" "}
              <a
                className="font-medium text-teal-800"
                href={site.appUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                app.yclabs.co.kr
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">사이트</h2>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-600">
            {[...navItems, ...policyLinks].map((item) => (
              <Link
                className="transition-colors hover:text-teal-800"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="transition-colors hover:text-teal-800"
              href={site.issuesUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub Issues
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-5 py-4 text-center text-xs text-zinc-500">
        © 2026 YCLabs. All rights reserved.
      </div>
    </footer>
  );
}
