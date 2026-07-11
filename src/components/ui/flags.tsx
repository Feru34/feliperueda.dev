import { useId, type SVGProps } from "react";
import type { Locale } from "@/i18n/config";

/** Small inline SVG flags (rendered identically on every OS, unlike emoji). */

type FlagProps = SVGProps<SVGSVGElement>;

function frame(props: FlagProps): FlagProps {
  return {
    viewBox: "0 0 60 40",
    preserveAspectRatio: "none",
    className: "h-3.5 w-5 rounded-[3px] ring-1 ring-black/10 dark:ring-white/10",
    "aria-hidden": true,
    ...props,
  };
}

/** Colombia — used for Spanish. */
export function FlagCO(props: FlagProps) {
  return (
    <svg {...frame(props)}>
      <rect width="60" height="20" fill="#FCD116" />
      <rect y="20" width="60" height="10" fill="#003893" />
      <rect y="30" width="60" height="10" fill="#CE1126" />
    </svg>
  );
}

/** United Kingdom — used for English. */
export function FlagGB(props: FlagProps) {
  const clipId = useId();
  return (
    <svg {...frame(props)} viewBox="0 0 60 30">
      <clipPath id={clipId}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clipId})`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

/** France — used for French. */
export function FlagFR(props: FlagProps) {
  return (
    <svg {...frame(props)}>
      <rect width="20" height="40" fill="#002654" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#CE1126" />
    </svg>
  );
}

/** Germany — used for German. */
export function FlagDE(props: FlagProps) {
  return (
    <svg {...frame(props)}>
      <rect width="60" height="13.4" fill="#000" />
      <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
      <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
    </svg>
  );
}

export const localeFlags: Record<Locale, (props: FlagProps) => React.JSX.Element> = {
  es: FlagCO,
  en: FlagGB,
  fr: FlagFR,
  de: FlagDE,
};
