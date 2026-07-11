import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getEventGalleries } from "@/lib/gallery";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const galleries = getEventGalleries();

  return (
    <>
      <Header locale={locale} nav={dict.nav} a11y={dict.a11y} />
      <main>
        <Hero dict={dict.hero} photoAlt={dict.a11y.photoOf} />
        <About dict={dict.about} />
        <Experience dict={dict.experience} />
        <Skills dict={dict.skills} />
        <Projects dict={dict.projects} />
        <Education dict={dict.education} />
        <Gallery dict={dict.gallery} a11y={dict.a11y} galleries={galleries} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
