import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
};

const variantClassName = {
  primary:
    "border-teal-700 bg-teal-700 text-white hover:border-teal-800 hover:bg-teal-800",
  secondary:
    "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50",
  quiet:
    "border-transparent bg-transparent text-teal-800 hover:border-teal-100 hover:bg-teal-50",
};

export function LinkButton({
  children,
  href,
  variant = "primary",
  external = false,
}: LinkButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors ${variantClassName[variant]}`;
  const isBrowserHandledLink =
    external || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isBrowserHandledLink) {
    return (
      <a
        className={className}
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
