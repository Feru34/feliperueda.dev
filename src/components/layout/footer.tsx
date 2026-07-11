import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";

type FooterProps = {
  dict: Dictionary["footer"];
};

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-center text-sm text-zinc-500 sm:flex-row sm:text-left dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. {dict.rights}
        </p>
        <p>{dict.builtWith}</p>
      </div>
    </footer>
  );
}
