import Image from "next/image";
import type { Profile } from "@/data/profile";

const avatarClass =
  "h-28 w-28 rounded-full ring-2 ring-neutral-900 dark:ring-neutral-100 sm:h-32 sm:w-32";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.imageUrl ? (
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className={`${avatarClass} object-cover`}
        />
      ) : (
        <div
          role="img"
          aria-label={`${profile.name} 프로필`}
          className={`${avatarClass} flex items-center justify-center bg-emerald-300 text-5xl font-bold text-emerald-900 sm:text-6xl`}
        >
          {profile.initial}
        </div>
      )}
      <h1 className="mt-6 text-lg font-medium">{profile.name}</h1>
      <p className="mt-1 text-2xl font-bold">{profile.bio}</p>
    </header>
  );
}
