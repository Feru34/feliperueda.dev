import fs from "node:fs";
import path from "node:path";
import { eventOrder } from "@/content/events";

const EVENTS_DIR = path.join(process.cwd(), "public", "assets", "images", "events");
const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

export type EventGallery = {
  slug: string;
  date?: string;
  link?: string;
  /** Public URLs, e.g. /assets/images/events/<slug>/<file> */
  images: string[];
};

/** Fallback title when a slug has no dictionary entry: "my-event" → "My Event". */
export function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Enumerates event folders at build/request time on the server.
 * Every image dropped into public/assets/images/events/<slug>/ shows up
 * automatically — no code changes required.
 */
export function getEventGalleries(): EventGallery[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];

  const folders = fs
    .readdirSync(EVENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const known = eventOrder.map((event) => event.slug);
  const ordered = [
    ...known.filter((slug) => folders.includes(slug)),
    ...folders.filter((slug) => !known.includes(slug)).sort(),
  ];

  return ordered
    .map((slug) => ({
      slug,
      date: eventOrder.find((event) => event.slug === slug)?.date,
      link: eventOrder.find((event) => event.slug === slug)?.link,
      images: fs
        .readdirSync(path.join(EVENTS_DIR, slug))
        .filter((file) => IMAGE_EXTENSIONS.test(file))
        .sort()
        .map((file) => `/assets/images/events/${slug}/${file}`),
    }))
    .filter((gallery) => gallery.images.length > 0);
}
