import type { Dictionary } from "@/i18n/get-dictionary";
import type { EventGallery } from "@/lib/gallery";
import { humanizeSlug } from "@/lib/gallery";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Carousel } from "@/components/ui/carousel";
import { ArrowRightIcon } from "@/components/ui/icons";

type GalleryProps = {
  dict: Dictionary["gallery"];
  a11y: Dictionary["a11y"];
  galleries: EventGallery[];
};

export function Gallery({ dict, a11y, galleries }: GalleryProps) {
  if (galleries.length === 0) return null;

  return (
    <Section id="gallery" title={dict.title} subtitle={dict.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2">
        {galleries.map(({ slug, date, link, images }, index) => {
          const meta = dict.events[slug as keyof typeof dict.events];
          const title = meta?.title ?? humanizeSlug(slug);

          return (
            <Reveal key={slug} delay={index * 100}>
              <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
                <Carousel
                  images={images}
                  title={title}
                  labels={{
                    prev: a11y.prevPhoto,
                    next: a11y.nextPhoto,
                    goTo: a11y.goToPhoto,
                  }}
                />
                <figcaption className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-white">
                      {title}
                    </h3>
                    {date && (
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {date}
                      </span>
                    )}
                  </div>
                  {meta?.description && (
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {meta.description}
                    </p>
                  )}
                  {link && meta?.linkLabel && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                    >
                      {meta.linkLabel}
                      <ArrowRightIcon
                        width={14}
                        height={14}
                        className="transition-transform group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
