import { skillGroups } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";

type SkillsProps = {
  dict: Dictionary["skills"];
};

export function Skills({ dict }: SkillsProps) {
  return (
    <Section id="skills" title={dict.title} subtitle={dict.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map(({ key, items }, index) => (
          <Reveal
            key={key}
            delay={index * 75}
            className={index === 0 ? "sm:col-span-2" : ""}
          >
            <div className="card-shine h-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-sky-300/70 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-sky-700/70">
              <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-white">
                {dict.groups[key]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
