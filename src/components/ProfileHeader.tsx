import Image from "next/image";
import type { Profile } from "@/data/profile";

const avatarClass = "h-24 w-24 rounded-full sm:h-28 sm:w-28";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 인스타그램 스토리풍 그라데이션 링 + 부드러운 그림자로 입체감 */}
      <div className="rounded-full bg-gradient-to-tr from-amber-300 via-rose-400 to-fuchsia-500 p-[2.5px] shadow-[0_18px_40px_-14px_rgba(225,29,72,0.45)]">
        <div className="rounded-full bg-[#fffaf6] p-[3px] dark:bg-[#1a1311]">
          {profile.imageUrl ? (
            <Image
              src={profile.imageUrl}
              alt={`${profile.name} 프로필 사진`}
              width={112}
              height={112}
              priority
              className={`${avatarClass} object-cover`}
            />
          ) : (
            <div
              role="img"
              aria-label={`${profile.name} 프로필`}
              className={`${avatarClass} flex items-center justify-center bg-gradient-to-br from-orange-100 via-rose-100 to-pink-200 text-4xl font-semibold text-rose-900/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-6px_14px_rgba(190,24,93,0.12)] dark:from-orange-950 dark:via-rose-950 dark:to-fuchsia-950 dark:text-rose-100/90 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:text-5xl`}
            >
              {profile.initial}
            </div>
          )}
        </div>
      </div>

      <h1 className="mt-6 text-[1.375rem] font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 max-w-[19rem] text-balance text-[0.9375rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
