type ChipProps = {
  label: string;
};

export function Chip({ label }: ChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:bg-sky-950 dark:hover:text-sky-300">
      {label}
    </span>
  );
}
