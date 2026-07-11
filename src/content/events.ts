/**
 * Gallery event metadata, keyed by folder slug under
 * public/assets/images/events/<slug>/.
 *
 * Adding a new life event:
 *   1. Create public/assets/images/events/<new-slug>/ and drop photos in it.
 *   2. (Optional) Add the slug here to control ordering / date.
 *   3. (Optional) Add gallery.events.<new-slug> to each dictionary for a
 *      translated title & description — otherwise the slug is humanized.
 * The gallery picks up new folders automatically at build time.
 */

export type EventMeta = {
  slug: string;
  /** Display date, shown as-is (e.g. "2023", "Oct 2024"). */
  date?: string;
  /** External link (post, reel, article); label comes from gallery.events.<slug>.linkLabel. */
  link?: string;
};

/** Known events, newest first. Unknown folders are appended after these. */
export const eventOrder: EventMeta[] = [
  { slug: "representacion-estudiantil", date: "2024" },
  {
    slug: "codefest-adastra-ai",
    date: "2023 — 2024",
    link: "https://www.instagram.com/reel/C742WN1O3hd/",
  },
  { slug: "computer-society" },
];
