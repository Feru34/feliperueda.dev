import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GraduationCapIcon } from "@/components/ui/icons";

type EducationProps = {
  dict: Dictionary["education"];
};

export function Education({ dict }: EducationProps) {
  return (
    <Section id="education" title={dict.title}>
      <Reveal>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="mt-1 hidden rounded-xl bg-sky-100 p-2.5 text-sky-600 sm:inline-flex dark:bg-sky-950 dark:text-sky-400">
                <GraduationCapIcon />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                  {dict.degree}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-sky-600 dark:text-sky-400">
                  <a
                    href="https://uniandes.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {dict.university}
                  </a>{" "}
                  · {dict.location}
                </p>
              </div>
            </div>
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{dict.period}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {dict.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} className="h-full">
                <div className="h-full rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
