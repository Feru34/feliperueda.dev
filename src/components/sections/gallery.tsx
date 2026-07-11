import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { EventGallery } from "@/lib/gallery";
import { humanizeSlug } from "@/lib/gallery";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type GalleryProps = {
  dict: Dictionary["gallery"];
  galleries: EventGallery[];
};

export function Gallery({ dict, galleries }: GalleryProps) {
  if (galleries.length === 0) return null;

  return (
    <Section id="gallery" title={dict.title} subtitle={dict.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2">
        {galleries.map(({ slug, date, images }, index) => {
          const meta = dict.events[slug as keyof typeof dict.events];
          const title = meta?.title ?? humanizeSlug(slug);
          const [cover, ...rest] = images;

          return (
            <Reveal key={slug} delay={index * 100}>
              <figure className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cover}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {rest.length > 0 && (
                  <div className="grid grid-cols-4 gap-1 p-1">
                    {rest.slice(0, 4).map((image) => (
                      <div key={image} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
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
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
