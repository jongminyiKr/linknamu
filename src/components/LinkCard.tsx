import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-neutral-900 px-6 py-5 text-center text-base font-semibold transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 dark:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
    >
      {link.title}
    </a>
  );
}
