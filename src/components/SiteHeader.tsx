import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          className="flex items-center gap-3 text-zinc-950"
          href="/"
          aria-label="YCLabs home"
        >
          <span className="grid size-9 place-items-center rounded-md border border-teal-200 bg-teal-50 text-sm font-bold text-teal-800">
            YC
          </span>
          <span className="text-lg font-semibold tracking-normal">YCLabs</span>
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-zinc-700">
            {navItems.map((item) => (
              <Link
                className="transition-colors hover:text-teal-800"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LinkButton external href={site.appUrl} variant="secondary">
            서비스 보기
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
