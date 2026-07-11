"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

type HeaderProps = {
  locale: Locale;
  nav: Record<string, string>;
  a11y: { toggleTheme: string; switchLanguage: string; openMenu: string; closeMenu: string };
};

const NAV_ANCHORS: { key: string; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#education" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

export function Header({ locale, nav, a11y }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          felipe<span className="text-sky-500">.</span>rueda
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ANCHORS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitcher currentLocale={locale} label={a11y.switchLanguage} />
          <ThemeToggle label={a11y.toggleTheme} />
          <button
            type="button"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 lg:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200/60 bg-white/95 px-6 py-4 backdrop-blur-md lg:hidden dark:border-zinc-800/60 dark:bg-zinc-950/95">
          <ul className="flex flex-col gap-1">
            {NAV_ANCHORS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  {nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
