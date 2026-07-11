import { spokenLanguages } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type AboutProps = {
  dict: Dictionary["about"];
};

export function About({ dict }: AboutProps) {
  return (
    <Section id="about" title={dict.title}>
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            {dict.languagesTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {spokenLanguages.map(({ code, levelKey }) => (
              <li
                key={code}
                className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-2.5 dark:border-zinc-800"
              >
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {dict.languageNames[code as keyof typeof dict.languageNames]}
                </span>
                <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                  {dict.levels[levelKey]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
