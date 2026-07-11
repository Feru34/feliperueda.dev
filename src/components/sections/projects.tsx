import { projects } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { ArrowRightIcon } from "@/components/ui/icons";

type ProjectsProps = {
  dict: Dictionary["projects"];
};

export function Projects({ dict }: ProjectsProps) {
  return (
    <Section id="projects" title={dict.title} subtitle={dict.subtitle}>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map(({ key, tech, link }, index) => {
          const item = dict.items[key];
          return (
            <Reveal key={key} delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-sky-700/70">
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400">{item.tag}</span>
                <h3 className="font-display mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tech.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                  >
                    {item.name}
                    <ArrowRightIcon width={14} height={14} />
                  </a>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
