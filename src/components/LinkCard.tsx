import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  // mailto: 링크는 새 탭 없이 메일 앱을 바로 엽니다.
  const isExternal = !link.url.startsWith("mailto:");
  return (
    <a
      href={link.url}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={onClick}
      className="relative block w-full rounded-[1.25rem] border border-white/70 bg-white/45 px-16 py-[1.125rem] text-center text-[0.9375rem] font-medium tracking-tight text-neutral-800 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_8px_24px_-12px_rgba(120,53,15,0.18)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_28px_-12px_rgba(120,53,15,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      {link.title}
      {/* 제목이 가운데에 그대로 있도록 클릭 수는 오른쪽에 따로 띄웁니다. */}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-neutral-500 dark:text-neutral-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
