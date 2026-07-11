"use client";

import { useEffect, useState } from "react";
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
  const [active, setActive] = useState<string | null>(null);

  // Scroll-spy: the section crossing the middle of the viewport wins
  useEffect(() => {
    const sections = NAV_ANCHORS.map(({ href }) =>
      document.querySelector<HTMLElement>(href)
    ).filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      {/* Reading progress — CSS scroll-driven animation, no JS */}
      <span
        aria-hidden
        className="scroll-progress absolute inset-x-0 bottom-[-1px] block h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500"
      />
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          felipe<span className="terminal-dot text-sky-500">.</span>rueda
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ANCHORS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={`nav-link text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white ${
                active === href ? "nav-link-active" : ""
              }`}
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
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white ${
                    active === href
                      ? "font-medium text-sky-600 dark:text-sky-400"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
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
