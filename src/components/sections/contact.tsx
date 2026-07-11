import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/ui/reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

type ContactProps = {
  dict: Dictionary["contact"];
};

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-sky-50 px-6 py-14 text-center sm:px-12 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-sky-950/40">
            <span
              aria-hidden
              className="orb -top-20 -left-16 h-64 w-64 bg-sky-400/25 dark:bg-sky-500/15"
            />
            <span
              aria-hidden
              className="orb -right-16 -bottom-24 h-72 w-72 bg-indigo-400/25 dark:bg-indigo-500/15 [animation-delay:-6s] [animation-duration:20s]"
            />
            <h2 className="font-display relative text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              {dict.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {dict.subtitle}
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <MailIcon width={16} height={16} />
                {dict.emailCta}
              </a>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{dict.or}</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <p className="relative mt-6 text-sm text-zinc-500 dark:text-zinc-400">{profile.email}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
