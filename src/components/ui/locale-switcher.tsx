"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { GlobeIcon } from "./icons";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LocaleSwitcher({ currentLocale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <label className="relative inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white">
      <GlobeIcon width={16} height={16} />
      <span className="font-medium uppercase">{currentLocale}</span>
      <select
        aria-label={label}
        value={currentLocale}
        onChange={(event) => switchTo(event.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
