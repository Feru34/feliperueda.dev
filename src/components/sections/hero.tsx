import Image from "next/image";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";

type HeroProps = {
  dict: Dictionary["hero"];
  photoAlt: string;
};

export function Hero({ dict, photoAlt }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden className="hero-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {dict.badge}
          </span>

          <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            {dict.greeting}{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Felipe
            </span>
          </h1>

          <p className="font-display mt-3 text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
            {dict.role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {dict.summary}
          </p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <MapPinIcon width={16} height={16} />
            {dict.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {dict.ctaContact}
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href={profile.links.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              <DownloadIcon width={16} height={16} />
              {dict.ctaCv}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 shadow-xl dark:border-zinc-800">
              <Image
                src={profile.photo}
                alt={`${photoAlt} ${profile.name}`}
                width={360}
                height={480}
                priority
                sizes="(max-width: 1024px) 288px, 360px"
                className="h-auto w-72 object-cover sm:w-80 lg:w-90"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
