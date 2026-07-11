import { experience } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { ArrowRightIcon } from "@/components/ui/icons";

type ExperienceProps = {
  dict: Dictionary["experience"];
};

export function Experience({ dict }: ExperienceProps) {
  return (
    <Section id="experience" title={dict.title} subtitle={dict.subtitle}>
      <div className="relative">
        {/* Base track + scroll-driven progress line drawn over it */}
        {/* Both lines and the dots share the same axis: x = 1px from the wrapper edge */}
        <span
          aria-hidden
          className="absolute top-0 left-0 h-full w-px translate-x-[0.5px] bg-zinc-200 dark:bg-zinc-800"
        />
        <span
          aria-hidden
          className="timeline-progress absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-sky-500 to-indigo-500"
        />
        <ol className="relative space-y-12 pl-8">
        {experience.map(({ key, tech, url, extraLink }, index) => {
          const item = dict.items[key];
          return (
            <li key={key} className="relative">
              {/* -left-8 puts the dot's left edge on the wrapper edge; -ml-[5px]
                  centers the 12px dot on the 2px line (center at x = 1px) */}
              <span
                className={`timeline-dot absolute top-1.5 -left-8 -ml-[5px] h-3 w-3 rounded-full border-2 border-white bg-sky-500 ring-4 ring-sky-500/20 dark:border-zinc-950 ${
                  index === 0 ? "animate-live" : ""
                }`}
              />
              <Reveal delay={index * 100}>
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{item.period}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-sky-600 dark:text-sky-400">
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}{" "}
                  · {item.location}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.slice(0, 32)} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-sky-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </div>
                {extraLink && (
                  <a
                    href={extraLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-sky-600 hover:underline dark:text-sky-400"
                  >
                    {extraLink.label}
                    <ArrowRightIcon
                      width={14}
                      height={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </Reveal>
            </li>
          );
        })}
        </ol>
      </div>
    </Section>
  );
}
