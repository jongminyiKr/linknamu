import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100svh] w-full max-w-[26rem] flex-col items-center px-7 pb-20 pt-20 sm:px-8 sm:pt-28">
      <ProfileHeader profile={profile} />

      <ul className="mt-12 flex w-full flex-col gap-4 sm:mt-14 sm:gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
