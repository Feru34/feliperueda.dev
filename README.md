# feliperueda.com — Portafolio personal

Página web personal y portafolio de **Felipe Rueda Rivera** — Cloud & Backend Software Engineer.

Construida con **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**. Sitio 100 % estático (SSG), responsive (mobile-first), con modo claro/oscuro y 4 idiomas: `es` · `en` · `fr` · `de`.

## Desarrollo

```bash
npm install
npm run dev -- -p 3210   # http://localhost:3210 (evita el puerto 3000 de finidian-api)
```

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción (incluye chequeo de TypeScript) |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint |

## Estructura

```
src/
├── app/[locale]/        # Rutas por idioma (es, en, fr, de) — layout + página
├── proxy.ts             # Redirección / → /<idioma> según Accept-Language
├── i18n/
│   ├── config.ts        # Lista de idiomas soportados
│   └── dictionaries/    # Un JSON por idioma (es.json define el esquema)
├── content/
│   ├── profile.ts       # Datos no traducibles: enlaces, tech tags, skills
│   └── events.ts        # Orden y fechas de los eventos de la galería
├── lib/gallery.ts       # Enumera las carpetas de eventos en build time
└── components/
    ├── layout/          # Header (nav, idioma, tema) y footer
    ├── sections/        # Hero, About, Experience, Skills, Projects, Education, Gallery, Contact
    └── ui/              # Piezas reutilizables (iconos, chips, reveal, toggles)
```

## Cómo agregar contenido

**Fotos de un evento nuevo** — crea una carpeta y arrastra las fotos:

```
public/assets/images/events/<slug-del-evento>/foto-01.jpg
```

La galería la detecta sola en el siguiente build. Opcionalmente:

1. Añade el slug en `src/content/events.ts` para controlar el orden y la fecha.
2. Añade `gallery.events.<slug>` en los 4 diccionarios (`src/i18n/dictionaries/*.json`) para título y descripción traducidos; si no, se usa el slug humanizado.

**Textos** — todo texto visible vive en `src/i18n/dictionaries/{es,en,fr,de}.json`. Mantén la misma estructura en los cuatro archivos.

**Datos duros** (enlaces, correo, tech tags) — `src/content/profile.ts`.

**CV descargable** — reemplaza `public/assets/docs/felipe-rueda-cv.pdf`.

## Despliegue

Compatible con Vercel sin configuración extra. El dominio canónico es **https://feliperueda.dev** (definido en `src/lib/site.ts`, usado por Open Graph, `sitemap.xml` y `robots.txt`); `NEXT_PUBLIC_SITE_URL` lo sobreescribe en previews.
